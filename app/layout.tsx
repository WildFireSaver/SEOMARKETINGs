import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ErrorBoundary } from "@/components/error-boundary"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Consult & Build CA – California Landscaping & Hardscaping",
  description:
    "Connect with licensed, pre-screened landscaping and hardscaping crews across California. Paver patios, retaining walls, outdoor kitchens, pools, turf, and complete backyard transformations, with free estimates.",
  openGraph: { title: "Consult & Build CA – California Landscaping & Hardscaping" },
  twitter: { card: "summary_large_image", title: "Consult & Build CA – California Landscaping & Hardscaping" },
    generator: 'v0.app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-background">
      <body className={inter.className}>
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
