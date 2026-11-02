import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Check, ClipboardCheck, Factory, FlaskConical, Microscope, type LucideIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { IMG } from '../../data/images'
import SectionHeading from '../ui/SectionHeading'

interface Capability {
  label: string
  title: string
  text: string
  points: string[]
  image: string
  icon: LucideIcon
}

const capabilities: Capability[] = [
  {
    label: 'Manufacturing',
    title: 'High-capacity, automated production',
    text: 'Five cGMP-compliant plants with dedicated lines for oral solids, liquids, injectables and topicals.',
    points: ['2.5B+ units annual capacity', 'Dedicated beta-lactam block', 'Serialisation-ready packaging'],
    image: IMG.facility,
    icon: Factory,
  },
  {
    label: 'Research & Development',
    title: 'Formulations designed to perform',
    text: 'A DSIR-recognised R&D centre develops new molecules, improves existing products and scales them up.',
    points: ['QbD-driven development', 'Stability & bioequivalence studies', 'Seamless tech transfer'],
    image: IMG.research,
    icon: FlaskConical,
  },
  {
    label: 'Quality Control',
    title: 'Every batch tested, every time',
    text: 'NABL-accredited laboratories with modern HPLC, GC and microbiology suites guard each release.',
    points: ['Multi-stage in-process checks', 'Full data-integrity compliance', 'Retained samples & stability tracking'],
    image: IMG.tubes,
    icon: Microscope,
  },
  {
    label: 'Regulatory',
    title: 'Approvals handled end to end',
    text: 'Our regulatory team prepares dossiers and manages approvals for domestic and export markets.',
    points: ['CTD / ACTD dossiers', '120+ product approvals', 'Audit-ready documentation'],
    image: IMG.paperwork,
    icon: ClipboardCheck,
  },
]

const INTERVAL = 6000

export default function Capabilities() {
  const [active, setActive] = useState(0)
  const reduce = useReducedMotion()
  const current = capabilities[active]

  // Auto-advance; a click resets the timer because `active` changes.
  useEffect(() => {
    if (reduce) return
    const id = setTimeout(() => setActive((a) => (a + 1) % capabilities.length), INTERVAL)
    return () => clearTimeout(id)
  }, [active, reduce])

  return (
    <section className="section-y">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our capabilities"
          title="Everything your product needs, under one roof"
        />

        <div className="mt-14 grid items-stretch gap-10 lg:grid-cols-12">
          {/* Tabs */}
          <div className="flex flex-col gap-3 lg:col-span-5" role="tablist" aria-label="Capabilities">
            {capabilities.map((c, i) => {
              const open = i === active
              return (
                <div
                  key={c.label}
                  className={`relative overflow-hidden rounded-3xl border transition-colors ${
                    open ? 'border-brand-200 bg-brand-50' : 'border-slate-200 bg-white hover:border-brand-200'
                  }`}
                >
                  <button
                    role="tab"
                    aria-selected={open}
                    onClick={() => setActive(i)}
                    className="flex w-full items-center gap-4 p-5 text-left"
                  >
                    <span
                      className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl transition ${
                        open ? 'bg-brand-500 text-white shadow-brand' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      <c.icon className="h-6 w-6" />
                    </span>
                    <span className="flex-1">
                      <span className="block text-xs font-bold tracking-widest text-brand-500">0{i + 1}</span>
                      <span className="font-display text-lg font-bold text-ink">{c.label}</span>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-6 pl-[5.25rem]">
                          <h3 className="text-base font-bold">{c.title}</h3>
                          <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{c.text}</p>
                          <ul className="mt-4 space-y-2">
                            {c.points.map((p) => (
                              <li key={p} className="flex items-center gap-2.5 text-sm font-medium text-ink">
                                <Check className="h-4 w-4 text-brand-500" strokeWidth={3} /> {p}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {open && !reduce && (
                    <motion.span
                      key={active}
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: INTERVAL / 1000, ease: 'linear' }}
                      className="absolute bottom-0 left-0 h-[3px] bg-brand-500"
                    />
                  )}
                </div>
              )
            })}
          </div>

          {/* Image */}
          <div className="relative min-h-[22rem] overflow-hidden rounded-[2.5rem] bg-ink lg:col-span-7">
            <AnimatePresence mode="popLayout">
              <motion.img
                key={current.image}
                src={current.image}
                alt={current.title}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-linear-to-t from-ink/80 via-transparent to-transparent" />
            <AnimatePresence mode="wait">
              <motion.div
                key={current.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="absolute right-6 bottom-6 left-6 flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-4 text-white backdrop-blur-xl"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-500">
                  <current.icon className="h-6 w-6" />
                </span>
                <p className="font-display font-bold">{current.title}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
