export default function TestimonialsIntro() {
  return (
    <section className="relative flex justify-center bg-black px-6 py-6 text-white">
      
      {/* Container – SAME WIDTH AS NAVBAR */}
      <div className="w-[92vw] max-w-[800px] text-center">
        
        {/* Bigger pill */}
        <div className="mb-8 flex justify-center">
          <span className="rounded-lg border border-white/25 px-6 py-2 text-sm font-semibold tracking-wide text-white/80">
            Our Clients
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-semibold leading-[1.25] sm:text-4xl md:text-5xl">
          Hear it directly from{" "}
          <span className="font-['Instrument_Serif'] font-normal text-indigo-500 text-4xl sm:text-4xl md:text-5xl leading-[1.2]">
            our clients.
          </span>
        </h2>

        {/* Subtext */}
        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          Hear what our clients have to say. Our testimonials reflect the
          satisfaction our clients have in our services.
        </p>

      </div>
    </section>
  );
}
