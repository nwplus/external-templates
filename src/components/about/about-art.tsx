import { FoodEgg } from "@/components/food-egg";
import { rasterArt } from "@/lib/raster-art";
import { cn } from "@/lib/utils";

type Frame = { width: number; height: number };

/** A full-frame layer of an about scene, exported from Figma as SVG. */
export const AboutLayer = ({
  src,
  frame,
  className,
}: {
  src: string;
  frame: Frame;
  className?: string;
}) => (
  // Plain <img>: vector art in a static export, so next/image adds nothing.
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src={src}
    alt=""
    width={frame.width}
    height={frame.height}
    aria-hidden="true"
    draggable={false}
    decoding="async"
    className={cn(
      "pointer-events-none absolute inset-0 size-full select-none",
      className
    )}
  />
);

const DEER_SRC = "/assets/about/deer@2x.webp";
/** The deer WebPs' size (design px): its box in the desktop frame
 * (art/about/deer.svg). The phone scene draws the same art smaller. Its
 * kwek kwek is drawn separately (AboutKwekKwek) so it can move. */
const DEER_W = 115;
const DEER_H = 204;

/** The deer on the bridge's back rail, drawn last in the Figma back layer;
 * split out so it ships as WebP like the other characters. `x`, `y` and `w`
 * place it in the scene's frame. */
export const AboutDeer = ({
  frame,
  x,
  y,
  w,
}: {
  frame: Frame;
  x: number;
  y: number;
  w: number;
}) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src={DEER_SRC}
    {...rasterArt(DEER_SRC, DEER_W, (frame.width * DEER_W) / w)}
    alt=""
    width={DEER_W}
    height={DEER_H}
    aria-hidden="true"
    draggable={false}
    decoding="async"
    className="pointer-events-none absolute h-auto max-w-none select-none"
    style={{
      left: `${(x / frame.width) * 100}%`,
      top: `${(y / frame.height) * 100}%`,
      width: `${(w / frame.width) * 100}%`,
    }}
  />
);

const KWEK_SRC = "/assets/about/kwek-kwek@2x.webp";
/** The kwek kwek WebPs' size (design px, art/about/kwek-kwek.svg). */
const KWEK_W = 98;
/** The click target: the skewer itself within the export, which is mostly
 * empty around it (design px from the export's top-left). */
const KWEK_HIT = { x: 14.5, y: -4.5, w: 44, h: 52 };

/**
 * The kwek kwek the deer is snacking on (Figma "kwek kwek" in "cool teen
 * deer"), a tray easter egg. Every so often the deer lifts it for a nibble;
 * on hover it tilts up with a puff of steam. `x` and `y` are the export's
 * top-left in the scene's frame (design px) and `scale` the scene's size
 * against desktop.
 */
export const AboutKwekKwek = ({
  frame,
  x,
  y,
  scale,
}: {
  frame: Frame;
  x: number;
  y: number;
  scale: number;
}) => {
  const hit = {
    x: x + KWEK_HIT.x * scale,
    y: y + KWEK_HIT.y * scale,
    w: KWEK_HIT.w * scale,
    h: KWEK_HIT.h * scale,
  };
  return (
    <FoodEgg
      food="kwek-kwek"
      box={{
        x: (hit.x / frame.width) * 100,
        y: (hit.y / frame.height) * 100,
        w: (hit.w / frame.width) * 100,
        h: (hit.h / frame.height) * 100,
      }}
      label="Take the deer's kwek kwek"
      className="about-kwek"
      sparkle={{ x: 74, y: 60, size: (frame.width / 1512) ** -0.6 }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={KWEK_SRC}
        {...rasterArt(KWEK_SRC, KWEK_W * scale, frame.width)}
        alt=""
        draggable={false}
        className="about-kwek-art pointer-events-none absolute h-auto max-w-none select-none"
        style={{
          left: `${(-KWEK_HIT.x / KWEK_HIT.w) * 100}%`,
          top: `${(-KWEK_HIT.y / KWEK_HIT.h) * 100}%`,
          width: `${(KWEK_W / KWEK_HIT.w) * 100}%`,
        }}
      />
      <svg
        className="egg-steam about-kwek-steam"
        viewBox="0 0 24 40"
        fill="none"
        aria-hidden="true"
      >
        <path d="M7 38c-4-6 4-10 0-17s3-11 0-19" />
        <path d="M15 38c-4-7 4-11 0-18s3-10 0-18" />
      </svg>
    </FoodEgg>
  );
};
