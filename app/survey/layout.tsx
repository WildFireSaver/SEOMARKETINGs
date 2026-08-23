import type { Metadata } from "next"

// The page itself is a client component and cannot export metadata, so the
// noindex directive lives here. Funnel steps hold no unique content worth
// ranking, and indexing them would surface half-finished forms in search.
export const metadata: Metadata = {
  title: "Start Your Project | Consult & Build CA",
  robots: { index: false, follow: false },
}

export default function SurveyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
