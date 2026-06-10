"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { ArrowLeft, ArrowRight, Home, AlertTriangle } from "lucide-react"

interface RoofingSurveyProps {
  formData: {
    roofType: string
    roofLeaks: boolean
    roofWindDamage: boolean
    roofMissingShingles: boolean
    roofBrokenTiles: boolean
    roofOtherIssues: string
    [key: string]: any
  }
  onFormChange: (field: string, value: string | boolean) => void
  onNextStep: () => void
  onPrevStep: () => void
}

export function RoofingSurvey({ formData, onFormChange, onNextStep, onPrevStep }: RoofingSurveyProps) {
  const handleRadioChange = (value: string) => {
    onFormChange("roofType", value)
  }

  const handleCheckboxChange = (field: string, checked: boolean) => {
    onFormChange(field, checked)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFormChange(e.target.name, e.target.value)
  }

  const isFormComplete = () => {
    return !!formData.roofType
  }

  return (
    <section className="flex flex-1 items-center justify-center py-12">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Roof Details</CardTitle>
              <CardDescription>Please tell us more about your roof</CardDescription>
            </div>
            <div className="text-sm text-muted-foreground">Step 7 of 8</div>
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
            <div className="h-full bg-primary transition-all duration-300 ease-in-out" style={{ width: "87.5%" }} />
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-lg bg-primary/10 p-4">
            <div className="flex items-center gap-3">
              <Home className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-medium">Tell Us About Your Roof</h3>
                <p className="text-sm text-muted-foreground">
                  These details will help us better understand your roofing needs.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="mb-3 text-base font-medium">What type of roof do you have?</h3>
              <RadioGroup value={formData.roofType} onValueChange={handleRadioChange}>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="asphalt" id="asphalt" />
                    <Label htmlFor="asphalt">Asphalt Shingles</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="metal" id="metal" />
                    <Label htmlFor="metal">Metal Roof</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="tile" id="tile" />
                    <Label htmlFor="tile">Tile Roof</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="slate" id="slate" />
                    <Label htmlFor="slate">Slate Roof</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="flat" id="flat" />
                    <Label htmlFor="flat">Flat/Low Slope Roof</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other-roof" />
                    <Label htmlFor="other-roof">Other/Not Sure</Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="mb-3 flex items-center gap-2 text-base font-medium">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                Are you experiencing any of these issues?
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="leaks"
                    checked={formData.roofLeaks}
                    onCheckedChange={(checked) => handleCheckboxChange("roofLeaks", checked as boolean)}
                  />
                  <Label htmlFor="leaks">Roof leaks or water damage</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="wind"
                    checked={formData.roofWindDamage}
                    onCheckedChange={(checked) => handleCheckboxChange("roofWindDamage", checked as boolean)}
                  />
                  <Label htmlFor="wind">Wind damage</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="shingles"
                    checked={formData.roofMissingShingles}
                    onCheckedChange={(checked) => handleCheckboxChange("roofMissingShingles", checked as boolean)}
                  />
                  <Label htmlFor="shingles">Missing or damaged shingles</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="tiles"
                    checked={formData.roofBrokenTiles}
                    onCheckedChange={(checked) => handleCheckboxChange("roofBrokenTiles", checked as boolean)}
                  />
                  <Label htmlFor="tiles">Broken or cracked tiles</Label>
                </div>
                <div className="mt-2 space-y-2">
                  <Label htmlFor="other-issues">Other issues or concerns:</Label>
                  <Input
                    id="other-issues"
                    name="roofOtherIssues"
                    value={formData.roofOtherIssues}
                    onChange={handleInputChange}
                    placeholder="Please describe any other issues..."
                  />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={onPrevStep}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          <Button onClick={onNextStep} disabled={!isFormComplete()}>
            Continue to Contact Form <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}
