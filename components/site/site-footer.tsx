import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Logo } from './logo'
import { INDUSTRIES, SOLUTIONS } from './site-data'

const COMPANY = [
  { href: '/about', label: 'About Us' },
  { href: '/products', label: 'Products' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
  { href: '/book-demo', label: 'Book a Demo' },
]

export function SiteFooter() {
  return (
    <footer className="bg-[#121212] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-2 md:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-5">
          <Logo inverted />
          <p className="max-w-xs text-sm leading-relaxed text-white/70">
            Travel Technology & Digital Solutions. Powering the business behind every journey.
          </p>
          <ul className="flex flex-col gap-2.5 text-sm text-white/80">
            <li className="flex items-center gap-2">
              <Mail className="size-4 text-coral" aria-hidden="true" />
              <a href="mailto:info@jauntcraft.com" className="underline-offset-4 hover:underline">
                info@jauntcraft.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-coral" aria-hidden="true" />
              <span>+00 000 000 0000</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-coral" aria-hidden="true" />
              <span>Office location</span>
            </li>
          </ul>
        </div>

        <FooterColumn title="Solutions" links={SOLUTIONS.slice(0, 6).map((s) => ({ href: `/solutions#${s.slug}`, label: s.title }))} />
        <FooterColumn title="Industries" links={INDUSTRIES.map((i) => ({ href: '/industries', label: i.title }))} />
        <FooterColumn title="Company" links={COMPANY} />
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-white/60 md:flex-row md:px-6">
          <p>© {new Date().getFullYear()} JauntCraft. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-coral">{title}</h3>
      <ul className="flex flex-col gap-2.5 text-sm text-white/75">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className="hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
