import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"
import { LOCATIONS } from "@/lib/seo/locations"
import { SERVICES } from "@/lib/seo/services"
import { buildMetadata } from "@/lib/seo/config"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd, breadcrumbSchema } from "@/components/seo/json-ld"
import { SeoCta } from "@/components/seo/seo-cta"

export const metadata = buildMetadata({
  title: "Landscaping & Hardscaping Service Areas in Southern California",
  description:
    "Consult & Build CA connects homeowners with licensed landscaping and hardscaping crews across Southern California, including Los Angeles, San Diego, Orange County, and the Inland Empire.",
  path: "/locations",
  keywords: [
    "southern california landscaping",
    "socal hardscaping",
    "landscaping service areas california",
    "paver patio contractors southern california",
  ],
})

export default function LocationsHubPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Service Areas", path: "/locations" },
  ]

  return (
    <main className="bg-background">
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <section className="border-b border-border bg-muted/40">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <Breadcrumbs items={crumbs} />
          <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary">
            <MapPin className="h-4 w-4" />
            Southern California
          </div>
          <h1 className="mt-3 text-4xl font-bold text-balance text-foreground lg:text-5xl">
            Landscaping &amp; hardscaping service areas across Southern California
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground text-pretty">
            We match homeowners with licensed, pre-screened landscaping and hardscaping crews throughout Southern
            California. Choose your city to see local design considerations, climate notes, and the neighborhoods we
            serve.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold text-foreground">Cities we serve</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LOCATIONS.map((loc) => (
            <Link
              key={loc.slug}
              href={`/locations/${loc.slug}`}
              className="group flex flex-col justify-between rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary"
            >
              <div>
                <h3 className="text-lg font-semibold text-card-foreground">{loc.city}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{loc.county}</p>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{loc.intro[0]}</p>
              </div>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Explore {loc.city}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-muted/40">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold text-foreground">Services available in every city</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Each of our service areas has access to the full range of landscaping and hardscaping work.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {SERVICES.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-card-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {svc.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SeoCta />
    </main>
  )
}
