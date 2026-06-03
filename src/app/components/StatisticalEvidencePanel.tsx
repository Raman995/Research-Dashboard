import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/primitives';
import { YearData } from '@/app/components/DataInputPanel';
import { analyzeSpecialYears, analyzeInstitutionalDistribution } from '@/app/utils/statistics';
import { TrendingUp, Users } from 'lucide-react';

interface StatisticalEvidencePanelProps {
  data: YearData[];
  specialYears: number[];
}

export function StatisticalEvidencePanel({ data, specialYears }: StatisticalEvidencePanelProps) {
  const analysis = analyzeSpecialYears(data, specialYears);
  const institutionalAnalysis = analyzeInstitutionalDistribution(data, specialYears);

  return (
    <div className="grid gap-4 xl:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="size-5" />
            A. Special vs Non-Special Year Comparison
          </CardTitle>
          <CardDescription>
            Welch's t-test for independent samples with unequal variances
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
              <div className="text-sm text-muted-foreground mb-1">Mean Downloads (Special Years)</div>
              <div className="text-xl font-semibold">{analysis.specialYearsMean.toFixed(0)}</div>
              <div className="text-xs text-muted-foreground mt-1">n = {specialYears.length} years</div>
            </div>
            <div className="p-3 bg-muted/50 rounded-lg border">
              <div className="text-sm text-muted-foreground mb-1">Mean Downloads (Non-Special Years)</div>
              <div className="text-xl font-semibold">{analysis.nonSpecialYearsMean.toFixed(0)}</div>
              <div className="text-xs text-muted-foreground mt-1">n = {data.length - specialYears.length} years</div>
            </div>
          </div>

          <div className="space-y-3 pt-2 border-t">
            <div className="grid grid-cols-3 gap-3 text-sm">
              <div>
                <span className="text-muted-foreground">t-statistic:</span>
                <span className="ml-2 font-mono">{analysis.tTest.tStatistic.toFixed(3)}</span>
              </div>
              <div>
                <span className="text-muted-foreground">df:</span>
                <span className="ml-2 font-mono">{analysis.tTest.degreesOfFreedom.toFixed(1)}</span>
              </div>
              <div>
                <span className="text-muted-foreground">p-value:</span>
                <span className="ml-2 font-mono">{analysis.tTest.pValue.toFixed(4)}</span>
              </div>
            </div>

            <div>
              <div className="text-sm text-muted-foreground mb-1">Effect Size (Cohen's d)</div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-lg">{analysis.effectSize.toFixed(3)}</span>
                <Badge variant={analysis.effectSize > 0.8 ? 'default' : 'secondary'}>
                  {analysis.effectSizeInterpretation}
                </Badge>
              </div>
            </div>

            <div className="p-3 bg-muted/30 rounded border">
              <div className="text-sm font-semibold mb-1">Interpretation</div>
              <p className="text-sm text-muted-foreground">
                {analysis.pValueInterpretation}
                {analysis.isSignificant && (
                  <span className="block mt-1">
                    Special-issue years show{' '}
                    {analysis.specialYearsMean > analysis.nonSpecialYearsMean
                      ? 'significantly higher'
                      : 'significantly lower'}{' '}
                    downloads than non-special years with a {analysis.effectSizeInterpretation.toLowerCase()} effect size.
                  </span>
                )}
                {!analysis.isSignificant && (
                  <span className="block mt-1">
                    No statistically significant difference detected between special and non-special years.
                  </span>
                )}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="size-5" />
            B. Reader Composition Test
          </CardTitle>
          <CardDescription>
            Chi-square test for independence of institution type distribution
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-2 gap-2 text-sm md:grid-cols-4">
            {['Education', 'Commercial', 'Library', 'Government'].map((type, idx) => (
              <div key={type} className="p-2.5 bg-muted/50 rounded border">
                <div className="text-xs text-muted-foreground mb-1">{type}</div>
                <div className="font-semibold">
                  Special: {institutionalAnalysis.observed[0][idx]}
                </div>
                <div className="text-muted-foreground text-xs">
                  Non-special: {institutionalAnalysis.observed[1][idx]}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-2 pt-2 border-t">
            <div className="grid grid-cols-3 gap-3 text-sm">
              <div>
                <span className="text-muted-foreground">χ² statistic:</span>
                <span className="ml-2 font-mono">
                  {institutionalAnalysis.chiSquareResult.chiSquare.toFixed(3)}
                </span>
              </div>
              <div>
                <span className="text-muted-foreground">df:</span>
                <span className="ml-2 font-mono">
                  {institutionalAnalysis.chiSquareResult.degreesOfFreedom}
                </span>
              </div>
              <div>
                <span className="text-muted-foreground">p-value:</span>
                <span className="ml-2 font-mono">
                  {institutionalAnalysis.chiSquareResult.pValue.toFixed(4)}
                </span>
              </div>
            </div>

            <div className="p-3 bg-muted/30 rounded border">
              <div className="text-sm font-semibold mb-1">Interpretation</div>
              <p className="text-sm text-muted-foreground">
                {institutionalAnalysis.chiSquareResult.pValue < 0.05
                  ? 'Reader composition significantly differs between special and non-special years, suggesting special issues attract different institutional demographics.'
                  : 'No significant difference in reader composition detected. Institutional distribution remains consistent regardless of special issue publication.'}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
