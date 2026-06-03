import { YearData } from '@/app/components/DataInputPanel';

// Statistical helper functions

/**
 * Calculate mean of an array
 */
export function mean(values: number[]): number {
  if (values.length === 0) return 0;
  return values.reduce((sum, val) => sum + val, 0) / values.length;
}

/**
 * Calculate standard deviation
 */
export function stdDev(values: number[]): number {
  if (values.length === 0) return 0;
  const avg = mean(values);
  const squareDiffs = values.map(value => Math.pow(value - avg, 2));
  const avgSquareDiff = mean(squareDiffs);
  return Math.sqrt(avgSquareDiff);
}

function sampleVariance(values: number[]): number {
  const n = values.length;
  if (n < 2) return 0;
  const avg = mean(values);
  const ss = values.reduce((sum, value) => sum + Math.pow(value - avg, 2), 0);
  return ss / (n - 1);
}

/**
 * Welch's t-test for two samples with unequal variances
 * Returns { tStatistic, pValue, degreesOfFreedom }
 */
export function welchTTest(sample1: number[], sample2: number[]) {
  const n1 = sample1.length;
  const n2 = sample2.length;
  
  if (n1 < 2 || n2 < 2) {
    return { tStatistic: 0, pValue: 1, degreesOfFreedom: 0 };
  }

  const mean1 = mean(sample1);
  const mean2 = mean(sample2);
  const var1 = sampleVariance(sample1);
  const var2 = sampleVariance(sample2);
  const se2 = var1 / n1 + var2 / n2;

  if (se2 <= 0) {
    return { tStatistic: 0, pValue: 1, degreesOfFreedom: 0 };
  }

  // Welch's t-statistic
  const tStat = (mean1 - mean2) / Math.sqrt(se2);

  // Welch-Satterthwaite degrees of freedom
  const df = Math.pow(se2, 2) /
    (Math.pow(var1 / n1, 2) / (n1 - 1) + Math.pow(var2 / n2, 2) / (n2 - 1));

  const pValue = studentTPValueTwoTailed(Math.abs(tStat), df);

  return {
    tStatistic: tStat,
    pValue,
    degreesOfFreedom: df
  };
}

/**
 * Two-tailed p-value for Student's t distribution
 */
function studentTPValueTwoTailed(t: number, df: number): number {
  if (!Number.isFinite(t) || !Number.isFinite(df) || df <= 0) return 1;
  if (t < 0) return studentTPValueTwoTailed(-t, df);
  const x = df / (df + t * t);
  const p = regularizedIncompleteBeta(df / 2, 0.5, x);
  return Math.max(0, Math.min(1, p));
}

function logGamma(z: number): number {
  const p = [
    676.5203681218851,
    -1259.1392167224028,
    771.3234287776531,
    -176.6150291621406,
    12.507343278686905,
    -0.13857109526572012,
    9.984369578019572e-6,
    1.5056327351493116e-7
  ];

  if (z < 0.5) {
    return Math.log(Math.PI) - Math.log(Math.sin(Math.PI * z)) - logGamma(1 - z);
  }

  let x = 0.9999999999998099;
  const t = z - 1;

  for (let i = 0; i < p.length; i++) {
    x += p[i] / (t + i + 1);
  }

  const g = 7;
  const a = t + g + 0.5;
  return 0.5 * Math.log(2 * Math.PI) + (t + 0.5) * Math.log(a) - a + Math.log(x);
}

function betaContinuedFraction(a: number, b: number, x: number): number {
  const maxIter = 200;
  const eps = 3e-14;
  const fpmin = 1e-300;

  let qab = a + b;
  let qap = a + 1;
  let qam = a - 1;

  let c = 1;
  let d = 1 - (qab * x) / qap;
  if (Math.abs(d) < fpmin) d = fpmin;
  d = 1 / d;
  let h = d;

  for (let m = 1; m <= maxIter; m++) {
    const m2 = 2 * m;
    let aa = (m * (b - m) * x) / ((qam + m2) * (a + m2));
    d = 1 + aa * d;
    if (Math.abs(d) < fpmin) d = fpmin;
    c = 1 + aa / c;
    if (Math.abs(c) < fpmin) c = fpmin;
    d = 1 / d;
    h *= d * c;

    aa = (-(a + m) * (qab + m) * x) / ((a + m2) * (qap + m2));
    d = 1 + aa * d;
    if (Math.abs(d) < fpmin) d = fpmin;
    c = 1 + aa / c;
    if (Math.abs(c) < fpmin) c = fpmin;
    d = 1 / d;
    const delta = d * c;
    h *= delta;

    if (Math.abs(delta - 1) < eps) break;
  }

  return h;
}

function regularizedIncompleteBeta(a: number, b: number, x: number): number {
  if (x <= 0) return 0;
  if (x >= 1) return 1;

  const lnBt = logGamma(a + b) - logGamma(a) - logGamma(b) + a * Math.log(x) + b * Math.log(1 - x);
  const bt = Math.exp(lnBt);

  if (x < (a + 1) / (a + b + 2)) {
    return (bt * betaContinuedFraction(a, b, x)) / a;
  }

  return 1 - (bt * betaContinuedFraction(b, a, 1 - x)) / b;
}

/**
 * Cohen's d effect size
 */
export function cohensD(sample1: number[], sample2: number[]): number {
  const mean1 = mean(sample1);
  const mean2 = mean(sample2);
  const n1 = sample1.length;
  const n2 = sample2.length;
  if (n1 < 2 || n2 < 2) return 0;

  const var1 = sampleVariance(sample1);
  const var2 = sampleVariance(sample2);
  
  // Pooled standard deviation
  const pooledSD = Math.sqrt(((n1 - 1) * var1 + (n2 - 1) * var2) / (n1 + n2 - 2));
  if (pooledSD === 0) return 0;

  return (mean1 - mean2) / pooledSD;
}

/**
 * Chi-square test for independence
 * Returns { chiSquare, pValue, degreesOfFreedom }
 */
export function chiSquareTest(observed: number[][], expected: number[][]) {
  let chiSquare = 0;
  const rows = observed.length;
  const cols = observed[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const obs = observed[i][j];
      const exp = expected[i][j];
      if (exp > 0) {
        chiSquare += Math.pow(obs - exp, 2) / exp;
      }
    }
  }

  const df = (rows - 1) * (cols - 1);
  const pValue = chiSquarePValue(chiSquare, df);

  return { chiSquare, pValue, degreesOfFreedom: df };
}

/**
 * Chi-square p-value approximation
 */
function chiSquarePValue(chiSquare: number, df: number): number {
  if (df <= 0 || chiSquare < 0) return 1;
  return regularizedGammaQ(df / 2, chiSquare / 2);
}

function regularizedGammaP(a: number, x: number): number {
  if (x <= 0) return 0;
  if (a <= 0) return 0;
  if (x >= a + 1) return 1 - regularizedGammaQ(a, x);

  let sum = 1 / a;
  let term = sum;
  for (let n = 1; n < 500; n++) {
    term *= x / (a + n);
    sum += term;
    if (Math.abs(term) < Math.abs(sum) * 1e-14) break;
  }

  return Math.exp(-x + a * Math.log(x) - logGamma(a)) * sum;
}

function regularizedGammaQ(a: number, x: number): number {
  if (x <= 0) return 1;
  if (a <= 0) return 1;
  if (x < a + 1) return 1 - regularizedGammaP(a, x);

  const fpmin = 1e-300;
  let b = x + 1 - a;
  let c = 1 / fpmin;
  let d = 1 / b;
  let h = d;

  for (let i = 1; i < 500; i++) {
    const an = -i * (i - a);
    b += 2;
    d = an * d + b;
    if (Math.abs(d) < fpmin) d = fpmin;
    c = b + an / c;
    if (Math.abs(c) < fpmin) c = fpmin;
    d = 1 / d;
    const delta = d * c;
    h *= delta;
    if (Math.abs(delta - 1) < 1e-14) break;
  }

  return Math.exp(-x + a * Math.log(x) - logGamma(a)) * h;
}

/**
 * Calculate entropy (Shannon entropy) for geographic distribution
 * Higher entropy = more evenly distributed globally
 */
export function calculateEntropy(distribution: number[]): number {
  const total = distribution.reduce((sum, val) => sum + val, 0);
  if (total === 0) return 0;
  
  const probabilities = distribution.map(val => val / total);
  let entropy = 0;
  
  for (const p of probabilities) {
    if (p > 0) {
      entropy -= p * Math.log2(p);
    }
  }
  
  return entropy;
}

/**
 * Calculate year-over-year growth rate
 */
export function calculateGrowthRate(current: number, previous: number): number {
  if (previous === 0) return 0;
  return ((current - previous) / previous) * 100;
}

/**
 * Calculate second difference (rate of change of growth rate)
 * Used for spike detection
 */
export function calculateSecondDifference(values: number[]): number[] {
  if (values.length < 3) return [];
  
  const firstDiff: number[] = [];
  for (let i = 1; i < values.length; i++) {
    firstDiff.push(values[i] - values[i - 1]);
  }
  
  const secondDiff: number[] = [];
  for (let i = 1; i < firstDiff.length; i++) {
    secondDiff.push(firstDiff[i] - firstDiff[i - 1]);
  }
  
  return secondDiff;
}

/**
 * Interpret p-value
 */
export function interpretPValue(pValue: number): string {
  if (pValue < 0.001) return 'Highly significant (p < 0.001)';
  if (pValue < 0.01) return 'Very significant (p < 0.01)';
  if (pValue < 0.05) return 'Significant (p < 0.05)';
  if (pValue < 0.10) return 'Marginally significant (p < 0.10)';
  return 'Not significant (p ≥ 0.10)';
}

/**
 * Interpret Cohen's d effect size
 */
export function interpretCohensD(d: number): string {
  const absD = Math.abs(d);
  if (absD < 0.2) return 'Negligible';
  if (absD < 0.5) return 'Small';
  if (absD < 0.8) return 'Medium';
  return 'Large';
}

/**
 * Analyze special vs non-special years
 */
export interface SpecialYearAnalysis {
  specialYearsMean: number;
  nonSpecialYearsMean: number;
  tTest: ReturnType<typeof welchTTest>;
  effectSize: number;
  effectSizeInterpretation: string;
  pValueInterpretation: string;
  isSignificant: boolean;
  trendAdjusted: {
    specialYearCoefficient: number;
    standardError: number;
    tStatistic: number;
    pValue: number;
    isSignificant: boolean;
  };
}

function invert3x3(matrix: number[][]): number[][] | null {
  const [[a, b, c], [d, e, f], [g, h, i]] = matrix;
  const A = e * i - f * h;
  const B = -(d * i - f * g);
  const C = d * h - e * g;
  const D = -(b * i - c * h);
  const E = a * i - c * g;
  const F = -(a * h - b * g);
  const G = b * f - c * e;
  const H = -(a * f - c * d);
  const I = a * e - b * d;

  const det = a * A + b * B + c * C;
  if (Math.abs(det) < 1e-12) return null;

  return [
    [A / det, D / det, G / det],
    [B / det, E / det, H / det],
    [C / det, F / det, I / det]
  ];
}

function analyzeTrendAdjustedImpact(data: YearData[], specialYears: number[]) {
  const rows = [...data].sort((a, b) => a.year - b.year);
  const n = rows.length;
  if (n < 4) {
    return {
      specialYearCoefficient: 0,
      standardError: 0,
      tStatistic: 0,
      pValue: 1,
      isSignificant: false
    };
  }

  const xMatrix = rows.map((row) => [1, row.year, specialYears.includes(row.year) ? 1 : 0]);
  const y = rows.map((row) => row.totalDownloads);

  const xtx = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  const xty = [0, 0, 0];

  for (let r = 0; r < n; r++) {
    for (let i = 0; i < 3; i++) {
      xty[i] += xMatrix[r][i] * y[r];
      for (let j = 0; j < 3; j++) {
        xtx[i][j] += xMatrix[r][i] * xMatrix[r][j];
      }
    }
  }

  const xtxInv = invert3x3(xtx);
  if (!xtxInv) {
    return {
      specialYearCoefficient: 0,
      standardError: 0,
      tStatistic: 0,
      pValue: 1,
      isSignificant: false
    };
  }

  const beta = xtxInv.map((row) => row[0] * xty[0] + row[1] * xty[1] + row[2] * xty[2]);
  const residuals = rows.map((_, idx) => {
    const fitted = beta[0] + beta[1] * xMatrix[idx][1] + beta[2] * xMatrix[idx][2];
    return y[idx] - fitted;
  });

  const k = 3;
  const dof = n - k;
  if (dof <= 0) {
    return {
      specialYearCoefficient: beta[2],
      standardError: 0,
      tStatistic: 0,
      pValue: 1,
      isSignificant: false
    };
  }

  const rss = residuals.reduce((sum, value) => sum + value * value, 0);
  const sigma2 = rss / dof;
  const varBetaSpecial = sigma2 * xtxInv[2][2];
  const se = Math.sqrt(Math.max(0, varBetaSpecial));
  const tStat = se > 0 ? beta[2] / se : 0;
  const pValue = studentTPValueTwoTailed(Math.abs(tStat), dof);

  return {
    specialYearCoefficient: beta[2],
    standardError: se,
    tStatistic: tStat,
    pValue,
    isSignificant: pValue < 0.05
  };
}

export function analyzeSpecialYears(data: YearData[], specialYears: number[]): SpecialYearAnalysis {
  const specialDownloads = data
    .filter(d => specialYears.includes(d.year))
    .map(d => d.totalDownloads);
  
  const nonSpecialDownloads = data
    .filter(d => !specialYears.includes(d.year))
    .map(d => d.totalDownloads);
  
  const tTest = welchTTest(specialDownloads, nonSpecialDownloads);
  const effectSize = cohensD(specialDownloads, nonSpecialDownloads);
  const trendAdjusted = analyzeTrendAdjustedImpact(data, specialYears);
  
  return {
    specialYearsMean: mean(specialDownloads),
    nonSpecialYearsMean: mean(nonSpecialDownloads),
    tTest,
    effectSize,
    effectSizeInterpretation: interpretCohensD(effectSize),
    pValueInterpretation: interpretPValue(tTest.pValue),
    isSignificant: tTest.pValue < 0.05,
    trendAdjusted
  };
}

/**
 * Calculate institutional distribution for chi-square test
 */
export function analyzeInstitutionalDistribution(
  data: YearData[],
  specialYears: number[]
): { chiSquareResult: ReturnType<typeof chiSquareTest>; observed: number[][]; expected: number[][] } {
  const types = ['Education', 'Commercial', 'Library', 'Government'];
  
  // Aggregate by special vs non-special
  const specialCounts: Record<string, number> = { Education: 0, Commercial: 0, Library: 0, Government: 0 };
  const nonSpecialCounts: Record<string, number> = { Education: 0, Commercial: 0, Library: 0, Government: 0 };
  
  data.forEach(yearData => {
    const isSpecial = specialYears.includes(yearData.year);
    const target = isSpecial ? specialCounts : nonSpecialCounts;
    
    yearData.institutions.forEach(inst => {
      if (types.includes(inst.type)) {
        target[inst.type] += inst.downloads;
      }
    });
  });
  
  // Create observed matrix [special, non-special] x [types]
  const observed = [
    types.map(t => specialCounts[t]),
    types.map(t => nonSpecialCounts[t])
  ];
  
  // Calculate expected frequencies
  const rowTotals = observed.map(row => row.reduce((sum, val) => sum + val, 0));
  const colTotals = types.map((_, colIdx) => 
    observed.reduce((sum, row) => sum + row[colIdx], 0)
  );
  const grandTotal = rowTotals.reduce((sum, val) => sum + val, 0);
  
  const expected = observed.map((row, rowIdx) =>
    row.map((_, colIdx) => (rowTotals[rowIdx] * colTotals[colIdx]) / grandTotal)
  );
  
  const chiSquareResult = chiSquareTest(observed, expected);
  
  return { chiSquareResult, observed, expected };
}
