"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Phone, CheckCircle, AlertCircle, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { isValidPhone as globalIsValidPhone } from "./form-validation"

interface PhoneInputProps {
  value: string // Expects raw digits, e.g., "5551234567"
  onChange: (rawValue: string) => void
  onBlur?: () => void
  error?: boolean // External error state
  required?: boolean
  className?: string
  placeholder?: string
}

// Refined helper to format raw digits to (XXX) XXX-XXXX
const formatDisplayPhoneNumber = (digits: string): string => {
  const cleaned = digits.replace(/\D/g, "") // Remove non-digits
  const len = cleaned.length

  if (len === 0) return ""
  if (len <= 3) return `(${cleaned}`
  if (len <= 6) return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`
  return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`
}

export function PhoneInput({
  value: rawValueFromProps,
  onChange,
  onBlur,
  error: externalError = false,
  required = false,
  className,
  placeholder = "(555) 555-5555",
}: PhoneInputProps) {
  const [displayValue, setDisplayValue] = useState(() => formatDisplayPhoneNumber(rawValueFromProps))
  const [isFocused, setIsFocused] = useState(false)
  const [hasBlurredOnce, setHasBlurredOnce] = useState(false)

  // Sync displayValue when rawValueFromProps changes from parent
  useEffect(() => {
    const newFormattedValue = formatDisplayPhoneNumber(rawValueFromProps)
    if (newFormattedValue !== displayValue) {
      setDisplayValue(newFormattedValue)
    }
  }, [rawValueFromProps, displayValue]) // Keep displayValue in deps to ensure re-render on internal changes

  const internalIsValid = globalIsValidPhone(rawValueFromProps)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value
    const newRawDigits = userInput.replace(/\D/g, "").slice(0, 10) // Always keep raw digits, max 10

    // Update internal display state immediately for smooth typing
    setDisplayValue(formatDisplayPhoneNumber(newRawDigits))

    // Notify parent with the raw digits
    if (rawValueFromProps !== newRawDigits) {
      onChange(newRawDigits)
    }
  }

  const handleFocus = () => setIsFocused(true)

  const handleInternalBlur = () => {
    setIsFocused(false)
    setHasBlurredOnce(true)
    // Ensure the display is correctly formatted based on the current raw value from props
    setDisplayValue(formatDisplayPhoneNumber(rawValueFromProps))
    if (onBlur) onBlur()
  }

  const showValidationIcon = hasBlurredOnce || rawValueFromProps.length > 0 || externalError
  const displayError = externalError || (hasBlurredOnce && rawValueFromProps.length > 0 && !internalIsValid && required)
  const displaySuccess = internalIsValid && rawValueFromProps.length === 10 && !displayError

  return (
    <div className="relative">
      <div className="relative">
        <Input
          type="tel"
          value={displayValue}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleInternalBlur}
          placeholder={placeholder}
          required={required}
          className={cn(
            "pl-10 pr-10 h-11 font-mono touch-target text-base",
            displayError
              ? "border-red-400 focus:border-red-500 ring-red-200 focus:ring-red-300"
              : displaySuccess
                ? "border-green-400 focus:border-green-500 ring-green-200 focus:ring-green-300"
                : "border-gray-300 focus:border-primary focus:ring-primary/30",
            className,
          )}
          aria-invalid={displayError ? "true" : "false"}
          inputMode="tel"
          autoComplete="tel"
          maxLength={14} // Max length for (XXX) XXX-XXXX
        />
        {/* Hidden input to send the raw value to the server action */}
        <input type="hidden" name="phone" value={rawValueFromProps} />
        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />

        {showValidationIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5">
            {displayError ? (
              <AlertCircle className="h-full w-full text-red-500" />
            ) : displaySuccess ? (
              <CheckCircle className="h-full w-full text-green-500" />
            ) : rawValueFromProps.length > 0 && rawValueFromProps.length < 10 && isFocused ? (
              <HelpCircle className="h-full w-full text-amber-500" />
            ) : null}
          </div>
        )}
      </div>
      {isFocused && rawValueFromProps.length < 10 && !displayError && (
        <p className="text-xs text-muted-foreground mt-1.5 ml-1">Enter a 10-digit U.S. phone number.</p>
      )}
      {displaySuccess && !displayError && (
        <p className="text-xs text-green-600 mt-1.5 ml-1">Phone number looks good!</p>
      )}
    </div>
  )
}
