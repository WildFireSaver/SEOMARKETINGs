import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ErrorBoundary } from "@/components/error-boundary"
import { ThemeProvider } from "@/components/theme-provider"
import { SpeedInsightsClient } from "@/components/speed-insights-client"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Consult & Build CA – Professional California Contractor Network",
  description:
    "Connect with licensed, pre-screened contractors in California. Professional consultations for home-improvement projects with quality assurance and expert matching.",
  openGraph: { title: "Consult & Build CA" },
  twitter: { card: "summary_large_image", title: "Consult & Build CA" },
    generator: 'v0.app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <ErrorBoundary>
            <div className="text-black">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </ErrorBoundary>

          {/* 👉 now loads only in the browser */}
          <SpeedInsightsClient />
        </ThemeProvider>
      </body>
    </html>
  )
}
