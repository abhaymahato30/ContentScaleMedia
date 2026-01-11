export default function Hero() {
  return (
    <section className="relative flex justify-center min-h-[150vh] sm:min-h-[130vh] px-6 pt-24 text-white">
      
      {/* CONTENT WRAPPER */}
      <div className="flex w-full max-w-[800px] flex-col items-center text-center">
        
        {/* Social proof */}
        <div className="mb-2 flex flex-col items-center text-white font-semibold">
          
          {/* Avatars + stars (responsive) */}
          <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
            
            {/* Avatars */}
            <div className="flex -space-x-3">
              <img
                className="h-11 w-11 rounded-full border border-black"
                src="https://i.pravatar.cc/80?img=1"
                alt=""
              />
              <img
                className="h-11 w-11 rounded-full border border-black"
                src="https://i.pravatar.cc/80?img=2"
                alt=""
              />
              <img
                className="h-11 w-11 rounded-full border border-black"
                src="https://i.pravatar.cc/80?img=3"
                alt=""
              />
              <img
                className="h-11 w-11 rounded-full border border-black"
                src="https://i.pravatar.cc/80?img=4"
                alt=""
              />
            </div>

            {/* Stars */}
            <div className="text-lg leading-none md:text-xl">
              ★★★★★
            </div>
          </div>

          {/* Sentence */}
          <span className="mt-1 text-sm text-center">
            Trusted by 20+ brands & creators
          </span>
        </div>

        {/* Heading */}
        <h1 className="mt-2 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl font-sans">
          Maximize your reach with
          <br />
          <span className="font-serif font-bold text-indigo-600 text-3xl sm:text-4xl md:text-5xl leading-snug">
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
          <button className="rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3 text-sm font-extrabold text-white transition-all duration-300 hover:bg-white hover:text-black hover:from-white hover:to-white">
            Book A Call
          </button>

          <button className="rounded-md border border-white/40 px-6 py-3 text-sm font-extrabold text-white transition-all duration-300 hover:bg-white/10">
            Learn More
          </button>
        </div>
      </div>

      {/* Glow */}

<div className="pointer-events-none absolute top-130 left-1/2 -translate-x-1/2 h-[200px] w-[420px] rounded-t-full bg-indigo-600/90 blur-[45px] border-t border-black/40" />

  
    </section>
  );
}
