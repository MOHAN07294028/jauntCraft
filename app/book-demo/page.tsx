import type { Metadata } from 'next'
import { Check } from 'lucide-react'
import { Highlight, PageHero } from '@/components/site/primitives'
import { LeadForm, type Field } from '@/components/site/lead-form'

export const metadata: Metadata = {
  title: 'Book a Demo',
  description: 'See how JauntCraft can transform your tour operations with a personalized product demonstration.',
}

const FIELDS: Field[] = [
  { name: 'name', label: 'Full Name', required: true, autoComplete: 'name' },
  { name: 'company', label: 'Company Name', required: true, autoComplete: 'organization' },
  { name: 'email', label: 'Business Email', type: 'email', required: true, autoComplete: 'email' },
  { name: 'phone', label: 'Phone Number', type: 'tel', autoComplete: 'tel' },
  { name: 'country', label: 'Country', autoComplete: 'country-name' },
  {
    name: 'businessType',
    label: 'Type of Tour Business',
    type: 'select',
    required: true,
    options: ['Tour Operator', 'DMC', 'Activity Operator', 'Sightseeing Company', 'Travel Agency', 'Experience Provider', 'Other'],
  },
  {
    name: 'currentMethod',
    label: 'Current Booking Management Method',
    type: 'select',
    options: ['Spreadsheets', 'Email & messaging', 'Another software', 'Paper-based', 'Other'],
  },
  { name: 'date', label: 'Preferred Demo Date', type: 'date' },
  { name: 'requirements', label: 'Additional Requirements', type: 'textarea' },
]

const PERKS = ['Personalized walkthrough', 'Bookings to finance, end to end', 'Q&A with our product team', 'No commitment required']

export default function BookDemoPage() {
  return (
    <>
      <PageHero
        eyebrow="Book a Demo"
        title={
          <>
            See How JauntCraft Can <Highlight>Transform</Highlight> Your Tour Operations.
          </>
        }
        description="Book a personalized product demonstration and discover how you can manage bookings, customers, resources, operations and finances from one platform."
      >
        <ul className="flex flex-wrap justify-center gap-3">
          {PERKS.map((p) => (
            <li key={p} className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold shadow-pill ring-1 ring-black/5">
              <Check className="size-4 text-coral" aria-hidden="true" />
              {p}
            </li>
          ))}
        </ul>
      </PageHero>
      <section className="px-4 pb-24 md:px-6">
        <div className="mx-auto max-w-4xl">
          <LeadForm
            fields={FIELDS}
            submitLabel="Schedule My Demo"
            successMessage="Your demo request is in. We'll contact you to confirm a time."
          />
        </div>
      </section>
    </>
  )
}
