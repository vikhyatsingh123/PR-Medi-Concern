import { CheckCircle2 } from "lucide-react";
import CallbackForm from "../CallbackForm";
import Reveal from "../ui/Reveal";

const points = [
  "Established pharmaceutical market experience",
  "Nationwide distribution across all 7 provinces",
  "Strong network of 40+ stockists and 2,000+ retail connections",
  "Dedicated business and regulatory support",
];

export default function CallbackBand() {
  return (
    <section className="px-5 pb-20 sm:px-8 sm:pb-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-linear-to-br from-brand-500 to-brand-700 p-8 sm:p-14">
        <div className="dot-grid absolute inset-0 opacity-30 [filter:brightness(3)]" />
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
        <div className="relative grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-extrabold !text-white sm:text-4xl">
              Partner with a Trusted Pharmaceutical Distribution Partner in
              Nepal
            </h2>
            <p className="mt-4 max-w-md text-white/85">
              Looking to expand your pharmaceutical business in Nepal? Partner
              with PR Medi Concern Pvt. Ltd. for reliable import coordination,
              regulatory support and nationwide distribution.
            </p>
            <ul className="mt-8 space-y-3">
              {points.map((p) => (
                <li
                  key={p}
                  className="flex items-center gap-3 font-medium text-white"
                >
                  <CheckCircle2 className="h-5 w-5 text-white/90" /> {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15} x={30} y={0}>
            <div className="rounded-3xl bg-white p-6 shadow-soft sm:p-8">
              <h3 className="mb-5 text-xl font-bold">
                Arrange a Business Discussion
              </h3>
              <CallbackForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
