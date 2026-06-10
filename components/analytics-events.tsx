"use client"

// Safe analytics tracking with error handling
const safeTrack = (eventName: string, properties: Record<string, any>) => {
  try {
    // Only track if we're in the browser and analytics is available
    if (typeof window !== "undefined") {
      // Try to import and use Vercel Analytics
      import("@vercel/analytics")
        .then(({ track }) => {
          track(eventName, properties)
        })
        .catch(() => {
          // Silently fail if analytics is not available
          console.debug(`Analytics event: ${eventName}`, properties)
        })
    }
  } catch (error) {
    // Silently fail
    console.debug(`Analytics event: ${eventName}`, properties)
  }
}

// Custom analytics tracking functions for your lead generation funnel
export const trackZipCodeSubmission = (zipCode: string, isValid: boolean) => {
  safeTrack("zip_code_submitted", {
    zipCode: zipCode.substring(0, 3) + "XX", // Anonymize last 2 digits for privacy
    isValid,
    step: "zip_verification",
  })
}

export const trackFormStepCompletion = (step: string, stepNumber: number) => {
  safeTrack("form_step_completed", {
    step,
    stepNumber,
    funnel: "lead_generation",
  })
}

export const trackFormSubmission = (projectType: string, timelineAndBudget: string) => {
  safeTrack("form_submitted", {
    projectType,
    timelineAndBudget,
    funnel: "lead_generation",
  })
}

export const trackCTAClick = (ctaLocation: string, ctaText: string) => {
  safeTrack("cta_clicked", {
    location: ctaLocation,
    text: ctaText,
  })
}

export const trackTestimonialInteraction = (action: string, testimonialId?: number) => {
  safeTrack("testimonial_interaction", {
    action, // 'view', 'click', 'expand'
    testimonialId,
  })
}

export const trackAvailabilityViewed = (spotsRemaining: number) => {
  safeTrack("availability_viewed", {
    spotsRemaining,
  })
}

export const trackPhoneValidation = (isValid: boolean, attempts: number) => {
  safeTrack("phone_validation", {
    isValid,
    attempts,
  })
}

export const trackPageView = (page: string, step?: number) => {
  safeTrack("page_view", {
    page,
    step,
    funnel: "lead_generation",
  })
}

export const trackFormAbandonment = (step: string, timeSpent: number) => {
  safeTrack("form_abandonment", {
    step,
    timeSpent, // in seconds
    funnel: "lead_generation",
  })
}

export const trackErrorOccurred = (errorType: string, errorMessage: string, context: string) => {
  safeTrack("error_occurred", {
    errorType,
    errorMessage: errorMessage.substring(0, 100), // Limit message length
    context,
  })
}
