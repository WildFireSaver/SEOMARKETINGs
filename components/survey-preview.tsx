"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Building, CheckSquare, Shield, Edit3, Clock } from "lucide-react"
import { useRouter } from "next/navigation"

const previewQuestions = [
  {
    icon: CheckSquare,
    label: "Property type",
    options: ["Single-family", "Condo / townhouse", "Multi-family"],
  },
  {
    icon: Building,
    label: "Project category",
    options: ["Roofing", "Kitchen", "Bathroom", "Solar", "Landscaping"],
  },
  {
    icon: Shield,
    label: "Property age",
    options: ["0-5 years", "6-15 years", "16-30 years", "Over 30 years"],
  },
  {
    icon: Edit3,
    label: "Renovation history",
    options: ["Original condition", "Partial remodel", "Full remodel"],
  },
]

export function SurveyPreview() {
  const router = useRouter()

  return (
    <section className="bg-slate-50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: copy */}
          <div className="max-w-lg">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 text-balance">
              A quick assessment, built around your home
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed text-pretty mb-6">
              Answer a few simple questions about your property and the work you have in mind. It takes about two
              minutes, and there is no cost or obligation to get matched with a specialist.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-slate-700">
                <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Takes about 2 minutes to complete</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <Shield className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Your information stays private and is never sold</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <CheckSquare className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Matches you with a licensed local specialist</span>
              </li>
            </ul>
            <Button
              onClick={() => router.push("/survey")}
              size="lg"
              className="bg-primary hover:bg-orange-600 text-primary-foreground px-7 font-semibold"
            >
              Start the assessment
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Right: survey preview card */}
          <div className="rounded-2xl border border-slate-200 bg-white shadow-lg overflow-hidden">
            <div className="bg-slate-900 px-6 py-5">
              <div className="flex items-center gap-3">
                <Building className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-base font-semibold text-white">Property &amp; Project Assessment</p>
                  <p className="text-sm text-slate-300">Consultation qualification form</p>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-6">
              {previewQuestions.map((question) => (
                <div key={question.label}>
                  <div className="flex items-center gap-2 mb-3">
                    <question.icon className="h-4 w-4 text-primary" />
                    <span className="text-sm font-semibold text-slate-900">{question.label}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {question.options.map((option) => (
                      <span
                        key={option}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-600"
                      >
                        {option}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
