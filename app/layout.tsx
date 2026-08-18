import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ErrorBoundary } from "@/components/error-boundary"
import { SITE } from "@/lib/seo/config"
import { JsonLd, organizationSchema, websiteSchema } from "@/components/seo/json-ld"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Consult & Build CA – Southern California Landscaping & Hardscaping",
    template: "%s | Consult & Build CA",
  },
  description:
    "Connect with licensed, pre-screened landscaping and hardscaping crews across Southern California. Paver patios, retaining walls, outdoor kitchens, pools, turf, and complete backyard transformations, with free estimates.",
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: "Consult & Build CA – Southern California Landscaping & Hardscaping",
    description:
      "Licensed landscaping and hardscaping crews across Southern California. Patios, walls, outdoor kitchens, pools, turf, and full backyard design.",
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: "Consult & Build CA landscaping project" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Consult & Build CA – Southern California Landscaping & Hardscaping",
    description: "Licensed landscaping and hardscaping crews across Southern California.",
    images: [SITE.ogImage],
  },
  generator: "v0.app",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-background">
      <body className={inter.className}>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <ErrorBoundary>
          <div className="text-black">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ErrorBoundary>
      </body>
    </html>
  )
}
