"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { ArrowLeft, ArrowRight, Clock, Lightbulb, Edit3 } from "lucide-react"
import { ConfettiEffect } from "./confetti-effect"
import { cn } from "@/lib/utils"
import { trackFormStepCompletion, trackCTAClick } from "./analytics-events"

export function ProjectQuestions({ formData, onFormChange, onNextStep, onPrevStep }: any) {
  const [showConfetti, setShowConfetti] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const projectDetailsMaxLength = 500

  const handleTimelineBudgetChange = (value: string) => {
    onFormChange("timelineAndBudget", value)
    if (errors.timelineAndBudget) setErrors((prev) => ({ ...prev, timelineAndBudget: "" }))
  }

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onFormChange("projectDetails", e.target.value.slice(0, projectDetailsMaxLength))
  }

  const handleOtherProjectDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFormChange("otherProjectSpecify", e.target.value)
    if (errors.otherProjectSpecify) setErrors((prev) => ({ ...prev, otherProjectSpecify: "" }))
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.timelineAndBudget) {
      newErrors.timelineAndBudget = "Please select your timeline and budget."
    }
    if (formData.projectType === "other" && !formData.otherProjectSpecify) {
      newErrors.otherProjectSpecify = "Please specify your project type."
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleContinue = () => {
    if (isSubmitting) return

    if (validateForm()) {
      setIsSubmitting(true)
      trackFormStepCompletion("project_details", 2)
      trackCTAClick("project-questions", "Continue")

      const qualifies = Math.random() > 0.2
      if (qualifies) {
        setShowConfetti(true)
        setTimeout(() => {
          setIsSubmitting(false)
          onNextStep()
        }, 1500)
      } else {
        setIsSubmitting(false)
        onNextStep()
      }
    }
  }

  const isFormComplete = () => {
    let complete = !!formData.timelineAndBudget
    if (formData.projectType === "other" && !formData.otherProjectSpecify) {
      complete = false
    }
    return complete
  }

  const getRadioItemClasses = (currentValue: string, optionValue: string, hasError?: boolean) => {
    return cn(
      "flex items-center space-x-3 border rounded-lg p-4 hover:bg-amber-50 hover:border-amber-400 transition-all duration-200 cursor-pointer",
      currentValue === optionValue
        ? "bg-amber-100 border-amber-500 ring-2 ring-primary ring-offset-1 shadow-md"
        : "border-gray-200 bg-white",
      hasError && !currentValue ? "border-red-400 bg-red-50" : "",
    )
  }

  return (
    <Card className="w-full max-w-lg mx-auto overflow-hidden border-2 border-blue-100 shadow-xl">
      {showConfetti && <ConfettiEffect duration={1500} />}

      <CardHeader className="px-4 py-4 sm:px-6 sm:py-5 bg-amber-50">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl sm:text-2xl">Tell Us About Your Vision</CardTitle>
            <CardDescription className="text-sm sm:text-base">
              Help us understand your {formData.projectType === "other" ? "project" : formData.projectType} dreams
            </CardDescription>
          </div>
          <div className="text-sm text-muted-foreground">Step 2 of 3</div>
        </div>
        <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-gray-200">
          <div className="h-full bg-primary transition-all duration-300 ease-in-out" style={{ width: "66.6%" }} />
        </div>
      </CardHeader>
      <CardContent className="space-y-5 px-4 py-5 sm:px-6 sm:py-6 bg-slate-50">
        <div className="rounded-lg bg-amber-50 p-4 border border-amber-200">
          <div className="flex items-start gap-3">
            <Lightbulb className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-700">
              The more details you share, the better we can match you with the perfect specialist for your unique
              project.
            </p>
          </div>
        </div>

        {formData.projectType === "other" && (
          <div className="space-y-2 animate-fade-in">
            <Label htmlFor="otherProjectSpecify" className="flex items-center gap-2 font-semibold text-gray-800">
              <Edit3 className="h-4 w-4 text-primary" />
              Please specify your project type: <span className="text-red-500">*</span>
            </Label>
            <Input
              id="otherProjectSpecify"
              value={formData.otherProjectSpecify || ""}
              onChange={handleOtherProjectDetailsChange}
              placeholder="e.g., Putting green, Xeriscaping"
              className={cn("h-11", errors.otherProjectSpecify ? "border-red-400 bg-red-50" : "border-gray-300")}
            />
            {errors.otherProjectSpecify && <p className="text-xs text-red-600 mt-1">{errors.otherProjectSpecify}</p>}
          </div>
        )}

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label htmlFor="projectDetails" className="font-semibold text-gray-800">
              Share your project ideas:
            </Label>
            <span className="text-xs text-muted-foreground">
              {formData.projectDetails?.length || 0}/{projectDetailsMaxLength}
            </span>
          </div>
          <Textarea
            id="projectDetails"
            value={formData.projectDetails || ""}
            onChange={handleTextareaChange}
            placeholder="What are you hoping to achieve with your project? Any specific features or styles you love? (Optional)"
            className="min-h-[120px] border-gray-300 focus:border-primary"
            maxLength={projectDetailsMaxLength}
          />
        </div>

        <div className="rounded-lg border border-gray-200 p-4 mt-4 bg-white">
          <h3 className="mb-3 flex items-center gap-2 text-base font-semibold text-gray-800">
            <Clock className="h-5 w-5 text-primary" />
            Timeline & Budget <span className="text-red-500">*</span>
          </h3>
          <RadioGroup
            value={formData.timelineAndBudget}
            onValueChange={handleTimelineBudgetChange}
            className="space-y-3"
          >
            {[
              { value: "urgent-low", label: "Ready to start soon - Budget under $10k" },
              { value: "urgent-high", label: "Ready to start soon - Budget over $10k" },
              { value: "soon-low", label: "Within 3 months - Budget under $10k" },
              { value: "soon-high", label: "Within 3 months - Budget over $10k" },
              { value: "planning", label: "Just exploring ideas - No specific timeline" },
            ].map((option) => (
              <Label
                key={option.value}
                htmlFor={`timeline-${option.value}`}
                className={getRadioItemClasses(formData.timelineAndBudget, option.value, !!errors.timelineAndBudget)}
              >
                <RadioGroupItem
                  value={option.value}
                  id={`timeline-${option.value}`}
                  className="border-gray-400 text-primary focus:ring-primary"
                />
                <span className="font-medium text-gray-700">{option.label}</span>
              </Label>
            ))}
          </RadioGroup>
          {errors.timelineAndBudget && <p className="text-xs text-red-600 mt-1.5">{errors.timelineAndBudget}</p>}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between px-4 py-4 sm:px-6 sm:py-5 flex-wrap gap-3 bg-gray-50 border-t">
        <Button
          variant="outline"
          onClick={onPrevStep}
          disabled={isSubmitting}
          className="h-11 px-5 sm:h-12 sm:px-6 text-sm sm:text-base"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <Button
          onClick={handleContinue}
          disabled={!isFormComplete() || isSubmitting}
          className="h-11 px-5 sm:h-12 sm:px-6 text-sm sm:text-base flex-1 sm:flex-none bg-primary hover:bg-primary/90"
        >
          {isSubmitting ? (
            <span className="flex items-center">
              Processing{" "}
              <span className="ml-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>
            </span>
          ) : (
            <>
              Continue <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ProjectQuestions
