"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const NAV = [
  { href: "/estimate", label: "Cost Calculator" },
  { href: "/services", label: "Services" },
  { href: "/locations", label: "Locations" },
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 h-[80px] border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Consult & Build CA - Home"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/consult-and-build-logo.png"
            alt=""
            width={56}
            height={56}
            priority
            className="h-14 w-14 shrink-0 object-contain"
          />
          <div>
            <div className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">Consult &amp; Build CA</div>
            <div className="hidden text-xs text-slate-500 sm:block">Licensed California Landscaping &amp; Hardscaping</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/")
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  active ? "text-primary" : "text-slate-600 hover:text-slate-900",
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden font-semibold sm:inline-flex">
            <Link href="/survey">
              Get Free Estimate
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-700 hover:bg-slate-100 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div
          id="mobile-nav"
          className="absolute inset-x-0 top-[80px] border-b border-slate-200 bg-white shadow-lg lg:hidden"
        >
          <nav aria-label="Mobile" className="container mx-auto flex flex-col gap-1 px-4 py-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2 w-full font-semibold">
              <Link href="/survey" onClick={() => setOpen(false)}>
                Get Free Estimate
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
