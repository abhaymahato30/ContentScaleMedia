export default function ServicesSection() {
  const services = [
    {
      title: "YouTube Videos",
      desc: "YouTube videos made more engaging than ever for longer watch time and more subscribers.",
      glow: "from-indigo-500/50",
    },
    {
      title: "Short Form Videos",
      desc: "Nail your Reels, TikToks and YouTube shorts to optimize engagement and shareability.",
      glow: "from-sky-500/50",
    },
    {
      title: "Podcast Editing",
      desc: "Podcasts edited to perfection for clear sound, engaging flow, and a loyal audience.",
      glow: "from-cyan-500/50",
    },
    {
      title: "Ad Creatives & VSLs",
      desc: "High-converting ad creatives and VSLs crafted to grab attention, drive action, and boost sales.",
      glow: "from-violet-500/50",
    },
  ];

  return (
    <section className="relative flex justify-center bg-black px-6 py-36 text-white">
      
      {/* CONTAINER — SLIGHTLY NARROWER */}
      <div className="w-[94vw] max-w-[1000px] text-center">
        
        {/* Pill */}
        <div className="mb-6 flex justify-center">
          <span className="rounded-lg border border-white/25 px-6 py-2 text-sm font-semibold text-white/80">
            Services
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-semibold sm:text-5xl md:text-6xl">
          How can we help{" "}
          <span className="font-['Instrument_Serif'] font-normal text-indigo-500">
            you?
          </span>
        </h2>

        {/* Subtext */}
        <p className="mx-auto mt-8 max-w-2xl text-base text-white/70 sm:text-lg">
          From short-form videos, to long-form videos, to ad creatives and VSLs,
          we’ve got you covered on every front.
        </p>

        {/* SERVICES GRID */}
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/20 bg-black/70 p-10 backdrop-blur-xl"
            >
              {/* DIAGONAL COLOR TRIANGLE */}
              <div
                className={`pointer-events-none absolute -top-24 -left-24 h-[260px] w-[260px] rotate-45 bg-gradient-to-br ${service.glow} to-transparent blur-2xl transition-opacity duration-500 group-hover:opacity-90`}
              />

              {/* Content */}
              <h3 className="relative text-3xl font-semibold text-white">
                {service.title}
              </h3>

              <p className="relative mt-5 text-base leading-relaxed text-white/70">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
