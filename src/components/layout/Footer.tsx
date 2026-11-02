import { ArrowRight, Clock, Mail, MapPin, Phone } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { navLinks, site } from '../../data/site'
import { productCategories } from '../../data/products'
import Logo from '../ui/Logo'

const socials = [
  { label: 'LinkedIn', short: 'in' },
  { label: 'Facebook', short: 'f' },
  { label: 'Instagram', short: 'ig' },
  { label: 'YouTube', short: 'yt' },
]

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false)

  const onSubscribe = (e: FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
  }

  return (
    <footer className="bg-ink text-white/70">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo light />
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            {site.tagline} We manufacture safe, effective and affordable medicines for patients and partners across India
            and the world.
          </p>
          <div className="mt-6 flex gap-2.5">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-xs font-bold uppercase transition hover:-translate-y-1 hover:bg-brand-500 hover:text-white"
              >
                {s.short}
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-sm font-bold tracking-widest text-white uppercase">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition hover:pl-1 hover:text-brand-400">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-sm font-bold tracking-widest text-white uppercase">Our Offerings</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {productCategories.map((c) => (
              <li key={c}>
                <Link to={`/products?category=${encodeURIComponent(c)}`} className="transition hover:pl-1 hover:text-brand-400">
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-sm font-bold tracking-widest text-white uppercase">Get in touch</h3>
          <ul className="mt-5 space-y-3.5 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" /> {site.address}
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
              <a href={site.phoneHref} className="hover:text-brand-400">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
              <a href={`mailto:${site.email}`} className="hover:text-brand-400">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" /> {site.hours}
            </li>
          </ul>
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-start justify-between gap-5 py-8 md:flex-row md:items-center">
          <div>
            <p className="font-display font-bold text-white">Subscribe to our newsletter</p>
            <p className="text-sm">Product launches, industry news and company updates.</p>
          </div>
          {subscribed ? (
            <p className="rounded-full bg-brand-500/15 px-5 py-3 text-sm font-semibold text-brand-300">
              Thanks for subscribing!
            </p>
          ) : (
            <form onSubmit={onSubscribe} className="flex w-full max-w-md gap-2">
              <input
                type="email"
                required
                placeholder="Your email address"
                aria-label="Email address"
                className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand-500 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-500 text-white transition hover:bg-brand-600"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-brand-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-brand-400">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
