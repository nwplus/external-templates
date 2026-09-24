"use client";

import type { SponsorDoc } from "@/lib/firestore";
import { cn } from "@/lib/utils";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/** Mean luminance (0 to 1) above which a logo would vanish on the cream mount. */
const LIGHT_LOGO = 0.78;

/** How finely the logo is sampled; plenty to judge its overall tone. */
const SAMPLE_SIZE = 32;

const luminance = (data: Uint8ClampedArray, i: number) =>
  (0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2]) / 255;

/**
 * Whether a logo is mostly light ink on a transparent ground (a white
 * wordmark, say), which the cream mount would swallow. A logo that fills its
 * whole box and has light corners brings its own light background, so it
 * already reads on cream and is left alone. Any failure to read the pixels
 * (a tainted canvas, no 2D context) also leaves the logo as it is.
 */
const isLightLogo = (img: HTMLImageElement) => {
  try {
    const canvas = document.createElement("canvas");
    canvas.width = SAMPLE_SIZE;
    canvas.height = SAMPLE_SIZE;
    const context = canvas.getContext("2d", { willReadFrequently: true });
    if (!context) return false;
    context.drawImage(img, 0, 0, SAMPLE_SIZE, SAMPLE_SIZE);
    const { data } = context.getImageData(0, 0, SAMPLE_SIZE, SAMPLE_SIZE);

    let total = 0;
    let opaque = 0;
    for (let i = 0; i < data.length; i += 4) {
      if (data[i + 3] <= 128) continue;
      total += luminance(data, i);
      opaque++;
    }
    if (opaque === 0) return false;

    const last = SAMPLE_SIZE - 1;
    const corners = [
      [0, 0],
      [last, 0],
      [0, last],
      [last, last],
    ].map(([x, y]) => (y * SAMPLE_SIZE + x) * 4);
    const ownBackground =
      opaque >= (data.length / 4) * 0.98 &&
      corners.every(
        (i) => data[i + 3] > 128 && luminance(data, i) >= LIGHT_LOGO
      );

    return !ownBackground && total / opaque >= LIGHT_LOGO;
  } catch {
    return false;
  }
};

/**
 * A sponsor's logo from the CMS. Light logos are flagged with `data-light`
 * so the mount around them can turn to the night sky instead of cream.
 */
const SponsorLogo = ({
  sponsor,
  className,
}: {
  sponsor: SponsorDoc;
  className?: string;
}) => {
  const [failed, setFailed] = useState(false);
  const [light, setLight] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // The image may have finished loading before hydration, in which case its
  // load event has already fired and will not be seen by React.
  useEffect(() => {
    const img = imgRef.current;
    if (img?.complete && img.naturalWidth) setLight(isLightLogo(img));
  }, []);

  if (failed || !sponsor.imgURL) {
    return (
      <span
        className={cn(
          "flex items-center justify-center text-center font-body font-semibold text-wood",
          className
        )}
      >
        {sponsor.name}
      </span>
    );
  }

  return (
    <Image
      ref={imgRef}
      src={sponsor.imgURL}
      alt={sponsor.name}
      width={400}
      height={300}
      // Firebase Storage allows any origin, so the logo can be read back
      // from a canvas to judge how light it is.
      crossOrigin="anonymous"
      data-light={light || undefined}
      className={cn("object-contain", className)}
      onLoad={(event) => setLight(isLightLogo(event.currentTarget))}
      onError={() => setFailed(true)}
    />
  );
};

export default SponsorLogo;
