import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { categoryIcon } from '../data/categoryIcons'
import type { Product } from '../data/products'

export default function ProductCard({ product }: { product: Product }) {
  const Icon = categoryIcon[product.category]
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.25 }}
      className="group flex w-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-soft"
    >
      <div className="relative grid h-36 place-items-center overflow-hidden bg-linear-to-br from-brand-50 to-brand-100">
        <div className="dot-grid absolute inset-0 opacity-60" />
        <Icon
          className="absolute -right-5 -bottom-6 h-32 w-32 text-brand-200/70 transition duration-500 group-hover:scale-110 group-hover:-rotate-12"
          strokeWidth={1.2}
        />
        <span className="relative grid h-16 w-16 place-items-center rounded-2xl bg-white text-brand-500 shadow-soft transition duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-brand-500 group-hover:text-white">
          <Icon className="h-8 w-8" />
        </span>
        <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-brand-700">
          {product.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="mt-1.5 text-sm text-slate-600">{product.composition}</p>
        <dl className="mt-4 mb-5 space-y-1.5 text-xs">
          <div className="flex justify-between gap-3">
            <dt className="text-slate-400">Therapeutic area</dt>
            <dd className="text-right font-semibold text-ink">{product.area}</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-slate-400">Pack</dt>
            <dd className="text-right font-semibold text-ink">{product.pack}</dd>
          </div>
        </dl>
        <Link
          to={`/contact?product=${encodeURIComponent(product.name)}`}
          className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4 text-sm font-semibold text-brand-600"
        >
          Enquire now
          <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-50 transition group-hover:bg-brand-500 group-hover:text-white">
            <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
          </span>
        </Link>
      </div>
    </motion.article>
  )
}
