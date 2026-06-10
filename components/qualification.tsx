"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, DollarSign, Calendar, X } from "lucide-react"
import Image from "next/image"

interface QualificationProps {
  isQualified: boolean
  formData: {
    homeAge: string
    recentRemodeling: string
    roofingHistory: string
    projectType: string
    projectTimeline: string
    budgetRange: string
    firstName: string
    lastName: string
    email: string
    phone: string
    streetAddress: string
    city: string
    state: string
    zipCode: string
    bestTimeToContact: string
  }
}

export function Qualification({ isQualified, formData }: QualificationProps) {
  // Map the bestTimeToContact value to a readable string
  const bestTimeMap: Record<string, string> = {
    morning: "Morning (8am-12pm)",
    afternoon: "Afternoon (12pm-5pm)",
    evening: "Evening (5pm-8pm)",
    weekend: "Weekends Only",
  }

  return (
    <section className="flex flex-1 items-center justify-center py-12">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl">{isQualified ? "You're Qualified!" : "Thank You"}</CardTitle>
          <CardDescription className="text-center">
            {isQualified
              ? `${formData.firstName}, you've qualified for our $50 cash offer!`
              : "We've received your information"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {isQualified ? (
            <>
              <div className="flex justify-center">
                <div className="relative h-24 w-24 rounded-full bg-primary/10 p-6">
                  <DollarSign className="h-full w-full text-primary" />
                  <div className="absolute -right-2 -top-2 rounded-full bg-green-500 p-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-medium">$50 CASH - Just For Listening!</h3>
                <p className="text-muted-foreground">
                  One of our specialists will call you at {formData.phone} within 24 hours to schedule your
                  consultation. After the 45-minute consultation, you'll receive your $50 cash on the spot!
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h4 className="mb-3 font-medium">Your Information:</h4>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                  <div>
                    <p className="text-sm font-medium">Name:</p>
                    <p className="text-sm text-muted-foreground">
                      {formData.firstName} {formData.lastName}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Phone:</p>
                    <p className="text-sm text-muted-foreground">{formData.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Email:</p>
                    <p className="text-sm text-muted-foreground">{formData.email}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Best Time for Consultation:</p>
                    <p className="text-sm text-muted-foreground">
                      {bestTimeMap[formData.bestTimeToContact] || formData.bestTimeToContact}
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm font-medium">Address:</p>
                    <p className="text-sm text-muted-foreground">
                      {formData.streetAddress}, {formData.city}, {formData.state} {formData.zipCode}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <h4 className="mb-3 font-medium">What to Expect:</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Calendar className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <p className="font-medium">Scheduling Your Consultation</p>
                      <p className="text-sm text-muted-foreground">
                        We'll call you within 24 hours to schedule a convenient time for your 45-minute consultation.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <DollarSign className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <p className="font-medium">Getting Your $50 Cash</p>
                      <p className="text-sm text-muted-foreground">
                        After completing the consultation, you'll receive $50 cash on the spot - not a discount or
                        credit.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <p className="font-medium">No Obligation</p>
                      <p className="text-sm text-muted-foreground">
                        There's absolutely no obligation to sign anything or make a purchase. The $50 is yours just for
                        listening.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full">
                    <Image
                      src="/construction-specialist-portrait.png"
                      alt="Construction Specialist"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Your Home Specialist</h4>
                    <p className="text-sm text-muted-foreground">
                      Our expert will provide valuable insights about your potential project - and you'll get $50 cash
                      just for listening!
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="space-y-2 text-center">
              <p className="text-muted-foreground">We're reviewing your information. We'll be in touch soon.</p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={() => window.location.reload()}>{isQualified ? "Done" : "Return Home"}</Button>
        </CardFooter>
      </Card>
    </section>
  )
}
