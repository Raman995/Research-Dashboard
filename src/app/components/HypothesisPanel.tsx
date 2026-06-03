import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/primitives';
import { AlertCircle } from 'lucide-react';

export function HypothesisPanel() {
  const specialIssueYears = [
    { year: 2019, theme: 'Emerging Methodologies in Social Sciences' },
    { year: 2021, theme: 'Interdisciplinary Approaches to Global Challenges' },
    { year: 2024, theme: 'Data-Driven Research and Open Science' }
  ];

  return (
    <Card className="border-2 border-primary/20 bg-primary/5">
      <CardHeader className="pb-0">
        <CardTitle className="flex items-center gap-2">
          <AlertCircle className="size-5" />
          Research Hypothesis
        </CardTitle>
        <CardDescription>Claim under evaluation</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3 lg:grid-cols-[1fr_1.1fr]">
        <div className="p-3 bg-card rounded-lg border">
          <p className="text-base italic">
            "If a journal publishes a special issue in a given year, total downloads for that year increase."
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h4 className="font-semibold mb-2 text-sm">Special Issue Years</h4>
            <div className="space-y-1.5">
            {specialIssueYears.map(({ year, theme }) => (
              <div key={year} className="flex items-start gap-2">
                <Badge variant="secondary" className="mt-0.5">{year}</Badge>
                <span className="text-sm text-muted-foreground">{theme}</span>
              </div>
            ))}
            </div>
          </div>

          <div className="text-sm space-y-1.5 md:border-l md:pl-3">
            <p className="text-muted-foreground">
              <strong>Rationale:</strong> broader audiences, invited authors, promotion, and timely topics may lift downloads.
            </p>
            <p className="text-muted-foreground">
              <strong>Approach:</strong> statistical tests, trend analysis, and visual evidence with data-driven conclusions.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
