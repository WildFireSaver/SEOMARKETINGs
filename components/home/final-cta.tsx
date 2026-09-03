import Link from "next/link"
import { ArrowRight, ShieldCheck, Clock, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden py-20 lg:py-28">
      <img
        src="/projects/outdoor-kitchen.png"
        alt=""
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-slate-950/80" />

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center text-white">
          <h2 className="font-display text-balance text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Ready to see what your yard could be?
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-slate-200">
            Answer a few quick questions and we&apos;ll match you with a licensed local crew and a free, itemized
            estimate. No cost, no obligation, no pressure.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="group bg-primary px-8 font-semibold text-primary-foreground shadow-lg shadow-primary/30 hover:bg-primary/90"
            >
              <Link href="/survey">
                Get My Free Estimate
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/20 hover:text-white"
            >
              <Link href="/services">Browse services</Link>
            </Button>
          </div>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-300">
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gold" aria-hidden="true" />
              About 2 minutes
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-gold" aria-hidden="true" />
              Licensed &amp; insured crews
            </li>
            <li className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-gold" aria-hidden="true" />
              Your info stays private
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
