import { LazySection } from "./lazy-section"
import { Shield, CheckCircle, DollarSign, MapPin, Award, Building, Users, TrendingUp } from "lucide-react"

export function TrustElements() {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4">
        <LazySection animationDirection="up" delay={100}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Professional Credentials & Service Excellence</h2>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto">
              Licensed contractors delivering superior results across all construction disciplines
            </p>
          </div>

          {/* Professional credentials */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-lg border border-slate-200">
              <div className="h-16 w-16 rounded-lg bg-blue-600 flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <p className="font-semibold text-slate-900">Licensed & Bonded</p>
              <p className="text-xs text-slate-600 mt-1">State certified professionals</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-lg border border-slate-200">
              <div className="h-16 w-16 rounded-lg bg-green-600 flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <p className="font-semibold text-slate-900">15+ Years Experience</p>
              <p className="text-xs text-slate-600 mt-1">Proven industry expertise</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-lg border border-slate-200">
              <div className="h-16 w-16 rounded-lg bg-amber-600 flex items-center justify-center mb-4">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <p className="font-semibold text-slate-900">Consultation Fee</p>
              <p className="text-xs text-slate-600 mt-1">Up to $100 compensation</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-lg border border-slate-200">
              <div className="h-16 w-16 rounded-lg bg-purple-600 flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <p className="font-semibold text-slate-900">Statewide Coverage</p>
              <p className="text-xs text-slate-600 mt-1">All California regions</p>
            </div>
          </div>

          {/* Service categories */}
          <div className="bg-slate-50 rounded-lg p-8 border border-slate-200 mb-8">
            <h3 className="text-2xl font-semibold text-center text-slate-900 mb-8">Construction Specializations</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Solar Panel Installation",
                "Kitchen Remodeling",
                "Bathroom Renovation",
                "Roofing Services",
                "HVAC Systems",
                "Electrical Work",
                "Flooring Installation",
                "Windows & Doors",
                "Home Additions",
                "Exterior Renovation",
                "Plumbing Services",
                "Landscaping & Hardscaping",
              ].map((service, index) => (
                <div
                  key={index}
                  className="flex items-center p-3 rounded-lg bg-white border border-slate-200 hover:border-blue-300 transition-colors"
                >
                  <CheckCircle className="h-4 w-4 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-sm font-medium text-slate-700">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Professional guarantee */}
          <div className="bg-blue-50 rounded-lg border border-blue-200 p-8">
            <div className="flex items-start gap-4 mb-4">
              <Building className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-xl text-blue-900 mb-3">Professional Service Commitment</p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Our network of licensed California contractors maintains the highest standards of professional
                  service. Each consultation includes comprehensive project assessment, detailed cost analysis, and
                  transparent timeline planning. The consultation fee (up to $100) reflects our commitment to
                  compensating property owners for their time and consideration.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-medium text-slate-700">Licensed Professionals</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-medium text-slate-700">Proven ROI Results</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-medium text-slate-700">Comprehensive Insurance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-slate-100 rounded-lg border border-slate-300 p-6">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-slate-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-lg text-slate-900 mb-2">California Property Verification</p>
                <p className="text-slate-700">
                  Property location verification ensures compliance with local building codes and regulations. Our
                  contractors are familiar with California-specific requirements, permit processes, and environmental
                  considerations for optimal project outcomes.
                </p>
              </div>
            </div>
          </div>
        </LazySection>
      </div>
    </section>
  )
}
