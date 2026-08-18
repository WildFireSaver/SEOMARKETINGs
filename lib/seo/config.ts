import type { Metadata } from "next"

export const SITE = {
  name: "Consult & Build CA",
  shortName: "Consult & Build CA",
  legalName: "Consult & Build CA",
  url: "https://consultbuildca.com",
  email: "info@consultbuildca.com",
  phone: "+1-000-000-0000",
  description:
    "Consult & Build CA connects Southern California homeowners with licensed, pre-screened landscaping and hardscaping crews. Paver patios, retaining walls, outdoor kitchens, pools, artificial turf, drainage, and full backyard design.",
  ogImage: "/projects/landscape-hero.png",
  logo: "/icon-light-32x32.png",
  areaServed: "Southern California",
  sameAs: [
    "https://www.facebook.com/profile.php?id=61576999892516",
    "https://www.instagram.com/consultbuild/",
  ],
  founded: "2019",
} as const

/** Build an absolute URL from a path. */
export function absoluteUrl(path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`
  return `${SITE.url}${clean === "/" ? "" : clean}`
}

type BuildMetaArgs = {
  title: string
  description: string
  /** Path portion of the canonical, e.g. "/services/paver-patios". */
  path: string
  image?: string
  keywords?: string[]
  type?: "website" | "article"
  publishedTime?: string
  /** When true, allow indexing (default). Set false for utility/funnel pages. */
  index?: boolean
}

/**
 * Central metadata builder. Guarantees a self-referencing canonical,
 * OpenGraph, Twitter, and robots directives on every page.
 */
export function buildMetadata({
  title,
  description,
  path,
  image = SITE.ogImage,
  keywords,
  type = "website",
  publishedTime,
  index = true,
}: BuildMetaArgs): Metadata {
  const canonical = absoluteUrl(path)
  const fullTitle = title.includes(SITE.name) ? title : `${title} | ${SITE.name}`

  return {
    // `absolute` bypasses the root layout's title template so the brand
    // name is not appended twice.
    title: { absolute: fullTitle },
    description,
    keywords,
    alternates: { canonical },
    robots: index
      ? {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        }
      : { index: false, follow: true },
    openGraph: {
      type,
      url: canonical,
      title: fullTitle,
      description,
      siteName: SITE.name,
      locale: "en_US",
      images: [{ url: absoluteUrl(image), width: 1200, height: 630, alt: title }],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl(image)],
    },
  }
}
