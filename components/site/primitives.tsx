import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

export function Highlight({ children }: { children: ReactNode }) {
  return (
    <span className="bg-coral-soft px-2 text-coral [box-decoration-break:clone]">
      {children}
    </span>
  )
}

type PillLinkProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'outline'
  className?: string
}

export function PillLink({ href, children, variant = 'primary', className }: PillLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold shadow-pill transition-all hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral',
        variant === 'primary'
          ? 'bg-coral text-white hover:bg-[#e04838]'
          : 'border border-foreground/80 bg-white text-foreground hover:bg-surface',
        className,
      )}
    >
      {children}
    </Link>
  )
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full bg-coral-soft px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#b8352a]">
      <span className="size-1.5 rounded-full bg-coral" aria-hidden="true" />
      {children}
    </p>
  )
}

type SectionHeadingProps = {
  eyebrow?: string
  title: ReactNode
  description?: string
  align?: 'center' | 'left'
}

export function SectionHeading({ eyebrow, title, description, align = 'center' }: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex max-w-3xl flex-col gap-4',
        align === 'center' ? 'mx-auto items-center text-center' : 'items-start text-left',
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight md:text-5xl">{title}</h2>
      {description && (
        <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">{description}</p>
      )}
    </div>
  )
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string
  title: ReactNode
  description: string
  children?: ReactNode
}) {
  return (
    <section className="px-4 pb-16 pt-16 md:pb-24 md:pt-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">{title}</h1>
        <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">{description}</p>
        {children}
      </div>
    </section>
  )
}
