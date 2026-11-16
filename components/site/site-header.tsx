'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Logo } from './logo'
import { NAV_LINKS } from './site-data'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <Logo />

        <nav aria-label="Main" className="hidden rounded-full bg-white px-3 py-2 shadow-pill ring-1 ring-black/5 xl:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  className={cn(
                    'block whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-semibold transition-colors',
                    isActive(link.href) ? 'bg-coral text-white' : 'text-foreground hover:text-coral',
                  )}
                >
                  {link.label}.
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden shrink-0 items-center gap-3 whitespace-nowrap xl:flex">
          <Link
            href="/contact"
            className="rounded-full border border-foreground px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-surface"
          >
            Login
          </Link>
          <Link
            href="/book-demo"
            className="rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-white shadow-pill transition-colors hover:bg-[#e04838]"
          >
            Book a Demo
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="flex size-11 items-center justify-center rounded-full text-coral ring-1 ring-black/10 xl:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border bg-white px-4 pb-6 xl:hidden">
          <ul className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  className={cn(
                    'block rounded-xl px-4 py-3 font-semibold',
                    isActive(link.href) ? 'bg-coral text-white' : 'hover:bg-surface',
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/book-demo"
            onClick={() => setOpen(false)}
            className="block rounded-full bg-coral px-5 py-3 text-center font-semibold text-white shadow-pill"
          >
            Book a Demo
          </Link>
        </nav>
      )}
    </header>
  )
}
