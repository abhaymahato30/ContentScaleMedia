export default function TestimonialsIntro() {
  return (
    <section className="bg-[#EFECCE] px-6 py-24 text-[#315B46]">
      {/* CONTAINER — SAME WIDTH AS NAVBAR */}
      <div className="mx-auto w-[92vw] max-w-[900px] text-center">
        
        {/* PILL */}
        <div className="mb-8 flex justify-center">
          <span className="rounded-lg border border-[#315B46]/30 px-6 py-2 text-sm font-semibold tracking-wide">
            Our Clients
          </span>
        </div>

        {/* HEADING */}
        <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl">
          Hear it directly from
          <br />
          <span className="opacity-80">the people we work with.</span>
        </h2>

        {/* SUBTEXT */}
        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed opacity-75 sm:text-lg">
          Our testimonials reflect the trust our clients place in us and the
          results that come from building consistent, authority-driven content
          systems.
        </p>

      </div>
    </section>
  );
}
