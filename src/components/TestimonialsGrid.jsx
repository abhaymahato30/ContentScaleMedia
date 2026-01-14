export default function TestimonialsGrid() {
  return (
    <section className="bg-[#EFECCE] px-6 pb-36 text-[#315B46]">
      
      {/* CONTAINER — SAME WIDTH AS NAVBAR */}
      <div className="mx-auto grid w-[92vw] max-w-[900px] gap-10 md:grid-cols-2">
        
        {/* VIDEO TESTIMONIAL */}
        <div className="rounded-2xl border border-[#315B46]/20 bg-[#315B46]/5 p-6">
          
          {/* Video */}
          <div className="aspect-video overflow-hidden rounded-xl border border-[#315B46]/20">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Client Testimonial"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Quote */}
          <p className="mt-6 text-sm leading-relaxed opacity-80">
            “I’ve worked with the team for several months, creating consistent
            short-form content. Communication was proactive, and the system they
            built helped grow viewership without guesswork.”
          </p>

          {/* Author */}
          <div className="mt-6 flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/100?img=5"
              alt=""
              className="h-9 w-9 rounded-full"
            />
            <div className="text-xs">
              <p className="font-bold">Katie Lee</p>
              <p className="opacity-60">
                Personal Brand
              </p>
            </div>
          </div>
        </div>

        {/* TEXT TESTIMONIAL */}
        <div className="rounded-2xl border border-[#315B46]/20 bg-[#315B46]/5 p-8">
          
          <p className="text-sm leading-relaxed opacity-80">
            “Over the past year, we created dozens of videos together. Some
            reached millions of views, but more importantly, the consistency
            and accountability made content feel manageable and effective.”
          </p>

          {/* DIVIDER */}
          <div className="my-6 h-[1px] w-12 bg-[#315B46]/30" />

          {/* Author */}
          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/100?img=7"
              alt=""
              className="h-9 w-9 rounded-full"
            />
            <div className="text-xs">
              <p className="font-bold">Deevankshu Garg</p>
              <p className="opacity-60">
                Founder, The Code Skool
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
