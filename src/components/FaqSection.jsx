"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Who is this service for?",
    a: "We work primarily with brands, real estate professionals, and financial advisors who want to build authority and generate inbound demand through short-form content.",
  },
  {
    q: "How quickly can I expect results?",
    a: "Most clients begin seeing meaningful traction within the first 30–60 days as consistency and distribution compound.",
  },
  {
    q: "Do you handle posting and distribution?",
    a: "Yes. We deliver platform-ready content and can manage consistent distribution depending on your engagement level.",
  },
  {
    q: "Is this a long-term commitment?",
    a: "Short-form content works best as a system. While there’s no hard lock-in, long-term consistency delivers the highest ROI.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-[#315B46] px-6 py-36 text-[#EFECCE]">
      <div className="mx-auto max-w-[900px]">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#EFECCE]/80">
            Clear answers before you decide to move forward.
          </p>
        </motion.div>

        {/* FAQ LIST */}
        <div className="flex flex-col gap-4">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                className="rounded-xl border border-[#EFECCE]/15 bg-[#EFECCE]/5"
              >
                {/* QUESTION */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-base font-bold tracking-wide">
                    {item.q}
                  </span>
                  <span
                    className={`text-xl transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* ANSWER */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm leading-relaxed text-[#EFECCE]/80">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
