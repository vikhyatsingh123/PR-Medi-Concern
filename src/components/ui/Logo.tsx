import { Link } from "react-router-dom";
import { site } from "../../data/site";

// Placeholder logo — swap the mark for your real logo image/SVG.
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      to="/"
      className="group flex items-center gap-2.5"
      aria-label={`${site.name} home`}
    >
      <span className="grid h-12 w-12 place-items-center rounded-xl shadow-brand transition group-hover:rotate-6">
        <img src="/images/logo1.png" alt="PR Medi Concern Logo" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-lg font-extrabold tracking-tight ${
            light ? "text-white" : "text-ink"
          }`}
        >
          PR <span className="text-brand-500">Medi</span> Concern
        </span>
        <span
          className={`mt-1 text-[10px] font-semibold tracking-[0.18em] uppercase ${
            light ? "text-white/60" : "text-slate-500"
          }`}
        >
          Healthcare &amp; Pharma
        </span>
      </span>
    </Link>
  );
}
