import { Link } from 'react-router-dom'
import { Pill } from 'lucide-react'
import { site } from '../../data/site'

// Placeholder logo — swap the mark for your real logo image/SVG.
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-2.5" aria-label={`${site.name} home`}>
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-500 text-white shadow-brand transition group-hover:rotate-6">
        <Pill className="h-5 w-5 -rotate-45" strokeWidth={2.4} />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-lg font-extrabold tracking-tight ${light ? 'text-white' : 'text-ink'}`}>
          PR <span className="text-brand-500">Medi</span> Concern
        </span>
        <span className={`mt-1 text-[10px] font-semibold tracking-[0.18em] uppercase ${light ? 'text-white/60' : 'text-slate-500'}`}>
          Healthcare &amp; Pharma
        </span>
      </span>
    </Link>
  )
}
