"use client";

export default function TestimonialsGrid() {
  const clients = [
    {
      name: "Armando Novelo",
      videoId: "yIMiNTuGOok",
    },
    {
      name: "Marcella",
      videoId: "NHVe6DtYLbI",
    },
    {
      name: "David",
      videoId: "J18RptRqyB0",
    },
  ];

  return (
    <section className="bg-[#EFECCE] px-6 pb-36 text-[#315B46]">
      
      {/* CONTAINER */}
      <div className="mx-auto w-[92vw] max-w-[1100px]">
        
        {/* GRID — 3 IN ONE ROW */}
        <div className="grid gap-8 md:grid-cols-3">
          {clients.map((client, index) => (
            <div
              key={index}
              className="
                rounded-2xl
                border border-[#315B46]/20
                bg-[#315B46]/5
                p-4
                transition-all duration-300
                hover:bg-[#315B46]/10
              "
            >
              {/* VIDEO (SMALL SHORTS FORMAT) */}
              <div className="aspect-[9/16] overflow-hidden rounded-xl border border-[#315B46]/20">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${client.videoId}`}
                  title={`${client.name} testimonial`}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* CLIENT NAME */}
              <div className="mt-3 text-center">
                <p className="text-xs font-semibold">
                  {client.name}
                </p>
                <p className="mt-0.5 text-[11px] opacity-60">
                  Short-Form Video Editing Client
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
