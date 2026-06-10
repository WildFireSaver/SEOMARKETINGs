// Email validation regex
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Phone validation - accepts various formats
export const isValidPhone = (phone: string): boolean => {
  // Remove all non-digit characters
  const digitsOnly = phone.replace(/\D/g, "")

  // A more robust US phone number validation regex:
  // - Must be exactly 10 digits
  // - Area code (first 3 digits) cannot start with 0 or 1
  // - Exchange code (next 3 digits) cannot start with 0 or 1
  const phoneRegex = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/

  return digitsOnly.length === 10 && phoneRegex.test(digitsOnly)
}

// Name validation - at least 2 characters, letters, spaces, hyphens, and apostrophes only
export const isValidName = (name: string): boolean => {
  const nameRegex = /^[A-Za-z\s'-]{2,}$/
  return nameRegex.test(name.trim())
}

// Address validation - at least 5 characters with a number
export const isValidAddress = (address: string): boolean => {
  // Basic check for an address with a number and at least 5 characters
  return address.trim().length >= 5 && /\d/.test(address)
}
