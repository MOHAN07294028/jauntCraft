import type { Metadata } from 'next'
import { Highlight, PageHero } from '@/components/site/primitives'
import { INDUSTRIES } from '@/components/site/site-data'
import { FinalCta } from '@/components/home/sections'

export const metadata: Metadata = {
  title: 'Industries',
  description: 'Technology for tour operators, DMCs, activity providers, travel agencies and experience providers.',
}

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={
          <>
            Technology That Supports the Entire <Highlight>Tour & Travel</Highlight> Ecosystem.
          </>
        }
        description="Whatever kind of travel business you run, JauntCraft adapts to the way you operate."
      />
      <section className="px-4 pb-10 md:px-6">
        <ol className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {INDUSTRIES.map(({ icon: Icon, title, description }, i) => (
            <li key={title} className="flex flex-col gap-5 rounded-[2rem] bg-surface p-8 transition-shadow hover:shadow-soft">
              <div className="flex items-center justify-between">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-coral text-white shadow-pill">
                  <Icon className="size-7" aria-hidden="true" />
                </span>
                <span className="text-4xl font-bold text-coral/25">0{i + 1}</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
              <p className="leading-relaxed text-muted-foreground">{description}</p>
            </li>
          ))}
        </ol>
      </section>
      <FinalCta title="Find the Right Solution for Your Business." cta="Talk to an Expert" />
    </>
  )
}
