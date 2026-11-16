import { SCENE_GROUPS } from "@/components/market-art";

import type { CSSProperties } from "react";

export type ArtLayer = {
  src: string;
  x: number;
  y: number;
  width: number;
  height: number;
  name: string;
  transform?: string;
};

export function sceneBox(
  x: number,
  y: number,
  width: number,
  height: number,
  frameWidth: number,
  frameHeight: number
): CSSProperties {
  return {
    left: `${(x / frameWidth) * 100}%`,
    top: `${(y / frameHeight) * 100}%`,
    width: `${(width / frameWidth) * 100}%`,
    height: `${(height / frameHeight) * 100}%`,
  };
}

/** Decorative scene layers retain their exported aspect ratios and order. */
export function SectionArt({
  layers,
  width,
  height,
}: {
  layers: readonly ArtLayer[];
  width: number;
  height: number;
}) {
  return layers.map((layer) => {
    const entry = SCENE_GROUPS[layer.src as keyof typeof SCENE_GROUPS];
    if (entry) {
      const Group = entry.component;
      return entry.local ? (
        <div
          key={layer.src}
          className="section-art"
          aria-hidden="true"
          style={{
            ...sceneBox(
              layer.x,
              layer.y,
              layer.width,
              layer.height,
              width,
              height
            ),
            transform: layer.transform,
            transformOrigin: "0 0",
          }}
        >
          <Group />
        </div>
      ) : (
        <div key={layer.src} aria-hidden="true" className="contents">
          <Group />
        </div>
      );
    }
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        key={layer.src}
        src={layer.src}
        alt=""
        aria-hidden="true"
        draggable={false}
        decoding="async"
        width={Math.ceil(layer.width)}
        height={Math.ceil(layer.height)}
        className="section-art"
        style={{
          ...sceneBox(
            layer.x,
            layer.y,
            layer.width,
            layer.height,
            width,
            height
          ),
          transform: layer.transform,
          transformOrigin: "0 0",
        }}
      />
    );
  });
}
