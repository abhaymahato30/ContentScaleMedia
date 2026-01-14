"use client";

import { motion } from "framer-motion";

const services = [
  "Short-Form Video Editing",
  "Content Repurposing",
  "Hook And Message Optimization",
  "Platform-Ready Delivery",
  "Consistent Distribution",
];

export default function WhatWeDo() {
  return (
    <section
      style={{
        minHeight: "100vh",
        backgroundColor: "#EFECCE",
        display: "flex",
        alignItems: "center",
        fontFamily:
          "'Poppins', 'Inter', system-ui, -apple-system, BlinkMacSystemFont",
      }}
    >
      {/* CONTAINER */}
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            borderRadius: "24px",
            overflow: "hidden",
            boxShadow: "0 30px 60px rgba(0,0,0,0.12)",
          }}
        >
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              backgroundColor: "#315B46",
              color: "#EFECCE",
              padding: "64px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h2
              style={{
                fontSize: "52px",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                textTransform: "uppercase",
              }}
            >
              What We Do
            </h2>

            <p
              style={{
                marginTop: "20px",
                fontSize: "20px",
                fontWeight: 500,
                maxWidth: "420px",
                lineHeight: 1.5,
                opacity: 0.95,
              }}
            >
              We turn content into a repeatable growth system.
            </p>

            <p
              style={{
                marginTop: "24px",
                fontSize: "16px",
                maxWidth: "360px",
                lineHeight: 1.6,
                opacity: 0.7,
              }}
            >
              Built for authority, trust, and inbound demand.
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            style={{
              backgroundColor: "#EFECCE",
              padding: "64px",
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                width: "100%",
              }}
            >
              {services.map((item, i) => (
                <motion.li
                  key={i}
                  initial="rest"
                  animate="rest"
                  whileHover="hover"
                  variants={{
                    rest: { backgroundColor: "transparent" },
                    hover: { backgroundColor: "#315B46" },
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  style={{
                    position: "relative",
                    padding: "18px 22px",
                    borderRadius: "12px",
                    cursor: "pointer",
                    overflow: "hidden",
                    marginBottom: "12px",
                  }}
                >
                  {/* Divider */}
                  <motion.div
                    variants={{
                      rest: { width: "30%", opacity: 0.25 },
                      hover: { width: "100%", opacity: 1 },
                    }}
                    transition={{ duration: 0.35 }}
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 22,
                      height: "2px",
                      background:
                        "linear-gradient(90deg, #EFECCE, rgba(239,236,206,0.25))",
                    }}
                  />

                  {/* Text */}
                  <motion.span
                    variants={{
                      rest: { color: "#315B46", x: 0 },
                      hover: { color: "#EFECCE", x: 6 },
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      fontSize: "21px",
                      fontWeight: 700,
                      letterSpacing: "0.01em",
                      display: "inline-block",
                      textTransform: "capitalize",
                    }}
                  >
                    {item}
                  </motion.span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* RESPONSIVE */}
      <style jsx>{`
        @media (max-width: 900px) {
          section {
            padding: 64px 0;
            align-items: flex-start;
          }

          section > div > div {
            grid-template-columns: 1fr;
          }

          section > div > div > div {
            padding: 40px 24px;
          }

          h2 {
            font-size: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
