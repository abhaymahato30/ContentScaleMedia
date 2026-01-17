"use client";

import { useEffect, useRef, useState } from "react";
import ytShortsLogo from "../assets/yt-shorts-logo.png";

export default function ResultsSection() {
  const videos = [
    { id: "-XIqJWBygIA", title: "Real Estate Short – Lead Driven Edit" },
    { id: "1sWH4crbYa4", title: "High-Retention Talking Head Edit" },
    { id: "tqPaAj-gLhw", title: "Viral Hook + Caption System" },
    { id: "KYVvjHwdT4w", title: "Short-Form Growth Edit" },
  ];

  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const rafRef = useRef(null);

  const [paused, setPaused] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches;

  /* ================= RAF MARQUEE ================= */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let x = 0;
    let lastTime = performance.now();
    const speed = 0.04; // px per ms (adjust for faster/slower)

    const loop = (time) => {
      const delta = time - lastTime;
      lastTime = time;

      if (!paused) {
        x -= delta * speed;
        const width = track.scrollWidth / 2;

        if (Math.abs(x) >= width) {
          x = 0;
        }

        track.style.transform = `translate3d(${x}px,0,0)`;
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(rafRef.current);
  }, [paused]);

  return (
    <section className="bg-[#EFECCE] px-6 py-36 overflow-hidden">
      <div className="mx-auto max-w-[1100px]">

        {/* HEADING */}
        <div className="mb-20 text-center text-[#315B46]">
          <h2 className="text-4xl font-extrabold sm:text-5xl">
            Results That Speak for Themselves
          </h2>
        </div>

        {/* MARQUEE */}
        <div
          ref={containerRef}
          className="relative overflow-hidden"
        >
          <div
            ref={trackRef}
            className="flex w-max gap-10"
          >
            {[...videos, ...videos].map((video, index) => (
              <Card
                key={index}
                video={video}
                isMobile={isMobile}
                setPaused={setPaused}
                setActiveVideo={setActiveVideo}
              />
            ))}
          </div>
        </div>

        {/* MOBILE MODAL */}
        {activeVideo && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80">
            <div className="relative w-full max-w-md aspect-[9/16] bg-black rounded-xl overflow-hidden">
              <button
                onClick={() => {
                  setPaused(false);
                  setActiveVideo(null);
                }}
                className="absolute top-3 right-3 z-10 bg-black/60 text-white px-3 py-1 rounded"
              >
                ✕
              </button>

              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&playsinline=1`}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ================= CARD ================= */

function Card({ video, isMobile, setPaused, setActiveVideo }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        if (!isMobile) {
          setHovered(true);
          setPaused(true);
        }
      }}
      onMouseLeave={() => {
        if (!isMobile) {
          setHovered(false);
          setPaused(false);
        }
      }}
      onClick={() => {
        if (isMobile) {
          setPaused(true);
          setActiveVideo(video.id);
        }
      }}
      className="
        relative
        min-w-[320px]
        h-[390px]
        rounded-2xl
        overflow-hidden
        border border-[#315B46]/20
        bg-[#315B46]/5
        cursor-pointer
        transition-transform duration-300
        hover:scale-[1.03]
      "
    >
      {/* THUMBNAIL */}
      <img
        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity ${
          hovered ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* DESKTOP VIDEO */}
      {!isMobile && hovered && (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&controls=0`}
          allow="autoplay"
        />
      )}

      {/* CENTER LOGO */}
      {!hovered && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="bg-black/55 p-7 rounded-full backdrop-blur">
            <img src={ytShortsLogo} className="h-20 w-20" />
          </div>
        </div>
      )}

      {/* TITLE */}
      <div className="absolute bottom-6 left-6 right-6 z-10">
        <p className="text-sm font-semibold text-[#EFECCE]">
          {video.title}
        </p>
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#315B46]/70 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
