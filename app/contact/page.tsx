import type { Metadata } from 'next'
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { Highlight, PageHero } from '@/components/site/primitives'
import { LeadForm, type Field } from '@/components/site/lead-form'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Connect with the JauntCraft team and discover how we can support your tour business.',
}

const BUSINESS_TYPES = [
  'Tour Operator',
  'Destination Management Company',
  'Adventure & Activity Operator',
  'Sightseeing & Excursion Company',
  'Travel Agency',
  'Experience Provider',
  'Other',
]

const FIELDS: Field[] = [
  { name: 'name', label: 'Full Name', required: true, autoComplete: 'name' },
  { name: 'company', label: 'Company Name', required: true, autoComplete: 'organization' },
  { name: 'email', label: 'Business Email', type: 'email', required: true, autoComplete: 'email' },
  { name: 'phone', label: 'Phone Number', type: 'tel', autoComplete: 'tel' },
  { name: 'country', label: 'Country', autoComplete: 'country-name' },
  { name: 'businessType', label: 'Business Type', type: 'select', options: BUSINESS_TYPES },
  { name: 'employees', label: 'Number of Employees', type: 'select', options: ['1–10', '11–50', '51–200', '200+'], full: true },
  { name: 'message', label: 'Message', type: 'textarea', required: true },
]

const CONTACTS = [
  { icon: Mail, label: 'Email', value: 'info@jauntcraft.com', href: 'mailto:info@jauntcraft.com' },
  { icon: Phone, label: 'Phone', value: '+00 000 000 0000' },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with our team' },
  { icon: MapPin, label: 'Office', value: 'Office location' },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title={
          <>
            {"Let's Build a Smarter Way to Manage Your "}
            <Highlight>Tour Business.</Highlight>
          </>
        }
        description="Interested in simplifying your tour operations? Connect with our team and discover how JauntCraft can support your business."
      />
      <section className="px-4 pb-24 md:px-6">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_2fr]">
          <ul className="flex flex-col gap-4">
            {CONTACTS.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-center gap-4 rounded-2xl bg-surface p-5">
                <span className="flex size-12 items-center justify-center rounded-xl bg-coral text-white shadow-pill">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{label}</p>
                  {href ? (
                    <a href={href} className="font-semibold underline underline-offset-4 hover:text-coral">
                      {value}
                    </a>
                  ) : (
                    <p className="font-semibold">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <LeadForm
            fields={FIELDS}
            submitLabel="Submit Enquiry"
            successMessage="Your enquiry has been received. Our team will get back to you shortly."
          />
        </div>
      </section>
    </>
  )
}
