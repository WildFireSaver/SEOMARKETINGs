import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Clock, Calendar, Check, ArrowRight } from "lucide-react"
import { GUIDES, getGuide } from "@/lib/seo/guides"
import { getService } from "@/lib/seo/services"
import { buildMetadata } from "@/lib/seo/config"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { FaqList } from "@/components/seo/faq-list"
import { SeoCta } from "@/components/seo/seo-cta"
import { JsonLd, breadcrumbSchema, faqSchema, articleSchema } from "@/components/seo/json-ld"

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const guide = getGuide(params.slug)
  if (!guide) return {}
  return buildMetadata({
    title: guide.metaTitle,
    description: guide.metaDescription,
    path: `/guides/${guide.slug}`,
    image: guide.image,
    keywords: guide.keywords,
    type: "article",
    publishedTime: guide.datePublished,
  })
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const guide = getGuide(params.slug)
  if (!guide) notFound()

  const path = `/guides/${guide.slug}`
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Guides", path: "/guides" },
    { name: guide.title, path },
  ]
  const relatedServices = guide.relatedServiceSlugs.map(getService).filter(Boolean)
  const moreGuides = GUIDES.filter((g) => g.slug !== guide.slug).slice(0, 3)

  return (
    <main className="bg-background">
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          faqSchema(guide.faqs),
          articleSchema({
            headline: guide.title,
            description: guide.metaDescription,
            path,
            image: guide.image,
            datePublished: guide.datePublished,
            dateModified: guide.dateModified,
          }),
        ]}
      />

      <article>
        <section className="border-b border-border bg-muted/40">
          <div className="mx-auto max-w-3xl px-4 py-12">
            <Breadcrumbs items={crumbs} />
            <span className="mt-6 inline-block text-xs font-medium uppercase tracking-wide text-primary">
              {guide.category}
            </span>
            <h1 className="mt-3 text-4xl font-bold text-balance leading-tight text-foreground">{guide.title}</h1>
            <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {guide.readMinutes} min read
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                Updated {formatDate(guide.dateModified ?? guide.datePublished)}
              </span>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-3xl px-4 py-12">
          <img
            src={guide.image || "/placeholder.svg"}
            alt={guide.title}
            className="mb-10 h-64 w-full rounded-xl object-cover lg:h-80"
          />

          <div className="space-y-4">
            {guide.intro.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-muted-foreground text-pretty">
                {p}
              </p>
            ))}
          </div>

          <div className="my-10 rounded-xl border border-border bg-card p-6">
            <h2 className="text-lg font-semibold text-card-foreground">Key takeaways</h2>
            <ul className="mt-4 space-y-3">
              {guide.keyTakeaways.map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {guide.sections.map((section) => (
            <section key={section.heading} className="mb-10">
              <h2 className="text-2xl font-bold text-foreground">{section.heading}</h2>
              <div className="mt-4 space-y-4">
                {section.body.map((p, i) => (
                  <p key={i} className="leading-relaxed text-muted-foreground text-pretty">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}

          <section className="mb-10">
            <FaqList faqs={guide.faqs} />
          </section>

          {relatedServices.length > 0 && (
            <section className="mb-4">
              <h2 className="text-2xl font-bold text-foreground">Related services</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {relatedServices.map((svc) => (
                  <Link
                    key={svc!.slug}
                    href={`/services/${svc!.slug}`}
                    className="group flex items-start justify-between gap-3 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary"
                  >
                    <div>
                      <h3 className="font-semibold text-card-foreground">{svc!.name}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{svc!.tagline}</p>
                    </div>
                    <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-primary transition-transform group-hover:translate-x-0.5" />
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>

      <section className="border-t border-border bg-muted/40">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold text-foreground">More guides</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {moreGuides.map((g) => (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}`}
                className="group rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary"
              >
                <span className="text-xs font-medium uppercase tracking-wide text-primary">{g.category}</span>
                <h3 className="mt-2 font-semibold leading-snug text-card-foreground">{g.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{g.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SeoCta />
    </main>
  )
}
