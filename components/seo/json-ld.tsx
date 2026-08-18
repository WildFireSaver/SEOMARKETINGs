import { SITE, absoluteUrl } from "@/lib/seo/config"

/**
 * Renders one or more JSON-LD structured data objects into a script tag.
 * Google reads these for rich results (breadcrumbs, FAQ, business info).
 */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  const json = Array.isArray(data) ? data : [data]
  return (
    <>
      {json.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          // Structured data is trusted, static content built server-side.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  )
}

/** The organization / local business identity, reused across pages. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: absoluteUrl(SITE.logo),
    image: absoluteUrl(SITE.ogImage),
    email: SITE.email,
    description: SITE.description,
    foundingDate: SITE.founded,
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Southern California",
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "CA",
      addressCountry: "US",
    },
    sameAs: SITE.sameAs,
    knowsAbout: [
      "Landscaping",
      "Hardscaping",
      "Paver patios",
      "Retaining walls",
      "Outdoor kitchens",
      "Artificial turf",
      "Drainage and grading",
    ],
  }
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    publisher: { "@id": `${SITE.url}/#organization` },
    inLanguage: "en-US",
  }
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  }
}

export function serviceSchema(args: {
  name: string
  description: string
  path: string
  image?: string
  areaServed?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: args.name,
    name: args.name,
    description: args.description,
    url: absoluteUrl(args.path),
    ...(args.image ? { image: absoluteUrl(args.image) } : {}),
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: {
      "@type": "AdministrativeArea",
      name: args.areaServed ?? "Southern California",
    },
  }
}

export function articleSchema(args: {
  headline: string
  description: string
  path: string
  image?: string
  datePublished: string
  dateModified?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: args.headline,
    description: args.description,
    url: absoluteUrl(args.path),
    ...(args.image ? { image: absoluteUrl(args.image) } : {}),
    datePublished: args.datePublished,
    dateModified: args.dateModified ?? args.datePublished,
    author: { "@id": `${SITE.url}/#organization` },
    publisher: { "@id": `${SITE.url}/#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(args.path) },
  }
}
