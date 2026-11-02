import { IMG } from '../../data/images'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const shots = [
  { src: IMG.lab, label: 'Quality control laboratory', className: 'md:col-span-2 md:row-span-2' },
  { src: IMG.tubes, label: 'Sample testing', className: '' },
  { src: IMG.vials, label: 'Injectables', className: '' },
  { src: IMG.pharmacy, label: 'Finished goods warehouse', className: 'md:col-span-2' },
]

export default function Gallery() {
  return (
    <section className="section-y">
      <div className="container-x">
        <SectionHeading
          eyebrow="Inside PR Medi Concern"
          title="A look inside our facilities"
          text="Clean, automated and audit-ready — every area is designed around quality."
        />
        <div className="mt-14 grid auto-rows-[220px] gap-5 md:grid-cols-4">
          {shots.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} y={30} className={s.className}>
              <figure className="group relative h-full overflow-hidden rounded-[2rem]">
                <img
                  src={s.src}
                  alt={s.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-transparent to-transparent" />
                <figcaption className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-1.5 text-xs font-bold text-ink backdrop-blur">
                  {s.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
