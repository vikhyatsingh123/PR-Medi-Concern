import { Clock, GraduationCap, HeartPulse, TrendingUp, Users, Wallet } from 'lucide-react'
import { IMG } from '../../data/images'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const perks = [
  { icon: TrendingUp, title: 'Growth', text: 'Clear career paths and structured learning.' },
  { icon: HeartPulse, title: 'Health cover', text: 'Medical insurance for you and your family.' },
  { icon: Wallet, title: 'Fair rewards', text: 'Competitive pay with performance incentives.' },
  { icon: GraduationCap, title: 'Upskilling', text: 'Sponsored certifications and training.' },
  { icon: Users, title: 'Great culture', text: 'Collaborative, respectful and inclusive.' },
  { icon: Clock, title: 'Work-life balance', text: 'Fixed shifts, paid leave and festival breaks.' },
]

export default function Perks() {
  return (
    <section className="section-y">
      <div className="container-x grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal x={-30} y={0} className="lg:col-span-5">
          <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[2.5rem] lg:max-w-none">
            <img src={IMG.care} alt="A colleague smiling in a lab coat" loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-transparent to-transparent" />
            <div className="absolute right-5 bottom-5 left-5 flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur-xl">
              <div>
                <p className="font-display text-3xl font-extrabold">350+</p>
                <p className="text-xs text-white/70">People and growing</p>
              </div>
              <div className="h-10 w-px bg-white/25" />
              <div>
                <p className="font-display text-3xl font-extrabold">4.6/5</p>
                <p className="text-xs text-white/70">Employee rating</p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <SectionHeading
            align="left"
            eyebrow="Life at PR Medi Concern"
            title="Why you'll love working here"
            text="We invest in our people because they are the reason we do what we do."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {perks.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 0.08}>
                <div className="group flex h-full items-start gap-4 rounded-3xl border border-slate-200 p-5 transition hover:border-brand-300 hover:shadow-soft">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-500 transition group-hover:bg-brand-500 group-hover:text-white">
                    <p.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-bold">{p.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{p.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
