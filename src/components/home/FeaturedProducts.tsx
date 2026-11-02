import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useRef } from 'react'
import { products } from '../../data/products'
import ProductCard from '../ProductCard'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const featured = products.filter((p) => ['p02', 'p05', 'p08', 'p11', 'p14', 'p17', 'p18', 'p20'].includes(p.id))

export default function FeaturedProducts() {
  const track = useRef<HTMLDivElement>(null)

  const scroll = (dir: number) => track.current?.scrollBy({ left: dir * 320, behavior: 'smooth' })

  return (
    <section className="section-y bg-slate-50">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Our products"
            title="Featured formulations"
            text="A glimpse of our 500+ product portfolio across major therapeutic segments."
          />
          <div className="flex gap-3">
            {[
              { dir: -1, icon: ArrowLeft, label: 'Scroll products left' },
              { dir: 1, icon: ArrowRight, label: 'Scroll products right' },
            ].map((b) => (
              <button
                key={b.dir}
                onClick={() => scroll(b.dir)}
                aria-label={b.label}
                className="grid h-12 w-12 place-items-center rounded-full border border-slate-300 bg-white text-ink transition hover:border-brand-500 hover:bg-brand-500 hover:text-white"
              >
                <b.icon className="h-5 w-5" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Track bleeds to the right edge of the viewport */}
      <div
        ref={track}
        className="bleed-track no-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-6"
      >
        {featured.map((p) => (
          <div key={p.id} className="flex w-[17.5rem] shrink-0 snap-start sm:w-[19rem]">
            <ProductCard product={p} />
          </div>
        ))}
      </div>

      <Reveal className="mt-6 text-center">
        <Button to="/products">
          View all products <ArrowRight className="h-4 w-4" />
        </Button>
      </Reveal>
    </section>
  )
}
