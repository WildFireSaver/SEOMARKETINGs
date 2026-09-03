import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram } from "lucide-react"
import { SERVICES } from "@/lib/seo/services"
import { LOCATIONS } from "@/lib/seo/locations"

const linkClass = "text-slate-400 transition-colors hover:text-white"

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-14 text-base text-slate-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3" aria-label="Consult & Build CA - Home">
              <Image
                src="/consult-and-build-logo.png"
                alt=""
                width={48}
                height={48}
                className="h-12 w-12 shrink-0 rounded-full bg-white object-contain"
              />
              <span className="text-xl font-bold tracking-tight text-white">Consult &amp; Build CA</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Connecting California homeowners with licensed, pre-screened landscaping and hardscaping crews for
              patios, retaining walls, outdoor living, and complete backyard transformations.
            </p>
            <div className="mt-5 flex gap-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61576999892516"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={linkClass}
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://www.instagram.com/consultbuild/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={linkClass}
              >
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
            <ul className="flex flex-col gap-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className={linkClass}>
                    {s.shortName}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="font-medium text-slate-200 hover:text-white">
                  All services
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Service Areas</h3>
            <ul className="flex flex-col gap-2 text-sm">
              {LOCATIONS.map((l) => (
                <li key={l.slug}>
                  <Link href={`/locations/${l.slug}`} className={linkClass}>
                    {l.city}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/locations" className="font-medium text-slate-200 hover:text-white">
                  All locations
                </Link>
              </li>
            </ul>
          </div>

          {/* Company + Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link href="/about" className={linkClass}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/guides" className={linkClass}>
                  Cost Guides
                </Link>
              </li>
              <li>
                <Link href="/faq" className={linkClass}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className={linkClass}>
                  Contact
                </Link>
              </li>
            </ul>
            <h3 className="mb-4 mt-8 text-sm font-semibold uppercase tracking-wider text-white">Legal</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link href="/privacy-policy" className={linkClass}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className={linkClass}>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className={linkClass}>
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className={linkClass}>
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-slate-800 pt-8 text-center text-sm text-slate-500 sm:flex-row sm:text-left">
          <p>&copy; {new Date().getFullYear()} Consult &amp; Build CA. All rights reserved.</p>
          <p>Licensed California Landscaping &amp; Hardscaping Network.</p>
        </div>
      </div>
    </footer>
  )
}
