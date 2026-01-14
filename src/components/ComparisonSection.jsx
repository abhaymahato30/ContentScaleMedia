export default function ProblemSolutionSection() {
  const problems = [
    "Inconsistent posting that breaks momentum",
    "Low engagement despite regular content",
    "Unclear messaging that confuses prospects",
    "Content that gets views but doesn’t convert",
    "Random posting that damages credibility",
  ];

  const solutions = [
    "Structured content systems built for consistency",
    "Hooks and edits optimized for engagement",
    "Clear messaging aligned with your authority",
    "Content designed to drive inbound demand",
    "A repeatable system that builds long-term trust",
  ];

  return (
    <section className="bg-[#EFECCE] px-6 py-36 text-[#315B46]">
      {/* CONTAINER */}
      <div className="mx-auto w-[92vw] max-w-[1100px]">
        
        {/* HEADING */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            The Problem Isn’t Content.
            <br />
            <span className="opacity-80">It’s the Lack of a System.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed opacity-75">
            In trust-based industries, random posting doesn’t just fail to work —
            it actively weakens credibility.
          </p>
        </div>

        {/* COMPARISON GRID */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          
          {/* LEFT — PROBLEMS */}
          <div className="rounded-2xl border border-[#315B46]/20 bg-[#315B46]/5 p-10">
            <h3 className="mb-6 text-lg font-bold uppercase tracking-widest opacity-80">
              You’re Struggling With
            </h3>

            <ul className="space-y-4">
              {problems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-base opacity-75"
                >
                  <span className="mt-1 text-sm">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — SOLUTIONS */}
          <div className="rounded-2xl border border-[#315B46]/30 bg-[#315B46] p-10 text-[#EFECCE]">
            <h3 className="mb-6 text-lg font-bold uppercase tracking-widest opacity-90">
              How We Help
            </h3>

            <ul className="space-y-4">
              {solutions.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-base opacity-90"
                >
                  <span className="mt-1 text-sm">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
