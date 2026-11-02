import { motion } from 'framer-motion'
import { team } from '../../data/site'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function Leadership() {
  return (
    <section className="section-y bg-slate-50">
      <div className="container-x">
        <SectionHeading
          eyebrow="Leadership"
          title="The people steering our course"
          text="Experienced leaders who combine scientific depth with a deep sense of responsibility."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08}>
              <motion.div whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 300, damping: 22 }}>
                <div className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-ink">
                  <img
                    src={m.image}
                    alt={m.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-ink/90 via-ink/10 to-transparent" />
                  <span className="absolute inset-x-0 bottom-0 h-1.5 origin-left scale-x-0 bg-brand-500 transition duration-500 group-hover:scale-x-100" />
                  <div className="absolute right-5 bottom-5 left-5">
                    <h3 className="font-display text-xl font-bold text-white">{m.name}</h3>
                    <p className="mt-0.5 text-sm text-brand-300">{m.role}</p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
