import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/primitives';
import { YearData } from '@/app/components/DataInputPanel';
import { calculateGrowthRate, calculateSecondDifference, calculateEntropy } from '@/app/utils/statistics';
import { TrendingUp, Activity, Globe } from 'lucide-react';

interface MathematicalAnalysisPanelProps {
  data: YearData[];
  specialYears: number[];
}

export function MathematicalAnalysisPanel({ data, specialYears }: MathematicalAnalysisPanelProps) {
  // Sort data by year
  const sortedData = [...data].sort((a, b) => a.year - b.year);

  // Calculate growth rates
  const growthData = sortedData.map((yearData, idx) => {
    if (idx === 0) {
      return {
        year: yearData.year,
        downloads: yearData.totalDownloads,
        growthRate: null,
        isSpecial: specialYears.includes(yearData.year)
      };
    }
    return {
      year: yearData.year,
      downloads: yearData.totalDownloads,
      growthRate: calculateGrowthRate(yearData.totalDownloads, sortedData[idx - 1].totalDownloads),
      isSpecial: specialYears.includes(yearData.year)
    };
  });

  // Calculate second differences
  const downloads = sortedData.map(d => d.totalDownloads);
  const secondDiff = calculateSecondDifference(downloads);

  // Calculate entropy for geographic breadth
  const entropyData = sortedData.map(yearData => {
    const downloads = yearData.geography.map(g => g.downloads);
    return {
      year: yearData.year,
      entropy: calculateEntropy(downloads),
      countryCount: yearData.geography.length,
      isSpecial: specialYears.includes(yearData.year)
    };
  });

  // Average entropy for special vs non-special years
  const specialEntropy = entropyData
    .filter(d => d.isSpecial)
    .reduce((sum, d) => sum + d.entropy, 0) / specialYears.length;
  
  const nonSpecialEntropy = entropyData
    .filter(d => !d.isSpecial)
    .reduce((sum, d) => sum + d.entropy, 0) / (entropyData.length - specialYears.length);

  const significantGrowth = growthData
    .filter((item) => item.growthRate !== null && Math.abs(item.growthRate) >= 15)
    .length;
  const spikeThreshold = 400;
  const spikeCount = secondDiff.filter((value) => Math.abs(value) > spikeThreshold).length;
  const specialSpikeCount = secondDiff.filter((value, idx) => {
    const year = sortedData[idx + 2]?.year;
    return specialYears.includes(year) && Math.abs(value) > spikeThreshold;
  }).length;
  const entropyDelta = specialEntropy - nonSpecialEntropy;
  const strongestYear = growthData
    .filter((item): item is typeof item & { growthRate: number } => item.growthRate !== null)
    .sort((a, b) => Math.abs(b.growthRate) - Math.abs(a.growthRate))[0];

  return (
    <div className="grid gap-4 xl:grid-cols-[0.95fr_1.35fr]">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="size-5" />
            A. Mathematical Summary
          </CardTitle>
          <CardDescription>Compressed indicators for momentum, volatility, and reach breadth</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded border bg-muted/30">
              <div className="text-xs text-muted-foreground">|YoY| ≥ 15%</div>
              <div className="text-xl font-semibold">{significantGrowth}</div>
            </div>
            <div className="p-3 rounded border bg-muted/30">
              <div className="text-xs text-muted-foreground">Large Spikes</div>
              <div className="text-xl font-semibold">{spikeCount}</div>
            </div>
            <div className="p-3 rounded border bg-primary/5 border-primary/20">
              <div className="text-xs text-muted-foreground">Spikes in Special Years</div>
              <div className="text-xl font-semibold">{specialSpikeCount}</div>
            </div>
            <div className="p-3 rounded border bg-muted/30">
              <div className="text-xs text-muted-foreground">Entropy Delta (S-NS)</div>
              <div className="text-xl font-semibold">{entropyDelta > 0 ? '+' : ''}{entropyDelta.toFixed(2)}</div>
            </div>
          </div>
          <div className="mt-3 p-3 bg-muted/30 rounded border text-sm text-muted-foreground">
            Strongest single-year momentum: {strongestYear?.year ?? 'N/A'} ({strongestYear ? `${strongestYear.growthRate > 0 ? '+' : ''}${strongestYear.growthRate.toFixed(1)}%` : 'N/A'}). 
            Special years {entropyDelta > 0 ? 'broaden' : 'do not broaden'} geographic spread versus non-special years.
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="size-5" />
            B. Compact Per-Year Diagnostics
          </CardTitle>
          <CardDescription>Single table view combining growth, acceleration, and reach</CardDescription>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-muted-foreground">
                <th className="text-left py-2 pr-3">Year</th>
                <th className="text-right py-2 pr-3">Downloads</th>
                <th className="text-right py-2 pr-3">YoY %</th>
                <th className="text-right py-2 pr-3">2nd Diff</th>
                <th className="text-right py-2 pr-3">Entropy</th>
                <th className="text-right py-2">Countries</th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map((yearData, idx) => {
                const growth = growthData[idx]?.growthRate;
                const accel = idx >= 2 ? secondDiff[idx - 2] : null;
                const entropy = entropyData[idx];
                const isSpecial = specialYears.includes(yearData.year);
                return (
                  <tr key={yearData.year} className={`border-b ${isSpecial ? 'bg-primary/5' : ''}`}>
                    <td className="py-2 pr-3 font-medium">
                      {yearData.year} {isSpecial ? <Badge variant="secondary">Special</Badge> : null}
                    </td>
                    <td className="py-2 pr-3 text-right">{yearData.totalDownloads.toLocaleString()}</td>
                    <td className="py-2 pr-3 text-right font-mono">{growth === null ? '—' : `${growth > 0 ? '+' : ''}${growth.toFixed(1)}`}</td>
                    <td className="py-2 pr-3 text-right font-mono">{accel === null ? '—' : `${accel > 0 ? '+' : ''}${accel.toFixed(0)}`}</td>
                    <td className="py-2 pr-3 text-right font-mono">{entropy.entropy.toFixed(2)}</td>
                    <td className="py-2 text-right">{entropy.countryCount}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardContent>
      </Card>

      <Card className="xl:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="size-5" />
            C. Geographic Breadth Interpretation
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3 bg-muted/30 rounded border text-sm text-muted-foreground">
          {specialEntropy > nonSpecialEntropy
            ? 'Special-issue years show higher entropy, indicating broader and more evenly distributed international reach.'
            : 'Special-issue years show lower or similar entropy, suggesting growth concentration rather than broadening.'}
        </CardContent>
      </Card>
    </div>
  );
}
