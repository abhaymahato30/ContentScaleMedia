export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black px-6 pt-24 text-white overflow-hidden">

      {/* ================= SPLINE BACKGROUND ================= */}
      {/* Interactive layer */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://my.spline.design/boxeshover-icz8qqg5hg1YEzjiBJewrs8H/"
          className="h-full w-full"
          frameBorder="0"
          loading="lazy"
          title="Spline Background"
        />
      </div>

      {/* ================= CONTENT LAYER ================= */}
      {/* pointer-events-none ensures spline still receives hover */}
      <div className="relative z-10 flex justify-center pointer-events-none">
        <div className="flex w-full max-w-[800px] flex-col items-center text-center pointer-events-auto">

          {/* Social proof */}
          <div className="mb-2 flex flex-col items-center font-semibold">
            <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    className="h-11 w-11 rounded-full border border-black"
                    src={`https://i.pravatar.cc/80?img=${i}`}
                    alt=""
                  />
                ))}
              </div>
              <div className="text-lg md:text-xl">★★★★★</div>
            </div>
            <span className="mt-1 text-sm">
              Trusted by 20+ brands & creators
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl font-sans">
            Maximize your reach with
            <br />
            <span className="font-serif font-bold text-indigo-600 text-3xl sm:text-4xl md:text-5xl">
              professionally edited videos
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg font-medium">
            Our expert editors help you make kick-ass videos and grow faster.
            It’s time you stood out in a sea of sameness.
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button className="rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3 text-sm font-extrabold text-white transition-all duration-300 hover:opacity-90">
              Book A Call
            </button>

            <button className="rounded-md border border-white/40 px-6 py-3 text-sm font-extrabold text-white transition-all duration-300 hover:bg-white/10">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* ================= GLOW ================= */}
      {/* <div className="pointer-events-none absolute top-[130px] left-1/2 -translate-x-1/2 h-[200px] w-[420px] rounded-t-full bg-indigo-600/90 blur-[45px]" /> */}
    </section>
  );
}
