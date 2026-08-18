"use client" // Ensure it's a client component if using hooks or event handlers

import { Button } from "@/components/ui/button" // Using shadcn Button
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, CalendarDays, Phone } from "lucide-react"
import Link from "next/link" // For Next.js navigation
import { clearSessionData } from "@/lib/offline-storage" // Import clearSessionData
import { useRouter } from "next/navigation" // Import useRouter

// Removed formData and isOffline props as the NextUI version didn't use them,
// and this version is simplified. If they are needed, they can be added back.
export default function Confirmation() {
  const router = useRouter()

  const handleGoHome = () => {
    if (typeof window !== "undefined") {
      clearSessionData() // Clear session data before navigating
      router.push("/") // Use Next.js router for navigation
    }
  }

  return (
    <div className="flex flex-1 items-center justify-center py-12 animate-fade-in">
      <Card className="w-full max-w-lg shadow-xl border-2 border-green-200">
        <CardHeader className="bg-green-50 p-6 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 ring-4 ring-green-200">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <CardTitle className="text-3xl font-bold text-green-700">Application Received!</CardTitle>
          <CardDescription className="text-md text-gray-600 mt-1">Thank you! We've got your details.</CardDescription>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div className="text-center">
            <p className="text-gray-700">
              You&apos;re one step closer to your dream outdoor space. We&apos;ll be in touch shortly to set up your{" "}
              <strong className="text-primary">free, no-obligation consultation.</strong>
            </p>
          </div>

          <div className="rounded-lg border border-primary/20 bg-primary/5 p-4 space-y-3">
            <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
              <CalendarDays className="h-5 w-5" />
              What Happens Next?
            </h3>
            <div className="flex items-start gap-3">
              <CalendarDays className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-700">Expect a Call Soon</p>
                <p className="text-sm text-muted-foreground">
                  One of our friendly California-based specialists will contact you within 24-48 hours to discuss your
                  project and schedule your no-obligation consultation.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-700">Keep Your Phone Handy!</p>
                <p className="text-sm text-muted-foreground">
                  We'll be calling from an (800) or local California number.
                </p>
              </div>
            </div>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            If you have any immediate questions, feel free to call us at{" "}
            <Link href="tel:1-800-555-1234" className="text-primary hover:underline">
              1-800-555-1234
            </Link>
            .
          </p>
        </CardContent>
        <CardFooter className="p-6 bg-gray-50 border-t">
          <Button onClick={handleGoHome} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-3 h-auto">
            Back to Homepage
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
