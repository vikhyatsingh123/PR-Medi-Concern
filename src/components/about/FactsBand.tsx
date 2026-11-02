import { stats } from '../../data/site'
import Counter from '../ui/Counter'
import Reveal from '../ui/Reveal'

export default function FactsBand() {
  return (
    <section className="relative isolate overflow-hidden bg-linear-to-r from-brand-600 to-brand-500 py-16">
      <div className="dot-grid absolute inset-0 -z-10 opacity-30 [filter:brightness(3)]" />
      <div className="container-x grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <p className="font-display text-4xl font-extrabold text-white sm:text-6xl">
              <Counter to={s.value} suffix={s.suffix} decimals={s.decimals} />
            </p>
            <p className="mt-2 text-sm font-medium text-white/85">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
