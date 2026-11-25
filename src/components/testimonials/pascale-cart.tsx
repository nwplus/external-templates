"use client";

import { ArtworkText } from "@/components/ui/artwork-text";
import { PASCALE_LAYERS } from "@/constants/pascale-layers";
import { useLanternMotion } from "@/hooks/use-lantern-motion";
import { frameStyle } from "@/lib/frame";

import { type CSSProperties, useRef } from "react";

import "../hero/hero.css";

/** Keep the Figma cart still; only the five hanging lanterns catch the breeze. */
export const PascaleCart = ({
  variant,
}: {
  variant: keyof typeof PASCALE_LAYERS;
}) => {
  const lanterns = useRef<HTMLDivElement>(null);
  useLanternMotion(lanterns);
  const layers = PASCALE_LAYERS[variant];
  const image = (src: string) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      draggable={false}
      className="absolute inset-0 size-full select-none"
    />
  );
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      {layers
        .filter((layer) => !layer.lantern)
        .map((layer) => (
          <div
            key={layer.src}
            className="absolute"
            style={frameStyle(layer.box)}
          >
            {image(layer.src)}
          </div>
        ))}
      <div ref={lanterns} className="absolute inset-0">
        {layers
          .filter((layer) => layer.lantern)
          .map((layer, i) => (
            <div
              key={layer.src}
              className="testimonial-lantern absolute"
              style={
                {
                  ...frameStyle(layer.box),
                  "--period": `${2.8 + i * 0.17}s`,
                  "--gust": `${6.4 + i * 0.4}s`,
                  "--swing": `${2.6 + (i % 3) * 0.4}deg`,
                  "--delay": `${-0.4 - i * 0.63}s`,
                } as CSSProperties
              }
            >
              <div className="lantern-gust size-full">
                <div className="lantern-swing relative size-full">
                  {image(layer.src)}
                </div>
              </div>
            </div>
          ))}
      </div>
      <ArtworkText asset={`pascale-${variant}`} />
    </div>
  );
};
