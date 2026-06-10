"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FormTestDebugProps {
  formData: any
  currentStep: number
  onStepChange: (step: number) => void
}

export function FormTestDebug({ formData, currentStep, onStepChange }: FormTestDebugProps) {
  const [showDebug, setShowDebug] = useState(false)

  if (!showDebug) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button onClick={() => setShowDebug(true)} variant="outline" size="sm" className="bg-white shadow-lg">
          Debug Form
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-80">
      <Card className="shadow-lg">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm">Form Debug</CardTitle>
            <Button onClick={() => setShowDebug(false)} variant="ghost" size="sm" className="h-6 w-6 p-0">
              ×
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <p className="text-xs font-medium">Current Step: {currentStep}</p>
            <div className="flex gap-1 mt-1">
              {[0, 1, 2, 3, 4].map((step) => (
                <Button
                  key={step}
                  onClick={() => onStepChange(step)}
                  variant={currentStep === step ? "default" : "outline"}
                  size="sm"
                  className="h-6 w-8 text-xs"
                >
                  {step}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-medium">Form Data:</p>
            <div className="text-xs bg-gray-50 p-2 rounded max-h-32 overflow-y-auto">
              <pre>{JSON.stringify(formData, null, 2)}</pre>
            </div>
          </div>

          <div>
            <p className="text-xs font-medium">Validation Status:</p>
            <div className="text-xs space-y-1">
              <div className={`flex justify-between ${formData.zipCode ? "text-green-600" : "text-red-600"}`}>
                <span>Zip Code:</span>
                <span>{formData.zipCode ? "✓" : "✗"}</span>
              </div>
              <div className={`flex justify-between ${formData.homeInfo ? "text-green-600" : "text-red-600"}`}>
                <span>Home Info:</span>
                <span>{formData.homeInfo ? "✓" : "✗"}</span>
              </div>
              <div className={`flex justify-between ${formData.projectType ? "text-green-600" : "text-red-600"}`}>
                <span>Project Type:</span>
                <span>{formData.projectType ? "✓" : "✗"}</span>
              </div>
              <div className={`flex justify-between ${formData.timelineAndBudget ? "text-green-600" : "text-red-600"}`}>
                <span>Timeline:</span>
                <span>{formData.timelineAndBudget ? "✓" : "✗"}</span>
              </div>
              <div
                className={`flex justify-between ${formData.firstName && formData.lastName && formData.email && formData.phone ? "text-green-600" : "text-red-600"}`}
              >
                <span>Contact Info:</span>
                <span>{formData.firstName && formData.lastName && formData.email && formData.phone ? "✓" : "✗"}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
