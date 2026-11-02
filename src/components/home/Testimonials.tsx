import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Quote, Star } from 'lucide-react'
import { useEffect, useState } from 'react'
import { IMG } from '../../data/images'
import { testimonials } from '../../data/site'
import SectionHeading from '../ui/SectionHeading'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const t = testimonials[index]

  const go = (dir: number) => setIndex((i) => (i + dir + testimonials.length) % testimonials.length)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 7000)
    return () => clearInterval(id)
  }, [paused])

  return (
    <section className="section-y bg-brand-50/60">
      <div className="container-x">
        <SectionHeading align="left" eyebrow="Testimonials" title="Trusted by the brands you know" />

        <div
          className="mt-14 grid items-stretch gap-8 lg:grid-cols-5"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative min-h-80 overflow-hidden rounded-[2.5rem] lg:col-span-2">
            <img src={IMG.vaccine} alt="Healthcare professional caring for a patient" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-ink/70 to-transparent" />
            <div className="absolute right-5 bottom-5 left-5 flex items-center justify-between rounded-2xl bg-white/90 p-4 backdrop-blur">
              <div>
                <p className="font-display text-2xl font-extrabold text-ink">4.9/5</p>
                <p className="text-xs text-slate-500">Average partner rating</p>
              </div>
              <div className="flex gap-0.5 text-brand-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
            </div>
          </div>

          <div className="relative flex flex-col justify-between rounded-[2.5rem] bg-white p-8 shadow-soft sm:p-12 lg:col-span-3">
            <Quote className="absolute top-8 right-8 h-20 w-20 text-brand-100" strokeWidth={1.4} />
            <div className="relative min-h-[15rem]">
              <AnimatePresence mode="wait">
                <motion.figure
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4 }}
                >
                  <blockquote className="font-display text-xl leading-snug font-semibold text-ink sm:text-2xl lg:text-[1.75rem]">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-4">
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-500 font-display text-lg font-bold text-white">
                      {t.name
                        .replace('Dr. ', '')
                        .split(' ')
                        .map((w) => w[0])
                        .slice(0, 2)
                        .join('')}
                    </span>
                    <div>
                      <p className="font-bold text-ink">{t.name}</p>
                      <p className="text-sm text-slate-500">{t.role}</p>
                    </div>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Show testimonial ${i + 1}`}
                    className={`h-2.5 rounded-full transition-all ${i === index ? 'w-8 bg-brand-500' : 'w-2.5 bg-slate-300'}`}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                {[
                  { d: -1, icon: ArrowLeft, label: 'Previous testimonial' },
                  { d: 1, icon: ArrowRight, label: 'Next testimonial' },
                ].map((b) => (
                  <button
                    key={b.d}
                    onClick={() => go(b.d)}
                    aria-label={b.label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 transition hover:border-brand-500 hover:bg-brand-500 hover:text-white"
                  >
                    <b.icon className="h-5 w-5" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
