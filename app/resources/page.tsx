import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'
import { Highlight, PageHero } from '@/components/site/primitives'

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Insights, guides and articles to help your tour business grow.',
}

const CATEGORIES = [
  'Tour Business Management',
  'Travel Technology',
  'Booking Management',
  'Customer Experience',
  'Business Automation',
  'Travel Industry Trends',
]

const ARTICLES = [
  { title: 'How to Manage a Tour Operating Business Efficiently', category: 'Tour Business Management' },
  { title: '10 Common Challenges Faced by Tour Operators', category: 'Tour Business Management' },
  { title: 'Why Tour Operators Need Booking Management Software', category: 'Booking Management' },
  { title: 'How to Automate Daily Tour Operations', category: 'Business Automation' },
  { title: 'Managing Tour Guides and Vehicles Efficiently', category: 'Travel Technology' },
  { title: 'How CRM Can Improve Customer Retention', category: 'Customer Experience' },
  { title: 'How to Track Profitability in a Tour Business', category: 'Tour Business Management' },
]

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title={
          <>
            Insights to Help Your <Highlight>Tour Business</Highlight> Grow.
          </>
        }
        description="Practical guides on bookings, operations, customers and travel technology."
      />
      <section className="px-4 pb-24 md:px-6">
        <div className="mx-auto max-w-6xl">
          <ul className="flex flex-wrap justify-center gap-3" aria-label="Categories">
            {CATEGORIES.map((c, i) => (
              <li
                key={c}
                className={`rounded-full px-4 py-2 text-sm font-semibold shadow-pill ${
                  i === 0 ? 'bg-coral text-white' : 'bg-white ring-1 ring-black/5'
                }`}
              >
                {c}
              </li>
            ))}
          </ul>
          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ARTICLES.map((a, i) => (
              <li key={a.title}>
                <article className="group flex h-full flex-col gap-4 rounded-[2rem] bg-surface p-6 transition-shadow hover:shadow-soft">
                  <div
                    className={`flex aspect-[16/9] items-end rounded-2xl p-4 ${
                      i % 3 === 0 ? 'bg-coral' : i % 3 === 1 ? 'bg-coral-soft' : 'bg-[#121212]'
                    }`}
                  >
                    <span
                      className={`text-5xl font-bold ${i % 3 === 1 ? 'text-coral' : 'text-white/90'}`}
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-coral">{a.category}</p>
                  <h2 className="flex-1 text-lg font-bold leading-snug">{a.title}</h2>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold">
                    Coming soon <ArrowUpRight className="size-4 text-coral" aria-hidden="true" />
                  </span>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
