import { useState, useEffect, useRef } from 'react';
import { YearData } from '@/app/components/DataInputPanel';
import { HypothesisPanel } from '@/app/components/HypothesisPanel';
import { StatisticalEvidencePanel } from '@/app/components/StatisticalEvidencePanel';
import { MathematicalAnalysisPanel } from '@/app/components/MathematicalAnalysisPanel';
import { VisualizationPanel } from '@/app/components/VisualizationPanel';
import { ResultsSynthesisPanel } from '@/app/components/ResultsSynthesisPanel';
import { PanelErrorBoundary } from '@/app/components/PanelErrorBoundary';
import { ScrollArea, Separator, Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/primitives';
import { BarChart3 } from 'lucide-react';
import { loadSampleData } from '@/app/utils/sampleData';

const SPECIAL_ISSUE_YEARS = [2019, 2021, 2024];

export default function App() {
  const [yearData, setYearData] = useState<YearData[] | null>(null);
  const [activeTab, setActiveTab] = useState('statistical');
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Auto-load sample data on mount
    setYearData(loadSampleData());
  }, []);

  const handleTabChange = (nextTab: string) => {
    setActiveTab(nextTab);
    const viewport = scrollAreaRef.current?.querySelector('[data-radix-scroll-area-viewport]') as HTMLElement | null;
    viewport?.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-primary text-primary-foreground sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-3">
            <BarChart3 className="size-7 text-accent" />
            <div>
              <h1 className="text-xl font-semibold leading-tight">Research Analytics Dashboard</h1>
              <p className="text-xs text-primary-foreground/80">
                Evaluating Special Issue Impact on Journal Downloads (2016–2025)
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <ScrollArea ref={scrollAreaRef} className="h-[calc(100vh-69px)]">
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          {yearData && (
            /* Analysis View */
            <div className="space-y-4">
              {/* Hypothesis (Always Visible) */}
              <HypothesisPanel />

              <Separator />

              {/* Analysis Tabs */}
              <Tabs value={activeTab} className="w-full" onValueChange={handleTabChange}>
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="statistical">Statistical Evidence</TabsTrigger>
                  <TabsTrigger value="mathematical">Mathematical Analysis</TabsTrigger>
                  <TabsTrigger value="visual">Visual Analysis</TabsTrigger>
                  <TabsTrigger value="results">Results & Synthesis</TabsTrigger>
                </TabsList>

                <TabsContent value="statistical" className="mt-4">
                  <StatisticalEvidencePanel data={yearData} specialYears={SPECIAL_ISSUE_YEARS} />
                </TabsContent>

                <TabsContent value="mathematical" className="mt-4">
                  <MathematicalAnalysisPanel data={yearData} specialYears={SPECIAL_ISSUE_YEARS} />
                </TabsContent>

                <TabsContent value="visual" className="mt-4">
                  <PanelErrorBoundary panelName="Visual Analysis">
                    {activeTab === 'visual' ? (
                      <VisualizationPanel data={yearData} specialYears={SPECIAL_ISSUE_YEARS} />
                    ) : null}
                  </PanelErrorBoundary>
                </TabsContent>

                <TabsContent value="results" className="mt-4">
                  <ResultsSynthesisPanel data={yearData} specialYears={SPECIAL_ISSUE_YEARS} />
                </TabsContent>
              </Tabs>
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
