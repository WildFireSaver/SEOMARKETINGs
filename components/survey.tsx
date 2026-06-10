"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { ArrowRight, Lightbulb, Edit3, CheckSquare, Shield, ArrowLeft, Building } from "lucide-react"
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

  const getRadioItemClasses = (currentValue: string, optionValue: string) => {
    return cn(
      "flex items-center space-x-4 border rounded-lg p-4 hover:bg-slate-50 hover:border-blue-400 transition-all duration-200 cursor-pointer",
      currentValue === optionValue
        ? "bg-blue-50 border-blue-500 ring-1 ring-blue-500 shadow-sm"
        : "border-gray-300 bg-white hover:shadow-sm",
    )
  }

  const projectTypes = [
    { value: "solar", label: "Solar Panel Installation" },
    { value: "kitchen", label: "Kitchen Remodeling" },
    { value: "bathroom", label: "Bathroom Renovation" },
    { value: "roofing", label: "Roofing Services" },
    { value: "hvac", label: "HVAC Systems" },
    { value: "flooring", label: "Flooring Installation" },
    { value: "windows", label: "Windows & Doors" },
    { value: "addition", label: "Home Addition" },
    { value: "exterior", label: "Exterior Renovation" },
    { value: "electrical", label: "Electrical Systems" },
    { value: "plumbing", label: "Plumbing Services" },
    { value: "landscaping", label: "Landscaping & Hardscaping" },
    { value: "other", label: "Other Project" },
  ]

  return (
    <Card className="w-full max-w-2xl mx-auto overflow-hidden border shadow-lg bg-white">
      <CardHeader className="px-6 py-8 bg-slate-900 text-white">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-semibold flex items-center gap-3">
              <Building className="h-7 w-7" />
              Property & Project Assessment
            </CardTitle>
            <CardDescription className="text-slate-300 text-base mt-2">
              Professional consultation qualification form
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-8 px-6 py-8">
        <div className="rounded-lg bg-blue-50 p-6 border border-blue-200">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
              <Lightbulb className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Professional Assessment Process</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Our certified specialists will evaluate your property and project requirements to provide expert
                recommendations and accurate cost estimates. This information helps us match you with the most qualified
                contractor for your specific needs.
              </p>
            </div>
          </div>
        </div>

        {/* Property Type */}
        <div className="space-y-4">
          <Label className="font-semibold text-lg text-slate-900 flex items-center gap-3">
            <CheckSquare className="h-5 w-5 text-blue-600" />
            Property Type
            <span className="text-red-600">*</span>
          </Label>
          <RadioGroup
            value={formData.homeInfo}
            onValueChange={(value) => handleRadioChange("homeInfo", value)}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {[
              { value: "single-family", label: "Single-Family Residence" },
              { value: "condo", label: "Condominium / Townhouse" },
              { value: "multi-family", label: "Multi-Family Property" },
              { value: "other-home", label: "Other Property Type" },
            ].map((option) => (
              <Label
                key={option.value}
                htmlFor={`homeInfo-${option.value}`}
                className={getRadioItemClasses(formData.homeInfo, option.value)}
              >
                <RadioGroupItem
                  value={option.value}
                  id={`homeInfo-${option.value}`}
                  className="border-slate-400 text-blue-600 focus:ring-blue-600"
                />
                <span className="font-medium text-slate-700">{option.label}</span>
              </Label>
            ))}
          </RadioGroup>
        </div>

        {/* Project Category */}
        <div className="space-y-4">
          <Label className="font-semibold text-lg text-slate-900 flex items-center gap-3">
            <Building className="h-5 w-5 text-blue-600" />
            Project Category
            <span className="text-red-600">*</span>
          </Label>
          <RadioGroup
            value={formData.projectType}
            onValueChange={(value) => handleRadioChange("projectType", value)}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {projectTypes.map((option) => (
              <Label
                key={option.value}
                htmlFor={`projectType-${option.value}`}
                className={getRadioItemClasses(formData.projectType, option.value)}
              >
                <RadioGroupItem
                  value={option.value}
                  id={`projectType-${option.value}`}
                  className="border-slate-400 text-blue-600 focus:ring-blue-600"
                />
                <span className="font-medium text-slate-700">{option.label}</span>
              </Label>
            ))}
          </RadioGroup>
          {formData.projectType === "other" && (
            <div className="mt-4 space-y-2">
              <Label htmlFor="otherProjectSpecify" className="text-base font-medium text-slate-700">
                Please specify project type: <span className="text-red-600">*</span>
              </Label>
              <Input
                id="otherProjectSpecify"
                name="otherProjectSpecify"
                value={formData.otherProjectSpecify || ""}
                onChange={handleInputChange}
                placeholder="e.g., Pool Installation, Deck Construction, Basement Finishing"
                className="h-11 border-slate-300 focus:border-blue-600 rounded-lg"
              />
            </div>
          )}
        </div>

        {/* Property Age */}
        <div className="space-y-4">
          <Label className="font-semibold text-lg text-slate-900 flex items-center gap-3">
            <Shield className="h-5 w-5 text-blue-600" />
            Property Age
            <span className="text-red-600">*</span>
          </Label>
          <RadioGroup
            value={formData.homeAge || ""}
            onValueChange={(value) => handleRadioChange("homeAge", value)}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {[
              { value: "0-5", label: "0-5 Years" },
              { value: "6-15", label: "6-15 Years" },
              { value: "16-30", label: "16-30 Years" },
              { value: "30+", label: "Over 30 Years" },
            ].map((option) => (
              <Label
                key={option.value}
                htmlFor={`homeAge-${option.value}`}
                className={getRadioItemClasses(formData.homeAge || "", option.value)}
              >
                <RadioGroupItem
                  value={option.value}
                  id={`homeAge-${option.value}`}
                  className="border-slate-400 text-blue-600 focus:ring-blue-600"
                />
                <span className="font-medium text-slate-700">{option.label}</span>
              </Label>
            ))}
          </RadioGroup>
        </div>

        {/* Renovation History */}
        <div className="space-y-4">
          <Label className="font-semibold text-lg text-slate-900 flex items-center gap-3">
            <Edit3 className="h-5 w-5 text-blue-600" />
            Previous Renovation History
            <span className="text-red-600">*</span>
          </Label>
          <RadioGroup
            value={formData.remodelingHistory || ""}
            onValueChange={(value) => handleRadioChange("remodelingHistory", value)}
            className="space-y-3"
          >
            {[
              { value: "original", label: "Original condition, no previous renovations" },
              { value: "partial", label: "Partial renovation completed over 5 years ago" },
              { value: "recent-partial", label: "Partial renovation within the last 5 years" },
              { value: "full", label: "Complete renovation over 5 years ago" },
              { value: "recent-full", label: "Complete renovation within the last 5 years" },
              { value: "not-sure", label: "Uncertain / Not applicable" },
            ].map((option) => (
              <Label
                key={option.value}
                htmlFor={`remodelingHistory-${option.value}`}
                className={getRadioItemClasses(formData.remodelingHistory || "", option.value)}
              >
                <RadioGroupItem
                  value={option.value}
                  id={`remodelingHistory-${option.value}`}
                  className="border-slate-400 text-blue-600 focus:ring-blue-600"
                />
                <span className="font-medium text-slate-700">{option.label}</span>
              </Label>
            ))}
          </RadioGroup>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between px-6 py-6 bg-slate-50 border-t flex-wrap gap-4">
        <Button
          variant="outline"
          onClick={onPrevStep}
          className="h-11 px-6 text-base font-medium border-slate-300 hover:border-slate-400 hover:bg-slate-100"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        <Button
          onClick={handleNextClick}
          disabled={!isFormComplete()}
          className="h-11 px-8 text-base font-medium bg-blue-600 hover:bg-blue-700 flex-1 sm:flex-none shadow-sm"
        >
          Continue <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}
