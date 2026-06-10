"use client"

import type React from "react" // Keep type import
// Add useActionState import from react
import { useState } from "react" // Changed from just useState

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, DollarSign } from "lucide-react" // Added AlertTriangle, CheckCircle
import { PhoneInput } from "./phone-input"
import { isValidEmail, isValidPhone } from "./form-validation" // Keep client-side validation for immediate feedback
import { cn } from "@/lib/utils"
import { trackFormSubmission, trackCTAClick, trackPhoneValidation } from "./analytics-events"

// Import the server action and FormState type
// Update props: remove onSubmit, add onSubmissionSuccess
export function ContactForm({ formData, onFormChange, onSubmissionSuccess, onPrevStep }: any) {
  // Remove local isSubmitting and errors state, use useActionState instead
  // const [isSubmitting, setIsSubmitting] = useState(false)
  // const [errors, setErrors] = useState<Record<string, string>>({})

  // Add local `isSubmitting` state
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Local errors for immediate client-side validation feedback
  const [clientErrors, setClientErrors] = useState<Record<string, string>>({})
  const [phoneValidationAttempts, setPhoneValidationAttempts] = useState(0)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    onFormChange(name, value)
    if (clientErrors[name]) setClientErrors((prev) => ({ ...prev, [name]: "" }))
  }

  const handlePhoneChange = (value: string) => {
    onFormChange("phone", value)
    if (clientErrors.phone) setClientErrors((prev) => ({ ...prev, phone: "" }))

    // Track phone validation attempts
    const attempts = phoneValidationAttempts + 1
    setPhoneValidationAttempts(attempts)
    const isValid = isValidPhone(value)
    if (value.length === 10) {
      trackPhoneValidation(isValid, attempts)
    }
  }

  const handleSelectChange = (name: string, value: string) => {
    onFormChange(name, value)
    if (clientErrors[name]) setClientErrors((prev) => ({ ...prev, [name]: "" }))
  }

  // Client-side validation for immediate UX
  const validateFormClientSide = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.firstName?.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName?.trim()) newErrors.lastName = "Last name is required"
    if (!formData.email?.trim()) newErrors.email = "Email is required"
    else if (!isValidEmail(formData.email)) newErrors.email = "Invalid email format"
    if (!formData.phone?.trim()) newErrors.phone = "Phone number is required"
    else if (!isValidPhone(formData.phone)) newErrors.phone = "Invalid U.S. phone number"
    if (!formData.address?.trim()) newErrors.address = "Address is required"
    if (!formData.bestTimeToContact) newErrors.bestTimeToContact = "Please select a time"
    if (!formData.financingInterest) newErrors.financingInterest = "Please select financing interest"
    setClientErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Remove `useEffect` for `state.success`

  // Modify `handleFormSubmitAttempt` to handle client-side validation and then allow native form submission
  const handleFormSubmitAttempt = (event: React.FormEvent<HTMLFormElement>) => {
    if (!validateFormClientSide()) {
      event.preventDefault() // Prevent form submission if client-side validation fails
    } else {
      // Track form submission
      trackFormSubmission(formData.projectType, formData.timelineAndBudget)
      trackCTAClick("contact-form", "Get My Cash Reward")

      // If client-side validation passes, allow the form to submit to Formspree
      setIsSubmitting(true) // Set submitting state
      // Formspree will handle the redirect on success, so we don't call onSubmissionSuccess here directly.
      // The parent page (app/contact-form/page.tsx) will handle navigation to confirmation.
    }
  }

  // Modify `getFieldError` to only use `clientErrors`
  const getFieldError = (fieldName: string) => {
    return clientErrors[fieldName]
  }

  return (
    // Update the form tag to point to Formspree and use POST method
    <form action="https://formspree.io/f/xkgbowvn" method="POST" onSubmit={handleFormSubmitAttempt}>
      {/* Hidden inputs for data from previous steps that need to be submitted */}
      <input type="hidden" name="homeInfo" value={formData.homeInfo || ""} />
      <input type="hidden" name="projectType" value={formData.projectType || ""} />
      <input type="hidden" name="otherProjectSpecify" value={formData.otherProjectSpecify || ""} />
      <input type="hidden" name="projectDetails" value={formData.projectDetails || ""} />
      <input type="hidden" name="timelineAndBudget" value={formData.timelineAndBudget || ""} />
      <input type="hidden" name="zipCode" value={formData.zipCode || ""} />

      <Card className="w-full max-w-lg mx-auto overflow-hidden border-2 border-amber-200 shadow-lg">
        <CardHeader className="px-4 py-4 sm:px-6 sm:py-5 bg-amber-50">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl sm:text-2xl text-gray-800">Your Information</CardTitle>
              <CardDescription className="text-sm sm:text-base text-muted-foreground">
                Help us match you with the perfect specialist for your needs
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="px-4 py-5 sm:px-6 sm:py-6 bg-white">
          {/* Remove general server message display */}

          <div className="space-y-5">
            <div className="rounded-lg bg-amber-50 p-4 border border-amber-200">
              <div className="flex items-start gap-3">
                <DollarSign className="h-8 w-8 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Almost There!</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete this form to see if you qualify for up to $100 cash and get matched with your perfect
                    specialist.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="firstName">
                  First Name<span className="text-red-500">*</span>
                </Label>
                <Input
                  id="firstName"
                  name="firstName" // Ensure name attribute is present for FormData
                  value={formData.firstName || ""}
                  onChange={handleInputChange}
                  placeholder="John"
                  required
                  className={cn(
                    getFieldError("firstName")
                      ? "border-red-400 focus:ring-red-500"
                      : "border-input focus:ring-primary",
                  )}
                  aria-invalid={!!getFieldError("firstName")}
                />
                {getFieldError("firstName") && (
                  <p className="text-xs text-red-600 mt-1">{getFieldError("firstName")}</p>
                )}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="lastName">
                  Last Name<span className="text-red-500">*</span>
                </Label>
                <Input
                  id="lastName"
                  name="lastName" // Ensure name attribute
                  value={formData.lastName || ""}
                  onChange={handleInputChange}
                  placeholder="Doe"
                  required
                  className={cn(
                    getFieldError("lastName") ? "border-red-400 focus:ring-red-500" : "border-input focus:ring-primary",
                  )}
                  aria-invalid={!!getFieldError("lastName")}
                />
                {getFieldError("lastName") && <p className="text-xs text-red-600 mt-1">{getFieldError("lastName")}</p>}
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="phone-input">
                {" "}
                {/* Changed ID to avoid conflict if PhoneInput uses 'phone' internally */}
                Phone Number<span className="text-red-500">*</span>
              </Label>
              <PhoneInput
                value={formData.phone || ""}
                onChange={handlePhoneChange}
                error={!!getFieldError("phone")} // Pass error state to PhoneInput
                required
                placeholder="(555) 555-5555"
              />
              {/* PhoneInput might display its own errors, or you can add one here */}
              {getFieldError("phone") && <p className="text-xs text-red-600 mt-1">{getFieldError("phone")}</p>}
              {!getFieldError("phone") && (
                <p className="text-xs text-muted-foreground mt-1">We'll call to arrange your friendly consultation</p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="email">
                Email Address<span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                name="email" // Ensure name attribute
                type="email"
                value={formData.email || ""}
                onChange={handleInputChange}
                placeholder="john@example.com"
                required
                className={cn(
                  getFieldError("email") ? "border-red-400 focus:ring-red-500" : "border-input focus:ring-primary",
                )}
                aria-invalid={!!getFieldError("email")}
              />
              {getFieldError("email") && <p className="text-xs text-red-600 mt-1">{getFieldError("email")}</p>}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="address">
                Full Address<span className="text-red-500">*</span>
              </Label>
              <Input
                id="address"
                name="address" // Ensure name attribute
                value={formData.address || ""}
                onChange={handleInputChange}
                placeholder="123 Main St, Anytown, CA 12345"
                required
                className={cn(
                  getFieldError("address") ? "border-red-400 focus:ring-red-500" : "border-input focus:ring-primary",
                )}
                aria-invalid={!!getFieldError("address")}
              />
              {getFieldError("address") ? (
                <p className="text-xs text-red-600 mt-1">{getFieldError("address")}</p>
              ) : (
                <p className="text-xs text-muted-foreground mt-1">
                  Where your personalized consultation will take place
                </p>
              )}
            </div>

            {/* Zip code is now a hidden input, so no visual error display needed here unless desired */}
            {/*
          <div className="space-y-1.5">
            <Label htmlFor="zipCode">
              Zip Code<span className="text-red-500">*</span>
            </Label>
            <Input
              id="zipCode"
              name="zipCode" // Ensure name attribute
              value={formData.zipCode || ""}
              onChange={handleInputChange} // Should be readOnly, so onChange might not be needed
              placeholder="90210"
              required
              className={cn(getFieldError('zipCode') ? "border-red-400" : "border-input", "bg-muted cursor-not-allowed")}
              readOnly
              aria-invalid={!!getFieldError('zipCode')}
            />
            {getFieldError('zipCode') && <p className="text-xs text-red-600 mt-1">{getFieldError('zipCode')}</p>}
            {!getFieldError('zipCode') && (
              <p className="text-xs text-muted-foreground mt-1">Your California zip code (auto-filled)</p>
            )}
          </div>
          */}

            <div className="space-y-1.5">
              <Label htmlFor="bestTimeToContact">
                Best Time to Call<span className="text-red-500">*</span>
              </Label>
              <Select
                name="bestTimeToContact" // Ensure name attribute
                value={formData.bestTimeToContact}
                onValueChange={(value) => handleSelectChange("bestTimeToContact", value)}
              >
                <SelectTrigger
                  id="bestTimeToContact"
                  className={cn(
                    getFieldError("bestTimeToContact")
                      ? "border-red-400 focus:ring-red-500"
                      : "border-input focus:ring-primary",
                  )}
                >
                  <SelectValue placeholder="Select a time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Morning (8am-12pm)</SelectItem>
                  <SelectItem value="afternoon">Afternoon (12pm-5pm)</SelectItem>
                  <SelectItem value="evening">Evening (5pm-8pm)</SelectItem>
                  <SelectItem value="weekend">Weekends Only</SelectItem>
                </SelectContent>
              </Select>
              {getFieldError("bestTimeToContact") && (
                <p className="text-xs text-red-600 mt-1">{getFieldError("bestTimeToContact")}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="financingInterest">
                Financing Interest<span className="text-red-500">*</span>
              </Label>
              <Select
                name="financingInterest" // Ensure name attribute
                value={formData.financingInterest}
                onValueChange={(value) => handleSelectChange("financingInterest", value)}
              >
                <SelectTrigger
                  id="financingInterest"
                  className={cn(
                    getFieldError("financingInterest")
                      ? "border-red-400 focus:ring-red-500"
                      : "border-input focus:ring-primary",
                  )}
                >
                  <SelectValue placeholder="Are you interested in financing options?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="very-interested">Very Interested - I need financing</SelectItem>
                  <SelectItem value="somewhat-interested">Somewhat Interested - Tell me more</SelectItem>
                  <SelectItem value="cash-ready">I have cash ready</SelectItem>
                  <SelectItem value="not-sure">Not sure yet</SelectItem>
                  <SelectItem value="not-interested">Not interested in financing</SelectItem>
                </SelectContent>
              </Select>
              {getFieldError("financingInterest") ? (
                <p className="text-xs text-red-600 mt-1">{getFieldError("financingInterest")}</p>
              ) : (
                <p className="text-xs text-muted-foreground mt-1">
                  We offer flexible financing options with competitive rates
                </p>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between px-4 py-4 sm:px-6 sm:py-5 flex-wrap gap-3 bg-muted border-t">
          <Button
            type="button" // Important: Set to "button" to prevent form submission
            variant="outline"
            onClick={onPrevStep}
            className="h-11 px-5 sm:h-12 sm:px-6 text-sm sm:text-base"
            disabled={isSubmitting} // Use isPending from useActionState
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          {/* Remove the `isOffline` message as Formspree requires online submission */}
          <Button
            type="submit" // This is the actual submit button for the form
            disabled={isSubmitting}
            className="h-11 px-5 sm:h-12 sm:px-6 text-sm sm:text-base flex-1 sm:flex-none bg-primary hover:bg-amber-600 text-primary-foreground"
          >
            {isSubmitting ? (
              <span className="flex items-center">
                Submitting{" "}
                <span className="ml-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>
              </span>
            ) : (
              "Get My Cash Reward"
            )}
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}
