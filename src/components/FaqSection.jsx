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

  // 🔽 NEW FAQs START HERE

  {
    q: "What platforms do you create content for?",
    a: "We primarily focus on Instagram Reels, YouTube Shorts, and TikTok, ensuring each piece of content is optimized for platform-specific performance.",
  },
  {
    q: "Do I need to be on camera?",
    a: "Not necessarily. While on-camera content performs best, we also offer faceless, voice-over, and hybrid formats depending on your comfort level.",
  },
  {
    q: "How much time do I need to invest each week?",
    a: "Very minimal. Most clients spend 30–60 minutes per week reviewing content or recording short clips. We handle the rest.",
  },
  {
    q: "Do you provide content ideas and scripts?",
    a: "Yes. We handle ideation, scripting, hooks, and content frameworks tailored to your niche and audience.",
  },
  {
    q: "What makes your service different from hiring a freelancer?",
    a: "We don’t just edit videos — we build a repeatable content system focused on positioning, consistency, and long-term growth.",
  },
  {
    q: "Will this help generate leads or sales?",
    a: "Our strategy is designed to build authority and inbound demand. While results vary, many clients see improved lead quality and trust over time.",
  },
  {
    q: "Can you work with my existing content?",
    a: "Absolutely. We can repurpose podcasts, long-form videos, webinars, or existing clips into high-performing short-form content.",
  },
  {
    q: "Is there a minimum contract length?",
    a: "No strict minimums. However, we recommend at least a 3-month engagement to allow the system to fully compound.",
  },
  {
    q: "How do we get started?",
    a: "You can book a strategy call to discuss your goals, audience, and content direction. From there, we create a customized content plan.",
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
