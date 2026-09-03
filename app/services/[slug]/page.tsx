import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Check, CheckCircle2, ArrowRight, Calculator } from "lucide-react"
import { buildMetadata } from "@/lib/seo/config"
import { SERVICES, SERVICE_SLUGS, getService } from "@/lib/seo/services"
import { LOCATIONS } from "@/lib/seo/locations"
import { GUIDES } from "@/lib/seo/guides"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { FaqList } from "@/components/seo/faq-list"
import { SeoCta } from "@/components/seo/seo-cta"
import {
  JsonLd,
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from "@/components/seo/json-ld"

export const dynamicParams = false

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    image: service.image,
    keywords: service.keywords,
  })
}

function formatCost(low: number, high: number, unit: string) {
  const fmt = (n: number) => (n >= 1000 ? `$${n.toLocaleString()}` : `$${n}`)
  return `${fmt(low)} – ${fmt(high)} ${unit}`
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.shortName, path: `/services/${service.slug}` },
  ]

  const relatedServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3)
  const relatedGuides = GUIDES.filter((g) => g.relatedServiceSlugs.includes(service.slug)).slice(0, 3)

  return (
    <div className="bg-white">
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          serviceSchema({
            name: service.name,
            description: service.metaDescription,
            path: `/services/${service.slug}`,
            image: service.image,
          }),
          faqSchema(service.faqs),
        ]}
      />

      {/* Hero */}
      <div className="relative">
        <div className="relative h-[320px] w-full sm:h-[420px]">
          <Image
            src={service.image || "/placeholder.svg"}
            alt={`${service.name} project in Southern California`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/40 to-slate-900/10" />
        </div>
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-foreground/90">
              Southern California
            </p>
            <h1 className="max-w-3xl text-3xl font-bold text-white sm:text-4xl text-balance">{service.h1}</h1>
            <p className="mt-3 max-w-2xl text-lg text-slate-200 text-pretty">{service.tagline}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <Breadcrumbs items={crumbs} />

        <div className="grid gap-10 lg:grid-cols-3">
          {/* Main content */}
          <article className="lg:col-span-2">
            <div className="space-y-4">
              {service.intro.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-slate-700 text-pretty">
                  {p}
                </p>
              ))}
            </div>

            {/* Benefits */}
            <section className="mt-12">
              <h2 className="mb-6 text-2xl font-bold text-slate-900">Why homeowners choose this</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {service.benefits.map((b) => (
                  <div key={b.title} className="rounded-xl border border-slate-200 p-5">
                    <div className="mb-2 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold text-slate-900">{b.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-600 text-pretty">{b.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Process */}
            <section className="mt-12">
              <h2 className="mb-6 text-2xl font-bold text-slate-900">Our process</h2>
              <ol className="space-y-5">
                {service.process.map((step, i) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-slate-900">{step.title}</h3>
                      <p className="mt-1 text-slate-600 text-pretty">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* What's included */}
            <section className="mt-12">
              <h2 className="mb-6 text-2xl font-bold text-slate-900">What we install</h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-700">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <FaqList faqs={service.faqs} />
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-6">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Typical cost</h2>
                <p className="mt-2 text-2xl font-bold text-slate-900">
                  {formatCost(service.costLow, service.costHigh, service.costUnit)}
                </p>
                <p className="mt-3 text-sm text-slate-600">Cost depends on:</p>
                <ul className="mt-2 space-y-2">
                  {service.costFactors.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/survey"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-primary px-4 py-2.5 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Get a Free Estimate
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href={`/estimate?p=${service.slug}`}
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-100"
                >
                  <Calculator className="h-4 w-4 text-primary" />
                  Calculate your cost instantly
                </Link>
              </div>

              <div className="rounded-xl border border-slate-200 p-6">
                <h2 className="mb-3 font-semibold text-slate-900">Other services</h2>
                <ul className="space-y-2">
                  {relatedServices.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="inline-flex items-center text-sm text-slate-600 transition-colors hover:text-primary"
                      >
                        <ArrowRight className="mr-1.5 h-3.5 w-3.5" />
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>

        <SeoCta heading={`Ready for your ${service.shortName.toLowerCase()} project?`} />

        {/* Related guides */}
        {relatedGuides.length > 0 && (
          <section className="mb-10">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">Related guides</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedGuides.map((g) => (
                <Link
                  key={g.slug}
                  href={`/guides/${g.slug}`}
                  className="group rounded-xl border border-slate-200 p-5 transition-shadow hover:shadow-md"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">{g.category}</p>
                  <h3 className="mt-1 font-semibold text-slate-900 group-hover:text-primary">{g.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 text-pretty">{g.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Location links */}
        <section className="mb-6">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">{service.shortName} near you</h2>
          <div className="flex flex-wrap gap-2">
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700 transition-colors hover:border-primary hover:text-primary"
              >
                {loc.city}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
