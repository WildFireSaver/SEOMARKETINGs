import Link from "next/link"
import { BookOpen, Clock, ArrowRight } from "lucide-react"
import { GUIDES } from "@/lib/seo/guides"
import { buildMetadata } from "@/lib/seo/config"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd, breadcrumbSchema } from "@/components/seo/json-ld"
import { SeoCta } from "@/components/seo/seo-cta"

export const metadata = buildMetadata({
  title: "Landscaping & Hardscaping Guides for California Homeowners",
  description:
    "Expert guides on paver patios, retaining walls, artificial turf, outdoor kitchens, and drought-tolerant design in California, including real 2026 costs and planning advice.",
  path: "/guides",
  keywords: [
    "landscaping guides california",
    "hardscaping cost guide",
    "paver patio cost",
    "backyard planning guide",
    "drought tolerant landscaping tips",
  ],
})

export default function GuidesHubPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Guides", path: "/guides" },
  ]
  const categories = Array.from(new Set(GUIDES.map((g) => g.category)))

  return (
    <main className="bg-background">
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <section className="border-b border-border bg-muted/40">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <Breadcrumbs items={crumbs} />
          <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary">
            <BookOpen className="h-4 w-4" />
            Resource Library
          </div>
          <h1 className="mt-3 text-4xl font-bold text-balance text-foreground lg:text-5xl">
            Landscaping &amp; hardscaping guides for California homeowners
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Real costs, material comparisons, and planning advice from licensed Southern California landscaping and
            hardscaping crews. Everything you need to plan your project with confidence.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        {categories.map((cat) => (
          <div key={cat} className="mb-14 last:mb-0">
            <h2 className="mb-6 text-2xl font-bold text-foreground">{cat}</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {GUIDES.filter((g) => g.category === cat).map((g) => (
                <Link
                  key={g.slug}
                  href={`/guides/${g.slug}`}
                  className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary"
                >
                  <img
                    src={g.image || "/placeholder.svg"}
                    alt={g.title}
                    className="h-44 w-full object-cover"
                  />
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      {g.readMinutes} min read
                    </div>
                    <h3 className="mt-2 font-semibold leading-snug text-card-foreground">{g.title}</h3>
                    <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {g.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Read guide
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      <SeoCta />
    </main>
  )
}
