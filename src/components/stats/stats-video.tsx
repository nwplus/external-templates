"use client";

import { type Box, frameStyle } from "@/lib/frame";

import { useState } from "react";

/** nwHacks 2026's recap, the one the stats point at. */
export const RECAP_VIDEO_ID = "xnldoFAWzaM";

// Individual PNG render bounds relative to the 703 × 482 board in Figma.
// The vectors sit in front of Rectangle 3346; exports include their strokes.
const VIDEO_LAYERS = [
  { name: "board", node: "15941:59218", x: -20, y: -20, w: 743, h: 522, z: 0 },
  { name: "mat", node: "15941:59220", x: 27, y: 25, w: 649, h: 432, z: 1 },
  { name: "screen", node: "15941:59221", x: 58, y: 58, w: 587, h: 365, z: 2 },
  {
    name: "trim-glow",
    node: "15941:59222",
    x: 36,
    y: 31,
    w: 636,
    h: 420,
    z: 4,
  },
  { name: "trim", node: "15941:59223", x: 39.5, y: 34.5, w: 629, h: 413, z: 5 },
] as const;

/**
 * The design's video board: a neon frame around Rectangle 3346. YouTube
 * only loads once someone presses play (the poster is YouTube's own still),
 * so the section costs nothing until it's wanted.
 */
export const StatsVideo = ({ box }: { box: Box }) => {
  const [playing, setPlaying] = useState(false);

  return (
    <div data-video-board className="absolute isolate" style={frameStyle(box)}>
      {VIDEO_LAYERS.map((layer) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={layer.node}
          src={`/assets/stats/video-${layer.name}.png`}
          data-board-layer={layer.name}
          data-figma-layer={layer.node}
          alt=""
          aria-hidden="true"
          draggable={false}
          className="pointer-events-none absolute max-w-none select-none"
          style={{
            left: `${(layer.x / 703) * 100}%`,
            top: `${(layer.y / 482) * 100}%`,
            width: `${(layer.w / 703) * 100}%`,
            height: `${(layer.h / 482) * 100}%`,
            zIndex: layer.z,
          }}
        />
      ))}
      {/* Rectangle 3346: (507,934,587,365) within the board at (449,876).
          Both the poster and iframe occupy this exact rounded rectangle. */}
      <div
        data-figma-node="15941:59221"
        className="absolute z-[3] inset-[12.033%_8.251%_12.241%_8.25%] overflow-hidden bg-black"
        style={{ borderRadius: "2.555% / 4.11%" }}
      >
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
            <span className="sr-only">Play the nwHacks 2026 recap</span>
          </button>
        )}
      </div>
    </div>
  );
};
