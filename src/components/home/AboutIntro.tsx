import { motion } from "framer-motion";
import { IMG } from "../../data/images";

import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function AboutIntro() {
  return (
    <section className="section-y overflow-hidden">
      <div className="container-x grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <Reveal x={-40} y={0}>
          <div className="relative mx-auto max-w-lg pb-16 sm:pr-16">
            <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem]">
              <img
                src={IMG.lab}
                alt="Scientists working in the laboratory"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute right-0 bottom-0 h-52 w-44 overflow-hidden rounded-3xl border-8 border-white shadow-soft sm:h-60 sm:w-52">
              <img
                src={IMG.care}
                alt="Doctor consulting a patient"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 -left-4 rounded-3xl bg-brand-500 px-6 py-5 text-white shadow-brand sm:-left-8"
            >
              <p className="font-display text-5xl leading-none font-extrabold">
                20+
              </p>
              <p className="mt-1 text-sm font-medium text-white/85">
                Years of excellence
              </p>
            </motion.div>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            align="left"
            eyebrow="About PR Medi Concern"
            title="Your Trusted Partner in Pharmaceutical Import & Distribution"
          />
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              PR Medi Concern Pvt. Ltd. is a Nepal-focused pharmaceutical import
              and distribution company. We connect pharmaceutical principals
              with the Nepalese market through established distribution
              channels, regulatory coordination and organized warehousing
              operations.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Supported by experienced pharmaceutical professionals and strong
              local market relationships, we focus on reliable distribution and
              long-term business partnerships across Nepal.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Button to="/about">Discover our story</Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
