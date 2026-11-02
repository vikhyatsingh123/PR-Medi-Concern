import { HeartHandshake, Lightbulb, Rocket, ShieldCheck } from 'lucide-react'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const values = [
  { icon: ShieldCheck, title: 'Quality first', text: 'We never compromise on safety, purity or efficacy — in any batch, for any customer.' },
  { icon: HeartHandshake, title: 'Integrity', text: 'Honest, transparent dealings with every partner, regulator and patient.' },
  { icon: Lightbulb, title: 'Innovation', text: 'We continuously improve our formulations, processes and the way we work.' },
  { icon: Rocket, title: 'Commitment', text: 'We deliver what we promise, on time, every time.' },
]

export default function Values() {
  return (
    <section className="section-y bg-slate-50">
      <div className="container-x grid gap-14 lg:grid-cols-5 lg:gap-20">
        <div className="self-start lg:sticky lg:top-32 lg:col-span-2">
          <SectionHeading
            align="left"
            eyebrow="Our values"
            title="What guides everything we do"
            text="Four principles shape our decisions, from the shop floor to the boardroom."
          />
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={(i % 2) * 0.1} className={i % 2 ? 'sm:translate-y-10' : ''}>
              <div className="group relative h-full overflow-hidden rounded-3xl bg-white p-8 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:bg-brand-500">
                <span className="text-outline absolute -top-3 right-5 font-display text-8xl font-extrabold [-webkit-text-stroke-color:rgb(243_101_35/0.25)] transition group-hover:[-webkit-text-stroke-color:rgb(255_255_255/0.4)]">
                  0{i + 1}
                </span>
                <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-500 transition group-hover:bg-white/20 group-hover:text-white">
                  <v.icon className="h-7 w-7" />
                </span>
                <h3 className="relative mt-16 text-xl font-bold transition group-hover:text-white">{v.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-slate-600 transition group-hover:text-white/85">
                  {v.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
