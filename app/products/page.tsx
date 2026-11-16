import type { Metadata } from 'next'
import {
  Bell,
  Cloud,
  Eye,
  Layers,
  LayoutDashboard,
  Lock,
  Scaling,
  Database,
  CalendarCheck,
  Route,
  Users,
  Bus,
  TrendingUp,
  Wallet,
  BarChart3,
  UserCog,
} from 'lucide-react'
import { Highlight, PageHero, PillLink, SectionHeading } from '@/components/site/primitives'
import { DashboardMockup } from '@/components/home/dashboard-mockup'
import { FinalCta } from '@/components/home/sections'

export const metadata: Metadata = {
  title: 'Products',
  description: 'The JauntCraft Tour Management Platform — a centralized solution to streamline tour operations.',
}

const FEATURES = [
  { icon: LayoutDashboard, title: 'Centralized Dashboard' },
  { icon: CalendarCheck, title: 'Booking Management' },
  { icon: Route, title: 'Tour Scheduling & Execution' },
  { icon: Users, title: 'Customer CRM' },
  { icon: Bus, title: 'Resource & Fleet Management' },
  { icon: TrendingUp, title: 'Sales & Lead Management' },
  { icon: Wallet, title: 'Accounts & Finance' },
  { icon: BarChart3, title: 'Business Reports' },
  { icon: UserCog, title: 'Employee & User Management' },
  { icon: Bell, title: 'Notifications & Communication' },
]

const HIGHLIGHTS = [
  { icon: Database, title: 'Centralized information' },
  { icon: Lock, title: 'Role-based access' },
  { icon: Cloud, title: 'Cloud-based accessibility' },
  { icon: Eye, title: 'Real-time operational visibility' },
  { icon: Layers, title: 'Integrated business workflows' },
  { icon: Scaling, title: 'Scalable business management' },
]

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title={
          <>
            Introducing the JauntCraft <Highlight>Tour Management</Highlight> Platform.
          </>
        }
        description="A centralized business management solution built to simplify and streamline tour operations."
      >
        <div className="flex flex-col gap-4 sm:flex-row">
          <PillLink href="/book-demo">Book a Product Demo</PillLink>
          <PillLink href="/contact" variant="outline">
            Request Product Information
          </PillLink>
        </div>
      </PageHero>

      <section className="px-4 pb-20 md:px-6">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-surface p-4 md:p-10">
          <DashboardMockup />
        </div>
      </section>

      <section className="px-4 pb-20 md:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Platform Features" title="One integrated application, not just a booking tool." />
          <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {FEATURES.map(({ icon: Icon, title }) => (
              <li key={title} className="flex flex-col items-center gap-3 rounded-2xl bg-white p-5 text-center shadow-pill ring-1 ring-black/5">
                <Icon className="size-7 text-coral" aria-hidden="true" />
                <span className="text-sm font-semibold leading-snug">{title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#121212] px-4 py-20 text-white md:px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
            Product <span className="text-coral">Highlights</span>
          </h2>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {HIGHLIGHTS.map(({ icon: Icon, title }) => (
              <li key={title} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                <span className="flex size-11 items-center justify-center rounded-xl bg-coral">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="font-semibold">{title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCta title="See the Platform in Action." cta="Book a Product Demo" />
    </>
  )
}
