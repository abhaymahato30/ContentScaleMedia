"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "Consistent Visibility",
    desc: "Regular content keeps your brand present and familiar.",
  },
  {
    title: "Trust Before Contact",
    desc: "Buyers trust you before the first conversation.",
  },
  {
    title: "Pre-Educated Prospects",
    desc: "Content answers objections before sales calls.",
  },
  {
    title: "Faster Conversions",
    desc: "Inbound leads convert significantly faster.",
  },
];

export default function RevenueTimeline() {
  return (
    <section className="bg-[#EFECCE] px-6 py-32 text-[#315B46]">
      {/* HEADER */}
      <div className="mb-24 text-center">
        <h2 className="text-4xl font-extrabold sm:text-5xl">
          Why This Drives Revenue
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg opacity-80">
          Especially critical for real estate and financial services,
          where trust precedes every transaction.
        </p>
      </div>

      {/* TIMELINE */}
      <div className="relative mx-auto max-w-3xl">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 h-full w-[4px] -translate-x-1/2 bg-[#315B46]/30" />

        <div className="flex flex-col gap-28">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: false,     // 🔥 KEY LINE
                amount: 0.4,
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className="relative flex justify-center"
            >
              {/* DOT */}
              <div className="absolute left-1/2 z-10 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-[#EFECCE] bg-[#315B46]" />

              {/* CARD */}
              <div className="mt-6 w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm opacity-75">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
