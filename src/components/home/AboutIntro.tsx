import { motion } from 'framer-motion'
import { Factory, FlaskConical, Globe2, Phone, ShieldCheck } from 'lucide-react'
import { IMG } from '../../data/images'
import { site } from '../../data/site'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const features = [
  { icon: Factory, label: '5 cGMP plants' },
  { icon: FlaskConical, label: 'In-house R&D' },
  { icon: ShieldCheck, label: 'NABL accredited QC' },
  { icon: Globe2, label: 'Exports to 25+ countries' },
]

export default function AboutIntro() {
  return (
    <section className="section-y overflow-hidden">
      <div className="container-x grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <Reveal x={-40} y={0}>
          <div className="relative mx-auto max-w-lg pb-16 sm:pr-16">
            <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem]">
              <img src={IMG.lab} alt="Scientists working in the laboratory" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="absolute right-0 bottom-0 h-52 w-44 overflow-hidden rounded-3xl border-8 border-white shadow-soft sm:h-60 sm:w-52">
              <img src={IMG.care} alt="Doctor consulting a patient" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-8 -left-4 rounded-3xl bg-brand-500 px-6 py-5 text-white shadow-brand sm:-left-8"
            >
              <p className="font-display text-5xl leading-none font-extrabold">15+</p>
              <p className="mt-1 text-sm font-medium text-white/85">Years of excellence</p>
            </motion.div>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            align="left"
            eyebrow="About PR Medi Concern"
            title="We turn science into medicines people can depend on"
          />
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Since 2008 we have grown from a 20-person formulation unit into an integrated healthcare manufacturer —
              covering development, regulatory, production, quality control and logistics under one roof.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((f) => (
                <li key={f.label} className="flex items-center gap-3.5 rounded-2xl border border-slate-200 p-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-500">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <span className="font-semibold text-ink">{f.label}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Button to="/about">Discover our story</Button>
              <a href={site.phoneHref} className="group flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-ink text-white transition group-hover:bg-brand-500">
                  <Phone className="h-5 w-5" />
                </span>
                <span className="leading-tight">
                  <span className="block text-xs text-slate-500">Call us anytime</span>
                  <span className="font-display font-bold text-ink">{site.phone}</span>
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
