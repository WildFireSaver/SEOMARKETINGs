import Image from "next/image"
import { LazySection } from "./lazy-section"
import { Building, Users, Calendar, MapPin, Phone, Mail } from "lucide-react"

export function CompanyInfo() {
  return (
    <section className="py-10 md:py-12">
      <div className="container px-4 md:px-6">
        <LazySection animationDirection="up" delay={100}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">About Consult & Build CA</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Consult & Build CA is dedicated to connecting California homeowners with expert advice, quality
                craftsmanship, and transparent communication. We strive to make every home improvement project a
                success.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-5 w-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <Building className="h-3 w-3 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Licensed & Certified</h3>
                    <p className="text-sm text-muted-foreground">
                      Fully licensed, bonded, and insured in all states we operate
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-5 w-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <Users className="h-3 w-3 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Expert Team</h3>
                    <p className="text-sm text-muted-foreground">
                      Our specialists have an average of 12+ years of industry experience
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-5 w-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-3 w-3 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Established 2008</h3>
                    <p className="text-sm text-muted-foreground">15+ years of serving homeowners across the country</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm">123 Renovation Ave, Suite 100, Phoenix, AZ 85001</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href="tel:1-800-555-1234" className="text-sm hover:underline">
                    1-800-555-1234
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <a href="mailto:info@consultbuildca.com" className="text-sm hover:underline">
                    info@consultbuildca.com
                  </a>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] relative rounded-md overflow-hidden shadow-md">
                <Image
                  src="/company-office.png"
                  alt="HomeReno Experts Office"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-md shadow-md border flex items-center gap-4 max-w-xs">
                <div className="flex -space-x-4">
                  <Image
                    src="/team/specialist-1.png"
                    alt="Team member"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-white"
                  />
                  <Image
                    src="/team/specialist-2.png"
                    alt="Team member"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-white"
                  />
                  <Image
                    src="/team/specialist-3.png"
                    alt="Team member"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-white"
                  />
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-amber-100 text-amber-700 text-xs font-medium">
                    +45
                  </div>
                </div>
                <div>
                  <p className="font-medium text-sm">Our Expert Team</p>
                  <p className="text-xs text-muted-foreground">Certified specialists ready to help</p>
                </div>
              </div>
            </div>
          </div>
        </LazySection>
      </div>
    </section>
  )
}
