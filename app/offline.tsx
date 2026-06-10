"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { WifiOff, RefreshCw } from "lucide-react"

export default function OfflinePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
            <WifiOff className="h-8 w-8 text-blue-600" />
          </div>
          <CardTitle className="text-2xl">You're Offline</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-muted-foreground">
            It looks like you're currently offline. Some features may be unavailable until you reconnect to the
            internet.
          </p>
          <div className="mt-6 rounded-lg border border-blue-100 bg-blue-50 p-4">
            <h3 className="mb-2 font-medium">Don't worry!</h3>
            <p className="text-sm text-muted-foreground">
              You can still view previously loaded content. When you're back online, you can continue where you left
              off.
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            onClick={() => window.location.reload()}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
          >
            <RefreshCw className="h-4 w-4" />
            Try Again
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
