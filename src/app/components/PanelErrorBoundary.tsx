import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/primitives';

interface PanelErrorBoundaryProps {
  panelName: string;
  children: React.ReactNode;
}

interface PanelErrorBoundaryState {
  hasError: boolean;
  message: string;
}

export class PanelErrorBoundary extends React.Component<PanelErrorBoundaryProps, PanelErrorBoundaryState> {
  constructor(props: PanelErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, message: '' };
  }

  static getDerivedStateFromError(error: Error): PanelErrorBoundaryState {
    return {
      hasError: true,
      message: error?.message ?? 'Unexpected rendering error.'
    };
  }

  componentDidCatch(error: Error) {
    console.error(`Error in ${this.props.panelName} panel:`, error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Card>
          <CardHeader>
            <CardTitle>{this.props.panelName} Unavailable</CardTitle>
            <CardDescription>
              A rendering issue occurred in this panel. The rest of the dashboard is still available.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Details: {this.state.message}
            </p>
          </CardContent>
        </Card>
      );
    }

    return this.props.children;
  }
}
