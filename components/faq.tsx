"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { LazySection } from "./lazy-section"

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "Is the $50 cash offer really legitimate?",
    answer:
      "Yes, it's 100% legitimate. Qualified homeowners receive $50 in cash immediately after completing the 45-minute consultation. This is not a discount, credit, or gift card - it's real cash handed to you on the spot.",
  },
  {
    question: "Why are you giving away $50?",
    answer:
      "We value your time and insights. The $50 is our way of thanking you for allowing our specialists to provide a consultation. It helps us connect with homeowners who might benefit from our services while providing you with valuable professional advice about your home.",
  },
  {
    question: "Do I have to sign a contract or make a purchase?",
    answer:
      "Absolutely not. There is no obligation to sign anything or make any purchases. The $50 cash is yours to keep regardless of whether you decide to use our services in the future.",
  },
  {
    question: "What happens during the consultation?",
    answer:
      "During the 45-minute consultation, our specialist will assess your home improvement needs, provide professional recommendations, and answer any questions you might have. It's informative, pressure-free, and designed to give you valuable insights about your potential project.",
  },
  {
    question: "How do I know if I qualify?",
    answer:
      "Not all homes qualify for our program. We're looking for specific types of properties and projects. The best way to find out is to complete our quick qualification form. We'll review your information and contact you promptly to confirm your qualification status.",
  },
  {
    question: "How soon will I receive the $50?",
    answer:
      "You'll receive the $50 cash immediately after completing the 45-minute consultation. Our specialist will hand it to you directly - no waiting, no paperwork, no hassle.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We currently serve major metropolitan areas across California. During the qualification process, we'll confirm if your location is within our service area.",
  },
  {
    question: "How is my personal information protected?",
    answer:
      "We take your privacy seriously. All personal information is encrypted and securely stored. We never sell your information to third parties. You can review our complete Privacy Policy for more details on how we protect your data.",
  },
]

export function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>(["item-0"])

  const toggleItem = (value: string) => {
    setOpenItems((prev) => (prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]))
  }

  return (
    <section className="py-12 bg-white">
      <div className="container px-4 md:px-6">
        <LazySection animationDirection="up" delay={100}>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-gray-800">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get answers to common questions about our $100 cash offer and consultation process.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="multiple" value={openItems} className="border rounded-lg overflow-hidden shadow-sm">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b last:border-0">
                  <AccordionTrigger
                    onClick={() => toggleItem(`item-${index}`)}
                    className="px-6 py-4 text-left hover:bg-amber-50 transition-colors text-gray-700 font-medium"
                  >
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0 bg-amber-50/30">
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-10 text-center">
            <p className="text-muted-foreground">
              Still have questions? Contact us at{" "}
              <a href="tel:1-800-555-1234" className="text-primary hover:text-amber-600 font-medium hover:underline">
                1-800-555-1234
              </a>{" "}
              or email{" "}
              <a
                href="mailto:info@consultbuildca.com"
                className="text-primary hover:text-amber-600 font-medium hover:underline"
              >
                info@consultbuildca.com
              </a>
            </p>
          </div>
        </LazySection>
      </div>
    </section>
  )
}
