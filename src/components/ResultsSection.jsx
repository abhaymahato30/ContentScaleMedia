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

  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="bg-[#EFECCE] px-6 py-32">
      <div className="mx-auto max-w-[1000px]">

        {/* HEADING */}
        <div className="mb-20 text-center text-[#315B46]">
          <h2 className="text-4xl font-extrabold sm:text-5xl">
            Results That Speak for Themselves
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg opacity-75">
            Short-form content edited for reach, retention, and growth.
          </p>
        </div>

        {/* GRID — ALWAYS 2 PER ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center">
          {videos.map((video, index) => (
            <Card
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

function Card({ video, onPlay }) {
  return (
    <div
      onClick={onPlay}
      className="
        group
        relative
        w-full
        max-w-[420px]
        h-[420px]
        cursor-pointer
        overflow-hidden
        rounded-2xl
        border border-[#315B46]/20
        bg-[#315B46]/5
        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:shadow-[0_30px_55px_rgba(49,91,70,0.35)]
      "
    >
      {/* THUMBNAIL */}
      <img
        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
        alt={video.title}
        className="
          absolute inset-0 h-full w-full object-cover
          transition-transform duration-500 ease-out
          group-hover:scale-[1.06]
          cursor-pointer
        "
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/25 pointer-events-none" />

      {/* CENTER LOGO */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div
          className="
           
          "
        >
          <img
            src={ytShortsLogo}
            alt="YouTube Shorts"
            className="h-20 w-20"
          />
        </div>
      </div>

      {/* TITLE */}
      <div className="absolute bottom-6 left-6 right-6 z-10">
        <p className="text-sm font-semibold text-[#EFECCE] leading-snug">
          {video.title}
        </p>
      </div>

      {/* GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#315B46]/75 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}

/* ================= MODAL ================= */

function VideoModal({ videoId, onClose }) {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 px-4">
      <div className="relative w-full max-w-3xl rounded-xl bg-[#EFECCE] p-4">
        
        {/* CLOSE */}
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
            cursor-pointer
            transition-transform
            hover:scale-110
          "
        >
          ✕
        </button>

        {/* VIDEO */}
        <div className="">
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
