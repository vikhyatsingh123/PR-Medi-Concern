import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Clock, Mail, Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { navLinks, site } from '../../data/site'
import Button from '../ui/Button'
import Logo from '../ui/Logo'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu after navigating.
  useEffect(() => setOpen(false), [pathname])

  // Lock page scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="hidden bg-ink text-xs text-white/80 lg:block">
        <div className="container-x flex h-9 items-center justify-between">
          <div className="flex items-center gap-6">
            <a href={site.phoneHref} className="flex items-center gap-1.5 hover:text-brand-300">
              <Phone className="h-3.5 w-3.5 text-brand-400" /> {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-1.5 hover:text-brand-300">
              <Mail className="h-3.5 w-3.5 text-brand-400" /> {site.email}
            </a>
          </div>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-brand-400" /> {site.hours}
          </span>
        </div>
      </div>

      <div
        className={`border-b transition duration-300 ${
          scrolled ? 'border-slate-200 bg-white/90 shadow-soft backdrop-blur-xl' : 'border-transparent bg-white'
        }`}
      >
        <div className="container-x flex h-[72px] items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `relative rounded-full px-4 py-2 text-sm font-semibold transition ${
                    isActive ? 'text-brand-600' : 'text-ink-soft hover:text-brand-600'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-brand-50"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    {l.label}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button to="/contact">
              Get a Quote <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <button
            className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600 lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-full h-[calc(100dvh-72px)] overflow-y-auto bg-white lg:hidden"
          >
            <nav className="container-x flex flex-col gap-1 py-6" aria-label="Mobile">
              {navLinks.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <NavLink
                    to={l.to}
                    end={l.to === '/'}
                    className={({ isActive }) =>
                      `flex items-center justify-between rounded-xl px-4 py-4 text-lg font-semibold ${
                        isActive ? 'bg-brand-50 text-brand-600' : 'text-ink'
                      }`
                    }
                  >
                    {l.label} <ArrowRight className="h-5 w-5 opacity-50" />
                  </NavLink>
                </motion.div>
              ))}
              <div className="mt-6 space-y-3 border-t border-slate-100 pt-6 text-sm">
                <a href={site.phoneHref} className="flex items-center gap-2 font-medium text-ink">
                  <Phone className="h-4 w-4 text-brand-500" /> {site.phone}
                </a>
                <a href={`mailto:${site.email}`} className="flex items-center gap-2 font-medium text-ink">
                  <Mail className="h-4 w-4 text-brand-500" /> {site.email}
                </a>
                <Button to="/contact" className="mt-3 w-full">
                  Get a Quote
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
