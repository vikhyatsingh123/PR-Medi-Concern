import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { IMG } from '../../data/images'

const ease = [0.22, 1, 0.36, 1] as const

const facts = [
  { label: 'Founded', value: '2008' },
  { label: 'Headquarters', value: 'Panchkula, India' },
  { label: 'People', value: '350+' },
  { label: 'Export markets', value: '25+' },
]

const lines = [
  [{ w: 'Built' }, { w: 'on' }, { w: 'trust.', accent: true }],
  [{ w: 'Driven' }, { w: 'by' }, { w: 'science.', accent: true }],
]

export default function AboutHero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])

  let i = 0

  return (
    <section ref={ref} className="hero-glow relative isolate overflow-hidden">
      <motion.img
        src={IMG.lab}
        alt=""
        style={{ y }}
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-ink via-ink/85 to-ink/30" />
      <div className="dot-grid absolute inset-0 -z-10 opacity-[0.1] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

      <div className="container-x pt-14 pb-10 sm:pt-20">
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-1.5 text-sm text-white/65"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="font-medium text-brand-400">About Us</span>
        </motion.nav>

        <h1 className="mt-8 text-[2.35rem] leading-[1.04] font-extrabold tracking-tight text-white sm:text-6xl xl:text-7xl">
          {lines.map((line, li) => (
            <span key={li} className="block">
              {line.map((word) => {
                const idx = i++
                return (
                  <span key={word.w} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
                    <motion.span
                      className={`inline-block pr-[0.22em] ${word.accent ? 'text-brand-500' : 'text-white'}`}
                      initial={{ y: '110%' }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.8, delay: 0.1 + idx * 0.09, ease }}
                    >
                      {word.w}
                    </motion.span>
                  </span>
                )
              })}
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease }}
          className="mt-7 max-w-xl text-lg leading-relaxed text-white/70"
        >
          For over 15 years we have made medicines that patients and partners can depend on — guided by one simple
          belief: healthcare should be dependable.
        </motion.p>

        <motion.dl
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease }}
          className="mt-16 grid grid-cols-2 overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl sm:grid-cols-4 sm:gap-px"
        >
          {facts.map((f) => (
            <div key={f.label} className="bg-ink/60 p-6">
              <dt className="text-xs font-semibold tracking-widest text-white/50 uppercase">{f.label}</dt>
              <dd className="mt-1.5 font-display text-xl font-bold text-white">{f.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
      <div className="h-12" />
    </section>
  )
}
