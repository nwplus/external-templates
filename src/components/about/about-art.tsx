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
 * (art/about/deer.svg). The phone scene draws the same art smaller. */
const DEER_W = 110;
const DEER_H = 216;

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
