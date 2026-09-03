import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SERVICES } from "@/lib/seo/services"

export function ServicesShowcase() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 flex max-w-6xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">What we build</p>
            <h2 className="font-display mt-2 text-balance text-3xl font-semibold text-slate-900 lg:text-4xl">
              Everything your outdoor space needs, under one roof
            </h2>
            <p className="mt-3 text-pretty text-lg text-slate-600">
              From the hardscape that anchors your yard to the lighting that finishes it, our licensed crews handle
              every layer of the build.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            View all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative flex min-h-[280px] flex-col justify-end overflow-hidden rounded-2xl border border-slate-200 shadow-sm transition-shadow hover:shadow-xl"
            >
              <img
                src={service.image || "/placeholder.svg"}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/10" />
              <div className="relative p-6">
                <h3 className="text-xl font-semibold text-white">{service.shortName}</h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-200">{service.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold">
                  Explore
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
