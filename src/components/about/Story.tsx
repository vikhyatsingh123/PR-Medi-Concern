import { motion } from 'framer-motion'
import { BadgeCheck } from 'lucide-react'
import { IMG } from '../../data/images'
import { team } from '../../data/site'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const points = ['WHO-GMP certified plants', 'In-house R&D centre', 'NABL accredited labs', 'Pan-India distribution']

export default function Story() {
  const founder = team[0]
  return (
    <section className="section-y overflow-hidden">
      <div className="container-x grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Our story"
            title="From a 20-person unit to an integrated healthcare manufacturer"
          />
          <Reveal delay={0.1}>
            <p className="mt-6 leading-relaxed text-slate-600">
              PR Medi Concern began in 2008 as a small formulation unit with a big ambition — to make quality medicines
              accessible. Today we operate five cGMP-compliant facilities and serve over a thousand customers across
              India and overseas.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Our integrated approach covers development, regulatory, manufacturing, quality control and logistics,
              giving partners a single, reliable point of contact. (Dummy copy — replace with your company story.)
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-sm font-semibold text-ink">
                  <BadgeCheck className="h-5 w-5 text-brand-500" /> {p}
                </li>
              ))}
            </ul>

            <figure className="mt-10 flex gap-5 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <img
                src={founder.image}
                alt={founder.name}
                loading="lazy"
                className="h-16 w-16 shrink-0 rounded-full object-cover"
              />
              <div>
                <blockquote className="font-display text-base leading-snug font-semibold text-ink">
                  “We never set out to be the biggest. We set out to be the most dependable.”
                </blockquote>
                <figcaption className="mt-2 text-sm text-slate-500">
                  <span className="font-bold text-ink">{founder.name}</span> · {founder.role}
                </figcaption>
              </div>
            </figure>
          </Reveal>
        </div>

        <Reveal x={40} y={0}>
          <div className="relative mx-auto max-w-lg pb-12 pl-10 sm:pl-0">
            <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem]">
              <img src={IMG.facility} alt="Our modern production facility" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-0 left-0 h-44 w-44 overflow-hidden rounded-full border-8 border-white shadow-soft sm:-left-10 sm:h-52 sm:w-52">
              <img src={IMG.capsules} alt="Orange capsules" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-8 -right-3 rounded-3xl bg-brand-500 px-6 py-5 text-white shadow-brand sm:-right-8"
            >
              <p className="text-xs font-semibold tracking-widest text-white/80 uppercase">Est.</p>
              <p className="font-display text-4xl leading-none font-extrabold">2008</p>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
