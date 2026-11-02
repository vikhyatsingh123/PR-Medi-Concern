import { Briefcase, Clock, Globe2, Mail, MapPin, Phone, ShieldCheck, ShoppingBag, type LucideIcon } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import ContactForm from '../components/contact/ContactForm'
import Faq from '../components/contact/Faq'
import Button from '../components/ui/Button'
import Page from '../components/ui/Page'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import { IMG } from '../data/images'
import { site } from '../data/site'

const info: { icon: LucideIcon; title: string; text: string; href?: string }[] = [
  { icon: MapPin, title: 'Visit us', text: site.address },
  { icon: Phone, title: 'Call us', text: site.phone, href: site.phoneHref },
  { icon: Mail, title: 'Email us', text: site.email, href: `mailto:${site.email}` },
  { icon: Clock, title: 'Working hours', text: site.hours },
]

const departments: { icon: LucideIcon; title: string; text: string; email: string }[] = [
  { icon: ShoppingBag, title: 'Sales & orders', text: 'Quotes, samples and supply.', email: 'sales@prmediconcern.com' },
  { icon: Globe2, title: 'Exports', text: 'International markets and dossiers.', email: 'export@prmediconcern.com' },
  { icon: ShieldCheck, title: 'Quality & regulatory', text: 'Audits, documents and compliance.', email: 'quality@prmediconcern.com' },
  { icon: Briefcase, title: 'Careers', text: 'Jobs, internships and HR.', email: 'careers@prmediconcern.com' },
]

export default function Contact() {
  const [params] = useSearchParams()
  const product = params.get('product')

  return (
    <Page title="Contact Us">
      <PageHero
        label="Contact Us"
        heading="Let's ~talk|healthcare."
        text="Have a question or a requirement? Our team responds to every inquiry within one working day."
        image={IMG.pharmacy}
        padBottom="pb-32 sm:pb-44"
      >
        <div className="flex flex-wrap gap-3">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-brand-500"
          >
            <Phone className="h-4 w-4 text-brand-300" /> {site.phone}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-brand-500"
          >
            <Mail className="h-4 w-4 text-brand-300" /> {site.email}
          </a>
        </div>
      </PageHero>

      {/* Info card + form, overlapping the hero */}
      <section className="relative z-10 -mt-24 sm:-mt-32">
        <div className="container-x grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="hero-glow relative isolate h-full overflow-hidden rounded-[2rem] p-8 text-white sm:p-10">
              <div className="dot-grid absolute inset-0 -z-10 opacity-[0.12]" />
              <h2 className="text-2xl font-extrabold !text-white">Contact information</h2>
              <p className="mt-2 text-sm text-white/65">Reach us any way that suits you.</p>
              <ul className="mt-8 space-y-6">
                {info.map((c) => {
                  const body = (
                    <>
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-500 shadow-brand">
                        <c.icon className="h-6 w-6" />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold tracking-widest text-white/50 uppercase">{c.title}</span>
                        <span className="mt-0.5 block text-sm leading-relaxed text-white">{c.text}</span>
                      </span>
                    </>
                  )
                  return (
                    <li key={c.title}>
                      {c.href ? (
                        <a href={c.href} className="flex items-start gap-4 transition hover:text-brand-300">
                          {body}
                        </a>
                      ) : (
                        <div className="flex items-start gap-4">{body}</div>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <ContactForm product={product} />
          </Reveal>
        </div>
      </section>

      {/* Departments */}
      <section className="section-y">
        <div className="container-x">
          <SectionHeading
            eyebrow="Reach the right team"
            title="Talk directly to the people who can help"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {departments.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.08}>
                <a
                  href={`mailto:${d.email}`}
                  className="group flex h-full flex-col rounded-3xl border border-slate-200 p-7 transition hover:-translate-y-1.5 hover:border-brand-500 hover:bg-brand-500 hover:shadow-brand"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-500 transition group-hover:bg-white/20 group-hover:text-white">
                    <d.icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold transition group-hover:text-white">{d.title}</h3>
                  <p className="mt-1.5 flex-1 text-sm text-slate-600 transition group-hover:text-white/85">{d.text}</p>
                  <span className="mt-5 break-all text-sm font-semibold text-brand-600 transition group-hover:text-white">
                    {d.email}
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Map with floating address card */}
      <section className="px-5 sm:px-8">
        <Reveal className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 shadow-soft">
            <iframe
              title="Our location"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
              className="h-[28rem] w-full grayscale transition duration-500 hover:grayscale-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute inset-x-4 bottom-4 md:inset-x-auto md:top-8 md:bottom-auto md:left-8 md:w-80">
              <div className="pointer-events-auto rounded-3xl bg-white p-6 shadow-soft">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-500 text-white shadow-brand">
                  <MapPin className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold">{site.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{site.address}</p>
                <Button
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapQuery)}`}
                  className="mt-4 w-full"
                >
                  Get directions
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <Faq />
    </Page>
  )
}
