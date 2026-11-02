import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, BadgeCheck, PackageSearch, PencilRuler, Search, ShieldCheck, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import Button from '../components/ui/Button'
import Page from '../components/ui/Page'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'
import { categoryIcon } from '../data/categoryIcons'
import { IMG } from '../data/images'
import { productCategories, products } from '../data/products'

const popular = ['Azithromycin', 'Vitamin', 'Pantoprazole', 'Cream']

const assurances = [
  { icon: ShieldCheck, title: 'Batch-tested quality', text: 'Every batch is released only after full QC testing in our NABL accredited lab.' },
  { icon: BadgeCheck, title: 'Regulatory ready', text: 'Complete dossiers and documentation for domestic and export markets.' },
  { icon: PencilRuler, title: 'Custom packaging', text: 'Private-label, custom pack sizes and artwork to suit your brand.' },
]

export default function Products() {
  const [params, setParams] = useSearchParams()
  const [query, setQuery] = useState('')

  // The selected category lives in the URL so links from the home page / footer can pre-filter.
  const category = params.get('category') ?? 'All'

  const setCategory = (c: string) => {
    if (c === 'All') setParams({}, { replace: true })
    else setParams({ category: c }, { replace: true })
  }

  const counts = useMemo(
    () => Object.fromEntries(productCategories.map((c) => [c, products.filter((p) => p.category === c).length])),
    [],
  )

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return products.filter(
      (p) =>
        (category === 'All' || p.category === category) &&
        (!q || [p.name, p.composition, p.area].some((f) => f.toLowerCase().includes(q))),
    )
  }, [category, query])

  const clearAll = () => {
    setQuery('')
    setCategory('All')
  }

  return (
    <Page title="Products">
      <PageHero
        label="Products"
        heading="Formulations|built to ~perform."
        text="Browse 500+ pharmaceutical, nutraceutical and dermatology products — search by name, composition or therapeutic area."
        image={IMG.pills}
      >
        <div className="max-w-xl">
          <div className="relative">
            <Search className="pointer-events-none absolute top-1/2 left-5 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a product, composition or area…"
              aria-label="Search products"
              className="h-14 w-full rounded-full border border-white/10 bg-white pr-12 pl-13 text-base text-ink shadow-soft placeholder:text-slate-400 focus:ring-4 focus:ring-brand-500/40 focus:outline-none"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                aria-label="Clear search"
                className="absolute top-1/2 right-4 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-ink"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
            <span className="text-white/50">Popular:</span>
            {popular.map((p) => (
              <button
                key={p}
                onClick={() => setQuery(p)}
                className="rounded-full border border-white/20 bg-white/5 px-3.5 py-1 font-medium text-white/85 backdrop-blur transition hover:border-brand-500 hover:bg-brand-500 hover:text-white"
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </PageHero>

      {/* Sticky category bar */}
      <div className="sticky top-[72px] z-40 border-b border-slate-200 bg-white/90 backdrop-blur-xl lg:top-[108px]">
        <div className="container-x py-3.5">
          <div className="no-scrollbar flex gap-2 overflow-x-auto" role="tablist" aria-label="Product categories">
            {['All', ...productCategories].map((c) => {
              const active = c === category
              const Icon = c === 'All' ? null : categoryIcon[c as keyof typeof categoryIcon]
              return (
                <button
                  key={c}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setCategory(c)}
                  className={`relative flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold whitespace-nowrap transition ${
                    active ? 'text-white' : 'bg-slate-100 text-ink-soft hover:bg-brand-50 hover:text-brand-600'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="cat-pill"
                      className="absolute inset-0 rounded-full bg-brand-500 shadow-brand"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  {Icon && <Icon className="relative h-4 w-4" />}
                  <span className="relative">{c}</span>
                  <span
                    className={`relative rounded-full px-1.5 text-[11px] ${active ? 'bg-white/25' : 'bg-white text-slate-500'}`}
                  >
                    {c === 'All' ? products.length : counts[c]}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <section className="py-12">
        <div className="container-x">
          <p className="mb-6 text-sm text-slate-500">
            Showing <strong className="text-ink">{filtered.length}</strong> of {products.length} products
            {category !== 'All' && (
              <>
                {' '}
                in <strong className="text-ink">{category}</strong>
              </>
            )}
          </p>
          <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="mx-auto max-w-sm py-10 text-center">
              <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-brand-50">
                <PackageSearch className="h-10 w-10 text-brand-400" />
              </span>
              <h3 className="mt-5 text-xl font-bold">No products found</h3>
              <p className="mt-2 text-sm text-slate-600">Try a different keyword or category — or ask us, we can develop it.</p>
              <div className="mt-6 flex justify-center gap-3">
                <Button variant="outline" onClick={clearAll}>
                  Clear filters
                </Button>
                <Button to="/contact">Ask us</Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Assurances */}
      <section className="bg-slate-50 py-16">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {assurances.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.1}>
              <div className="flex h-full gap-5 rounded-3xl bg-white p-7 shadow-soft">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-500 text-white shadow-brand">
                  <a.icon className="h-7 w-7" />
                </span>
                <div>
                  <h3 className="text-lg font-bold">{a.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{a.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Closing banner */}
      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <Reveal className="mx-auto max-w-7xl">
          <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-ink p-8 sm:p-14">
            <img src={IMG.capsules} alt="" loading="lazy" className="absolute inset-y-0 right-0 -z-20 h-full w-full object-cover opacity-40 md:w-3/5" />
            <div className="absolute inset-0 -z-10 bg-linear-to-r from-ink via-ink/90 to-transparent" />
            <div className="max-w-xl">
              <h2 className="text-3xl font-extrabold !text-white sm:text-4xl">Can't find what you're looking for?</h2>
              <p className="mt-4 text-white/70">
                We offer custom formulations, third-party manufacturing and private-label supply. Tell us your
                requirement and our team will respond within one working day.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button to="/contact">
                  Talk to our team <ArrowRight className="h-4 w-4" />
                </Button>
                <Button to="/contact?product=Product%20catalogue" variant="white">
                  Request catalogue
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </Page>
  )
}
