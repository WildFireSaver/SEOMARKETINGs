import Link from "next/link"
import { ArrowRight, PhoneCall } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SeoCta({
  heading = "Ready to start your project?",
  subheading = "Get matched with licensed, pre-screened Southern California crews. Free estimates, no obligation.",
}: {
  heading?: string
  subheading?: string
}) {
  return (
    <section className="mx-auto my-14 max-w-6xl rounded-2xl bg-slate-900 px-6 py-10 text-center sm:px-10">
      <h2 className="text-2xl font-bold text-white sm:text-3xl text-balance">{heading}</h2>
      <p className="mx-auto mt-3 max-w-2xl text-slate-300 text-pretty">{subheading}</p>
      <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
          <Link href="/survey">
            Get a Free Estimate
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="border-slate-600 bg-transparent text-white hover:bg-slate-800 hover:text-white"
        >
          <Link href="/contact">
            <PhoneCall className="mr-2 h-4 w-4" />
            Contact Us
          </Link>
        </Button>
      </div>
    </section>
  )
}
