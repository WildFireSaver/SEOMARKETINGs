"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 h-[80px] flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3" aria-label="Consult & Build CA - Home">
            <Image
              src="/consult-and-build-logo.png"
              alt="Consult &amp; Build CA logo"
              width={56}
              height={56}
              priority
              className="h-14 w-14 shrink-0 object-contain"
            />
            <div>
              <div className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">Consult &amp; Build CA</div>
              <div className="text-xs text-slate-500 hidden sm:block">Licensed California Landscaping &amp; Hardscaping</div>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <Button asChild>
              <Link href="/#check-eligibility">Check Eligibility</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
