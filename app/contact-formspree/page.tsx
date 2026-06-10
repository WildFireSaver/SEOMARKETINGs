import { FormspreeContactForm } from "@/components/formspree-contact-form"

export default function ContactFormspreePage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center py-12 px-4">
      <FormspreeContactForm />
      <p className="mt-8 text-sm text-muted-foreground">
        You are using{" "}
        <a
          href="https://formspree.io"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary hover:underline"
        >
          Formspree
        </a>{" "}
        for form submissions.
      </p>
    </div>
  )
}
