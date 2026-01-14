export default function ResultsSection() {
  const results = [
    {
      name: "Deevankshu Garg",
      subtitle: "Gained 50K+ subscribers",
      image: "/results/deevankshu.png",
    },
    {
      name: "Katie Lee",
      subtitle: "10M+ organic views generated",
      image: "/results/katie.png",
    },
    {
      name: "Namaskar Prasad",
      subtitle: "500K+ views generated",
      image: "/results/namaskar.png",
    },
    {
      name: "Deevankshu Garg",
      subtitle: "Multiple viral short-form videos",
      image: "/results/deevankshu.png",
    },
  ];

  return (
    <section className="bg-[#EFECCE] px-6 py-36 text-[#315B46] overflow-hidden">
      {/* CONTAINER */}
      <div className="mx-auto w-[94vw] max-w-[1100px]">
        
        {/* HEADING */}
        <div className="mb-20 text-center">
          <span className="mb-4 inline-block rounded-lg border border-[#315B46]/30 px-5 py-2 text-sm font-semibold tracking-wide">
            Results
          </span>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Results That Speak for Themselves
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed opacity-75">
            Consistent systems produce consistent outcomes. Here’s what that
            looks like in practice.
          </p>
        </div>

        {/* SCROLLER */}
        <div className="relative">
          <div className="flex w-max gap-10 animate-results-marquee hover:[animation-play-state:paused]">
            {[...results, ...results].map((item, index) => (
              <div
                key={index}
                className="
                  relative
                  min-w-[320px]
                  overflow-hidden
                  rounded-2xl
                  border border-[#315B46]/20
                  bg-[#315B46]/5
                "
              >
                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-[360px] w-full object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#315B46]/80 via-[#315B46]/20 to-transparent" />

                {/* TEXT */}
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-base font-bold text-[#EFECCE]">
                    {item.name}
                  </p>
                  <p className="mt-1 text-sm text-[#EFECCE]/80">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
