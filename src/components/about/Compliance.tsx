import { Award } from 'lucide-react'
import { certifications } from '../../data/site'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function Compliance() {
  return (
    <section className="hero-glow section-y relative isolate overflow-hidden">
      <div className="dot-grid absolute inset-0 -z-10 opacity-[0.1]" />
      <div className="container-x">
        <SectionHeading
          light
          eyebrow="Compliance"
          title="Certified for quality & safety"
          text="Our facilities and processes are regularly audited by national and international bodies."
        />
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {certifications.map((c, i) => (
            <Reveal key={c} delay={i * 0.06}>
              <div className="flex h-full flex-col items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur transition hover:-translate-y-1.5 hover:border-brand-500/70 hover:bg-white/10">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-500/15 text-brand-400">
                  <Award className="h-7 w-7" />
                </span>
                <span className="text-sm font-semibold text-white">{c}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
