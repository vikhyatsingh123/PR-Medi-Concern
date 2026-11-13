import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

const faqs = [
  {
    q: "Do you collaborate with international pharmaceutical companies and principals?",
    a: "PR Medi Concern Pvt. Ltd. welcomes partnerships with international pharmaceutical manufacturers and principals seeking to enter or expand their presence in the Nepalese market. We provide import coordination, regulatory support, distribution and local market access through our established network.",
  },
  {
    q: "Which markets do you supply to?",
    a: "We serve the pharmaceutical market across Nepal, covering all seven provinces through our network of 40+ stockists and distributors and 2,000+ retail connections.",
  },
  {
    q: "Can I visit your facility or arrange an audit?",
    a: "Yes. Business partners and prospective principals may contact our team to discuss facility visits and audit arrangements. Visits and audits can be coordinated in advance, subject to availability and applicable company procedures.",
  },
  {
    q: "How quickly will I hear back?",
    a: "Our team aims to respond to business enquiries within 1–2 working days. For product, distribution, regulatory or partnership-related enquiries, we will connect you with the appropriate department.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-y">
      <div className="container-x grid gap-12 lg:grid-cols-5 lg:gap-20">
        <div className="lg:col-span-2">
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title="Quick answers before you reach out"
            text="Can't find your question here? Send us a message and we'll help."
          />
        </div>
        <div className="space-y-3 lg:col-span-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.05}>
                <div
                  className={`overflow-hidden rounded-2xl border transition ${
                    isOpen
                      ? "border-brand-300 bg-brand-50/50"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="font-display font-bold text-ink">
                      {f.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition ${
                        isOpen
                          ? "bg-brand-500 text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <Plus className="h-5 w-5" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
