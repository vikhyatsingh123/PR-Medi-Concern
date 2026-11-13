import { HeartHandshake, Lightbulb, Rocket, ShieldCheck } from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

const values = [
  {
    icon: ShieldCheck,
    title: "Quality & Reliability",
    text: "We prioritize the responsible sourcing, proper storage and reliable distribution of pharmaceutical products, maintaining a strong focus on product integrity throughout the supply chain.",
  },
  {
    icon: HeartHandshake,
    title: "Integrity & Transparency",
    text: "We believe in honest business practices, transparent communication and ethical relationships with pharmaceutical principals, distributors, customers and business partners.",
  },
  {
    icon: Lightbulb,
    title: "Customer-Centric Approach",
    text: "We focus on understanding the needs of our principals, stockists, distributors and retail partners, providing responsive support and practical solutions.",
  },
  {
    icon: Rocket,
    title: "Commitment & Accountability",
    text: "We take responsibility for our commitments, emphasizing timely coordination, dependable service and consistent support across our distribution network.",
  },
];

export default function Values() {
  return (
    <section className="section-y bg-slate-50">
      <div className="container-x grid gap-14 lg:grid-cols-5 lg:gap-20">
        <div className="self-start lg:sticky lg:top-32 lg:col-span-2">
          <SectionHeading
            align="left"
            eyebrow="Our values"
            title="What guides everything we do"
            text="Four principles shape our decisions, from the shop floor to the boardroom."
          />
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-3">
          {values.map((v, i) => (
            <Reveal
              key={v.title}
              delay={(i % 2) * 0.1}
              className={i % 2 ? "sm:translate-y-10" : ""}
            >
              <div className="group relative h-full overflow-hidden rounded-3xl bg-white p-8 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:bg-brand-500">
                <span className="text-outline absolute -top-3 right-5 font-display text-8xl font-extrabold [-webkit-text-stroke-color:rgb(243_101_35/0.25)] transition group-hover:[-webkit-text-stroke-color:rgb(255_255_255/0.4)]">
                  0{i + 1}
                </span>
                <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-500 transition group-hover:bg-white/20 group-hover:text-white">
                  <v.icon className="h-7 w-7" />
                </span>
                <h3 className="relative mt-16 text-xl font-bold transition group-hover:text-white">
                  {v.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-slate-600 transition group-hover:text-white/85">
                  {v.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
