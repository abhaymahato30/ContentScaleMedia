export default function ResultsSection() {
  const results = [
    {
      name: "Deevankshu Garg",
      subtitle: "Gained 50K+ subscribers",
      image: "/results/deevankshu.png",
    },
    {
      name: "Katie Lee",
      subtitle: "10M+ views generated",
      image: "/results/katie.png",
    },
    {
      name: "Namaskar Prasad",
      subtitle: "500K+ views generated",
      image: "/results/namaskar.png",
    },
    {
      name: "Deevankshu Garg",
      subtitle: "Multiple viral videos",
      image: "/results/deevankshu.png",
    },
  ];

  return (
    <section className="relative flex justify-center bg-black px-6 py-32 text-white overflow-hidden">
      
      {/* CONTAINER (WIDER THAN NAVBAR, STILL CENTERED) */}
      <div className="w-[96vw] max-w-[1000px]">
        
        {/* Pill */}
        <div className="mb-6 flex justify-center">
          <span className="rounded-lg border border-white/25 px-6 py-2 text-sm font-semibold text-white/80">
            Results
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-4xl font-semibold sm:text-5xl md:text-6xl">
          Results speak for{" "}
          <span className="font-['Instrument_Serif'] font-normal text-indigo-500">
            themselves.
          </span>
        </h2>

        {/* Subtext */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-white/70 sm:text-base">
          We’ve worked across a number of industries and have achieved some
          incredible results with some incredible people and brands.
        </p>

        {/* CONTINUOUS SCROLLER */}
        <div className="relative mt-16 overflow-hidden">
          <div className="flex w-max animate-results-marquee gap-8 hover:[animation-play-state:paused]">
            
            {[...results, ...results].map((item, index) => (
              <div
                key={index}
                className="relative min-w-[300px] overflow-hidden rounded-2xl bg-yellow-400"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-[360px] w-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                {/* Text */}
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-sm font-semibold text-white">
                    {item.name}
                  </p>
                  <p className="text-xs text-white/80">
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
