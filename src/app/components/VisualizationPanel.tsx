import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/primitives';
import { YearData } from '@/app/components/DataInputPanel';
import {
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
  Cell,
  ComposedChart
} from 'recharts';
import { BarChart3, TrendingUp, MapPin } from 'lucide-react';

interface VisualizationPanelProps {
  data: YearData[];
  specialYears: number[];
}

export function VisualizationPanel({ data, specialYears }: VisualizationPanelProps) {
  const fallbackYear = data.length > 0 ? data[data.length - 1].year : 2024;
  const [selectedYear, setSelectedYear] = useState<string>(String(fallbackYear));

  const sortedData = [...data].sort((a, b) => a.year - b.year);
  const yearOptions = sortedData.map((d) => String(d.year));
  const activeYear = yearOptions.includes(selectedYear)
    ? selectedYear
    : (yearOptions[yearOptions.length - 1] ?? String(fallbackYear));

  const timelineData = sortedData.map(yearData => ({
    year: yearData.year,
    downloads: yearData.totalDownloads,
    isSpecial: specialYears.includes(yearData.year)
  }));

  // Fit linear trend: downloads = intercept + slope * year
  const n = sortedData.length;
  const sumX = sortedData.reduce((sum, d) => sum + d.year, 0);
  const sumY = sortedData.reduce((sum, d) => sum + d.totalDownloads, 0);
  const sumXY = sortedData.reduce((sum, d) => sum + d.year * d.totalDownloads, 0);
  const sumXX = sortedData.reduce((sum, d) => sum + d.year * d.year, 0);
  const denom = n * sumXX - sumX * sumX;
  const slope = denom !== 0 ? (n * sumXY - sumX * sumY) / denom : 0;
  const intercept = n > 0 ? (sumY - slope * sumX) / n : 0;

  const deviationData = sortedData.map(yearData => ({
    year: yearData.year,
    trend: intercept + slope * yearData.year,
    residual: yearData.totalDownloads - (intercept + slope * yearData.year),
    isSpecial: specialYears.includes(yearData.year)
  }));

  const categoryData = sortedData.map(yearData => {
    const byType: Record<string, number> = {
      Education: 0,
      Commercial: 0,
      Library: 0,
      Government: 0
    };

    yearData.institutions.forEach(inst => {
      if (byType[inst.type] !== undefined) {
        byType[inst.type] += inst.downloads;
      }
    });

    return {
      year: yearData.year,
      ...byType,
      isSpecial: specialYears.includes(yearData.year)
    };
  });

  const selectedYearData = data.find(d => d.year === parseInt(activeYear));
  const countryRankingData = selectedYearData
    ? [...selectedYearData.geography]
        .sort((a, b) => b.downloads - a.downloads)
        .slice(0, 10)
    : [];

  const topYear = [...sortedData].sort((a, b) => b.totalDownloads - a.totalDownloads)[0];
  const topSpecialYear = sortedData
    .filter((d) => specialYears.includes(d.year))
    .sort((a, b) => b.totalDownloads - a.totalDownloads)[0];
  const formatCount = (value: number | undefined) => (Number.isFinite(value) ? Number(value).toLocaleString() : '0');

  if (sortedData.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Visual Analysis</CardTitle>
          <CardDescription>No data available for visual analysis.</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <div className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="size-5" />
            A. Trends and Deviation Snapshot
          </CardTitle>
          <CardDescription>Bars show residuals from trend; center line is the trend baseline</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-3 rounded border bg-muted/30">
              <div className="text-xs text-muted-foreground">Overall Peak Year</div>
              <div className="text-lg font-semibold">{topYear?.year ?? 'N/A'}</div>
              <div className="text-xs text-muted-foreground">{formatCount(topYear?.totalDownloads)} downloads</div>
            </div>
            <div className="p-3 rounded border bg-primary/5 border-primary/20">
              <div className="text-xs text-muted-foreground">Top Special Year</div>
              <div className="text-lg font-semibold">{topSpecialYear?.year ?? 'N/A'}</div>
              <div className="text-xs text-muted-foreground">{formatCount(topSpecialYear?.totalDownloads)} downloads</div>
            </div>
            <div className="p-3 rounded border bg-muted/30">
              <div className="text-xs text-muted-foreground">Trend Slope</div>
              <div className="text-lg font-semibold">{slope >= 0 ? '+' : ''}{slope.toFixed(1)}</div>
              <div className="text-xs text-muted-foreground">downloads/year</div>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={240}>
            <ComposedChart data={deviationData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="year" stroke="var(--muted-foreground)" style={{ fontSize: '12px' }} />
              <YAxis
                yAxisId="left"
                stroke="var(--muted-foreground)"
                style={{ fontSize: '12px' }}
                label={{ value: 'Residual from Trend (Downloads)', angle: -90, position: 'insideLeft', style: { fontSize: '12px' } }}
                tickFormatter={(value) => Number(value).toFixed(0)}
              />
              <Tooltip
                contentStyle={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: '6px' }}
                formatter={(value: number) => `${Number(value).toLocaleString()} downloads`}
              />
              <ReferenceLine yAxisId="left" y={0} stroke="var(--muted-foreground)" strokeWidth={2} label={{ value: 'Trend Line', position: 'insideTopRight', fill: 'var(--muted-foreground)', fontSize: 11 }} />
              {specialYears.map((year) => (
                <ReferenceLine yAxisId="left" key={year} x={year} stroke="var(--primary)" strokeDasharray="3 3" />
              ))}
              <Bar yAxisId="left" dataKey="residual" name="residual" radius={[3, 3, 0, 0]}>
                {deviationData.map((entry, index) => (
                  <Cell
                    key={`dev-${index}`}
                    fill={entry.isSpecial ? 'var(--primary)' : entry.residual > 0 ? 'var(--chart-2)' : 'var(--destructive)'}
                  />
                ))}
              </Bar>
            </ComposedChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="size-5" />
            B. Composition and Country Focus
          </CardTitle>
          <CardDescription>Institution-type mix by year with top-country ranking</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <ResponsiveContainer width="100%" height={235}>
            <BarChart data={categoryData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="year" stroke="var(--muted-foreground)" style={{ fontSize: '12px' }} />
              <YAxis
                stroke="var(--muted-foreground)"
                style={{ fontSize: '12px' }}
                label={{ value: 'Downloads', angle: -90, position: 'insideLeft', style: { fontSize: '12px' } }}
              />
              <Tooltip contentStyle={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: '6px' }} />
              <Legend />
              <Bar dataKey="Education" stackId="a" fill="var(--primary)" />
              <Bar dataKey="Commercial" stackId="a" fill="var(--chart-2)" />
              <Bar dataKey="Library" stackId="a" fill="var(--chart-3)" />
              <Bar dataKey="Government" stackId="a" fill="var(--chart-4)" />
            </BarChart>
          </ResponsiveContainer>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-medium">
                <MapPin className="size-4" />
                Top 10 Countries ({activeYear})
              </div>
              <Select value={activeYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {sortedData.map((d) => (
                    <SelectItem key={d.year} value={String(d.year)}>
                      {d.year}
                      {specialYears.includes(d.year) ? ' *' : ''}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <ResponsiveContainer width="100%" height={210}>
              <BarChart data={countryRankingData} layout="vertical" margin={{ top: 5, right: 20, left: 76, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis type="number" stroke="var(--muted-foreground)" style={{ fontSize: '12px' }} />
                <YAxis type="category" dataKey="country" stroke="var(--muted-foreground)" style={{ fontSize: '11px' }} />
                <Tooltip contentStyle={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: '6px' }} />
                <Bar dataKey="downloads" fill="var(--primary)">
                  {countryRankingData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={index < 3 ? 'var(--primary)' : 'var(--chart-3)'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
