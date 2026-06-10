import { LazySection } from "./lazy-section"
import { ShieldCheck, Award, Users, Clock, DollarSignIcon } from "lucide-react" // Updated icons

export function TrustBadges() {
  const badges = [
    {
      icon: ShieldCheck,
      title: "Licensed & Insured",
      description: "Peace of mind with certified pros.",
      bgColor: "bg-amber-100",
      textColor: "text-amber-700",
      iconColor: "text-amber-600",
    },
    {
      icon: Award,
      title: "A+ BBB Rating",
      description: "Top-rated, trusted service.",
      bgColor: "bg-amber-100",
      textColor: "text-amber-700",
      iconColor: "text-amber-600",
    },
    {
      icon: Users,
      title: "Family-Friendly Experts",
      description: "We treat your home like ours.",
      bgColor: "bg-amber-100",
      textColor: "text-amber-700",
      iconColor: "text-amber-600",
    },
    {
      icon: Clock,
      title: "15+ Years Experience",
      description: "Deep industry knowledge.",
      bgColor: "bg-amber-100",
      textColor: "text-amber-700",
      iconColor: "text-amber-600",
    },
    {
      icon: DollarSignIcon,
      title: "Real $100 Cash Offer",
      description: "Genuine thank you for your time.",
      bgColor: "bg-amber-100",
      textColor: "text-amber-700",
      iconColor: "text-amber-600",
    },
  ]

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container px-4 md:px-6">
        <LazySection animationDirection="up" delay={100}>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Homeowners Trust Us</h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to quality, transparency, and your complete satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 rounded-lg hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div
                  className={`flex-shrink-0 h-14 w-14 rounded-full ${badge.bgColor} flex items-center justify-center mb-4`}
                >
                  <badge.icon className={`h-7 w-7 ${badge.iconColor}`} aria-hidden="true" />
                </div>
                <h3 className={`text-lg font-semibold ${badge.textColor}`}>{badge.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{badge.description}</p>
              </div>
            ))}
          </div>
        </LazySection>
      </div>
    </section>
  )
}
