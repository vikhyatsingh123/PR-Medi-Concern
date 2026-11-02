import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Pill, ShieldCheck, Sparkles } from 'lucide-react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { IMG } from '../../data/images'
import Button from '../ui/Button'

const lines = [
  [{ w: 'Science' }, { w: 'that' }, { w: 'cares.', accent: true }],
  [{ w: 'Quality' }, { w: 'that' }, { w: 'scales.', accent: true }],
]

const quickLinks = [
  { label: 'Explore our products', sub: '500+ formulations', to: '/products' },
  { label: 'Partner with us', sub: 'CDMO & third-party', to: '/contact' },
  { label: 'Build your career', sub: '6 open roles', to: '/careers' },
]

const ease = [0.22, 1, 0.36, 1] as const

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const collageY = useTransform(scrollYProgress, [0, 1], [0, 90])
  const glowY = useTransform(scrollYProgress, [0, 1], [0, -60])

  let wordIndex = 0

  return (
    <section ref={ref} className="hero-glow relative isolate overflow-hidden">
      <div className="dot-grid absolute inset-0 -z-10 opacity-[0.12] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
      <motion.div
        style={{ y: glowY }}
        aria-hidden
        className="absolute top-1/3 -left-40 -z-10 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl"
      />

      <div className="container-x grid items-center gap-16 pt-14 pb-16 lg:grid-cols-12 lg:pt-20">
        {/* Copy */}
        <div className="lg:col-span-7">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 py-1.5 pr-4 pl-1.5 text-xs font-medium text-white/80 backdrop-blur"
          >
            <span className="rounded-full bg-brand-500 px-2.5 py-1 text-[11px] font-bold tracking-wide text-white uppercase">
              New
            </span>
            Oral solids block now live — 40% more capacity
            <ArrowRight className="h-3.5 w-3.5 text-brand-400" />
          </motion.span>

          <h1 className="mt-7 text-[2.35rem] leading-[1.04] font-extrabold tracking-tight text-white sm:text-6xl xl:text-7xl">
            {lines.map((line, li) => (
              <span key={li} className="block">
                {line.map((word) => {
                  const i = wordIndex++
                  return (
                    <span key={word.w} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
                      <motion.span
                        className={`inline-block pr-[0.22em] ${word.accent ? 'text-brand-500' : 'text-white'}`}
                        initial={{ y: '110%' }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, delay: 0.15 + i * 0.09, ease }}
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
            transition={{ duration: 0.7, delay: 0.7, ease }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-white/70"
          >
            From formulation to finished dose, PR Medi Concern manufactures pharmaceuticals, nutraceuticals and
            dermatology products to global standards — trusted by 1,200+ partners.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button to="/products">
              Explore Products <ArrowRight className="h-4 w-4" />
            </Button>
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-white"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full border border-white/25 transition group-hover:border-brand-500 group-hover:bg-brand-500">
                <ArrowUpRight className="h-4 w-4" />
              </span>
              About our company
            </Link>
          </motion.div>
        </div>

        {/* Image collage */}
        <motion.div style={{ y: collageY }} className="relative mx-auto aspect-[5/6] w-full max-w-md lg:col-span-5 lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease }}
            className="absolute top-0 left-0 h-[78%] w-[58%] overflow-hidden rounded-t-[999px] rounded-b-[2rem] ring-1 ring-white/15"
          >
            <img src={IMG.research} alt="Doctor reviewing diagnostic imaging" fetchPriority="high" className="h-full w-full object-cover object-[78%_center]" />
            <div className="absolute inset-0 bg-linear-to-t from-ink/50 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.45, ease }}
            className="absolute top-[4%] right-0 aspect-square w-[38%] overflow-hidden rounded-full ring-4 ring-brand-500/40"
          >
            <img src={IMG.capsules} alt="Orange capsules" className="h-full w-full object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.55, ease }}
            className="absolute right-0 bottom-0 h-[44%] w-[56%] overflow-hidden rounded-[2rem] ring-1 ring-white/15"
          >
            <img src={IMG.lab} alt="Quality control laboratory" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-ink/60 to-transparent" />
          </motion.div>

          {/* Rotating certification badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 14 }}
            className="absolute top-[40%] left-[46%] grid h-28 w-28 place-items-center rounded-full bg-brand-500 shadow-brand"
          >
            <motion.svg
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            >
              <defs>
                <path id="badge-circle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
              </defs>
              <text className="fill-white text-[9.5px] font-bold tracking-[0.22em] uppercase">
                <textPath href="#badge-circle">WHO-GMP • ISO 9001 • FSSAI •</textPath>
              </text>
            </motion.svg>
            <Pill className="h-7 w-7 -rotate-45 text-white" strokeWidth={2.2} />
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-[6%] left-0 flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 p-3.5 pr-5 text-white backdrop-blur-xl"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-bold">100% batch tested</p>
              <p className="text-xs text-white/60">NABL accredited lab</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute top-[30%] -left-3 hidden items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-xl sm:flex"
          >
            <Sparkles className="h-4 w-4 text-brand-400" /> 15+ years of trust
          </motion.div>
        </motion.div>
      </div>

      {/* Quick links strip */}
      <div className="container-x pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease }}
          className="grid overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl sm:grid-cols-3 sm:gap-px"
        >
          {quickLinks.map((q) => (
            <Link
              key={q.to}
              to={q.to}
              className="group flex items-center justify-between gap-4 bg-ink/60 p-6 transition hover:bg-brand-500"
            >
              <div>
                <p className="font-display text-base font-bold text-white">{q.label}</p>
                <p className="mt-0.5 text-sm text-white/55 transition group-hover:text-white/85">{q.sub}</p>
              </div>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 text-white transition group-hover:bg-white group-hover:text-brand-600">
                <ArrowUpRight className="h-5 w-5 transition group-hover:rotate-45" />
              </span>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
