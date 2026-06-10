"use client"

import { Component, type ErrorInfo, type ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, RefreshCw, Home } from "lucide-react"

interface Props {
  children: ReactNode
  fallback?: ReactNode
  onError?: (error: Error, errorInfo: ErrorInfo) => void
  level?: "page" | "section" | "component"
  name?: string
}

interface State {
  hasError: boolean
  error?: Error
  errorId?: string
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const errorId = `boundary_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

    // Simple console logging only
    console.error("React Error Boundary:", {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      errorBoundary: this.props.name || "Unknown",
      level: this.props.level || "component",
      errorId,
    })

    this.setState({ error, errorId })

    // Call custom error handler safely
    if (this.props.onError) {
      try {
        this.props.onError(error, errorInfo)
      } catch (e) {
        console.error("Error in custom error handler:", e)
      }
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorId: undefined })
  }

  handleGoHome = () => {
    try {
      window.location.href = "/"
    } catch (e) {
      console.error("Failed to navigate home:", e)
    }
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback
      }

      // Page-level error
      if (this.props.level === "page") {
        return (
          <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
            <Card className="w-full max-w-md shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                  <AlertTriangle className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-2xl text-slate-900">Something went wrong</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-center text-slate-600">
                  We're sorry, but something unexpected happened. Please try refreshing the page.
                </p>

                {process.env.NODE_ENV === "development" && this.state.error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <p className="text-xs font-mono text-red-800 break-all">{this.state.error.message}</p>
                  </div>
                )}

                <div className="flex flex-col gap-2">
                  <Button onClick={this.handleRetry} className="w-full">
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Try Again
                  </Button>
                  <Button onClick={this.handleGoHome} variant="outline" className="w-full">
                    <Home className="mr-2 h-4 w-4" />
                    Go Home
                  </Button>
                </div>

                {this.state.errorId && (
                  <p className="text-xs text-center text-slate-500">Error ID: {this.state.errorId}</p>
                )}
              </CardContent>
            </Card>
          </div>
        )
      }

      // Section-level error
      if (this.props.level === "section") {
        return (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 m-4">
            <div className="flex items-center gap-3 mb-3">
              <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0" />
              <h3 className="text-lg font-semibold text-red-800">Section Error</h3>
            </div>
            <p className="text-red-700 mb-4">
              This section couldn't load properly. You can try refreshing or continue with the rest of the page.
            </p>
            <Button onClick={this.handleRetry} size="sm" variant="outline">
              <RefreshCw className="mr-2 h-3 w-3" />
              Retry
            </Button>
          </div>
        )
      }

      // Component-level error (minimal)
      return (
        <div className="bg-yellow-50 border border-yellow-200 rounded p-3 m-2">
          <div className="flex items-center gap-2 text-yellow-800">
            <AlertTriangle className="h-4 w-4 flex-shrink-0" />
            <span className="text-sm">Component failed to load</span>
            <Button onClick={this.handleRetry} size="sm" variant="ghost" className="ml-auto h-6 px-2">
              <RefreshCw className="h-3 w-3" />
            </Button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

// Convenience wrapper components
export function PageErrorBoundary({ children, name }: { children: ReactNode; name?: string }) {
  return (
    <ErrorBoundary level="page" name={name}>
      {children}
    </ErrorBoundary>
  )
}

export function SectionErrorBoundary({ children, name }: { children: ReactNode; name?: string }) {
  return (
    <ErrorBoundary level="section" name={name}>
      {children}
    </ErrorBoundary>
  )
}

export function ComponentErrorBoundary({ children, name }: { children: ReactNode; name?: string }) {
  return (
    <ErrorBoundary level="component" name={name}>
      {children}
    </ErrorBoundary>
  )
}
