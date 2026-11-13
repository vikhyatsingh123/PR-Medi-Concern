import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { IMG } from "../../data/images";
import { team } from "../../data/site";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

const points = [
  "Covering all seven provinces",
  "40+ stockists and distributors",
  "Connections across 2,000+ retail outlets",
  "Inventory management, cold-chain handling",
];

export default function Story() {
  const founder = team[0];
  return (
    <section className="section-y overflow-hidden">
      <div className="container-x grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Our story"
            title="Built Around Nepal's Pharmaceutical Market. Driven by Reliable Distribution."
          />
          <Reveal delay={0.1}>
            <p className="mt-6 leading-relaxed text-slate-600">
              PR Medi Concern Pvt. Ltd. is a Nepal-focused pharmaceutical import
              and distribution company, serving the Nepalese market through
              established distribution channels and commercial relationships.
              Our operations are supported by experienced pharmaceutical
              professionals, strong local market knowledge and an established
              stockist and distributor network.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              With our own warehouse and distribution operations, dedicated
              regulatory coordination and cold-chain handling capabilities, we
              work closely with pharmaceutical principals to support organized
              imports, efficient product movement and long-term business
              partnerships across Nepal.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {points.map((p) => (
                <li
                  key={p}
                  className="flex items-center gap-2.5 text-sm font-semibold text-ink"
                >
                  <BadgeCheck className="h-5 w-5 text-brand-500" /> {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal x={40} y={0}>
          <div className="relative mx-auto max-w-lg pb-12 pl-10 sm:pl-0">
            <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem]">
              <img
                src={IMG.facility}
                alt="Our modern production facility"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-0 left-0 h-44 w-44 overflow-hidden rounded-full border-8 border-white shadow-soft sm:-left-10 sm:h-52 sm:w-52">
              <img
                src={IMG.capsules}
                alt="Orange capsules"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 -right-3 rounded-3xl bg-brand-500 px-6 py-5 text-white shadow-brand sm:-right-8"
            >
              <p className="text-xs font-semibold tracking-widest text-white/80 uppercase">
                Market Exp
              </p>
              <p className="font-display text-4xl leading-none font-extrabold">
                20+
              </p>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
