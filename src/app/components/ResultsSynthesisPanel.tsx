import {
  Alert,
  AlertDescription,
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/primitives';
import { YearData } from '@/app/components/DataInputPanel';
import {
  analyzeSpecialYears,
  analyzeInstitutionalDistribution,
  calculateGrowthRate,
  calculateSecondDifference,
  calculateEntropy
} from '@/app/utils/statistics';
import { CheckCircle2, XCircle, MinusCircle, FileText } from 'lucide-react';

interface ResultsSynthesisPanelProps {
  data: YearData[];
  specialYears: number[];
}

type EvidenceLevel = 'Significant' | 'Not Significant' | 'Mixed';
type BehaviorType = 'Spike' | 'Trend' | 'None' | 'Mixed';
type VisualPattern = 'Clear' | 'Mixed' | 'Weak';
type Verdict = 'Strongly Supported' | 'Supported' | 'Weakly Supported' | 'Not Supported' | 'Inconclusive';

export function ResultsSynthesisPanel({ data, specialYears }: ResultsSynthesisPanelProps) {
  // Perform all analyses
  const statisticalAnalysis = analyzeSpecialYears(data, specialYears);
  const institutionalAnalysis = analyzeInstitutionalDistribution(data, specialYears);
  
  // Sort data by year
  const sortedData = [...data].sort((a, b) => a.year - b.year);
  
  // Growth rate analysis
  const growthRates = sortedData.map((yearData, idx) => {
    if (idx === 0) return null;
    return {
      year: yearData.year,
      growthRate: calculateGrowthRate(yearData.totalDownloads, sortedData[idx - 1].totalDownloads),
      isSpecial: specialYears.includes(yearData.year)
    };
  }).filter(g => g !== null);
  
  const specialGrowthRates = growthRates.filter(g => g?.isSpecial).map(g => g!.growthRate);
  const avgSpecialGrowth = specialGrowthRates.reduce((sum, g) => sum + g, 0) / specialGrowthRates.length;
  
  // Second difference (spike detection)
  const downloads = sortedData.map(d => d.totalDownloads);
  const secondDiff = calculateSecondDifference(downloads);
  const specialYearSpikes = secondDiff.filter((_, idx) => {
    const year = sortedData[idx + 2]?.year;
    return specialYears.includes(year);
  });
  const hasLargeSpikes = specialYearSpikes.some(s => Math.abs(s) > 400);
  
  // Entropy analysis
  const entropyData = sortedData.map(yearData => ({
    year: yearData.year,
    entropy: calculateEntropy(yearData.geography.map(g => g.downloads)),
    isSpecial: specialYears.includes(yearData.year)
  }));
  
  const avgSpecialEntropy = entropyData
    .filter(d => d.isSpecial)
    .reduce((sum, d) => sum + d.entropy, 0) / specialYears.length;
  
  const avgNonSpecialEntropy = entropyData
    .filter(d => !d.isSpecial)
    .reduce((sum, d) => sum + d.entropy, 0) / (entropyData.length - specialYears.length);
  
  // DETERMINE EVIDENCE LEVELS
  
  // 1. Statistical Evidence
  const statisticalEvidence: EvidenceLevel = 
    statisticalAnalysis.isSignificant && Math.abs(statisticalAnalysis.effectSize) >= 0.5
      ? 'Significant'
      : !statisticalAnalysis.isSignificant
      ? 'Not Significant'
      : 'Mixed';
  
  // 2. Mathematical Behavior
  let mathematicalBehavior: BehaviorType;
  if (hasLargeSpikes && avgSpecialGrowth > 30) {
    mathematicalBehavior = 'Spike';
  } else if (avgSpecialGrowth > 15 && !hasLargeSpikes) {
    mathematicalBehavior = 'Trend';
  } else if (avgSpecialGrowth < 10) {
    mathematicalBehavior = 'None';
  } else {
    mathematicalBehavior = 'Mixed';
  }
  
  // 3. Visual Pattern
  const visualPattern: VisualPattern = 
    statisticalEvidence === 'Significant' && mathematicalBehavior === 'Spike'
      ? 'Clear'
      : statisticalEvidence === 'Not Significant' || mathematicalBehavior === 'None'
      ? 'Weak'
      : 'Mixed';
  
  // FINAL VERDICT
  let verdict: Verdict;
  const evidenceCount = [
    statisticalEvidence === 'Significant',
    mathematicalBehavior === 'Spike' || mathematicalBehavior === 'Trend',
    visualPattern === 'Clear'
  ].filter(Boolean).length;
  
  if (evidenceCount === 3) {
    verdict = 'Strongly Supported';
  } else if (evidenceCount === 2) {
    verdict = 'Supported';
  } else if (evidenceCount === 1) {
    verdict = 'Weakly Supported';
  } else if (statisticalEvidence === 'Not Significant' && mathematicalBehavior === 'None') {
    verdict = 'Not Supported';
  } else {
    verdict = 'Inconclusive';
  }
  
  // Generate detailed conclusion
  const generateConclusion = (): string => {
    const parts: string[] = [];
    
    // Statistical component
    if (statisticalAnalysis.isSignificant) {
      parts.push(
        `Special-issue years show statistically significant increases in downloads (p = ${statisticalAnalysis.tTest.pValue.toFixed(4)}, Cohen's d = ${statisticalAnalysis.effectSize.toFixed(2)}).`
      );
    } else {
      parts.push(
        `No statistically significant difference detected between special and non-special years (p = ${statisticalAnalysis.tTest.pValue.toFixed(4)}).`
      );
    }
    
    // Mathematical component
    if (mathematicalBehavior === 'Spike') {
      parts.push(
        `Mathematical analysis reveals sharp upward spikes during special-issue years, with average growth of ${avgSpecialGrowth.toFixed(1)}%.`
      );
    } else if (mathematicalBehavior === 'Trend') {
      parts.push(
        `Growth trends are positive during special-issue years (avg. ${avgSpecialGrowth.toFixed(1)}%), but without sharp acceleration.`
      );
    } else {
      parts.push(
        `Mathematical analysis shows minimal growth differentiation during special-issue years.`
      );
    }
    
    // Geographic component
    if (avgSpecialEntropy > avgNonSpecialEntropy * 1.1) {
      parts.push(
        `Geographic reach broadens during special-issue years (entropy: ${avgSpecialEntropy.toFixed(3)} vs ${avgNonSpecialEntropy.toFixed(3)}), indicating more diverse international engagement.`
      );
    } else {
      parts.push(
        `Geographic distribution remains similar across special and non-special years.`
      );
    }
    
    // Institutional composition
    if (institutionalAnalysis.chiSquareResult.pValue < 0.05) {
      parts.push(
        `Reader composition shifts significantly during special-issue years (χ² = ${institutionalAnalysis.chiSquareResult.chiSquare.toFixed(2)}, p = ${institutionalAnalysis.chiSquareResult.pValue.toFixed(4)}).`
      );
    }
    
    return parts.join(' ');
  };
  
  const getVerdictIcon = (verdict: Verdict) => {
    if (verdict === 'Strongly Supported' || verdict === 'Supported') {
      return <CheckCircle2 className="size-5 text-green-600" />;
    }
    if (verdict === 'Not Supported') {
      return <XCircle className="size-5 text-red-600" />;
    }
    return <MinusCircle className="size-5 text-yellow-600" />;
  };
  
  const getVerdictColor = (verdict: Verdict) => {
    if (verdict === 'Strongly Supported' || verdict === 'Supported') return 'default';
    if (verdict === 'Not Supported') return 'destructive';
    return 'secondary';
  };

  return (
    <Card className="border-2 border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="size-5" />
          Results & Interpretation
        </CardTitle>
        <CardDescription>Synthesis of all analytical evidence</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Evidence Summary */}
        <div className="grid gap-3 md:grid-cols-3">
          <div className="p-3 rounded-lg border bg-muted/30">
            <div className="text-xs text-muted-foreground mb-2">Statistical Evidence</div>
            <Badge variant={statisticalEvidence === 'Significant' ? 'default' : 'secondary'}>
              {statisticalEvidence}
            </Badge>
            <div className="text-xs text-muted-foreground mt-2">
              p = {statisticalAnalysis.tTest.pValue.toFixed(4)}
            </div>
          </div>
          
          <div className="p-3 rounded-lg border bg-muted/30">
            <div className="text-xs text-muted-foreground mb-2">Mathematical Behavior</div>
            <Badge variant={mathematicalBehavior === 'Spike' || mathematicalBehavior === 'Trend' ? 'default' : 'secondary'}>
              {mathematicalBehavior}
            </Badge>
            <div className="text-xs text-muted-foreground mt-2">
              Avg growth: {avgSpecialGrowth.toFixed(1)}%
            </div>
          </div>
          
          <div className="p-3 rounded-lg border bg-muted/30">
            <div className="text-xs text-muted-foreground mb-2">Visual Pattern</div>
            <Badge variant={visualPattern === 'Clear' ? 'default' : 'secondary'}>
              {visualPattern}
            </Badge>
            <div className="text-xs text-muted-foreground mt-2">
              Entropy diff: {(avgSpecialEntropy - avgNonSpecialEntropy).toFixed(3)}
            </div>
          </div>
        </div>

        {/* Final Verdict */}
        <Alert className="border-2">
          <div className="flex items-start gap-3">
            {getVerdictIcon(verdict)}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-semibold">Final Verdict:</span>
                <Badge variant={getVerdictColor(verdict)} className="text-sm">
                  {verdict}
                </Badge>
              </div>
              <AlertDescription className="text-sm leading-snug">
                {generateConclusion()}
              </AlertDescription>
            </div>
          </div>
        </Alert>

        {/* Key Findings */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Key Findings</h4>
          <ul className="grid gap-2 text-sm md:grid-cols-2">
            <li className="flex items-start gap-2">
              <span className="text-muted-foreground mt-0.5">•</span>
              <span>
                Mean downloads: {statisticalAnalysis.specialYearsMean.toFixed(0)} (special) vs{' '}
                {statisticalAnalysis.nonSpecialYearsMean.toFixed(0)} (non-special) —{' '}
                {((statisticalAnalysis.specialYearsMean - statisticalAnalysis.nonSpecialYearsMean) / 
                  statisticalAnalysis.nonSpecialYearsMean * 100).toFixed(1)}% difference
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-muted-foreground mt-0.5">•</span>
              <span>
                Effect size: {Math.abs(statisticalAnalysis.effectSize).toFixed(2)} (
                {statisticalAnalysis.effectSizeInterpretation})
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-muted-foreground mt-0.5">•</span>
              <span>
                Geographic breadth: {((avgSpecialEntropy / avgNonSpecialEntropy - 1) * 100).toFixed(1)}%{' '}
                {avgSpecialEntropy > avgNonSpecialEntropy ? 'increase' : 'decrease'} in entropy during special issues
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-muted-foreground mt-0.5">•</span>
              <span>
                Institutional distribution:{' '}
                {institutionalAnalysis.chiSquareResult.pValue < 0.05
                  ? 'significantly different'
                  : 'similar'}{' '}
                (p = {institutionalAnalysis.chiSquareResult.pValue.toFixed(4)})
              </span>
            </li>
          </ul>
        </div>

        {/* Methodological Note */}
        <div className="p-3 bg-muted/50 rounded border text-xs text-muted-foreground">
          <strong>Methodological Note:</strong> This analysis employs Welch's t-test (unequal variances), 
          Cohen's d for effect size, chi-square test for categorical independence, Shannon entropy for 
          geographic distribution, and second-difference analysis for structural change detection. 
          All interpretations are derived algorithmically from the data without subjective bias.
        </div>
      </CardContent>
    </Card>
  );
}
