const FORM_DATA_KEY = "homeRenoLandingPageSession_v2" // Changed key to ensure fresh start

// Saves the entire session state object
export function saveSessionData(sessionState: any) {
  try {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(FORM_DATA_KEY, JSON.stringify(sessionState))
    } else {
      console.warn("localStorage is not available. Session data not saved.")
    }
  } catch (error) {
    console.error("Error saving session data to localStorage:", error)
  }
}

// Retrieves the entire session state object
export function getSessionData(): any | null {
  try {
    if (typeof localStorage !== "undefined") {
      const data = localStorage.getItem(FORM_DATA_KEY)
      return data ? JSON.parse(data) : null
    }
    console.warn("localStorage is not available. Cannot retrieve session data.")
    return null
  } catch (error) {
    console.error("Error getting session data from localStorage:", error)
    return null
  }
}

export function clearSessionData() {
  try {
    if (typeof localStorage !== "undefined") {
      localStorage.removeItem(FORM_DATA_KEY)
    } else {
      console.warn("localStorage is not available. Session data not cleared.")
    }
  } catch (error) {
    console.error("Error clearing session data from localStorage:", error)
  }
}
