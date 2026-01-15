"use client";

import { useState } from "react";
import ytShortsLogo from "../assets/yt-shorts-logo.png";

export default function ResultsSection() {
  const videos = [
    { id: "-XIqJWBygIA", title: "Real Estate Short – Lead Driven Edit" },
    { id: "1sWH4crbYa4", title: "High-Retention Talking Head Edit" },
    { id: "tqPaAj-gLhw", title: "Viral Hook + Caption System" },
    { id: "KYVvjHwdT4w", title: "Short-Form Growth Edit" },
  ];

  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches;

  const [pause, setPause] = useState(false);

  return (
    <section className="bg-[#EFECCE] px-6 py-36 overflow-hidden">
      <div className="mx-auto w-[94vw] max-w-[1100px]">

        {/* HEADING */}
        <div className="mb-20 text-center text-[#315B46]">
          <span className="mb-4 inline-flex items-center gap-2 rounded-lg border border-[#315B46]/30 px-5 py-2 text-sm font-semibold">
            📈 Results
          </span>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Results That Speak for Themselves
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg opacity-75">
            A glimpse into the short-form systems we build for growth.
          </p>
        </div>

        {/* MARQUEE */}
        <div className="relative">
          <div
            className="flex w-max gap-10 animate-results-marquee"
            style={{ animationPlayState: pause ? "paused" : "running" }}
          >
            {[...videos, ...videos].map((video, index) => (
              <HoverVideoCard
                key={index}
                video={video}
                isMobile={isMobile}
                setPause={setPause}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

/* ================= CARD ================= */

function HoverVideoCard({ video, isMobile, setPause }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        if (!isMobile) {
          setHovered(true);
          setPause(true);
        }
      }}
      onMouseLeave={() => {
        setHovered(false);
        setPause(false);
      }}
      className="
        relative
        min-w-[320px]
        h-[390px]
        overflow-hidden
        rounded-2xl
        border border-[#315B46]/20
        bg-[#315B46]/5
        transition-all duration-300
        hover:scale-[1.03]
        hover:shadow-[0_25px_50px_rgba(49,91,70,0.28)]
      "
    >
      {/* THUMBNAIL */}
      <img
        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
        alt="YouTube Short thumbnail"
        className={`
          absolute inset-0 h-full w-full object-cover
          transition-opacity duration-300
          ${hovered ? "opacity-0" : "opacity-100"}
        `}
        loading="lazy"
      />

      {/* VIDEO (DESKTOP ONLY) */}
      {!isMobile && hovered && (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${video.id}&playsinline=1&modestbranding=1`}
          allow="autoplay; encrypted-media"
        />
      )}

      {/* CENTER YT SHORTS LOGO OVERLAY */}
      {!hovered && (
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div
            className="
              
            "
          >
            <img
              src={ytShortsLogo}
              alt="YouTube Shorts"
              className="h-20 w-20 sm:h-24 sm:w-24"
            />
          </div>
        </div>
      )}

      {/* TITLE */}
      <div className="absolute bottom-6 left-6 right-6 z-20">
        <p className="text-sm font-semibold text-[#EFECCE] leading-snug">
          {video.title}
        </p>
      </div>

      {/* CINEMATIC OVERLAY */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-[#315B46]/75 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-black/10" />
      </div>
    </div>
  );
}
