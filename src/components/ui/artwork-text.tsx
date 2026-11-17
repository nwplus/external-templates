"use client";

import { ARTWORK_TEXT } from "@/constants/artwork-text";
import { type Box, frameStyle } from "@/lib/frame";

export type ArtworkLabel = {
  text: string;
  box: Box;
  fontSize: number;
  font: string;
  rotation: number;
};

/** Transparent copy layer: keep the Figma artwork intact and text copyable. */
export const ArtworkText = ({ asset }: { asset: string }) => {
  const labels = (ARTWORK_TEXT as Record<string, readonly ArtworkLabel[]>)[
    asset
  ];
  if (!labels) return null;
  return (
    <span
      aria-hidden="true"
      className="artwork-copy @container pointer-events-none absolute inset-0"
    >
      {labels.map((label, i) => (
        <span
          key={i}
          className="artwork-label absolute flex items-center justify-center whitespace-pre text-center leading-none"
          style={{
            ...frameStyle(label.box),
            fontSize: `${label.fontSize}cqw`,
            fontFamily:
              label.font === "Knewave"
                ? "var(--font-display)"
                : "var(--font-sans)",
            writingMode:
              label.box.h > label.box.w * 3 ? "vertical-rl" : undefined,
            textOrientation: "upright",
            transform: `rotate(${label.rotation}deg)`,
          }}
          onClick={(event) => {
            if (window.getSelection()?.toString()) {
              event.preventDefault();
              event.stopPropagation();
            }
          }}
        >
          {label.text}
        </span>
      ))}
    </span>
  );
};
