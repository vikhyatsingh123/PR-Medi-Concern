import { ArrowRight } from "lucide-react";
import { useState } from "react";
import ApplyForm from "../components/careers/ApplyForm";
import HiringProcess from "../components/careers/HiringProcess";
import Openings from "../components/careers/Openings";
import Perks from "../components/careers/Perks";
import Button from "../components/ui/Button";
import Counter from "../components/ui/Counter";
import Page from "../components/ui/Page";
import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import { jobs } from "../data/careers";
import { IMG } from "../data/images";

const culture = [
  { value: 30, suffix: "+", label: "Team members" },
  { value: 92, suffix: "%", label: "Employee retention" },
  { value: 40, suffix: "+", label: "Training hours per year" },
  { value: 4, suffix: "", label: "Departments" },
];

export default function Careers() {
  const [position, setPosition] = useState("");

  // Called from a job card (with its title) or the side card (general application).
  const goApply = (title?: string) => {
    setPosition(title ?? "General application");
    document
      .getElementById("apply")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Page title="Careers">
      <PageHero
        label="Careers"
        heading="Build a career| Grow ~With ~Purpose"
        text="Be part of a team contributing to pharmaceutical distribution and healthcare access across Nepal. At PR Medi Concern Pvt. Ltd., we value professional expertise, teamwork and a commitment to responsible business operations."
        image={IMG.research}
      >
        <div className="flex flex-wrap items-center gap-4">
          <Button href="#openings">
            View {jobs.length} open roles <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="!border-white/30 !text-white hover:!bg-white hover:!text-brand-600"
            onClick={() => goApply()}
          >
            General application
          </Button>
        </div>
      </PageHero>

      <Perks />

      <section className="relative isolate overflow-hidden bg-linear-to-r from-brand-600 to-brand-500 py-16">
        <div className="dot-grid absolute inset-0 -z-10 opacity-30 [filter:brightness(3)]" />
        <div className="container-x grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {culture.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.08}>
              <p className="font-display text-4xl font-extrabold text-white sm:text-6xl">
                <Counter to={c.value} suffix={c.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium text-white/85">
                {c.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <Openings onApply={goApply} />
      <HiringProcess />
      <ApplyForm position={position} setPosition={setPosition} />
    </Page>
  );
}
