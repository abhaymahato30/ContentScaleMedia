"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ from = 0, to, suffix = "", duration = 1.5 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!isInView) return;

    let frame = 0;
    const totalFrames = duration * 60;

    const animate = () => {
      frame++;
      const progress = Math.min(frame / totalFrames, 1);
      const current = Math.floor(from + (to - from) * progress);
      setValue(current);

      if (progress < 1) requestAnimationFrame(animate);
    };

    animate();
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
}

export default function StatsStrip() {
  return (
    <section className="bg-[#315B46] px-6 py-20">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-14 text-center md:grid-cols-3">

        {/* STAT 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-5xl font-extrabold text-[#EFECCE]">
            <Counter to={500} suffix="Hr+" />
          </h3>
          <div className="mx-auto my-4 h-[1px] w-16 bg-[#EFECCE]/50" />
          <p className="text-sm uppercase tracking-wide text-[#EFECCE]/80">
            Time Saved
          </p>
        </motion.div>

        {/* STAT 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-5xl font-extrabold text-[#EFECCE]">
            <Counter to={50} suffix="M+" />
          </h3>
          <div className="mx-auto my-4 h-[1px] w-16 bg-[#EFECCE]/50" />
          <p className="text-sm uppercase tracking-wide text-[#EFECCE]/80">
            Organic Views
          </p>
        </motion.div>

        {/* STAT 3 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-5xl font-extrabold text-[#EFECCE]">
            <Counter to={10} suffix="X" />
          </h3>
          <div className="mx-auto my-4 h-[1px] w-16 bg-[#EFECCE]/50" />
          <p className="text-sm uppercase tracking-wide text-[#EFECCE]/80">
          Revenue 
          </p>
        </motion.div>

      </div>
    </section>
  );
}
