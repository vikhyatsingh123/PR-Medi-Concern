import { Eye, Target, type LucideIcon } from 'lucide-react'
import { IMG } from '../../data/images'
import Reveal from '../ui/Reveal'

const cards: { icon: LucideIcon; title: string; text: string; image: string }[] = [
  {
    icon: Target,
    title: 'Our mission',
    text: 'To manufacture safe, effective and affordable medicines through world-class quality systems and continuous innovation.',
    image: IMG.research,
  },
  {
    icon: Eye,
    title: 'Our vision',
    text: 'To be the most trusted healthcare manufacturing partner in India and a respected name across global markets.',
    image: IMG.vials,
  },
]

export default function MissionVision() {
  return (
    <section className="px-5 pb-20 sm:px-8 sm:pb-24">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
        {cards.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.12}>
            <div className="group relative flex min-h-[26rem] flex-col justify-end overflow-hidden rounded-[2.5rem] bg-ink p-8 sm:p-10">
              <img
                src={c.image}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/70 to-ink/20" />
              <div className="relative">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-500 text-white shadow-brand">
                  <c.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-6 text-3xl font-extrabold text-white">{c.title}</h3>
                <p className="mt-3 max-w-md leading-relaxed text-white/75">{c.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
