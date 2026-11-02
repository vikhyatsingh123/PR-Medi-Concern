import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { useRef, type ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  /** Breadcrumb label for the current page. */
  label: string
  /** Headline. Use "|" for a line break and a "~" prefix to colour a word, e.g. "Built on ~trust.|Driven by ~science." */
  heading: string
  text: string
  image: string
  /** Extra content below the paragraph (search bar, buttons, chips…). */
  children?: ReactNode
  /** Tailwind classes for bottom padding — increase when the next section overlaps the hero. */
  padBottom?: string
}

const ease = [0.22, 1, 0.36, 1] as const

// Dark, image-backed banner used at the top of every inner page.
export default function PageHero({ label, heading, text, image, children, padBottom = 'pb-16 sm:pb-24' }: Props) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])

  const lines = heading.split('|').map((line) =>
    line
      .trim()
      .split(' ')
      .map((w) => (w.startsWith('~') ? { w: w.slice(1), accent: true } : { w, accent: false })),
  )
  let index = 0

  return (
    <section ref={ref} className="hero-glow relative isolate overflow-hidden">
      <motion.img
        src={image}
        alt=""
        style={{ y }}
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-ink via-ink/85 to-ink/30" />
      <div className="dot-grid absolute inset-0 -z-10 opacity-[0.1] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

      <div className={`container-x pt-14 sm:pt-20 ${padBottom}`}>
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
          <span className="font-medium text-brand-400">{label}</span>
        </motion.nav>

        <h1 className="mt-8 text-[2.35rem] leading-[1.04] font-extrabold tracking-tight text-white sm:text-6xl xl:text-7xl">
          {lines.map((line, li) => (
            <span key={li} className="block">
              {line.map((word, wi) => {
                const i = index++
                return (
                  <span key={wi} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
                    <motion.span
                      className={`inline-block pr-[0.22em] ${word.accent ? 'text-brand-500' : 'text-white'}`}
                      initial={{ y: '110%' }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.8, delay: 0.1 + i * 0.09, ease }}
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
          transition={{ duration: 0.7, delay: 0.55, ease }}
          className="mt-7 max-w-xl text-lg leading-relaxed text-white/70"
        >
          {text}
        </motion.p>

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease }}
            className="mt-10"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  )
}
