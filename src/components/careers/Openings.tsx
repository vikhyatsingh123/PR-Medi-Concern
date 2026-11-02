import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Briefcase, ChevronDown, Clock, Mail, MapPin } from 'lucide-react'
import { useState } from 'react'
import { jobDepartments, jobs } from '../../data/careers'
import Button from '../ui/Button'
import SectionHeading from '../ui/SectionHeading'

export default function Openings({ onApply }: { onApply: (title?: string) => void }) {
  const [dept, setDept] = useState('All')
  const [openId, setOpenId] = useState<string | null>(jobs[0].id)

  const visible = jobs.filter((j) => dept === 'All' || j.department === dept)

  return (
    <section id="openings" className="section-y scroll-mt-24 bg-slate-50">
      <div className="container-x">
        <SectionHeading align="left" eyebrow="Open positions" title="Find your next role" />

        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="flex flex-wrap gap-2">
              {jobDepartments.map((d) => (
                <button
                  key={d}
                  onClick={() => setDept(d)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    d === dept ? 'bg-brand-500 text-white shadow-brand' : 'bg-white text-ink-soft hover:text-brand-600'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
            <p className="mt-5 text-sm text-slate-500">
              <strong className="text-ink">{visible.length}</strong> open role{visible.length === 1 ? '' : 's'}
            </p>

            <motion.ul layout className="mt-4 space-y-4">
              <AnimatePresence mode="popLayout">
                {visible.map((j) => {
                  const open = openId === j.id
                  return (
                    <motion.li
                      key={j.id}
                      layout
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      className={`relative overflow-hidden rounded-3xl border bg-white transition ${
                        open ? 'border-brand-300 shadow-soft' : 'border-slate-200 hover:border-brand-200'
                      }`}
                    >
                      <span
                        className={`absolute inset-y-0 left-0 w-1.5 bg-brand-500 transition-transform duration-300 ${
                          open ? 'scale-y-100' : 'scale-y-0'
                        }`}
                      />
                      <button
                        onClick={() => setOpenId(open ? null : j.id)}
                        aria-expanded={open}
                        className="flex w-full items-start justify-between gap-4 p-6 text-left"
                      >
                        <div>
                          <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-600">
                            {j.department}
                          </span>
                          <h3 className="mt-3 text-lg font-bold sm:text-xl">{j.title}</h3>
                          <div className="mt-2.5 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-slate-500">
                            <span className="flex items-center gap-1.5">
                              <MapPin className="h-4 w-4 text-brand-500" /> {j.location}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Briefcase className="h-4 w-4 text-brand-500" /> {j.experience}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Clock className="h-4 w-4 text-brand-500" /> {j.type}
                            </span>
                          </div>
                        </div>
                        <motion.span
                          animate={{ rotate: open ? 180 : 0 }}
                          className={`grid h-10 w-10 shrink-0 place-items-center rounded-full transition ${
                            open ? 'bg-brand-500 text-white' : 'bg-slate-100 text-slate-500'
                          }`}
                        >
                          <ChevronDown className="h-5 w-5" />
                        </motion.span>
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
                            <div className="border-t border-slate-100 px-6 pt-5 pb-6">
                              <p className="text-slate-600">{j.summary}</p>
                              <h4 className="mt-5 text-xs font-bold tracking-widest text-ink uppercase">Requirements</h4>
                              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-slate-600 marker:text-brand-500">
                                {j.requirements.map((r) => (
                                  <li key={r}>{r}</li>
                                ))}
                              </ul>
                              <Button className="mt-6" onClick={() => onApply(j.title)}>
                                Apply for this role <ArrowRight className="h-4 w-4" />
                              </Button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.li>
                  )
                })}
              </AnimatePresence>
            </motion.ul>
          </div>

          {/* Side card */}
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <div className="hero-glow relative isolate overflow-hidden rounded-[2rem] p-8 text-white">
              <div className="dot-grid absolute inset-0 -z-10 opacity-[0.12]" />
              <h3 className="text-2xl font-extrabold !text-white">Don't see your role?</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                We are always keen to meet talented people. Send us your profile and we'll reach out when something fits.
              </p>
              <Button className="mt-6 w-full" onClick={() => onApply()}>
                General application
              </Button>
              <a
                href="mailto:careers@prmediconcern.com"
                className="mt-5 flex items-center justify-center gap-2 text-sm text-white/70 hover:text-brand-300"
              >
                <Mail className="h-4 w-4 text-brand-400" /> careers@prmediconcern.com
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
