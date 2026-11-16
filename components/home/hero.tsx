import Image from 'next/image'
import { ArrowRight, BarChart3, Bus, CalendarCheck, MessageCircle, Users, Wallet } from 'lucide-react'
import { Highlight, PillLink } from '@/components/site/primitives'

const MODULES = [
  { icon: CalendarCheck, label: 'Booking Management' },
  { icon: Bus, label: 'Tour Operations' },
  { icon: Users, label: 'Customer CRM' },
  { icon: Wallet, label: 'Accounts & Finance' },
  { icon: BarChart3, label: 'Reports' },
  { icon: MessageCircle, label: 'Notifications' },
]

export function Hero() {
  return (
    <section className="px-4 pb-20 pt-14 md:px-6 md:pt-24">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-coral">Travel Business Software</p>
        <h1 className="text-balance text-4xl font-semibold leading-[1.15] tracking-tight md:text-6xl">
          Run Your Entire <Highlight>Tour Business</Highlight>
          <br className="hidden md:block" /> From One Platform.
        </h1>
        <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Simplify bookings, automate tour operations, manage customers, track resources and control your finances with
          one intelligent tour management platform.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <PillLink href="/book-demo">
            Book a Free Demo <ArrowRight className="size-4" aria-hidden="true" />
          </PillLink>
          <PillLink href="/products" variant="outline">
            Explore Our Platform
          </PillLink>
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl items-end gap-6 lg:grid-cols-[1fr_2.4fr_1fr]">
        <div className="order-2 flex flex-col gap-5 lg:order-1">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2" aria-hidden="true">
              {['bg-coral', 'bg-[#f5b942]', 'bg-[#3fb27f]', 'bg-[#4a7bd9]'].map((c, i) => (
                <span
                  key={c}
                  className={`flex size-10 items-center justify-center rounded-full text-[10px] font-bold text-white ring-2 ring-white ${c}`}
                >
                  {['TO', 'DM', 'AA', 'TA'][i]}
                </span>
              ))}
            </div>
            <div className="text-left">
              <p className="text-lg font-bold leading-none">6+</p>
              <p className="text-xs text-muted-foreground">Business types served</p>
            </div>
          </div>
          <div className="rounded-3xl bg-gradient-to-b from-coral-soft to-[#fff4f2] p-4">
            <ul className="grid grid-cols-2 gap-3">
              {MODULES.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex flex-col items-center gap-1.5 rounded-xl bg-white px-2 py-3 text-center shadow-pill"
                >
                  <Icon className="size-5 text-coral" aria-hidden="true" />
                  <span className="text-[11px] font-medium leading-tight">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="order-1 overflow-hidden rounded-[2rem] bg-surface lg:order-2">
          <Image
            src="/images/hero-illustration.png"
            alt="Tour operator managing bookings, calendar and revenue on the JauntCraft dashboard"
            width={1312}
            height={816}
            priority
            className="h-auto w-full"
          />
        </div>

        <div className="order-3 flex flex-col gap-5">
          <p className="text-pretty text-center text-base leading-relaxed lg:text-left">
            Contact for any help & support or business related query at{' '}
            <a href="mailto:info@jauntcraft.com" className="font-medium underline underline-offset-4 hover:text-coral">
              info@jauntcraft.com
            </a>
          </p>
          <div className="rounded-3xl bg-gradient-to-b from-[#fff4f2] to-coral-soft p-5 text-left">
            <p className="text-sm font-bold">Everything Connected</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              Everything your tour business needs. Connected in one place.
            </p>
            <div className="mt-4 rounded-xl bg-[#121212] p-4 text-white">
              <p className="text-[10px] uppercase tracking-widest text-white/60">Today</p>
              <p className="mt-1 text-2xl font-bold">42 departures</p>
              <div className="mt-3 h-1.5 rounded-full bg-white/15">
                <div className="h-full w-3/4 rounded-full bg-coral" />
              </div>
              <p className="mt-2 text-[10px] text-white/60">32 of 42 resources assigned</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
