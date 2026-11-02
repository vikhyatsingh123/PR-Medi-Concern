import { PhoneCall } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { inquiryTypes } from '../data/site'
import Button from './ui/Button'
import FormSuccess from './ui/FormSuccess'

// "Arrange a quick call back" form. No backend yet — submission only shows a success state.
export default function CallbackForm() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    // TODO: send form data to your API / email service.
    setSent(true)
  }

  if (sent) {
    return (
      <FormSuccess
        title="Request received"
        text="Our team will call you back within one working day."
        onReset={() => setSent(false)}
      />
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label htmlFor="cb-name" className="mb-1.5 block text-sm font-semibold text-ink">
          Full name
        </label>
        <input id="cb-name" name="name" required className="input" placeholder="Your name" autoComplete="name" />
      </div>
      <div>
        <label htmlFor="cb-phone" className="mb-1.5 block text-sm font-semibold text-ink">
          Phone number
        </label>
        <input
          id="cb-phone"
          name="phone"
          type="tel"
          required
          className="input"
          placeholder="+91 00000 00000"
          autoComplete="tel"
        />
      </div>
      <div>
        <label htmlFor="cb-type" className="mb-1.5 block text-sm font-semibold text-ink">
          I'm interested in
        </label>
        <select id="cb-type" name="type" className="input" defaultValue={inquiryTypes[0]}>
          {inquiryTypes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <Button type="submit" className="w-full">
        <PhoneCall className="h-4 w-4" /> Request a call back
      </Button>
    </form>
  )
}
