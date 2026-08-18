export type Faq = { question: string; answer: string }

export function FaqList({ faqs, heading = "Frequently asked questions" }: { faqs: Faq[]; heading?: string }) {
  if (!faqs.length) return null
  return (
    <section className="my-12">
      <h2 className="mb-6 text-2xl font-bold text-slate-900 sm:text-3xl text-balance">{heading}</h2>
      <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
        {faqs.map((faq) => (
          <details key={faq.question} className="group px-5 py-4 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-slate-900">
              {faq.question}
              <span className="text-primary transition-transform group-open:rotate-45" aria-hidden="true">
                +
              </span>
            </summary>
            <p className="mt-3 leading-relaxed text-slate-600 text-pretty">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
