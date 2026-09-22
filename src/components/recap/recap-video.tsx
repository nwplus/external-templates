"use client";

import { cn } from "@/lib/utils";

import Image from "next/image";
import { useState } from "react";

const VIDEO_ID = "3AQoV3BiRpc";
const TITLE = "HackCamp 2025 recap";

/**
 * The recap video as its poster frame with a play button. YouTube's player
 * (about 1.3 MB of script and a dozen requests) only loads once someone
 * presses play, and then starts straight away. `className` sizes and places
 * the box exactly where the iframe used to sit.
 */
export const RecapVideo = ({ className }: { className?: string }) => {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1`}
        title={TITLE}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className={cn("border-0", className)}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play ${TITLE}`}
      className={cn("group cursor-pointer overflow-hidden bg-black", className)}
    >
      <Image
        src="/assets/recap/video-poster.webp"
        alt=""
        fill
        sizes="(min-width: 768px) 32vw, 76vw"
        className="object-cover"
      />
      {/* YouTube-style play button, scaled with the box. */}
      <span className="absolute inset-0 flex items-center justify-center">
        <svg
          viewBox="0 0 68 48"
          className="w-[18%] max-w-[68px] transition-transform duration-150 group-hover:scale-110"
          aria-hidden
        >
          <path
            d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55C3.97 2.33 2.27 4.81 1.48 7.74 0.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
            fill="#f00"
          />
          <path d="M45 24 27 14v20" fill="#fff" />
        </svg>
      </span>
    </button>
  );
};
