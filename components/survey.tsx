"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { ArrowRight, Home, Layers, CalendarClock, Sparkles, ArrowLeft, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { trackFormStepCompletion, trackCTAClick } from "./analytics-events"

interface SurveyProps {
  formData: {
    homeInfo: string
    projectType: string
    otherProjectSpecify?: string
    homeAge?: string
    remodelingHistory?: string
    [key: string]: any
  }
  onFormChange: (field: string, value: string) => void
  onNextStep: () => void
  onPrevStep: () => void
}

export function Survey({ formData, onFormChange, onNextStep, onPrevStep }: SurveyProps) {
  const handleRadioChange = (field: string, value: string) => {
    onFormChange(field, value)
    if (field === "projectType" && value !== "other") {
      onFormChange("otherProjectSpecify", "")
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onFormChange(e.target.name, e.target.value)
  }

  const isFormComplete = () => {
    if (!formData.homeInfo || !formData.projectType || !formData.homeAge || !formData.remodelingHistory) {
      return false
    }
    if (formData.projectType === "other" && !formData.otherProjectSpecify?.trim()) {
      return false
    }
    return true
  }

  const handleNextClick = () => {
    trackFormStepCompletion("home_info", 1)
    trackCTAClick("survey", "Next")
    onNextStep()
  }

  const optionCardClasses = (selected: boolean) =>
    cn(
      "group relative flex items-center gap-3 rounded-xl border p-4 cursor-pointer transition-all duration-200",
      selected
        ? "border-primary bg-primary/5 ring-1 ring-primary shadow-sm"
        : "border-border bg-card hover:border-primary/40 hover:bg-muted/50",
    )

  const propertyTypes = [
    { value: "single-family", label: "Single-Family Home" },
    { value: "condo", label: "Condo / Townhouse" },
    { value: "multi-family", label: "Multi-Family Property" },
    { value: "other-home", label: "Other Property Type" },
  ]

  const projectTypes = [
    { value: "patio-driveway", label: "Paver Patio & Driveway" },
    { value: "retaining-wall", label: "Retaining Walls" },
    { value: "outdoor-kitchen", label: "Outdoor Kitchen & Fire Pit" },
    { value: "pool-water", label: "Pools & Water Features" },
    { value: "turf", label: "Artificial Turf & Lawns" },
    { value: "planting-irrigation", label: "Planting & Irrigation" },
    { value: "landscape-lighting", label: "Outdoor Lighting" },
    { value: "walkways", label: "Walkways & Steps" },
    { value: "outdoor-living", label: "Pergolas & Outdoor Living" },
    { value: "drainage", label: "Grading & Drainage" },
    { value: "full-landscape", label: "Full Landscape Design" },
    { value: "other", label: "Other Project" },
  ]

  const propertyAges = [
    { value: "0-5", label: "0–5 Years" },
    { value: "6-15", label: "6–15 Years" },
    { value: "16-30", label: "16–30 Years" },
    { value: "30+", label: "Over 30 Years" },
  ]

  const historyOptions = [
    { value: "original", label: "Original — no previous landscaping work" },
    { value: "partial", label: "Partial work completed over 5 years ago" },
    { value: "recent-partial", label: "Partial work within the last 5 years" },
    { value: "full", label: "Full landscape completed over 5 years ago" },
    { value: "recent-full", label: "Full landscape within the last 5 years" },
    { value: "not-sure", label: "Not sure / Not applicable" },
  ]

  const renderOption = (
    field: string,
    option: { value: string; label: string },
    current: string,
  ) => {
    const selected = current === option.value
    return (
      <Label key={option.value} htmlFor={`${field}-${option.value}`} className={optionCardClasses(selected)}>
        <RadioGroupItem value={option.value} id={`${field}-${option.value}`} className="sr-only" />
        <span
          className={cn(
            "flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border transition-colors",
            selected ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground/40 bg-transparent",
          )}
        >
          {selected && <Check className="h-3 w-3" />}
        </span>
        <span className={cn("text-sm font-medium", selected ? "text-foreground" : "text-muted-foreground")}>
          {option.label}
        </span>
      </Label>
    )
  }

  const SectionHeading = ({
    icon: Icon,
    step,
    title,
  }: {
    icon: typeof Home
    step: number
    title: string
  }) => (
    <div className="mb-4 flex items-center gap-3">
      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Step {step} of 4</p>
        <h3 className="text-base font-semibold text-foreground">
          {title} <span className="text-primary">*</span>
        </h3>
      </div>
    </div>
  )

  return (
    <Card className="mx-auto w-full max-w-2xl overflow-hidden border shadow-lg">
      {/* Header */}
      <div className="bg-primary px-6 py-7 text-primary-foreground">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-primary-foreground/80">
          <Sparkles className="h-4 w-4" />
          Free Project Assessment
        </div>
        <h2 className="mt-2 text-2xl font-bold text-balance">Tell us about your outdoor project</h2>
        <p className="mt-1 text-sm text-primary-foreground/85 text-pretty">
          A few quick questions so we can match you with the right licensed landscaping crew. Takes about two minutes.
        </p>
      </div>

      <CardContent className="space-y-10 px-6 py-8">
        {/* Property Type */}
        <div>
          <SectionHeading icon={Home} step={1} title="Property type" />
          <RadioGroup
            value={formData.homeInfo}
            onValueChange={(value) => handleRadioChange("homeInfo", value)}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {propertyTypes.map((option) => renderOption("homeInfo", option, formData.homeInfo))}
          </RadioGroup>
        </div>

        {/* Project Category */}
        <div>
          <SectionHeading icon={Layers} step={2} title="What are you looking to build?" />
          <RadioGroup
            value={formData.projectType}
            onValueChange={(value) => handleRadioChange("projectType", value)}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {projectTypes.map((option) => renderOption("projectType", option, formData.projectType))}
          </RadioGroup>
          {formData.projectType === "other" && (
            <div className="mt-4 space-y-2">
              <Label htmlFor="otherProjectSpecify" className="text-sm font-medium text-foreground">
                Please specify your project <span className="text-primary">*</span>
              </Label>
              <Input
                id="otherProjectSpecify"
                name="otherProjectSpecify"
                value={formData.otherProjectSpecify || ""}
                onChange={handleInputChange}
                placeholder="e.g., Putting green, Deck construction, Xeriscaping"
                className="h-11 rounded-lg"
              />
            </div>
          )}
        </div>

        {/* Property Age */}
        <div>
          <SectionHeading icon={CalendarClock} step={3} title="How old is your property?" />
          <RadioGroup
            value={formData.homeAge || ""}
            onValueChange={(value) => handleRadioChange("homeAge", value)}
            className="grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {propertyAges.map((option) => renderOption("homeAge", option, formData.homeAge || ""))}
          </RadioGroup>
        </div>

        {/* Landscaping History */}
        <div>
          <SectionHeading icon={Sparkles} step={4} title="Previous landscaping history" />
          <RadioGroup
            value={formData.remodelingHistory || ""}
            onValueChange={(value) => handleRadioChange("remodelingHistory", value)}
            className="grid grid-cols-1 gap-3"
          >
            {historyOptions.map((option) => renderOption("remodelingHistory", option, formData.remodelingHistory || ""))}
          </RadioGroup>
        </div>
      </CardContent>

      <CardFooter className="flex flex-wrap justify-between gap-4 border-t bg-muted/40 px-6 py-6">
        <Button variant="outline" onClick={onPrevStep} className="h-11 px-6 font-medium">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <Button
          onClick={handleNextClick}
          disabled={!isFormComplete()}
          className="h-11 flex-1 px-8 font-semibold text-primary-foreground sm:flex-none"
        >
          Continue <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}
