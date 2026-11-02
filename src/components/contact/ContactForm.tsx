import { Send } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { inquiryTypes } from '../../data/site'
import Button from '../ui/Button'
import FormSuccess from '../ui/FormSuccess'

export default function ContactForm({ product }: { product: string | null }) {
  const [sent, setSent] = useState(false)
  const [type, setType] = useState(inquiryTypes[0])

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    // TODO: send form data to your API / email service.
    setSent(true)
  }

  return (
    <div className="rounded-[2rem] bg-white p-6 shadow-soft ring-1 ring-slate-100 sm:p-10">
      <h2 className="text-2xl font-extrabold sm:text-3xl">Send us a message</h2>
      <p className="mt-2 text-sm text-slate-600">Fill in the form and we'll respond within one working day.</p>

      {sent ? (
        <FormSuccess
          title="Message sent"
          text="Thank you for reaching out. A member of our team will contact you shortly."
          onReset={() => setSent(false)}
        />
      ) : (
        <form onSubmit={onSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
          <fieldset className="sm:col-span-2">
            <legend className="mb-2.5 text-sm font-semibold text-ink">I'm interested in</legend>
            <div className="flex flex-wrap gap-2">
              {inquiryTypes.map((t) => (
                <label key={t} className="cursor-pointer">
                  <input
                    type="radio"
                    name="inquiry"
                    value={t}
                    checked={type === t}
                    onChange={() => setType(t)}
                    className="peer sr-only"
                  />
                  <span className="block rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-ink-soft transition peer-checked:border-brand-500 peer-checked:bg-brand-500 peer-checked:text-white peer-checked:shadow-brand peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-brand-500 hover:border-brand-300">
                    {t}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <div>
            <label htmlFor="c-name" className="mb-1.5 block text-sm font-semibold text-ink">
              Full name
            </label>
            <input id="c-name" required className="input" placeholder="Your name" autoComplete="name" />
          </div>
          <div>
            <label htmlFor="c-company" className="mb-1.5 block text-sm font-semibold text-ink">
              Company <span className="font-normal text-slate-400">(optional)</span>
            </label>
            <input id="c-company" className="input" placeholder="Company name" autoComplete="organization" />
          </div>
          <div>
            <label htmlFor="c-email" className="mb-1.5 block text-sm font-semibold text-ink">
              Email
            </label>
            <input id="c-email" type="email" required className="input" placeholder="you@example.com" autoComplete="email" />
          </div>
          <div>
            <label htmlFor="c-phone" className="mb-1.5 block text-sm font-semibold text-ink">
              Phone
            </label>
            <input id="c-phone" type="tel" className="input" placeholder="+91 00000 00000" autoComplete="tel" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="c-msg" className="mb-1.5 block text-sm font-semibold text-ink">
              Message
            </label>
            {/* key makes the prefilled value update if the ?product= param changes */}
            <textarea
              key={product ?? 'none'}
              id="c-msg"
              rows={5}
              required
              className="input resize-none"
              placeholder="How can we help you?"
              defaultValue={product ? `Hello, I would like to enquire about ${product}.` : ''}
            />
          </div>
          <Button type="submit" className="sm:col-span-2 sm:justify-self-start">
            <Send className="h-4 w-4" /> Send message
          </Button>
        </form>
      )}
    </div>
  )
}
