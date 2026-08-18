import type { MetadataRoute } from "next"
import { SITE, absoluteUrl } from "@/lib/seo/config"
import { SERVICES } from "@/lib/seo/services"
import { LOCATIONS } from "@/lib/seo/locations"
import { GUIDES } from "@/lib/seo/guides"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // Public, main-nav pages
  const core: MetadataRoute.Sitemap = [
    { url: SITE.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/contact"), lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: absoluteUrl("/about"), lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: absoluteUrl("/faq"), lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ]

  // Hidden hub landing pages (not in nav, but indexed)
  const hubs: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/services"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/locations"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/guides"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ]

  const services: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: absoluteUrl(`/services/${s.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }))

  const locations: MetadataRoute.Sitemap = LOCATIONS.map((l) => ({
    url: absoluteUrl(`/locations/${l.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  const guides: MetadataRoute.Sitemap = GUIDES.map((g) => ({
    url: absoluteUrl(`/guides/${g.slug}`),
    lastModified: new Date(g.dateModified ?? g.datePublished),
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  return [...core, ...hubs, ...services, ...locations, ...guides]
}
