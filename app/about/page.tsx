import type { Metadata } from 'next'
import { Check, Eye, Target } from 'lucide-react'
import { Highlight, PageHero, SectionHeading } from '@/components/site/primitives'
import { FinalCta } from '@/components/home/sections'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Empowering travel businesses through technology.',
}

const WHAT_WE_DO = [
  'Travel technology solutions',
  'Tour management software',
  'Website design and development',
  'Digital transformation',
  'Business automation',
  'Digital marketing solutions',
]

const WHY = [
  'Travel industry-focused solutions',
  'Integrated business management',
  'Practical technology',
  'Scalable digital platforms',
  'Customer-focused approach',
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            Empowering Travel Businesses <Highlight>Through Technology.</Highlight>
          </>
        }
        description="At JauntCraft, we believe managing a tour business should be simple, organized and efficient. We build digital solutions that help travel businesses streamline operations, improve customer relationships and manage their business with greater visibility."
      />

      <section className="px-4 pb-20 md:px-6">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-[2rem] bg-coral p-8 text-white shadow-soft">
            <Target className="size-10" aria-hidden="true" />
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="leading-relaxed text-white/90">
              To empower tour operators with accessible, intelligent and integrated technology that simplifies everyday
              business operations.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-[2rem] bg-[#121212] p-8 text-white">
            <Eye className="size-10 text-coral" aria-hidden="true" />
            <h2 className="text-2xl font-bold">Our Vision</h2>
            <p className="leading-relaxed text-white/80">
              To become a trusted technology partner for tour and travel businesses worldwide.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface px-4 py-20 md:px-6">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <SectionHeading align="left" eyebrow="What We Do" title="Digital solutions for travel." />
            <ul className="grid gap-3 sm:grid-cols-2">
              {WHAT_WE_DO.map((w) => (
                <li key={w} className="rounded-xl bg-white px-4 py-3 text-sm font-semibold shadow-pill">
                  {w}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-8">
            <SectionHeading
              align="left"
              eyebrow="Why JauntCraft?"
              title={
                <>
                  Built <Highlight>for travel.</Highlight>
                </>
              }
            />
            <ul className="flex flex-col gap-3">
              {WHY.map((w) => (
                <li key={w} className="flex items-center gap-3 font-medium">
                  <span className="flex size-6 items-center justify-center rounded-full bg-coral text-white">
                    <Check className="size-3.5" aria-hidden="true" />
                  </span>
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  )
}
