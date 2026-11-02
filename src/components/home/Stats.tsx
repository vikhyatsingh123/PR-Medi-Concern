import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useRef } from 'react'
import { IMG } from '../../data/images'
import { stats } from '../../data/site'
import Button from '../ui/Button'
import Counter from '../ui/Counter'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function Stats() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])

  return (
    <section ref={ref} className="section-y relative isolate overflow-hidden bg-ink">
      <motion.img
        src={IMG.lab}
        alt=""
        loading="lazy"
        style={{ y }}
        className="absolute inset-x-0 -top-[15%] -z-20 h-[130%] w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-ink/90" />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-brand-950/80 to-transparent" />

      <div className="container-x grid items-center gap-14 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <SectionHeading
            light
            align="left"
            eyebrow="Our scale"
            title="Manufacturing confidence, measured."
            text="Capacity, reliability and trust — the numbers behind every batch we ship."
          />
          <Reveal delay={0.15} className="mt-8">
            <Button to="/about" variant="white">
              Our capabilities <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 lg:col-span-3">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.1}
              className={`border-white/15 p-6 sm:p-10 ${i % 2 === 0 ? 'border-r' : ''} ${i < 2 ? 'border-b' : ''}`}
            >
              <p className="bg-linear-to-b from-white to-brand-400 bg-clip-text font-display text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl xl:text-7xl">
                <Counter to={s.value} suffix={s.suffix} decimals={s.decimals} />
              </p>
              <p className="mt-3 text-sm font-medium text-white/65">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
