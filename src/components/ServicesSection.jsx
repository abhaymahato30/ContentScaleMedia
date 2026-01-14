export default function ServicesSection() {
  const services = [
    {
      title: "Short-Form Video Editing",
      desc: "High-retention short-form videos designed for Reels, Shorts, and TikTok to maximize reach and consistency.",
    },
    {
      title: "Content Repurposing",
      desc: "One idea turned into multiple platform-ready assets without diluting message or authority.",
    },
    {
      title: "Hook & Message Optimization",
      desc: "Strategic hooks and messaging frameworks engineered to stop the scroll and hold attention.",
    },
    {
      title: "Platform-Ready Delivery",
      desc: "Content delivered optimized for each platform’s format, pacing, and algorithm behavior.",
    },
    {
      title: "Consistent Distribution Support",
      desc: "Systems built to maintain consistency and momentum without relying on random posting.",
    },
    {
      title: "Authority-Driven Content Systems",
      desc: "A repeatable content engine designed to build trust and inbound demand over time.",
    },
  ];

  return (
    <section className="bg-[#EFECCE] px-6 py-36 text-[#315B46]">
      {/* CONTAINER */}
      <div className="mx-auto w-[92vw] max-w-[1100px]">
        
        {/* HEADING */}
        <div className="mb-20 text-center">
          <span className="mb-4 inline-block rounded-lg border border-[#315B46]/30 px-5 py-2 text-sm font-semibold tracking-wide">
            Services
          </span>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
            How We Support Your Growth
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed opacity-75">
            We don’t offer one-off edits. We build content systems designed to
            compound trust, visibility, and inbound demand.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                rounded-2xl
                border border-[#315B46]/20
                bg-[#315B46]/5
                p-10
                transition-colors duration-300
                hover:bg-[#315B46]/10
              "
            >
              <h3 className="text-2xl font-bold">
                {service.title}
              </h3>

              <p className="mt-4 text-base leading-relaxed opacity-75">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
