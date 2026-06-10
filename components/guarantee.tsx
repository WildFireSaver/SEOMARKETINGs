import { LazySection } from "./lazy-section"
import { ShieldCheck, DollarSign, Clock, ThumbsUp } from "lucide-react"

export function Guarantee() {
  return (
    <section className="py-12 bg-blue-600 text-white">
      <div className="container px-4 md:px-6">
        <LazySection animationDirection="up" delay={100}>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Triple Guarantee</h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              We stand behind our promises with these ironclad guarantees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <DollarSign className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">$50 Cash Guarantee</h3>
              <p className="text-blue-100">
                We guarantee that qualified homeowners will receive $50 cash immediately after the consultation. No
                waiting, no gimmicks, no strings attached.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">45-Minute Time Guarantee</h3>
              <p className="text-blue-100">
                We respect your time. Our consultation will never exceed 45 minutes unless you request more time. We'll
                even pay you $1 for every minute we go over.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <ThumbsUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">No-Pressure Guarantee</h3>
              <p className="text-blue-100">
                We guarantee a pressure-free experience. Our specialists are strictly prohibited from using
                high-pressure sales tactics. Your comfort is our priority.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-medium">
              <ShieldCheck className="h-5 w-5" />
              <span>All guarantees are backed by our written promise</span>
            </div>
          </div>
        </LazySection>
      </div>
    </section>
  )
}
