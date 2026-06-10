"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Input } from "@/components/ui/input"
import { MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

interface AddressInputProps {
  value: string
  onChange: (value: string) => void
  required?: boolean
  error?: boolean
  className?: string
  placeholder?: string
}

export function AddressInput({
  value,
  onChange,
  required = false,
  error = false,
  className,
  placeholder = "123 Main St, Anytown, CA 12345",
}: AddressInputProps) {
  const [inputValue, setInputValue] = useState(value)
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const suggestionsRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Common address suffixes to help with suggestions
  const addressSuffixes = [
    "St",
    "Street",
    "Ave",
    "Avenue",
    "Blvd",
    "Boulevard",
    "Dr",
    "Drive",
    "Ln",
    "Lane",
    "Rd",
    "Road",
    "Pl",
    "Place",
    "Ct",
    "Court",
    "Cir",
    "Circle",
    "Way",
    "Terrace",
    "Ter",
  ]

  // Common city formats
  const cityFormats = [
    ", [City], [State] [ZIP]",
    ", [City], [ST] [ZIP]",
    ", [City] [State] [ZIP]",
    ", [City] [ST] [ZIP]",
  ]

  // Generate suggestions based on input
  const generateSuggestions = (input: string) => {
    if (input.length < 3) return []

    // Extract number and street name if possible
    const match = input.match(/^(\d+)\s+([A-Za-z\s]+)/)
    if (!match) return []

    const [_, number, streetName] = match
    const trimmedStreet = streetName.trim()

    // Generate suggestions with different street suffixes
    const newSuggestions: string[] = []

    // If the street name already has a suffix, don't add more
    if (
      !addressSuffixes.some((suffix) => trimmedStreet.endsWith(` ${suffix}`) || trimmedStreet.endsWith(` ${suffix}.`))
    ) {
      // Add street suffix suggestions
      addressSuffixes.forEach((suffix) => {
        newSuggestions.push(`${number} ${trimmedStreet} ${suffix}`)
      })
    } else {
      // Keep the existing format but add city formats
      newSuggestions.push(`${number} ${trimmedStreet}`)
    }

    // Add city and state format suggestions for the first few suggestions
    const expandedSuggestions: string[] = []
    newSuggestions.slice(0, 3).forEach((suggestion) => {
      cityFormats.forEach((format) => {
        expandedSuggestions.push(`${suggestion}${format}`)
      })
    })

    return [...newSuggestions, ...expandedSuggestions].slice(0, 5)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setInputValue(newValue)

    if (newValue.length >= 3) {
      const newSuggestions = generateSuggestions(newValue)
      setSuggestions(newSuggestions)
      setShowSuggestions(newSuggestions.length > 0)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }

  const handleSelectSuggestion = (suggestion: string) => {
    setInputValue(suggestion)
    onChange(suggestion)
    setShowSuggestions(false)
  }

  const handleBlur = () => {
    // Use a timeout to allow click events on suggestions to fire first
    setTimeout(() => {
      if (inputValue !== value) {
        onChange(inputValue)
      }
      setShowSuggestions(false)
    }, 200)
  }

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Update input value when prop value changes
  useEffect(() => {
    if (value !== inputValue) {
      setInputValue(value)
    }
  }, [value])

  return (
    <div className="relative">
      <div className="relative">
        <Input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          required={required}
          className={cn("pl-10 touch-target", error ? "border-red-200" : "", className)}
          aria-label="Address"
          autoComplete="street-address"
        />
        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div
          ref={suggestionsRef}
          className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg border border-gray-200 max-h-60 overflow-y-auto"
        >
          <ul className="py-1">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="px-4 py-3 hover:bg-blue-50 cursor-pointer text-sm touch-target tap-highlight"
                onClick={() => handleSelectSuggestion(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
