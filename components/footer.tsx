"use client"

import Link from "next/link"
import { Hammer, Facebook, Instagram } from "lucide-react" // Removed Twitter

export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 font-normal text-base text-black bg-transparent">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-400 flex items-center justify-center shadow-md">
                <Hammer className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-black">Consult & Build CA</span>
            </div>
            <p className="text-sm mb-4">
              Connecting California homeowners with licensed, pre-screened contractors for quality home improvement
              projects.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <Link
                href="https://www.facebook.com/profile.php?id=61576999892516"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-orange-400 transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://www.instagram.com/consultbuild/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-orange-400 transition-colors"
              >
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-black">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-orange-400 transition-colors">
                  About Us
                </Link>
              </li>
              {/* "Our Services" link removed */}
              <li>
                <Link href="/contact" className="hover:text-orange-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-orange-400 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-black">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="hover:text-orange-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-orange-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:text-orange-400 transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Consult & Build CA. All rights reserved.</p>
          <p className="mt-1">Licensed California Home Improvement Network.</p>
        </div>
      </div>
    </footer>
  )
}
