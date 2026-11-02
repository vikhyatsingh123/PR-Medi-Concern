import { FileText, Send, UploadCloud } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { jobs } from '../../data/careers'
import Button from '../ui/Button'
import FormSuccess from '../ui/FormSuccess'
import Reveal from '../ui/Reveal'

const expectations = ['We review every application personally', 'You will hear back within 7 working days', 'Your data is only used for hiring']

interface Props {
  position: string
  setPosition: (p: string) => void
}

export default function ApplyForm({ position, setPosition }: Props) {
  const [sent, setSent] = useState(false)
  const [fileName, setFileName] = useState('')

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    // TODO: send application (including the resume file) to your backend.
    setSent(true)
  }

  return (
    <section id="apply" className="hero-glow section-y relative isolate scroll-mt-20 overflow-hidden">
      <div className="dot-grid absolute inset-0 -z-10 opacity-[0.1]" />
      <div className="container-x grid items-start gap-12 lg:grid-cols-5 lg:gap-16">
        <Reveal className="lg:col-span-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-widest text-brand-300 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" /> Apply now
          </span>
          <h2 className="mt-4 text-3xl font-extrabold !text-white sm:text-4xl">Send us your application</h2>
          <p className="mt-4 text-white/70">
            Don't see a matching role? Apply anyway — we'll keep your profile on file for future openings.
          </p>
          <ul className="mt-8 space-y-3">
            {expectations.map((e) => (
              <li key={e} className="flex items-center gap-3 text-sm font-medium text-white/85">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-500 text-xs font-bold text-white">✓</span>
                {e}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-3">
          <div className="rounded-[2rem] bg-white p-6 shadow-soft sm:p-10">
            {sent ? (
              <FormSuccess
                title="Application submitted"
                text="Thank you! Our HR team will review your profile and get in touch if there's a fit."
                onReset={() => {
                  setSent(false)
                  setFileName('')
                }}
              />
            ) : (
              <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="ap-name" className="mb-1.5 block text-sm font-semibold text-ink">
                    Full name
                  </label>
                  <input id="ap-name" required className="input" placeholder="Your name" autoComplete="name" />
                </div>
                <div>
                  <label htmlFor="ap-email" className="mb-1.5 block text-sm font-semibold text-ink">
                    Email
                  </label>
                  <input id="ap-email" type="email" required className="input" placeholder="you@example.com" autoComplete="email" />
                </div>
                <div>
                  <label htmlFor="ap-phone" className="mb-1.5 block text-sm font-semibold text-ink">
                    Phone
                  </label>
                  <input id="ap-phone" type="tel" required className="input" placeholder="+91 00000 00000" autoComplete="tel" />
                </div>
                <div>
                  <label htmlFor="ap-pos" className="mb-1.5 block text-sm font-semibold text-ink">
                    Position
                  </label>
                  <select id="ap-pos" className="input" value={position} onChange={(e) => setPosition(e.target.value)} required>
                    <option value="" disabled>
                      Select a position
                    </option>
                    {jobs.map((j) => (
                      <option key={j.id}>{j.title}</option>
                    ))}
                    <option>General application</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <span className="mb-1.5 block text-sm font-semibold text-ink">Resume (PDF / DOC)</span>
                  <label
                    htmlFor="ap-resume"
                    className="flex cursor-pointer flex-col items-center gap-2 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-4 py-8 text-center transition hover:border-brand-400 hover:bg-brand-50 focus-within:border-brand-500"
                  >
                    {fileName ? (
                      <>
                        <FileText className="h-8 w-8 text-brand-500" />
                        <span className="text-sm font-semibold text-ink">{fileName}</span>
                        <span className="text-xs text-slate-500">Click to replace</span>
                      </>
                    ) : (
                      <>
                        <UploadCloud className="h-8 w-8 text-brand-500" />
                        <span className="text-sm font-semibold text-ink">Click to upload your resume</span>
                        <span className="text-xs text-slate-500">PDF, DOC or DOCX</span>
                      </>
                    )}
                    <input
                      id="ap-resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      required
                      className="sr-only"
                      onChange={(e) => setFileName(e.target.files?.[0]?.name ?? '')}
                    />
                  </label>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="ap-note" className="mb-1.5 block text-sm font-semibold text-ink">
                    Cover note <span className="font-normal text-slate-400">(optional)</span>
                  </label>
                  <textarea id="ap-note" rows={4} className="input resize-none" placeholder="Tell us a little about yourself" />
                </div>
                <Button type="submit" className="sm:col-span-2">
                  <Send className="h-4 w-4" /> Submit application
                </Button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
