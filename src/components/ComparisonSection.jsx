export default function ComparisonSection() {
  const otherAgencies = [
    "Slow communication",
    "Single channel approach",
    "Outdated growth strategies",
    "Lack of industry research",
    "Outsourced to mediocre talent",
  ];

  const editifyMedia = [
    "Constant, proactive communication",
    "Omni-channel approach",
    "Tailored best-fit solutions",
    "Provides industry specific expertise",
    "Experts with 2+ years of experience",
  ];

  return (
    <section className="relative flex justify-center bg-black px-6 py-36 text-white">
      
      {/* CONTAINER — SAME AS NAVBAR */}
      <div className="w-[92vw] max-w-[1000px] text-center">
        
        {/* Pill */}
        <div className="mb-6 flex justify-center">
          <span className="rounded-lg border border-white/25 px-6 py-2 text-sm font-semibold text-white/80">
            Comparison
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-semibold sm:text-5xl md:text-6xl">
          But, why would you want to work{" "}
          <span className="font-['Instrument_Serif'] font-normal text-indigo-500">
            with us?
          </span>
        </h2>

        {/* COMPARISON GRID */}
        <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2">
          
          {/* OTHER AGENCIES */}
          <div className="rounded-2xl border border-white/20 bg-black/60 p-10 text-left backdrop-blur-xl">
            <h3 className="mb-6 text-lg font-semibold text-white/70">
              Other Agencies
            </h3>

            <ul className="space-y-4">
              {otherAgencies.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-white/70"
                >
                  <span className="text-lg text-white/40">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* EDITIFY MEDIA */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/25 bg-black/70 p-10 text-left backdrop-blur-xl">
            
            {/* Diagonal Glow */}
            <div className="pointer-events-none absolute -top-28 -right-28 h-[320px] w-[320px] rotate-45 bg-gradient-to-br from-indigo-500/60 to-transparent blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

            {/* Logo */}
            <h3 className="mb-6 text-xl font-bold">
              EDITIFY MEDIA
            </h3>

            <ul className="relative space-y-4">
              {editifyMedia.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-white"
                >
                  <span className="text-lg text-indigo-500">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
