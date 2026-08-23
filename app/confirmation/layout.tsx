import type { Metadata } from "next"

// Thank-you pages must never be indexed: they are thin content and, if they
// rank, users can land here without ever submitting the form.
export const metadata: Metadata = {
  title: "Request Received | Consult & Build CA",
  robots: { index: false, follow: false },
}

export default function ConfirmationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
