import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'outline' | 'white' | 'dark'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-200 active:scale-[0.97] disabled:opacity-60'

const variants: Record<Variant, string> = {
  primary: 'bg-brand-500 text-white shadow-brand hover:bg-brand-600 hover:-translate-y-0.5',
  outline: 'border-2 border-brand-500 text-brand-600 hover:bg-brand-500 hover:text-white',
  white: 'bg-white text-brand-600 shadow-soft hover:bg-brand-50 hover:-translate-y-0.5',
  dark: 'bg-ink text-white hover:bg-ink-soft hover:-translate-y-0.5',
}

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  variant?: Variant
  to?: string
  href?: string
  className?: string
  children: ReactNode
}

export default function Button({ variant = 'primary', to, href, className = '', children, ...rest }: Props) {
  const cls = `${base} ${variants[variant]} ${className}`
  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    )
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  )
}
