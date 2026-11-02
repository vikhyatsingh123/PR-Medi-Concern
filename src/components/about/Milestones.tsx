import { motion, useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { timeline } from '../../data/site'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function Milestones() {
  const list = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: list, offset: ['start 70%', 'end 55%'] })
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })

  return (
    <section className="section-y">
      <div className="container-x">
        <SectionHeading eyebrow="Our journey" title="Milestones along the way" />

        <div ref={list} className="relative mx-auto mt-16 max-w-4xl">
          <div className="absolute top-2 bottom-2 left-5 w-0.5 bg-brand-100 md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            style={{ scaleY: fill }}
            className="absolute top-2 bottom-2 left-5 w-0.5 origin-top bg-brand-500 md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-12">
            {timeline.map((t, i) => {
              const left = i % 2 === 0
              return (
                <Reveal key={t.year} x={left ? -30 : 30} y={0} className="relative">
                  <span className="absolute top-8 left-[0.85rem] z-10 h-4 w-4 rounded-full border-4 border-white bg-brand-500 ring-2 ring-brand-500 md:left-1/2 md:-translate-x-1/2" />
                  <div className={`pl-14 md:flex md:pl-0 ${left ? 'md:justify-start' : 'md:justify-end'}`}>
                    <div
                      className={`group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 transition hover:border-brand-300 hover:shadow-soft md:w-[calc(50%-3rem)] ${
                        left ? 'md:text-right' : ''
                      }`}
                    >
                      <span className="text-outline pointer-events-none absolute -top-2 right-4 font-display text-7xl font-extrabold [-webkit-text-stroke-color:rgb(243_101_35/0.18)]">
                        {t.year}
                      </span>
                      <span className="relative inline-block rounded-full bg-brand-500 px-3.5 py-1 text-sm font-bold text-white">
                        {t.year}
                      </span>
                      <h3 className="relative mt-3 text-xl font-bold">{t.title}</h3>
                      <p className="relative mt-1.5 text-sm leading-relaxed text-slate-600">{t.text}</p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
