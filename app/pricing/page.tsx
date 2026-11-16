import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Highlight, PageHero } from '@/components/site/primitives'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Flexible plans for growing tour businesses — Starter, Professional and Enterprise.',
}

const PLANS = [
  {
    name: 'Starter',
    audience: 'For small tour operators.',
    features: ['Essential booking management', 'Customer database', 'Basic tour scheduling', 'Basic reporting', 'Limited user accounts'],
  },
  {
    name: 'Professional',
    audience: 'For growing tour businesses.',
    featured: true,
    features: [
      'Everything in Starter',
      'Advanced booking management',
      'Tour operations',
      'Resource management',
      'Sales management',
      'Financial tracking',
      'Advanced reports',
      'Additional users',
    ],
  },
  {
    name: 'Enterprise',
    audience: 'For established tour operators and larger businesses.',
    features: [
      'Everything in Professional',
      'Advanced user permissions',
      'Multi-branch management',
      'Custom workflows',
      'Advanced integrations',
      'Dedicated onboarding',
      'Priority support',
    ],
  },
]

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Plan & Pricing"
        title={
          <>
            Flexible Plans for <Highlight>Growing</Highlight> Tour Businesses.
          </>
        }
        description="Whether you're managing a small tour operation or a growing travel business, choose a solution that matches your operational needs."
      />
      <section className="px-4 pb-24 md:px-6">
        <ul className="mx-auto grid max-w-6xl items-stretch gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <li
              key={plan.name}
              className={cn(
                'relative flex flex-col gap-6 rounded-[2rem] p-8',
                plan.featured ? 'bg-coral text-white shadow-soft lg:-translate-y-4' : 'bg-surface',
              )}
            >
              {plan.featured && (
                <span className="absolute right-6 top-6 rounded-full bg-white px-3 py-1 text-xs font-bold text-coral">
                  Most popular
                </span>
              )}
              <div>
                <h2 className="text-2xl font-bold">{plan.name}</h2>
                <p className={cn('mt-1 text-sm', plan.featured ? 'text-white/85' : 'text-muted-foreground')}>
                  {plan.audience}
                </p>
              </div>
              <p className="text-3xl font-bold">Custom</p>
              <ul className="flex flex-1 flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span
                      className={cn(
                        'mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full',
                        plan.featured ? 'bg-white text-coral' : 'bg-coral text-white',
                      )}
                    >
                      <Check className="size-3" aria-hidden="true" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={cn(
                  'rounded-full px-6 py-3 text-center font-semibold shadow-pill transition-transform hover:-translate-y-0.5',
                  plan.featured ? 'bg-white text-foreground' : 'bg-coral text-white',
                )}
              >
                Request a Custom Quote
              </Link>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
          Final pricing, limits and feature availability are tailored to your business. Talk to our team for a quote.
        </p>
      </section>
    </>
  )
}
