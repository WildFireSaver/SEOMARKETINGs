"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { LazySection } from "./lazy-section"

const faqItems = [
  {
    question: "Is the cash offer really legitimate?",
    answer:
      "Yes! Qualified California homeowners can receive up to $100 cash for completing a friendly, no-obligation consultation (minimum 45 minutes) with one of our specialists. The exact amount depends on a few qualification factors, but it's a real cash thank you for your time.",
  },
  {
    question: "How do you match me with a specialist?",
    answer:
      "We carefully select a specialist based on your specific project needs, home type, and preferences. This personalized approach ensures you get the most valuable insights during your consultation.",
  },
  {
    question: "Do I have to sign a contract or make a purchase?",
    answer:
      "Not at all! There is no obligation to sign anything or make any purchases. The cash reward is yours to keep regardless of whether you decide to use our services. We believe in building relationships through honest conversations.",
  },
]

export function SimpleFAQ() {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container px-4">
        <LazySection animationDirection="up" delay={100}>
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Common Questions</h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible className="border rounded-lg overflow-hidden shadow-sm">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b last:border-0">
                  <AccordionTrigger className="px-4 py-3 text-left hover:bg-amber-50 transition-colors text-gray-700 font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-3 pt-0 bg-amber-50/30">
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </LazySection>
      </div>
    </section>
  )
}
