import { useState } from "react";

const faqs = [
  {
    q: "How fast will I receive my videos?",
    a: "The delivery time for your videos depends on the package you choose. Typically, you can expect to receive your videos within a day to 2-3 days, ensuring you get your content promptly to meet your needs.",
  },
  {
    q: "How do I request videos?",
    a: "We’ll grant you access to our internal system where you upload your videos with ease. Send us your videos, and we’ll do the rest.",
  },
  {
    q: "Why wouldn't I just hire my own editor?",
    a: "Hiring your own editor can be time-consuming and difficult. At Editify Media, we manage everything — editing, communication, and quality checks — so you don’t have to.",
  },
  {
    q: "What if I'm not happy with my video?",
    a: "This doesn’t happen very often, but if it does — you get unlimited revisions until you love the final result.",
  },
  {
    q: "Do you offer trials or make example videos?",
    a: "No worries! We’ll continue to revise the design until you’re 100% satisfied.",
  },
  {
    q: "What are some common mistakes to avoid in video editing?",
    a: "Common mistakes include neglecting audio quality, excessive effects, poor color correction, inconsistent editing style, and ignoring white balance.",
  },
  {
    q: "Are there any refunds if I don't like the service?",
    a: "Due to the high-quality nature of the work, there will be no refunds issued.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative bg-black px-6 py-28 text-white">
      <div className="mx-auto w-[92vw] max-w-[760px]">
        
        {/* FAQ LIST */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-lg border border-white/10 bg-white/5 backdrop-blur-lg transition-all"
              >
                {/* QUESTION */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-white"
                >
                  <span>{faq.q}</span>
                  <span
                    className={`text-xl transition-transform duration-300 ${
                      isOpen ? "rotate-45 text-indigo-500" : "text-white"
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* ANSWER */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden px-5 pb-4 text-sm leading-relaxed text-white/80">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <button className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-black">
            Book A 30-Min Call →
          </button>
        </div>
      </div>
    </section>
  );
}
