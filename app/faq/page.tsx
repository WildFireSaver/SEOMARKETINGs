import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo/config"
import { JsonLd, breadcrumbSchema, faqSchema } from "@/components/seo/json-ld"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { FaqList, type Faq } from "@/components/seo/faq-list"
import { SeoCta } from "@/components/seo/seo-cta"

export const metadata: Metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about our California landscaping and hardscaping matching service: how contractors are vetted, what consultations cost, project timelines, permits, and warranties.",
  path: "/faq",
  keywords: ["landscaping faq california", "hardscaping questions", "backyard renovation faq"],
})

const crumbs = [
  { name: "Home", path: "/" },
  { name: "FAQ", path: "/faq" },
]

const faqs: Faq[] = [
  {
    question: "Is the consultation really free?",
    answer:
      "Yes. Sharing your project details and receiving a matched estimate costs nothing and carries no obligation to hire. You only pay the contractor you choose, under the terms of the quote you approve.",
  },
  {
    question: "How do you vet the crews in your network?",
    answer:
      "Every contractor must hold an active California State License Board (CSLB) license and carry current liability insurance. We verify license status and review workmanship history before adding a crew to the network, and we re-check licensing before making a match.",
  },
  {
    question: "How much does a typical outdoor project cost?",
    answer:
      "It depends heavily on scope and materials. A modest paver patio often lands in the low five figures, while a full backyard renovation with a pool, outdoor kitchen, and hardscape can run substantially more. Your itemized quote breaks out labor, materials, and site preparation so you can see exactly where the money goes.",
  },
  {
    question: "Do I need a permit for my project?",
    answer:
      "Many hardscaping projects do. Retaining walls above a certain height, pools, gas and electrical runs for outdoor kitchens, and significant grading typically require permits in California municipalities. Your matched crew handles the permitting process and folds it into the project schedule.",
  },
  {
    question: "How long does a project take?",
    answer:
      "A straightforward paver patio or turf installation often finishes within one to two weeks. Larger builds involving pools, structural walls, or utility work generally run four to twelve weeks depending on permitting and inspections.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "We focus on Southern California, including Los Angeles, San Diego, Long Beach, Riverside, Anaheim, Irvine, Santa Ana, and Pasadena, plus the surrounding communities in those metro areas.",
  },
  {
    question: "What happens after I submit my project details?",
    answer:
      "We review your answers and match you with a licensed crew that works in your city and specializes in your project type. A specialist contacts you within 24 to 48 hours to discuss scope and schedule your free consultation.",
  },
  {
    question: "Is the work warrantied?",
    answer:
      "Warranty terms are set by the contractor you hire and appear in your written quote. Reputable hardscaping crews typically warranty workmanship for one or more years, separate from any manufacturer warranty on pavers, turf, or equipment.",
  },
  {
    question: "Can I use my own design or plans?",
    answer:
      "Absolutely. If you already have drawings, renderings, or a materials list, share them and we will match you with a crew experienced in building to spec. If you do not, our network includes designers who can develop a plan with you.",
  },
  {
    question: "What if I am not ready to build yet?",
    answer:
      "That is fine. Many homeowners request an estimate months before they break ground so they can budget accurately. There is no pressure and no deadline attached to your consultation.",
  },
]

export default function FaqPage() {
  return (
    <main className="bg-background">
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(faqs)]} />

      <div className="container mx-auto max-w-4xl px-4 py-10">
        <Breadcrumbs items={crumbs} />

        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-balance">
          Frequently asked questions
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-600 text-pretty">
          Everything homeowners ask us about licensing, pricing, permits, and timelines for landscaping and hardscaping
          projects in Southern California.
        </p>

        <FaqList faqs={faqs} heading="Questions and answers" />

        <SeoCta
          heading="Still have a question?"
          subheading="Tell us about your project and a licensed local specialist will walk you through the details."
        />
      </div>
    </main>
  )
}
