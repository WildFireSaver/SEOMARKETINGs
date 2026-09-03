import { Star, Quote } from "lucide-react"

const REVIEWS = [
  {
    name: "Michael R.",
    location: "San Diego, CA",
    project: "Paver patio & fire pit",
    quote:
      "The crew they matched us with built a stunning paver patio with a built-in fire pit and finished right on schedule. We use it every weekend now.",
  },
  {
    name: "Sarah C.",
    location: "Los Angeles, CA",
    project: "Turf conversion & planting",
    quote:
      "Our water bill dropped and the yard finally looks finished. The quote was itemized, the timeline was honest, and nobody pressured us.",
  },
  {
    name: "David & Priya M.",
    location: "Riverside, CA",
    project: "Retaining wall & outdoor kitchen",
    quote:
      "We had three quotes before this and none of them explained the drainage. Their crew did, fixed it properly, and the wall looks incredible.",
  },
]

export function HomeownerReviews() {
  return (
    <section className="bg-slate-50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="flex items-center justify-center gap-1" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-gold text-gold" aria-hidden="true" />
            ))}
          </div>
          <h2 className="font-display mt-4 text-balance text-3xl font-semibold text-slate-900 lg:text-4xl">
            Backyards our homeowners are proud of
          </h2>
          <p className="mt-3 text-lg text-slate-600">Real projects, real California homeowners.</p>
        </div>

        <ul className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <li key={r.name} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <Quote className="h-7 w-7 text-gold" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-slate-700">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <footer className="mt-6 border-t border-slate-100 pt-4">
                <p className="font-semibold text-slate-900">{r.name}</p>
                <p className="text-sm text-slate-500">
                  {r.project} &middot; {r.location}
                </p>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
