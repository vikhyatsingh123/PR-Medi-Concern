import { ArrowUpRight, Calendar } from 'lucide-react'
import { news } from '../../data/site'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function News() {
  return (
    <section className="section-y">
      <div className="container-x">
        <SectionHeading
          eyebrow="News & updates"
          title="Latest from PR Medi Concern"
          text="Company milestones, quality updates and perspectives from our team."
        />
        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {news.map((n, i) => (
            <Reveal key={n.title} delay={i * 0.1}>
              <a href="#" className="group block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
                  <img
                    src={n.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-white px-3.5 py-1 text-xs font-bold text-brand-600">
                    {n.category}
                  </span>
                  <span className="absolute right-4 bottom-4 grid h-11 w-11 translate-y-3 place-items-center rounded-full bg-brand-500 text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
                <p className="mt-5 flex items-center gap-2 text-sm text-slate-500">
                  <Calendar className="h-4 w-4 text-brand-500" /> {n.date}
                </p>
                <h3 className="mt-2 text-xl leading-snug font-bold transition group-hover:text-brand-600">{n.title}</h3>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
