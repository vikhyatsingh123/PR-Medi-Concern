import { motion, useScroll, useSpring } from 'framer-motion'
import { ClipboardCheck, FlaskConical, Microscope, PackageCheck } from 'lucide-react'
import { useRef } from 'react'
import { IMG } from '../../data/images'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const steps = [
  {
    icon: FlaskConical,
    title: 'Develop',
    text: 'Formulation design, analytical method development, stability studies and tech transfer.',
  },
  {
    icon: ClipboardCheck,
    title: 'Register',
    text: 'Regulatory dossiers prepared and approvals managed for domestic and export markets.',
  },
  {
    icon: Microscope,
    title: 'Manufacture & test',
    text: 'cGMP production with in-process checks and full release testing in our NABL accredited lab.',
  },
  {
    icon: PackageCheck,
    title: 'Deliver',
    text: 'Packaging, serialisation and on-time dispatch through our integrated logistics network.',
  },
]

export default function Process() {
  const list = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: list, offset: ['start 65%', 'end 55%'] })
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })

  return (
    <section className="section-y">
      <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-24">
        {/* Sticky intro */}
        <div className="self-start lg:sticky lg:top-32">
          <SectionHeading
            align="left"
            eyebrow="How we work"
            title="From idea to shelf in four clear steps"
            text="A transparent process that keeps your product on schedule and on spec."
          />
          <Reveal delay={0.1} className="mt-10 hidden lg:block">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
              <img src={IMG.pills} alt="Assorted capsules and tablets" loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-ink/60 to-transparent" />
              <p className="absolute bottom-5 left-6 font-display text-lg font-bold text-white">Idea → Molecule → Medicine</p>
            </div>
          </Reveal>
        </div>

        {/* Steps with scroll-linked progress line */}
        <div ref={list} className="relative pl-16 sm:pl-20">
          <div className="absolute top-2 bottom-2 left-6 w-0.5 bg-slate-200 sm:left-8" />
          <motion.div
            style={{ scaleY: fill }}
            className="absolute top-2 bottom-2 left-6 w-0.5 origin-top bg-brand-500 sm:left-8"
          />
          <div className="space-y-10">
            {steps.map((s, i) => (
              <Reveal key={s.title} x={30} y={0} className="relative">
                <span className="absolute top-0 -left-16 grid h-12 w-12 place-items-center rounded-full bg-brand-500 text-white shadow-brand ring-8 ring-white sm:-left-20 sm:h-16 sm:w-16">
                  <s.icon className="h-5 w-5 sm:h-7 sm:w-7" />
                </span>
                <div className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:border-brand-300 hover:shadow-soft sm:p-8">
                  <span className="font-display text-sm font-bold tracking-widest text-brand-500">STEP 0{i + 1}</span>
                  <h3 className="mt-1 text-xl font-bold sm:text-2xl">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-600">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
