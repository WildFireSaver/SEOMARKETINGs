import type { MetadataRoute } from "next"
import { SITE, absoluteUrl } from "@/lib/seo/config"

export const dynamic = "force-static"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // The funnel routes (/survey, /project-questions, /contact-form,
        // /confirmation) are deliberately NOT disallowed here. They each send a
        // `noindex` header via their route layout, and Google has to be able to
        // crawl a page to see that directive — blocking them here would leave
        // the URLs eligible for indexing while hiding the noindex from Google.
        disallow: ["/api/"],
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: SITE.url,
  }
}
