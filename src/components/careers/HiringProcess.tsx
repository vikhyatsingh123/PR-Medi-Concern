import { hiringSteps } from '../../data/careers'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function HiringProcess() {
  return (
    <section className="section-y">
      <div className="container-x">
        <SectionHeading eyebrow="Hiring process" title="What to expect" text="Simple, quick and respectful of your time." />
        <div className="relative mt-20 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute top-8 right-[12%] left-[12%] hidden border-t-2 border-dashed border-brand-300 lg:block" />
          {hiringSteps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="group relative h-full rounded-3xl border border-slate-200 bg-white p-7 pt-12 text-center transition hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-soft">
                <span className="absolute top-0 left-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/3 place-items-center rounded-full bg-brand-500 font-display text-xl font-extrabold text-white shadow-brand ring-8 ring-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
