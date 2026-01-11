export default function TestimonialsGrid() {
  return (
    <section className="relative flex justify-center bg-black px-6 pb-32 text-white">
      
      {/* CONTAINER — SAME AS NAVBAR */}
      <div className="grid w-[92vw] max-w-[800px] gap-6 md:grid-cols-2">
        
        {/* VIDEO TESTIMONIAL */}
        <div className="rounded-xl border border-white/15 bg-black/40 p-4 backdrop-blur-sm">
          
          {/* Video */}
          <div className="aspect-video overflow-hidden rounded-lg">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Client Testimonial"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Quote */}
          <p className="mt-4 text-sm leading-relaxed text-white/90">
            I’ve worked with Tuvyam and his team for a few months, creating
            10–12 videos. They’ve boosted my viewership and handled everything
            smoothly with great communication.
          </p>

          {/* Author */}
          <div className="mt-4 flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/100?img=5"
              alt=""
              className="h-9 w-9 rounded-full"
            />
            <div className="text-xs">
              <p className="font-semibold text-white">Katie Lee</p>
              <p className="text-white/60">
                CGC Talks Miscarriage and Fertility
              </p>
            </div>
          </div>
        </div>

        {/* TEXT TESTIMONIAL */}
        <div className="rounded-xl border border-white/15 bg-black/40 p-6 backdrop-blur-sm">
          
          <p className="text-sm leading-relaxed text-white/90">
            I’ve been working with Tuvyam for over a year, and we’ve created
            40–50 videos together. Some of his edits have even reached millions
            of views. The creativity and accountability his team brings are
            truly commendable.
          </p>

          {/* Author */}
          <div className="mt-6 flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/100?img=5"
              alt=""
              className="h-9 w-9 rounded-full"
            />
            <div className="text-xs">
              <p className="font-semibold text-white">Deevankshu Garg</p>
              <p className="text-white/60">
                Founder @thecodeskool
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
