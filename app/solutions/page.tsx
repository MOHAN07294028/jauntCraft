import type { Metadata } from 'next'
import { Check } from 'lucide-react'
import { Highlight, PageHero, PillLink } from '@/components/site/primitives'
import { SOLUTIONS } from '@/components/site/site-data'
import { FinalCta } from '@/components/home/sections'

export const metadata: Metadata = {
  title: 'Solutions',
  description: 'Booking, operations, CRM, resources, sales, finance and reporting — everything your tour business needs.',
}

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={
          <>
            Everything Your Tour Business Needs to <Highlight>Operate Smarter.</Highlight>
          </>
        }
        description="From the first customer enquiry to the final tour departure, JauntCraft helps connect every part of your business."
      >
        <PillLink href="/book-demo">Book a Free Demo</PillLink>
      </PageHero>

      <section className="px-4 pb-10 md:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-8">
          {SOLUTIONS.slice(0, 7).map(({ slug, icon: Icon, title, description, features }, i) => (
            <article
              id={slug}
              key={slug}
              className={`grid scroll-mt-28 gap-8 rounded-[2rem] p-6 md:p-10 lg:grid-cols-[1fr_1.3fr] ${
                i % 2 === 0 ? 'bg-surface' : 'bg-gradient-to-br from-[#fff4f2] to-coral-soft/60'
              }`}
            >
              <div className="flex flex-col gap-4">
                <span className="text-sm font-bold text-coral">Solution 0{i + 1}</span>
                <span className="flex size-14 items-center justify-center rounded-2xl bg-coral text-white shadow-pill">
                  <Icon className="size-7" aria-hidden="true" />
                </span>
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
                <p className="leading-relaxed text-muted-foreground">{description}</p>
              </div>
              <ul className="grid content-start gap-3 sm:grid-cols-2">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm font-medium shadow-pill">
                    <Check className="size-4 shrink-0 text-coral" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <FinalCta />
    </>
  )
}
