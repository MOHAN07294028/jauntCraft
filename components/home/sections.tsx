import Link from 'next/link'
import {
  ArrowRight,
  Check,
  FileSpreadsheet,
  Inbox,
  ClipboardCheck,
  PlayCircle,
  Settings2,
  UserSearch,
  Calculator,
  LineChart,
  Workflow,
} from 'lucide-react'
import { Highlight, PillLink, SectionHeading } from '@/components/site/primitives'
import { INDUSTRIES, SOLUTIONS } from '@/components/site/site-data'
import { DashboardMockup } from './dashboard-mockup'

const PROBLEMS = [
  {
    icon: FileSpreadsheet,
    title: 'Scattered Bookings',
    text: 'Managing reservations across emails, spreadsheets and multiple platforms.',
  },
  {
    icon: Settings2,
    title: 'Operational Complexity',
    text: 'Coordinating guides, vehicles, schedules and tour activities.',
  },
  {
    icon: UserSearch,
    title: 'Customer Management',
    text: 'Tracking enquiries, customer communication and booking history.',
  },
  {
    icon: Calculator,
    title: 'Financial Visibility',
    text: 'Managing payments, expenses, commissions and profitability.',
  },
]

export function ProblemSection() {
  return (
    <section className="bg-surface px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The Problem"
          title={
            <>
              {"Running a Tour Business Shouldn't Be "}
              <Highlight>Complicated.</Highlight>
            </>
          }
          description="Managing bookings across multiple channels, coordinating tour schedules, communicating with customers and tracking business finances can become overwhelming when everything operates separately."
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="flex flex-col gap-4 rounded-3xl bg-white p-6 shadow-pill">
              <div className="flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-coral-soft text-coral">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <span className="text-sm font-bold text-muted-foreground/50">0{i + 1}</span>
              </div>
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function SolutionSection() {
  return (
    <section className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our Solution"
          title={
            <>
              One Platform. <Highlight>Complete Control</Highlight> of Your Tour Business.
            </>
          }
          description="JauntCraft brings your essential tour business operations together through one integrated management platform."
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SOLUTIONS.map(({ icon: Icon, title, short, slug }) => (
            <li key={slug}>
              <Link
                href={`/solutions#${slug}`}
                className="group flex h-full flex-col gap-4 rounded-3xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:border-coral hover:shadow-soft"
              >
                <span className="flex size-12 items-center justify-center rounded-2xl bg-coral text-white shadow-pill">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{short}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-coral">
                  Learn more <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-12 flex justify-center">
          <PillLink href="/solutions" variant="outline">
            Explore All Features
          </PillLink>
        </div>
      </div>
    </section>
  )
}

const SHOWCASE_POINTS = [
  'Business overview',
  'Booking calendar',
  'Tour departure schedule',
  'Customer database',
  'Resource allocation',
  'Financial dashboard',
]

export function ShowcaseSection() {
  return (
    <section className="px-4 pb-20 md:px-6 md:pb-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 rounded-[2.5rem] bg-surface p-6 md:p-12 lg:grid-cols-[1fr_1.5fr]">
        <div className="flex flex-col gap-6">
          <SectionHeading
            align="left"
            eyebrow="Product Showcase"
            title={
              <>
                Meet Your New Tour Business <Highlight>Command Centre.</Highlight>
              </>
            }
            description="A centralized platform designed to help tour operators manage their daily operations, improve productivity and make better business decisions."
          />
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {SHOWCASE_POINTS.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm font-medium">
                <span className="flex size-5 items-center justify-center rounded-full bg-coral text-white">
                  <Check className="size-3" aria-hidden="true" />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <div>
            <PillLink href="/products">See How It Works</PillLink>
          </div>
        </div>
        <DashboardMockup />
      </div>
    </section>
  )
}

const STEPS = [
  { icon: Inbox, title: 'Capture Enquiries', text: 'Receive and organize customer enquiries.' },
  {
    icon: ClipboardCheck,
    title: 'Convert Bookings',
    text: 'Prepare quotations, confirm reservations and collect payments.',
  },
  { icon: Workflow, title: 'Plan Operations', text: 'Assign guides, vehicles, staff and other resources.' },
  { icon: PlayCircle, title: 'Execute Tours', text: 'Monitor schedules, departures and tour completion.' },
  { icon: Calculator, title: 'Manage Finances', text: 'Track revenue, payments, expenses and profitability.' },
  { icon: LineChart, title: 'Analyze Performance', text: 'Understand business performance through reports.' },
]

export function HowItWorksSection() {
  return (
    <section className="bg-[#121212] px-4 py-20 text-white md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-coral">How It Works</p>
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            From Customer Enquiry to <span className="text-coral">Successful Tour Execution.</span>
          </h2>
        </div>
        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="relative flex gap-5 rounded-3xl border border-white/10 bg-white/5 p-6">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-coral text-lg font-bold">
                {i + 1}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="flex items-center gap-2 text-lg font-bold">
                  <Icon className="size-5 text-coral" aria-hidden="true" />
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-white/70">{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function IndustriesSection() {
  return (
    <section className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Who We Serve"
          title={
            <>
              Built for <Highlight>Every Type</Highlight> of Tour Business.
            </>
          }
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="flex gap-4 rounded-3xl bg-gradient-to-br from-[#fff4f2] to-white p-6 ring-1 ring-coral/15"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white text-coral shadow-pill">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-bold">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

const BENEFITS = [
  'Centralized business operations',
  'Improved booking visibility',
  'Better customer relationships',
  'Efficient resource utilization',
  'Reduced administrative workload',
  'Improved financial control',
  'Data-driven decision-making',
]

export function BenefitsSection() {
  return (
    <section className="bg-surface px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <SectionHeading
          align="left"
          eyebrow="Business Benefits"
          title={
            <>
              More Control. Less Manual Work. <Highlight>Better Business.</Highlight>
            </>
          }
          description="Give your team one source of truth for every booking, departure, customer and transaction."
        />
        <ul className="flex flex-wrap gap-3">
          {BENEFITS.map((b) => (
            <li
              key={b}
              className="flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold shadow-pill"
            >
              <Check className="size-4 text-coral" aria-hidden="true" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function FinalCta({
  title = 'Ready to Take Control of Your Tour Business?',
  description = 'Discover how JauntCraft can simplify your operations and help your business grow.',
  cta = 'Schedule Your Free Demo',
}: {
  title?: string
  description?: string
  cta?: string
}) {
  return (
    <section className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 rounded-[2.5rem] bg-coral px-6 py-16 text-center text-white shadow-soft md:px-16">
        <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight md:text-5xl">{title}</h2>
        <p className="max-w-xl text-pretty text-lg text-white/90">{description}</p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/book-demo"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-foreground shadow-pill transition-transform hover:-translate-y-0.5"
          >
            {cta} <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
          >
            Talk to Our Team
          </Link>
        </div>
      </div>
    </section>
  )
}
