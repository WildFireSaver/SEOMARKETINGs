import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ShieldCheck, Users, MapPin, ClipboardList } from "lucide-react"
import { buildMetadata } from "@/lib/seo/config"
import { JsonLd, breadcrumbSchema } from "@/components/seo/json-ld"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { SeoCta } from "@/components/seo/seo-cta"

export const metadata: Metadata = buildMetadata({
  title: "About Consult & Build CA",
  description:
    "Consult & Build CA connects Southern California homeowners with licensed, pre-screened landscaping and hardscaping crews. Learn how we vet contractors and how our matching process works.",
  path: "/about",
  keywords: ["about consult and build ca", "california landscaping company", "licensed hardscaping contractors"],
})

const crumbs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
]

const values = [
  {
    icon: ShieldCheck,
    title: "Licensed and verified",
    body: "Every crew in our network holds an active California CSLB license and carries liability insurance. We re-check license status before we make a match.",
  },
  {
    icon: ClipboardList,
    title: "Clear, itemized quotes",
    body: "You see the scope, materials, and price in writing before any work begins. No vague estimates and no surprise change orders halfway through the build.",
  },
  {
    icon: MapPin,
    title: "Local to your city",
    body: "We match you with crews who actually work in your area and understand local permitting, soil conditions, and HOA requirements.",
  },
  {
    icon: Users,
    title: "No-pressure process",
    body: "Share your project, review your estimate, and decide in your own time. Consultations are free and carry no obligation to hire.",
  },
]

export default function AboutPage() {
  return (
    <main className="bg-background">
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <div className="container mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={crumbs} />

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-balance">
              Building better outdoor spaces across Southern California
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600 text-pretty">
              Consult &amp; Build CA exists because finding a trustworthy landscaping or hardscaping contractor is
              harder than it should be. Homeowners tell us the same story: unreturned calls, quotes that change without
              warning, and crews that disappear mid-project.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600 text-pretty">
              We fixed that by doing the vetting ourselves. We maintain a network of licensed, insured outdoor
              specialists across Los Angeles, Orange County, San Diego, and the Inland Empire, then match each homeowner
              to the crew best suited to their project, budget, and timeline.
            </p>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/projects/landscape-hero.png"
              alt="A completed Southern California backyard with a paver patio and drought-tolerant landscaping"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl text-balance">How we work</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl border border-slate-200 bg-white p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                  <v.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{v.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600 text-pretty">{v.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900 text-balance">What we build</h2>
          <p className="mt-3 leading-relaxed text-slate-600 text-pretty">
            Our network covers the full range of outdoor construction: paver patios and driveways, retaining walls,
            outdoor kitchens and fire features, pools and water features, artificial turf, drainage and grading,
            planting design, and landscape lighting.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/services"
              className="rounded-lg bg-primary px-4 py-2 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Browse all services
            </Link>
            <Link
              href="/locations"
              className="rounded-lg border border-slate-300 px-4 py-2 font-medium text-slate-700 transition-colors hover:border-primary hover:text-primary"
            >
              See service areas
            </Link>
          </div>
        </section>

        <SeoCta
          heading="Tell us about your project"
          subheading="Answer a few quick questions and we'll match you with a licensed local crew for a free consultation."
        />
      </div>
    </main>
  )
}
