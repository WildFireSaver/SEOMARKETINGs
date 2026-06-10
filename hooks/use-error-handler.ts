"use client"

import { useCallback } from "react"

// Simple error handling utilities without complex dependencies
export function useErrorHandler() {
  const handleError = useCallback((error: Error, context?: string) => {
    console.error(`Error${context ? ` in ${context}` : ""}:`, error)

    // Simple error reporting - just log to console
    if (process.env.NODE_ENV === "development") {
      console.error("Error details:", {
        message: error.message,
        stack: error.stack,
        context,
        timestamp: new Date().toISOString(),
      })
    }
  }, [])

  const handleAsyncError = useCallback(
    async (asyncFn: () => Promise<any>, context?: string) => {
      try {
        return await asyncFn()
      } catch (error) {
        handleError(error instanceof Error ? error : new Error(String(error)), context)
        throw error
      }
    },
    [handleError],
  )

  const safeExecute = useCallback(
    (fn: () => any, fallback?: any, context?: string) => {
      try {
        return fn()
      } catch (error) {
        handleError(error instanceof Error ? error : new Error(String(error)), context)
        return fallback
      }
    },
    [handleError],
  )

  return {
    handleError,
    handleAsyncError,
    safeExecute,
  }
}

// Simple form error handler
export function useFormErrorHandler() {
  const handleFormError = useCallback((formName: string, fieldName: string, error: string) => {
    console.error(`Form error in ${formName}.${fieldName}:`, error)
  }, [])

  const validateField = useCallback((value: any, rules: any[], fieldName: string, formName: string) => {
    for (const rule of rules) {
      if (!rule.validator(value)) {
        console.error(`Form error in ${formName}.${fieldName}:`, rule.message)
        return rule.message
      }
    }
    return null
  }, [])

  return {
    handleFormError,
    validateField,
  }
}

// Simple performance monitoring
export function usePerformanceMonitor() {
  const measurePerformance = useCallback((operationName: string, operation: () => any) => {
    const startTime = performance.now()
    try {
      const result = operation()
      const endTime = performance.now()
      console.log(`Performance: ${operationName} took ${endTime - startTime} milliseconds`)
      return result
    } catch (error) {
      const endTime = performance.now()
      console.error(`Performance: ${operationName} failed after ${endTime - startTime} milliseconds`, error)
      throw error
    }
  }, [])

  const measureAsyncPerformance = useCallback(async (operationName: string, operation: () => Promise<any>) => {
    const startTime = performance.now()
    try {
      const result = await operation()
      const endTime = performance.now()
      console.log(`Performance: ${operationName} took ${endTime - startTime} milliseconds`)
      return result
    } catch (error) {
      const endTime = performance.now()
      console.error(`Performance: ${operationName} failed after ${endTime - startTime} milliseconds`, error)
      throw error
    }
  }, [])

  return {
    measurePerformance,
    measureAsyncPerformance,
  }
}
