"use client";

import { frameStyle, type Box } from "@/lib/frame";

import { useState } from "react";

/** nwHacks 2026's recap, the one the stats point at. */
export const RECAP_VIDEO_ID = "xnldoFAWzaM";

/**
 * The design's video board: a neon frame around a 16:9-ish screen. YouTube
 * only loads once someone presses play (the poster is YouTube's own still),
 * so the section costs nothing until it's wanted.
 */
export const StatsVideo = ({ box }: { box: Box }) => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="absolute" style={frameStyle(box)}>
      {/* The exported board (frame + white screen); the player sits over the
          screen so the neon corners still read around it. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/stats/video-frame.webp"
        alt=""
        aria-hidden="true"
        draggable={false}
        className="stats-video-frame pointer-events-none absolute inset-0 size-full select-none"
      />
      {/* The screen (Rectangle 3346) is 1.6:1 and the video is 16:9, so the player
        sits centred on the white screen and the mat shows around it, as the
        design draws it. */}
      <div className="absolute inset-[12.033%_8.251%_12.241%_8.25%] overflow-hidden bg-white">
        <div className="absolute left-0 top-1/2 aspect-video w-full -translate-y-1/2 overflow-hidden">
        {playing ? (
          <iframe
            className="size-full"
            src={`https://www.youtube-nocookie.com/embed/${RECAP_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
            title="nwHacks 2026 recap"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group relative size-full cursor-pointer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${RECAP_VIDEO_ID}/maxresdefault.jpg`}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="size-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100"
            />
            <span className="absolute inset-0 grid place-items-center">
              <span className="grid size-[5.2cqw] place-items-center rounded-full bg-[#ffe7ac] shadow-[0_0_1.6cqw_rgb(255_231_172_/_0.55)] transition-transform duration-300 group-hover:scale-110">
                <svg
                  viewBox="0 0 24 24"
                  className="ml-[0.35cqw] size-[2.2cqw] fill-[#06344d]"
                  aria-hidden="true"
                >
                  <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86A1 1 0 0 0 8 5.14z" />
                </svg>
              </span>
            </span>
            <span className="sr-only">Play the nwHacks 2026 recap</span>
          </button>
        )}
        </div>
      </div>
    </div>
  );
};
