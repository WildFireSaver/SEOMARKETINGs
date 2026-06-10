"use client"

import Link from "next/link"
import { Hammer } from "lucide-react" // Changed from Building2
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 h-[80px] flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-400 flex items-center justify-center shadow-md">
              <Hammer className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-bold text-slate-900">Consult & Build CA</div>
              <div className="text-xs text-slate-600 hidden sm:block">Professional Contractor Network</div>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <Button asChild>
              <Link href="#check-eligibility">Check Eligibility</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
