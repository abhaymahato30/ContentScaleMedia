"use client";

import { useState } from "react";
import ytShortsLogo from "../assets/yt-shorts-logo.png";
import { Play, TrendingUp, Zap, Video } from "lucide-react";

export default function ResultsSection() {
  const videos = [
    {
      id: "-XIqJWBygIA",
      title: "Real Estate Short – Lead Driven Edit",
      icon: TrendingUp,
    },
    {
      id: "1sWH4crbYa4",
      title: "High-Retention Talking Head Edit",
      icon: Video,
    },
    {
      id: "tqPaAj-gLhw",
      title: "Viral Hook + Caption System",
      icon: Zap,
    },
    {
      id: "KYVvjHwdT4w",
      title: "Short-Form Growth Edit",
      icon: Play,
    },
  ];

  return (
    <section className="bg-[#EFECCE] px-6 py-28">
      <div className="mx-auto max-w-[900px]">

        {/* HEADING */}
        <div className="mb-14 text-center text-[#315B46]">
            <span className="inline-flex items-center rounded-full border border-[#315B46]/30 px-5 py-2 text-sm font-semibold">
            🎬 Portfolio
          </span>
         
          <h2 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Short-Form Client Work
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base opacity-75">
            Short-form content edited for reach, retention, and growth.
          </p>
        </div>

        {/* GRID — FIXED HORIZONTAL GAP */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
          {videos.map((video, index) => (
            <InlineVideoCard key={index} video={video} />
          ))}
        </div>

      </div>
    </section>
  );
}

/* ================= INLINE PLAY CARD ================= */

function InlineVideoCard({ video }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const Icon = video.icon;

  return (
    <div
      className="
        group
        relative
        w-full
        h-[420px]
        cursor-pointer
        overflow-hidden
        rounded-xl
        border border-[#315B46]/25
        bg-[#315B46]/10
        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:bg-[#315B46]/15
        hover:shadow-[0_25px_40px_rgba(49,91,70,0.30)]
      "
    >
      {!isPlaying ? (
        <>
          {/* CLICK LAYER */}
          <button
            onClick={() => setIsPlaying(true)}
            className="absolute inset-0 z-20"
            aria-label="Play video"
          />

          {/* ICON BADGE */}
          <div className="absolute left-4 top-4 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-[#EFECCE] text-[#315B46] shadow-sm">
            <Icon size={16} />
          </div>

          {/* THUMBNAIL */}
          <img
            src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
            alt={video.title}
            className="
              absolute inset-0 h-full w-full object-cover
              transition-transform duration-500
              group-hover:scale-[1.04]
            "
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/25" />

          {/* CENTER SHORTS LOGO */}
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <img
              src={ytShortsLogo}
              alt="YouTube Shorts"
              className="h-12 w-12"
            />
          </div>

          {/* TITLE */}
          <div className="absolute bottom-4 left-4 right-4 z-10">
            <p className="text-xs font-semibold text-[#EFECCE] leading-snug">
              {video.title}
            </p>
          </div>

          {/* GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#315B46]/70 via-transparent to-transparent" />
        </>
      ) : (
        /* VIDEO INLINE */
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      )}
    </div>
  );
}
