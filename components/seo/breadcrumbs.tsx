import Link from "next/link"
import { ChevronRight } from "lucide-react"

export type Crumb = { name: string; path: string }

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-slate-500">
        {items.map((item, i) => {
          const isLast = i === items.length - 1
          return (
            <li key={item.path} className="flex items-center gap-1">
              {isLast ? (
                <span className="font-medium text-slate-700" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link href={item.path} className="hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                  <ChevronRight className="h-4 w-4 text-slate-300" aria-hidden="true" />
                </>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
