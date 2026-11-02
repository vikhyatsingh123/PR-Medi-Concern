const items = ['WHO-GMP Certified', 'ISO 9001:2015', 'FSSAI Approved', 'NABL Accredited Labs', 'Backward Integrated', 'Export to 25+ Countries']

// Brand-coloured ribbon of key credentials.
export default function Ticker() {
  return (
    <div className="overflow-hidden bg-brand-500 py-4">
      <div className="flex w-max animate-marquee items-center">
        {[...items, ...items, ...items, ...items].map((t, i) => (
          <span
            key={i}
            className="flex items-center font-display text-lg font-extrabold tracking-tight whitespace-nowrap text-white uppercase sm:text-xl"
          >
            <span className="px-7">{t}</span>
            <span aria-hidden className="text-ink/60">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
