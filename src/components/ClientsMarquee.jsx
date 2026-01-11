export default function ClientsMarquee() {
  const logos = [
    "/clients/finnovationz.png",
    "/clients/scaler.png",
    "/clients/auxilo.png",
    "/clients/zircle.png",
    "/clients/namaskar-prasad.png",
  ];

  return (
    <section className="relative flex justify-center bg-black py-20 text-white">
      {/* TOP FADE ONLY */}
      <div className="pointer-events-none absolute top-0 left-0 h-32 w-full bg-gradient-to-b from-transparent to-black z-10" />

      {/* <div className="pointer-events-none absolute top-0 left-0 h-32 w-full bg-gradient-to-b from-black to-transparent z-10" /> */}
      {/* CONTAINER — same as navbar */}
      <div className="w-[92vw] max-w-[800px]">
        
        {/* Heading */}
        <p className="mb-8 text-center text-sm font-semibold text-white/70">
          You’re in good hands:
        </p>

        {/* Marquee wrapper */}
        <div className="relative overflow-hidden rounded-xl">
          
          {/* Fade edges */}
          

          {/* Moving track */}
          <div className="flex w-max animate-marquee gap-6 hover:[animation-play-state:paused]">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex h-28 w-56 items-center justify-center rounded-xl bg-white p-5 shadow-md"
              >
                <img
                  src={logo}
                  alt="Client logo"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
