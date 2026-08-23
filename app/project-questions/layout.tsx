import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Your Project Details | Consult & Build CA",
  robots: { index: false, follow: false },
}

export default function ProjectQuestionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
