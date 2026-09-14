import Image from "next/image";

/**
 * The stars, spirals and droplets that drift over the cloud frame. Every
 * position is taken straight from the design and expressed as a percentage of
 * the cloud scene, so the whole field scales with it.
 */
const STARS = [
  { src: "point5-d", left: 76.05, top: 0.46, width: 23.95, w: 367, h: 536 },
  { src: "spiral-a", left: 0.0, top: 6.79, width: 7.69, w: 120, h: 123 },
  { src: "drop-a", left: 5.28, top: 13.43, width: 7.31, w: 112, h: 102 },
  { src: "point5-a", left: 0.0, top: 16.76, width: 11.78, w: 181, h: 303 },
  { src: "circle-a", left: 93.0, top: 20.67, width: 7.0, w: 108, h: 175 },
  { src: "spiral-c", left: 89.8, top: 30.85, width: 10.2, w: 157, h: 172 },
  { src: "point4-a", left: 0.0, top: 33.48, width: 16.47, w: 397, h: 366 },
  { src: "point8-a", left: 85.5, top: 41.17, width: 14.5, w: 288, h: 309 },
  { src: "point8-b", left: 0.0, top: 53.67, width: 10.86, w: 278, h: 268 },
  { src: "drop-b", left: 88.06, top: 56.65, width: 11.94, w: 205, h: 185 },
  { src: "point4-b", left: 82.34, top: 60.6, width: 17.66, w: 486, h: 501 },
  { src: "spiral-b", left: 0.0, top: 70.09, width: 13.59, w: 300, h: 297 },
  { src: "point5-c", left: 63.08, top: 70.18, width: 13.98, w: 215, h: 266 },
  { src: "circle-b", left: 88.69, top: 80.78, width: 11.31, w: 174, h: 198 },
  { src: "drop-c", left: 9.18, top: 81.68, width: 13.45, w: 206, h: 178 },
  { src: "point8-c", left: 0.0, top: 90.33, width: 19.77, w: 344, h: 355 },
  { src: "point5-b", left: 25.0, top: 91.46, width: 17.41, w: 267, h: 176 },
  { src: "spiral-d", left: 81.06, top: 94.98, width: 7.61, w: 117, h: 104 },
] as const;

const StarField = () => {
  return (
    <>
      {STARS.map(({ src, left, top, width, w, h }) => (
        <Image
          key={src}
          src={`/assets/footer/stars/${src}.svg`}
          alt=""
          width={w}
          height={h}
          className="absolute h-auto max-w-none"
          style={{ left: `${left}%`, top: `${top}%`, width: `${width}%` }}
        />
      ))}
    </>
  );
};

export default StarField;
