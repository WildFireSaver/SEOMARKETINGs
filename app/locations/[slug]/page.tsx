import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { MapPin, Check, ArrowRight, Building2 } from "lucide-react"
import { LOCATIONS, getLocation } from "@/lib/seo/locations"
import { SERVICES } from "@/lib/seo/services"
import { GUIDES } from "@/lib/seo/guides"
import { buildMetadata, absoluteUrl } from "@/lib/seo/config"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { FaqList } from "@/components/seo/faq-list"
import { SeoCta } from "@/components/seo/seo-cta"
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/components/seo/json-ld"

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const loc = getLocation(params.slug)
  if (!loc) return {}
  return buildMetadata({
    title: loc.metaTitle,
    description: loc.metaDescription,
    path: `/locations/${loc.slug}`,
    image: loc.image,
    keywords: loc.keywords,
  })
}

export default function LocationPage({ params }: { params: { slug: string } }) {
  const loc = getLocation(params.slug)
  if (!loc) notFound()

  const path = `/locations/${loc.slug}`
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Service Areas", path: "/locations" },
    { name: loc.city, path },
  ]
  const relatedGuides = GUIDES.slice(0, 3)

  return (
    <main className="bg-background">
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          faqSchema(loc.faqs),
          serviceSchema({
            name: `Landscaping & Hardscaping in ${loc.city}`,
            description: loc.metaDescription,
            path,
            image: loc.image,
            areaServed: `${loc.city}, CA`,
          }),
        ]}
      />

      <section className="border-b border-border bg-muted/40">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <Breadcrumbs items={crumbs} />
          <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary">
            <MapPin className="h-4 w-4" />
            {loc.county}
          </div>
          <h1 className="mt-3 text-4xl font-bold text-balance text-foreground lg:text-5xl">
            Landscaping &amp; Hardscaping in {loc.city}, CA
          </h1>
          <div className="mt-5 space-y-4">
            {loc.intro.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-muted-foreground text-pretty">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12">
        <img
          src={loc.image || "/placeholder.svg"}
          alt={`Landscaping and hardscaping projects in ${loc.city}, California`}
          className="mb-12 h-64 w-full rounded-xl object-cover lg:h-80"
        />

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground">{loc.city} climate &amp; design considerations</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">{loc.climate}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {loc.localNotes.map((note) => (
              <div key={note.title} className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold text-card-foreground">{note.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{note.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground">Neighborhoods we serve in {loc.city}</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {loc.neighborhoods.map((n) => (
              <li key={n} className="flex items-center gap-2 text-muted-foreground">
                <Check className="h-4 w-4 flex-shrink-0 text-primary" />
                {n}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground">Popular services in {loc.city}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {SERVICES.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className="group flex items-start justify-between gap-3 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary"
              >
                <div>
                  <h3 className="font-semibold text-card-foreground">{svc.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{svc.tagline}</p>
                </div>
                <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-primary transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <FaqList faqs={loc.faqs} heading={`${loc.city} landscaping FAQs`} />
        </section>

        <section className="mb-4">
          <h2 className="text-2xl font-bold text-foreground">Planning guides</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {relatedGuides.map((g) => (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}`}
                className="group rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary"
              >
                <span className="text-xs font-medium uppercase tracking-wide text-primary">{g.category}</span>
                <h3 className="mt-2 font-semibold leading-snug text-card-foreground">{g.title}</h3>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <SeoCta
        heading={`Ready to transform your ${loc.city} backyard?`}
        subheading={`Get matched with licensed, pre-screened landscaping and hardscaping crews serving ${loc.city} and ${loc.county}.`}
      />
    </main>
  )
}
