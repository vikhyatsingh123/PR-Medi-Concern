import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Check,
  ClipboardCheck,
  Factory,
  FlaskConical,
  Microscope,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { IMG } from "../../data/images";
import SectionHeading from "../ui/SectionHeading";

interface Capability {
  label: string;
  title: string;
  text: string;
  points: string[];
  image: string;
  icon: LucideIcon;
}

const capabilities: Capability[] = [
  {
    label: "Import & Global Sourcing",
    title: "Connecting global healthcare manufacturers with local markets.",
    text: "We source pharmaceutical and nutraceutical products through trusted manufacturing partners and international suppliers to bring diverse healthcare solutions to our market.",
    points: [
      "International supplier coordination",
      "Product sourcing and procurement",
      "Import documentation and logistics",
    ],
    image: IMG.cap1,
    icon: Factory,
  },
  {
    label: "Product Portfolio",
    title: "A diverse range of healthcare products.",
    text: "We offer a growing portfolio of pharmaceutical, nutraceutical, women's healthcare, and personal care products to meet evolving market requirements.",
    points: [
      "Pharmaceutical products",
      "Nutraceutical and probiotic supplements",
      "Women's healthcare and personal care",
    ],
    image: IMG.cap2,
    icon: FlaskConical,
  },
  {
    label: "Distribution Network",
    title: "Reliable distribution. Consistent availability.",
    text: "We focus on building strong distribution channels to make our healthcare products accessible to pharmacies, healthcare retailers, and business partners.",
    points: [
      "Wholesale and retail channel support",
      "Long-term business partnerships",
      "Efficient order and supply coordination",
    ],
    image: IMG.cap3,
    icon: Microscope,
  },
  {
    label: "Quality & Regulatory Compliance",
    title: "Responsible sourcing. Trusted product supply.",
    text: "We emphasize appropriate product documentation, regulatory requirements, and quality-focused sourcing to support responsible pharmaceutical distribution.",
    points: [
      "Import and product documentation",
      "Regulatory compliance coordination",
      "Product traceability and storage practices",
    ],
    image: IMG.cap4,
    icon: ClipboardCheck,
  },
];

const INTERVAL = 6000;

export default function Capabilities() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const current = capabilities[active];

  // Auto-advance; a click resets the timer because `active` changes.
  useEffect(() => {
    if (reduce) return;
    const id = setTimeout(
      () => setActive((a) => (a + 1) % capabilities.length),
      INTERVAL
    );
    return () => clearTimeout(id);
  }, [active, reduce]);

  return (
    <section className="section-y">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our capabilities"
          title="Everything your product needs, under one roof"
        />

        <div className="mt-14 grid items-stretch gap-10 lg:grid-cols-12">
          {/* Tabs */}
          <div
            className="flex flex-col gap-3 lg:col-span-5"
            role="tablist"
            aria-label="Capabilities"
          >
            {capabilities.map((c, i) => {
              const open = i === active;
              return (
                <div
                  key={c.label}
                  className={`relative overflow-hidden rounded-3xl border transition-colors ${
                    open
                      ? "border-brand-200 bg-brand-50"
                      : "border-slate-200 bg-white hover:border-brand-200"
                  }`}
                >
                  <button
                    role="tab"
                    aria-selected={open}
                    onClick={() => setActive(i)}
                    className="flex w-full items-center gap-4 p-5 text-left"
                  >
                    <span
                      className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl transition ${
                        open
                          ? "bg-brand-500 text-white shadow-brand"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <c.icon className="h-6 w-6" />
                    </span>
                    <span className="flex-1">
                      <span className="block text-xs font-bold tracking-widest text-brand-500">
                        0{i + 1}
                      </span>
                      <span className="font-display text-lg font-bold text-ink">
                        {c.label}
                      </span>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-6 pl-[5.25rem]">
                          <h3 className="text-base font-bold">{c.title}</h3>
                          <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                            {c.text}
                          </p>
                          <ul className="mt-4 space-y-2">
                            {c.points.map((p) => (
                              <li
                                key={p}
                                className="flex items-center gap-2.5 text-sm font-medium text-ink"
                              >
                                <Check
                                  className="h-4 w-4 text-brand-500"
                                  strokeWidth={3}
                                />{" "}
                                {p}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {open && !reduce && (
                    <motion.span
                      key={active}
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: INTERVAL / 1000, ease: "linear" }}
                      className="absolute bottom-0 left-0 h-[3px] bg-brand-500"
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Image */}
          <div className="relative min-h-[22rem] overflow-hidden rounded-[2.5rem] bg-ink lg:col-span-7">
            <AnimatePresence mode="popLayout">
              <motion.img
                key={current.image}
                src={current.image}
                alt={current.title}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-linear-to-t from-ink/80 via-transparent to-transparent" />
            <AnimatePresence mode="wait">
              <motion.div
                key={current.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="absolute right-6 bottom-6 left-6 flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-4 text-white backdrop-blur-xl"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-500">
                  <current.icon className="h-6 w-6" />
                </span>
                <p className="font-display font-bold">{current.title}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
