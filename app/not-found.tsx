import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Compass, Hammer, MapPin, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SERVICES } from "@/lib/seo/services"
import { LOCATIONS } from "@/lib/seo/locations"
import { GUIDES } from "@/lib/seo/guides"

export const metadata: Metadata = {
  title: { absolute: "Page Not Found | Consult & Build CA" },
  description:
    "We couldn't find that page. Explore Consult & Build CA's landscaping and hardscaping services, Southern California service areas, and homeowner guides.",
  robots: { index: false, follow: true },
}

const popularServices = SERVICES.slice(0, 6)
const popularLocations = LOCATIONS.slice(0, 6)
const popularGuides = GUIDES.slice(0, 4)

export default function NotFound() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
          <Compass className="h-3.5 w-3.5 text-primary" />
          Error 404
        </span>
        <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground text-balance sm:text-5xl">
          This page took a detour
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
          The page you were looking for has moved or never existed. Let&apos;s get you back on track, or start your free
          project estimate below.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/survey">
              Get a free estimate
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/">Back to homepage</Link>
          </Button>
        </div>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        <section aria-labelledby="nf-services">
          <div className="mb-4 flex items-center gap-2">
            <Hammer className="h-5 w-5 text-primary" />
            <h2 id="nf-services" className="text-lg font-semibold text-foreground">
              Popular services
            </h2>
          </div>
          <ul className="space-y-2">
            {popularServices.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="text-sm font-medium text-primary hover:underline">
                View all services
              </Link>
            </li>
          </ul>
        </section>

        <section aria-labelledby="nf-locations">
          <div className="mb-4 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            <h2 id="nf-locations" className="text-lg font-semibold text-foreground">
              Service areas
            </h2>
          </div>
          <ul className="space-y-2">
            {popularLocations.map((l) => (
              <li key={l.slug}>
                <Link
                  href={`/locations/${l.slug}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.city}, CA
                </Link>
              </li>
            ))}
            <li>
              <Link href="/locations" className="text-sm font-medium text-primary hover:underline">
                View all service areas
              </Link>
            </li>
          </ul>
        </section>

        <section aria-labelledby="nf-guides">
          <div className="mb-4 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <h2 id="nf-guides" className="text-lg font-semibold text-foreground">
              Helpful guides
            </h2>
          </div>
          <ul className="space-y-2">
            {popularGuides.map((g) => (
              <li key={g.slug}>
                <Link
                  href={`/guides/${g.slug}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {g.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/guides" className="text-sm font-medium text-primary hover:underline">
                View all guides
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  )
}
