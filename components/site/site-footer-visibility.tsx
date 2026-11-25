'use client'

import { usePathname } from 'next/navigation'

export function SiteFooterVisibility({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  if (pathname.startsWith('/register') || pathname.startsWith('/dashboard') || pathname.startsWith('/login')) {
    return null
  }

  return children
}
