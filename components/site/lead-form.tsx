'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle2 } from 'lucide-react'

export type Field = {
  name: string
  label: string
  type?: 'text' | 'email' | 'tel' | 'date' | 'select' | 'textarea'
  required?: boolean
  options?: string[]
  autoComplete?: string
  full?: boolean
}

const inputClass =
  'w-full rounded-xl border border-input bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-coral focus:ring-2 focus:ring-coral/25'

export function LeadForm({ fields, submitLabel, successMessage }: { fields: Field[]; submitLabel: string; successMessage: string }) {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!e.currentTarget.checkValidity()) return
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div role="status" className="flex flex-col items-center gap-4 rounded-[2rem] bg-coral-soft p-10 text-center">
        <CheckCircle2 className="size-12 text-coral" aria-hidden="true" />
        <h2 className="text-2xl font-bold">Thank you!</h2>
        <p className="text-muted-foreground">{successMessage}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 rounded-[2rem] bg-white p-6 shadow-soft ring-1 ring-black/5 md:grid-cols-2 md:p-10">
      {fields.map((f) => {
        const id = `field-${f.name}`
        return (
          <div key={f.name} className={`flex flex-col gap-2 ${f.full || f.type === 'textarea' ? 'md:col-span-2' : ''}`}>
            <label htmlFor={id} className="text-sm font-semibold">
              {f.label}
              {f.required && <span className="text-coral"> *</span>}
            </label>
            {f.type === 'select' ? (
              <select id={id} name={f.name} required={f.required} defaultValue="" className={inputClass}>
                <option value="" disabled>
                  Select an option
                </option>
                {f.options?.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            ) : f.type === 'textarea' ? (
              <textarea id={id} name={f.name} required={f.required} rows={4} className={inputClass} />
            ) : (
              <input
                id={id}
                name={f.name}
                type={f.type ?? 'text'}
                required={f.required}
                autoComplete={f.autoComplete}
                className={inputClass}
              />
            )}
          </div>
        )
      })}
      <button
        type="submit"
        className="rounded-full bg-coral px-6 py-3.5 font-semibold text-white shadow-pill transition-transform hover:-translate-y-0.5 md:col-span-2 md:justify-self-start md:px-10"
      >
        {submitLabel}
      </button>
    </form>
  )
}
