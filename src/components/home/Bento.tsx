import { ArrowUpRight, FlaskConical, Leaf, Pill, Sparkles, type LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { IMG } from '../../data/images'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

interface Tile {
  title: string
  text: string
  category: string
  icon: LucideIcon
  image?: string
  className: string
}

const tiles: Tile[] = [
  {
    title: 'Pharmaceutical',
    text: 'Tablets, capsules, syrups, injectables and topicals made to global quality standards — 400+ formulations.',
    category: 'Tablets',
    icon: Pill,
    image: IMG.capsules,
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    title: 'Nutraceutical & Ayurvedic',
    text: 'Science-backed supplements and herbal formulations for everyday wellness.',
    category: 'Nutraceuticals',
    icon: Leaf,
    image: IMG.pills,
    className: 'md:col-span-2',
  },
  {
    title: 'Cosmetics & Dermatology',
    text: 'Dermatologist-developed creams, gels and ointments.',
    category: 'Ointments & Creams',
    icon: Sparkles,
    className: '',
  },
  {
    title: 'API & Intermediates',
    text: 'Backward-integrated actives that secure your supply.',
    category: 'Injectables',
    icon: FlaskConical,
    image: IMG.vials,
    className: '',
  },
]

export default function Bento() {
  return (
    <section className="section-y bg-slate-50">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            align="left"
            eyebrow="What we do"
            title="Four divisions. One standard of quality."
          />
          <Reveal>
            <p className="max-w-sm text-slate-600">
              Choose a division to explore its portfolio — every product follows the same uncompromising quality system.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid auto-rows-[280px] gap-5 md:grid-cols-4">
          {tiles.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.08} y={36} className={t.className}>
              <Link
                to={`/products?category=${encodeURIComponent(t.category)}`}
                className="group relative flex h-full flex-col justify-end overflow-hidden rounded-[2rem] bg-ink p-7"
              >
                {t.image ? (
                  <img
                    src={t.image}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-linear-to-br from-brand-500 to-brand-700" />
                    <div className="dot-grid absolute inset-0 opacity-40 [filter:brightness(3)]" />
                    <t.icon className="absolute -top-6 -right-6 h-48 w-48 text-white/15 transition duration-700 group-hover:rotate-12 group-hover:scale-110" strokeWidth={1.2} />
                  </>
                )}
                {t.image && <div className="absolute inset-0 bg-linear-to-t from-ink/95 via-ink/45 to-ink/10" />}

                <span className="absolute top-6 right-6 grid h-12 w-12 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition duration-300 group-hover:rotate-45 group-hover:bg-brand-500">
                  <ArrowUpRight className="h-5 w-5" />
                </span>

                <div className="relative">
                  <span className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-brand-500 text-white shadow-brand">
                    <t.icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white">{t.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-white/75">{t.text}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
