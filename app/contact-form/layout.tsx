import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Your Contact Details | Consult & Build CA",
  robots: { index: false, follow: false },
}

export default function ContactFormLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
