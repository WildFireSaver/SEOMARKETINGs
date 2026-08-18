import type { MetadataRoute } from "next"
import { SITE, absoluteUrl } from "@/lib/seo/config"

export const dynamic = "force-static"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Keep funnel/utility routes out of the index; they hold no SEO value.
        disallow: ["/survey", "/project-questions", "/contact-form", "/api/"],
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: SITE.url,
  }
}
