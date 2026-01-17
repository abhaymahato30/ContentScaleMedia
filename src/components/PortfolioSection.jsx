"use client";

import { useState } from "react";

export default function PortfolioSection() {
  const videos = [
    { id: "qmqs5fhoZxE", title: "Client Brand Story – Long Form Edit" },
    { id: "X004vDE9_3Y", title: "Educational YouTube Video" },
    { id: "q2UHAUXcRh8", title: "Talking Head Authority Content" },
    { id: "m9zn8uBqkW8", title: "Podcast Style Long-Form Edit" },
  ];

  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="bg-[#EFECCE] px-6 py-28 text-[#315B46]">
      <div className="mx-auto max-w-[1000px]">

        {/* HEADING */}
        <div className="mb-16 text-center">
          <span className="inline-flex items-center rounded-full border border-[#315B46]/30 px-5 py-2 text-sm font-semibold">
            🎬 Portfolio
          </span>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Long-Form Client Work
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg opacity-75">
            A selection of long-form YouTube content edited for clients —
            optimized for clarity, retention, and authority.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-items-center">
          {videos.map((video, index) => (
            <PortfolioCard
              key={index}
              video={video}
              onPlay={() => setActiveVideo(video.id)}
            />
          ))}
        </div>

        {/* MODAL */}
        {activeVideo && (
          <VideoModal
            videoId={activeVideo}
            onClose={() => setActiveVideo(null)}
          />
        )}
      </div>
    </section>
  );
}

/* ================= CARD ================= */

function PortfolioCard({ video, onPlay }) {
  return (
    <div
      className="
        group
        w-full
        max-w-[420px]
        cursor-pointer
        overflow-hidden
        rounded-xl
        border border-[#315B46]/20
        bg-white
        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:shadow-[0_25px_45px_rgba(49,91,70,0.28)]
      "
    >
      {/* THUMBNAIL */}
      <div className="relative aspect-video overflow-hidden cursor-pointer">
        <img
          src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
          alt={video.title}
          className="
            h-full w-full object-cover
            transition-transform duration-500 ease-out
            group-hover:scale-[1.06]
            cursor-pointer
          "
        />

        {/* SOFT OVERLAY (NON-INTERACTIVE) */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />

        {/* PLAY BUTTON */}
        <button
          onClick={onPlay}
          className="
            absolute inset-0
            flex items-center justify-center
            cursor-pointer
            focus:outline-none
          "
        >
          <div
            className="
              flex h-14 w-14 items-center justify-center
              rounded-full
              bg-[#315B46]
              text-[#EFECCE]
              text-xl
              shadow-lg
              transition-all duration-300
              group-hover:scale-110
              group-hover:shadow-[0_0_18px_rgba(49,91,70,0.6)]
              cursor-pointer
            "
          >
            ▶
          </div>
        </button>
      </div>

      {/* TEXT */}
      <div className="p-4 cursor-pointer">
        <p className="text-sm font-semibold leading-snug">
          {video.title}
        </p>
        <p className="mt-1 text-xs opacity-70">
          Long-form YouTube edit
        </p>
      </div>
    </div>
  );
}

/* ================= MODAL ================= */

function VideoModal({ videoId, onClose }) {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 px-4">
      <div className="relative w-full max-w-3xl rounded-xl bg-[#EFECCE] p-4">
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="
            absolute -top-4 -right-4
            flex h-10 w-10 items-center justify-center
            rounded-full
            bg-[#315B46]
            text-[#EFECCE]
            text-lg
            shadow-lg
            transition-transform
            hover:scale-110
          "
        >
          ✕
        </button>

        {/* VIDEO */}
        <div className="aspect-video overflow-hidden rounded-lg bg-black">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
