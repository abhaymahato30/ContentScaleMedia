"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="bg-[#315B46] px-6 py-40 text-[#EFECCE]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto max-w-[900px] text-center"
      >
        {/* TITLE */}
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Ready to turn content into growth?
        </h2>

        {/* TEXT */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed opacity-85">
          If you’re serious about building authority and inbound demand through
          content, let’s talk.
        </p>

        {/* CTA */}
        <div className="mt-12">
          <motion.a
            href="/book-call" // 🔗 replace with your link
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="
              inline-flex items-center gap-2
              rounded-md
              bg-[#EFECCE]
              px-8 py-4
              text-sm font-extrabold
              text-[#315B46]
              transition-all duration-300
              hover:shadow-[0_0_0_3px_rgba(239,236,206,0.25)]
            "
          >
            👉 Book a Strategy Call
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
