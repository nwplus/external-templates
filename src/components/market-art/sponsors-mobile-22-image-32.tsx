/* eslint-disable @next/next/no-img-element */
const imgImage32 = "/assets/sponsors/mobile/22-image-32-part-1.png";

export default function Image32() {
  return (
    <div className="relative size-full">
      <img
        alt=""
        className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
        src={imgImage32}
      />
    </div>
  );
}
