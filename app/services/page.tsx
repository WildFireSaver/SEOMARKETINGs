import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { buildMetadata } from "@/lib/seo/config"
import { SERVICES } from "@/lib/seo/services"
import { LOCATIONS } from "@/lib/seo/locations"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { SeoCta } from "@/components/seo/seo-cta"
import { JsonLd, breadcrumbSchema } from "@/components/seo/json-ld"

export const metadata: Metadata = buildMetadata({
  title: "Landscaping & Hardscaping Services in Southern California",
  description:
    "Explore our Southern California landscaping and hardscaping services: paver patios, retaining walls, outdoor kitchens, pools, artificial turf, planting, lighting, and drainage.",
  path: "/services",
  keywords: [
    "landscaping services southern california",
    "hardscaping services",
    "paver patio installation",
    "retaining wall contractors",
    "outdoor kitchen builders",
  ],
})

export default function ServicesHubPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ]

  return (
    <div className="bg-white">
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: SERVICES.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `https://consultbuildca.com/services/${s.slug}`,
              name: s.name,
            })),
          },
        ]}
      />
      <div className="container mx-auto px-4 py-10">
        <Breadcrumbs items={crumbs} />

        <header className="mb-10 max-w-3xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">Our Services</p>
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl text-balance">
            Landscaping &amp; Hardscaping Services in Southern California
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600 text-pretty">
            From custom paver patios and engineered retaining walls to outdoor kitchens, pools, artificial turf, and
            full landscape design, our licensed, pre-screened crews handle every part of your outdoor project. Explore
            each service below.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={`${service.name} in Southern California`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h2 className="text-lg font-semibold text-slate-900">{service.name}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 text-pretty">{service.tagline}</p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-primary">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <SeoCta />

        <section className="mb-6">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Areas we serve</h2>
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
