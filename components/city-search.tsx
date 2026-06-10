"use client"

import { useState, useRef, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MapPin, X, Search } from "lucide-react"
import { cn } from "@/lib/utils"

// Simplified California cities data directly in the component for reliability
const CALIFORNIA_CITIES = [
  { city: "Los Angeles", county: "Los Angeles", zipCodes: ["90001", "90002", "90003", "90012", "90024", "90210"] },
  { city: "San Francisco", county: "San Francisco", zipCodes: ["94102", "94103", "94104", "94105", "94107"] },
  { city: "San Diego", county: "San Diego", zipCodes: ["92101", "92102", "92103", "92104", "92105"] },
  { city: "Sacramento", county: "Sacramento", zipCodes: ["94203", "94204", "94205", "94206", "94207"] },
  { city: "Fresno", county: "Fresno", zipCodes: ["93650", "93701", "93702", "93703", "93704"] },
  { city: "San Jose", county: "Santa Clara", zipCodes: ["95110", "95111", "95112", "95113", "95116"] },
  { city: "Oakland", county: "Alameda", zipCodes: ["94601", "94602", "94603", "94604", "94605"] },
  { city: "Bakersfield", county: "Kern", zipCodes: ["93301", "93302", "93303", "93304", "93305"] },
  { city: "Anaheim", county: "Orange", zipCodes: ["92801", "92802", "92803", "92804", "92805"] },
  { city: "Santa Ana", county: "Orange", zipCodes: ["92701", "92702", "92703", "92704", "92705"] },
  { city: "Riverside", county: "Riverside", zipCodes: ["92501", "92502", "92503", "92504", "92505"] },
  { city: "Stockton", county: "San Joaquin", zipCodes: ["95201", "95202", "95203", "95204", "95205"] },
  { city: "Irvine", county: "Orange", zipCodes: ["92602", "92603", "92604", "92606", "92612"] },
  { city: "Chula Vista", county: "San Diego", zipCodes: ["91909", "91910", "91911", "91912", "91913"] },
  { city: "Fremont", county: "Alameda", zipCodes: ["94536", "94537", "94538", "94539", "94555"] },
  { city: "Santa Clara", county: "Santa Clara", zipCodes: ["95050", "95051", "95052", "95053", "95054"] },
  { city: "San Bernardino", county: "San Bernardino", zipCodes: ["92401", "92402", "92403", "92404", "92405"] },
  { city: "Modesto", county: "Stanislaus", zipCodes: ["95350", "95351", "95352", "95353", "95354"] },
  { city: "Fontana", county: "San Bernardino", zipCodes: ["92331", "92334", "92335", "92336", "92337"] },
  { city: "Oxnard", county: "Ventura", zipCodes: ["93030", "93031", "93032", "93033", "93034"] },
  { city: "Moreno Valley", county: "Riverside", zipCodes: ["92551", "92552", "92553", "92554", "92555"] },
  { city: "Huntington Beach", county: "Orange", zipCodes: ["92605", "92615", "92646", "92647", "92648"] },
  { city: "Glendale", county: "Los Angeles", zipCodes: ["91201", "91202", "91203", "91204", "91205"] },
  { city: "Santa Rosa", county: "Sonoma", zipCodes: ["95401", "95402", "95403", "95404", "95405"] },
  { city: "Oceanside", county: "San Diego", zipCodes: ["92049", "92051", "92052", "92054", "92055"] },
  { city: "Garden Grove", county: "Orange", zipCodes: ["92840", "92841", "92842", "92843", "92844"] },
  { city: "Rancho Cucamonga", county: "San Bernardino", zipCodes: ["91701", "91729", "91730", "91737", "91739"] },
  { city: "Santa Clarita", county: "Los Angeles", zipCodes: ["91310", "91321", "91322", "91350", "91351"] },
  { city: "Ontario", county: "San Bernardino", zipCodes: ["91758", "91761", "91762", "91764"] },
  { city: "Elk Grove", county: "Sacramento", zipCodes: ["95624", "95757", "95758", "95759"] },
]

interface CitySearchProps {
  onSelectZipCode: (zipCode: string) => void
  className?: string
}

export function CitySearch({ onSelectZipCode, className }: CitySearchProps) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<typeof CALIFORNIA_CITIES>([])
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCity, setSelectedCity] = useState<(typeof CALIFORNIA_CITIES)[0] | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const resultsRef = useRef<HTMLDivElement>(null)

  // Simple search function
  const searchCities = (searchQuery: string) => {
    if (!searchQuery || searchQuery.length < 2) return []

    const normalizedQuery = searchQuery.toLowerCase().trim()

    return CALIFORNIA_CITIES.filter(
      (city) =>
        city.city.toLowerCase().includes(normalizedQuery) || city.county.toLowerCase().includes(normalizedQuery),
    ).slice(0, 10) // Limit to 10 results for performance
  }

  // Search for cities when query changes
  useEffect(() => {
    if (query.length >= 2) {
      const searchResults = searchCities(query)
      console.log("Search results:", searchResults.length) // Debug log
      setResults(searchResults)
      setIsOpen(searchResults.length > 0)
    } else {
      setResults([])
      setIsOpen(false)
    }
  }, [query])

  // Handle clicking outside to close results
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        resultsRef.current &&
        !resultsRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleSelectCity = (city: (typeof CALIFORNIA_CITIES)[0]) => {
    console.log("Selected city:", city.city) // Debug log
    setSelectedCity(city)
    setQuery(city.city)
    setIsOpen(false)
  }

  const handleSelectZipCode = (zipCode: string) => {
    console.log("Selected zip code:", zipCode) // Debug log
    onSelectZipCode(zipCode)
  }

  const clearSearch = () => {
    setQuery("")
    setSelectedCity(null)
    setResults([])
    setIsOpen(false)
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div className={cn("relative", className)}>
      <div className="relative">
        <Input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your city name"
          className="pl-10 pr-10 h-12"
          onFocus={() => {
            if (query.length >= 2 && results.length > 0) {
              setIsOpen(true)
            }
          }}
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />

        {query && (
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 hover:text-gray-600"
            onClick={clearSearch}
            aria-label="Clear search"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Search results dropdown */}
      {isOpen && results.length > 0 && (
        <div
          ref={resultsRef}
          className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg border border-gray-200 max-h-60 overflow-y-auto"
        >
          <ul className="py-1">
            {results.map((city, index) => (
              <li
                key={`${city.city}-${city.county}-${index}`}
                className="px-4 py-3 hover:bg-blue-50 cursor-pointer flex items-center gap-2"
                onClick={() => handleSelectCity(city)}
              >
                <MapPin className="h-4 w-4 text-blue-600 flex-shrink-0" />
                <div>
                  <div className="font-medium">{city.city}</div>
                  <div className="text-xs text-gray-500">{city.county} County</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* No results message */}
      {query.length >= 2 && isOpen && results.length === 0 && (
        <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg border border-gray-200 p-4 text-center">
          <p className="text-gray-500">No cities found. Try a different search.</p>
        </div>
      )}

      {/* Selected city zip codes */}
      {selectedCity && (
        <div className="mt-4 border rounded-md p-4 bg-blue-50">
          <div className="flex justify-between items-center mb-3">
            <div className="font-medium flex items-center gap-2">
              <MapPin className="h-4 w-4 text-blue-600" />
              <span>
                {selectedCity.city}, {selectedCity.county} County
              </span>
            </div>
            <Button variant="ghost" size="sm" onClick={clearSearch} className="h-8 px-2">
              <X className="h-4 w-4 mr-1" /> Clear
            </Button>
          </div>

          <p className="text-sm mb-3">Select your zip code:</p>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
            {selectedCity.zipCodes.map((zipCode) => (
              <Button
                key={zipCode}
                variant="outline"
                size="sm"
                className="text-center hover:bg-blue-100 hover:border-blue-300"
                onClick={() => handleSelectZipCode(zipCode)}
              >
                {zipCode}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
