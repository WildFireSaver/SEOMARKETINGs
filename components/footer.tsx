"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-slate-800 py-12 font-normal text-base text-slate-300 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
              <Image
                src="/consult-and-build-logo.png"
                alt="Consult &amp; Build CA logo"
                width={48}
                height={48}
                className="h-12 w-12 shrink-0 rounded-full bg-white object-contain"
              />
              <span className="text-xl font-bold text-white tracking-tight">Consult &amp; Build CA</span>
            </div>
            <p className="text-sm mb-4 text-slate-400">
              Connecting California homeowners with licensed, pre-screened landscaping and hardscaping crews for
              patios, retaining walls, outdoor living, and complete backyard transformations.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <Link
                href="https://www.facebook.com/profile.php?id=61576999892516"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-slate-400 hover:text-primary transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://www.instagram.com/consultbuild/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-slate-400 hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              {/* "Our Services" link removed */}
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-400 hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-slate-400 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-400 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-slate-400 hover:text-primary transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Consult &amp; Build CA. All rights reserved.</p>
          <p className="mt-1">Licensed California Landscaping &amp; Hardscaping Network.</p>
        </div>
      </div>
    </footer>
  )
}
