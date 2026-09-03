"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, XCircle, ArrowRight, MapPin } from "lucide-react"
import { validateCaliforniaZip } from "@/lib/california-cities"
import { getSessionData, saveSessionData } from "@/lib/offline-storage"
import { trackZipCodeSubmission } from "./analytics-events"

interface ZipCodeCheckerProps {
  onSuccess: (zipCode: string) => void
}

export function ZipCodeChecker({ onSuccess }: ZipCodeCheckerProps) {
  const [zipCode, setZipCode] = useState(() => getSessionData()?.formData?.zipCode || "")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setError(null)
    setIsLoading(true)

    // Brief pause so the check feels deliberate without making users wait.
    await new Promise((resolve) => setTimeout(resolve, 450))

    const isValid = validateCaliforniaZip(zipCode)
    trackZipCodeSubmission(zipCode, isValid)

    if (isValid) {
      const currentSession = getSessionData() || {}
      saveSessionData({
        ...currentSession,
        formData: {
          ...currentSession.formData,
          zipCode: zipCode,
        },
        isZipVerifiedState: true,
      })
      onSuccess(zipCode)
    } else {
      setError("We currently serve California residents only. Please enter a valid California ZIP code.")
    }
    setIsLoading(false)
  }

  return (
    <div className="w-full space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <Input
              type="text"
              value={zipCode}
              onChange={(e) => {
                setZipCode(e.target.value.replace(/\D/g, "").slice(0, 5))
                setError(null)
              }}
              placeholder="Enter ZIP Code"
              required
              inputMode="numeric"
              autoComplete="postal-code"
              aria-label="ZIP code"
              className="h-12 border-slate-300 pl-10 text-lg tracking-wider focus-visible:ring-primary"
              aria-describedby={error ? "zip-error" : undefined}
            />
          </div>
          <Button
            type="submit"
            disabled={isLoading || zipCode.length !== 5}
            className="h-12 bg-primary px-6 font-semibold text-primary-foreground hover:bg-primary/90"
          >
            {isLoading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <>
                Check Availability
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </form>

      {error && (
        <Alert variant="destructive" className="mt-3" id="zip-error">
          <XCircle className="h-4 w-4" />
          <AlertDescription className="text-sm">{error}</AlertDescription>
        </Alert>
      )}
    </div>
  )
}
