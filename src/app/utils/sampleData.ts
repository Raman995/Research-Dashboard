import { YearData, GeographyData, InstitutionData } from '@/app/components/DataInputPanel';

const countryFiles = import.meta.glob('./Readership_Country_Years_2016-2025/*_ReadershipReport.csv', {
  eager: true,
  query: '?raw',
  import: 'default'
}) as Record<string, string>;

const institutionFiles = import.meta.glob('./Readership_Institution_Years_2016-2025/*_Institutions.csv', {
  eager: true,
  query: '?raw',
  import: 'default'
}) as Record<string, string>;

function parseCsvLine(line: string): string[] {
  const out: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === ',' && !inQuotes) {
      out.push(current.trim());
      current = '';
      continue;
    }

    current += char;
  }

  out.push(current.trim());
  return out;
}

function parseCsv(content: string): string[][] {
  return content
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .map(parseCsvLine);
}

function getYearFromPath(path: string): number | null {
  const match = path.match(/(?:^|\/)(\d{4})_(?:ReadershipReport|Institutions)\.csv$/);
  return match ? Number(match[1]) : null;
}

function parseCountryCsv(content: string): GeographyData[] {
  const rows = parseCsv(content);
  return rows.slice(1).map((cells) => ({
    country: cells[0] ?? '',
    downloads: Number(cells[1] ?? 0)
  }));
}

function parseInstitutionCsv(content: string): InstitutionData[] {
  const rows = parseCsv(content);
  return rows.slice(1).map((cells) => ({
    name: cells[0] ?? '',
    type: cells[1] ?? '',
    downloads: Number(cells[2] ?? 0)
  }));
}

export function loadSampleData(): YearData[] {
  const byYear = new Map<number, Omit<YearData, 'year'>>();

  for (const [path, raw] of Object.entries(countryFiles)) {
    const year = getYearFromPath(path);
    if (!year) continue;

    const geography = parseCountryCsv(raw);
    const existing = byYear.get(year) ?? { totalDownloads: 0, geography: [], institutions: [] };

    existing.geography = geography;
    existing.totalDownloads = geography.reduce((sum, row) => sum + row.downloads, 0);
    byYear.set(year, existing);
  }

  for (const [path, raw] of Object.entries(institutionFiles)) {
    const year = getYearFromPath(path);
    if (!year) continue;

    const institutions = parseInstitutionCsv(raw);
    const existing = byYear.get(year) ?? { totalDownloads: 0, geography: [], institutions: [] };

    existing.institutions = institutions;
    byYear.set(year, existing);
  }

  return [...byYear.entries()]
    .sort(([a], [b]) => a - b)
    .map(([year, data]) => ({ year, ...data }));
}
