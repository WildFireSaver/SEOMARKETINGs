import { ShieldCheck, FileText, MapPin, HeartHandshake } from "lucide-react"

const REASONS = [
  {
    icon: ShieldCheck,
    title: "Licensed, insured, and verified",
    text: "Every crew in our network holds an active California contractor license and carries insurance. We check before you ever meet them.",
  },
  {
    icon: FileText,
    title: "Itemized quotes, no surprises",
    text: "You see materials, labor, and timeline broken out in writing before any work begins, so you can compare with confidence.",
  },
  {
    icon: MapPin,
    title: "Crews who know your soil and codes",
    text: "We match you with local specialists who understand your city's permitting, drainage, and climate, not a crew from three counties over.",
  },
  {
    icon: HeartHandshake,
    title: "One point of contact, start to finish",
    text: "From the first conversation to the final walkthrough, you have someone in your corner who keeps the project moving.",
  },
]

export function WhyUs() {
  return (
    <section className="bg-slate-950 py-16 text-white lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">Why homeowners choose us</p>
            <h2 className="font-display mt-2 text-balance text-3xl font-semibold lg:text-4xl">
              The easy way to hire the right crew
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-slate-300">
              Finding a trustworthy landscaper usually means hours of calls, no-shows, and quotes you can&apos;t compare.
              We do the vetting, you make the decision.
            </p>
          </div>

          <ul className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
            {REASONS.map((r) => (
              <li key={r.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <r.icon className="h-6 w-6 text-gold" aria-hidden="true" />
                <h3 className="mt-4 text-base font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{r.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
