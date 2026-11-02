import Reveal from './Reveal'

interface Props {
  eyebrow: string
  title: string
  text?: string
  align?: 'left' | 'center'
  light?: boolean
}

export default function SectionHeading({ eyebrow, title, text, align = 'center', light = false }: Props) {
  return (
    <Reveal className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <span
        className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-semibold tracking-widest uppercase ${
          light ? 'bg-white/10 text-brand-300' : 'bg-brand-50 text-brand-600'
        }`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
        {eyebrow}
      </span>
      <h2 className={`mt-4 text-3xl font-extrabold sm:text-4xl ${light ? '!text-white' : ''}`}>{title}</h2>
      {text && <p className={`mt-4 text-base leading-relaxed ${light ? 'text-white/70' : 'text-slate-600'}`}>{text}</p>}
    </Reveal>
  )
}
