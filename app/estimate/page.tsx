import type { Metadata } from "next"
import Link from "next/link"
import { Calculator, Clock, ShieldCheck, Sparkles } from "lucide-react"
import { SITE, absoluteUrl, buildMetadata } from "@/lib/seo/config"
import { SERVICES } from "@/lib/seo/services"
import { JsonLd, breadcrumbSchema, faqSchema } from "@/components/seo/json-ld"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { FaqList, type Faq } from "@/components/seo/faq-list"
import { CostEstimator } from "@/components/estimator/cost-estimator"
import { PROJECTS, parseEstimateParams } from "@/lib/estimator/pricing"

export const metadata: Metadata = buildMetadata({
  title: "Free Backyard Cost Calculator - Paver Patio, Turf & Landscaping Prices in California",
  description:
    "Get an instant 2026 cost estimate for paver patios, artificial turf, retaining walls, outdoor kitchens and more. Adjust size, finish, and ZIP code to see real California prices, then lock in an exact quote.",
  path: "/estimate",
  keywords: [
    "landscaping cost calculator",
    "paver patio cost calculator california",
    "artificial turf cost calculator",
    "backyard renovation cost estimator",
    "hardscape cost estimator",
    "outdoor kitchen cost california",
    "retaining wall cost calculator",
  ],
})

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Cost Estimator", path: "/estimate" },
]

const faqs: Faq[] = [
  {
    question: "How accurate is this landscaping cost calculator?",
    answer:
      "The calculator uses 2026 installed-price ranges gathered from licensed California landscaping and hardscaping contractors, adjusted for your region's labor rates. It is designed as a planning range, typically within 15 to 20 percent of a real quote. Site access, soil conditions, demolition, and permits are the most common reasons a final quote lands outside the range.",
  },
  {
    question: "Why does my ZIP code change the estimate?",
    answer:
      "Labor and material costs vary meaningfully across California. Bay Area and Los Angeles projects tend to run 10 to 20 percent above the statewide average, while Inland Empire and Central Valley projects often come in below it. The estimator applies a regional multiplier based on your ZIP prefix.",
  },
  {
    question: "What is the difference between Good, Better, and Best?",
    answer:
      "Each finish level reflects a different band of materials and detail. Good covers standard materials and simple layouts, Better adds premium materials, borders, and upgraded fixtures, and Best reflects natural stone, custom patterns, pro-grade appliances, or architectural-level design.",
  },
  {
    question: "How much does a paver patio cost in California?",
    answer:
      "Most paver patios in California cost $15 to $40 per square foot installed. A typical 400 square foot patio runs roughly $6,000 to $16,000 depending on material, pattern complexity, and base preparation.",
  },
  {
    question: "How much does artificial turf cost installed?",
    answer:
      "Professionally installed artificial turf in California typically costs $8 to $20 per square foot, including removal of the old lawn, a compacted draining base, turf, seaming, and infill. Many water districts offer turf-replacement rebates that offset part of the cost.",
  },
  {
    question: "Is the exact quote really free?",
    answer:
      "Yes. When you lock in a quote, we match you with a licensed, insured crew in your area who visits, measures, and provides an itemized fixed price at no charge and with no obligation to hire.",
  },
]

function formatServiceCost(costLow: number, costHigh: number, unit: string) {
  const fmt = (n: number) =>
    n >= 1000 ? `$${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}k` : `$${n}`
  return `${fmt(costLow)} – ${fmt(costHigh)} ${unit}`
}

type SearchParams = Record<string, string | string[] | undefined>

export default async function EstimatePage({
  searchParams,
}: {
  // Plain object on Next 14, a Promise on Next 15+. `await` handles both.
  searchParams?: SearchParams | Promise<SearchParams>
}) {
  const params = (await searchParams) ?? {}
  const initial = parseEstimateParams(params)

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Backyard Cost Calculator",
    url: absoluteUrl("/estimate"),
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "Instant cost estimates for paver patios, artificial turf, retaining walls, outdoor kitchens, pools, landscape design, lighting, and drainage in California.",
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
  }

  return (
    <main className="bg-background">
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(faqs), appSchema]} />

      {/* Intro */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-background">
        <div className="container mx-auto max-w-6xl px-4 pb-10 pt-8">
          <Breadcrumbs items={crumbs} />
          <div className="mt-4 max-w-3xl">
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
              <Calculator className="h-4 w-4" />
              Free cost calculator
            </p>
            <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight text-slate-900 text-balance sm:text-5xl">
              What will your backyard project cost?
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600 text-pretty">
              Pick a project, drag the size, choose a finish, and enter your ZIP. You will see a real 2026 California
              price range in seconds, no email required.
            </p>
            <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                Takes about 30 seconds
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Based on licensed contractor pricing
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                Adjusted for your region
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Estimator */}
      <section className="container mx-auto max-w-6xl px-4 py-10 lg:py-14">
        <CostEstimator initial={initial} />
      </section>

      {/* SEO content: cost reference table */}
      <section className="border-t border-slate-200 bg-slate-50 py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="font-display text-3xl font-semibold text-slate-900 text-balance">
            2026 landscaping and hardscaping costs in California
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-slate-600">
            Typical installed price ranges our licensed crews quote across Southern California. Every project is
            different, but these are the numbers most homeowners should plan around.
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th scope="col" className="px-5 py-3 font-semibold">
                    Project
                  </th>
                  <th scope="col" className="px-5 py-3 font-semibold">
                    Typical cost
                  </th>
                  <th scope="col" className="hidden px-5 py-3 font-semibold sm:table-cell">
                    Biggest cost driver
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {SERVICES.map((s) => {
                  const inEstimator = PROJECTS.some((p) => p.slug === s.slug)
                  return (
                    <tr key={s.slug} className="hover:bg-slate-50">
                      <td className="px-5 py-4 font-medium text-slate-900">
                        <Link href={`/services/${s.slug}`} className="hover:text-primary hover:underline">
                          {s.shortName}
                        </Link>
                        {inEstimator && (
                          <Link
                            href={`/estimate?p=${s.slug}`}
                            className="ml-2 hidden text-xs font-semibold text-primary hover:underline md:inline"
                          >
                            Estimate
                          </Link>
                        )}
                      </td>
                      <td className="px-5 py-4 text-slate-700">{formatServiceCost(s.costLow, s.costHigh, s.costUnit)}</td>
                      <td className="hidden px-5 py-4 text-slate-600 sm:table-cell">{s.costFactors[0]}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-slate-500">
            Want the full breakdown? Read our{" "}
            <Link href="/guides" className="font-medium text-primary hover:underline">
              cost guides
            </Link>{" "}
            or browse{" "}
            <Link href="/services" className="font-medium text-primary hover:underline">
              all services
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto max-w-4xl px-4 py-4">
        <FaqList faqs={faqs} heading="Cost calculator questions" />
      </section>
    </main>
  )
}
