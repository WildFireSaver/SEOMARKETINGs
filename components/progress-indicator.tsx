"use client" // Ensure this is a client component

import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation" // Import usePathname

interface ProgressIndicatorProps {
  steps: Array<{ id: number | string; label: string; path: string }> // Added path to step definition
  className?: string
}

export function ProgressIndicator({ steps, className }: ProgressIndicatorProps) {
  const pathname = usePathname()
  const currentStepIndex = steps.findIndex((step) => step.path === pathname)
  const progressPercentage = steps.length > 0 ? ((currentStepIndex + 1) / steps.length) * 100 : 0

  return (
    <div className={cn("mb-8", className)}>
      <div className="flex justify-between mb-1">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={cn(
              "text-xs text-center flex-1",
              index === currentStepIndex ? "text-primary font-semibold" : "text-muted-foreground",
            )}
          >
            {step.label}
          </div>
        ))}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-primary h-2.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      {/* Optional: Display current step text if needed, though labels above might suffice */}
      {/* <p className="text-center text-sm text-muted-foreground mt-2">
        Step {currentStepIndex + 1} of {steps.length}: {steps[currentStepIndex]?.label}
      </p> */}
    </div>
  )
}
