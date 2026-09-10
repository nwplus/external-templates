import {
  MIRROR_APERTURE,
  RED_APERTURE,
} from "@/constants/recap-apertures";

import Image from "next/image";

const RECAP_VIDEO = "https://www.youtube.com/embed/3AQoV3BiRpc";

const framePhotos: {
  src: string;
  alt: string;
  aperture: string;
  crop: string;
  clipPath?: string;
  size: [number, number];
}[] = [
  {
    src: "/assets/recap/photos/hanging.jpg",
    alt: "The opening ceremony in a packed lecture theatre",
    aperture:
      "left-[90.9vw] top-[13.68vw] h-[11.89vw] w-[12.45vw] rounded-full",
    crop: "left-[-2.42vw] top-[-0.85vw] h-[13.29vw] w-[19.9vw]",
    size: [609, 406],
  },
  {
    src: "/assets/recap/photos/brown.jpg",
    alt: "A team gathered around a laptop at a table",
    aperture: "left-[69.3vw] top-[18.83vw] h-[11.43vw] w-[14.35vw]",
    crop: "left-[-3.99vw] top-[-1.38vw] h-[14.86vw] w-[22.29vw]",
    size: [681, 454],
  },
  {
    src: "/assets/recap/photos/green.jpg",
    alt: "Participants working at desks across a lecture hall",
    aperture:
      "left-[44.58vw] top-[38.46vw] h-[8.15vw] w-[13.53vw] rounded-full",
    crop: "left-[-1.78vw] top-[-2.4vw] h-[10.8vw] w-[16.23vw]",
    size: [496, 331],
  },
  {
    src: "/assets/recap/photos/dark-brown.jpg",
    alt: "A participant coding on a laptop during the event",
    aperture: "left-[84.66vw] top-[42.56vw] h-[13.35vw] w-[10.35vw]",
    crop: "left-[-1.28vw] top-[-2.97vw] h-[19.44vw] w-[12.96vw]",
    size: [396, 594],
  },
  {
    src: "/assets/recap/photos/purple.jpg",
    alt: "Two hackers demoing their project beside a hand-lettered sign",
    aperture:
      "left-[2.51vw] top-[44.64vw] h-[18.8vw] w-[17.03vw] rounded-full",
    crop: "left-[-1.14vw] top-[-5.5vw] h-[24.87vw] w-[18.65vw]",
    size: [570, 760],
  },
  {
    src: "/assets/recap/photos/red.jpg",
    alt: "Teams building together in the atrium",
    aperture: "left-[21.86vw] top-[44.37vw] h-[19.08vw] w-[19.57vw]",
    crop: "left-[-2.29vw] top-[1.25vw] h-[15.9vw] w-[23.89vw]",
    clipPath: "url(#recap-red-aperture)",
    size: [730, 487],
  },
];

const Recap = () => {
  return (
    <div
      className="relative h-[98.56vw] w-full overflow-hidden bg-[#0b101c]"
      id="recap"
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, #fff 0 3.86vw, transparent 3.86vw 7.72vw)",
          backgroundPosition: "0.72vw 0",
        }}
      />
      <div
        className="absolute top-[0.13vw] h-[98.43vw] w-full"
        style={{
          backgroundImage: [
            "linear-gradient(180deg, rgba(25,106,6,0.8) 3.61%, rgba(250,217,107,0.8) 51.8%, rgba(40,36,66,0.8) 74.96%, rgba(36,57,89,0.8) 100%)",
            "radial-gradient(66.8% 17% at 50% 25.9%, #fce6ad 1.4%, #fada87 25%, #f8ce60 48.6%, rgba(250,218,136,0.75) 61.4%, rgba(252,231,176,0.5) 74.3%, rgba(255,255,255,0) 100%)",
          ].join(","),
        }}
      />

      <h2 className="absolute left-[9.03vw] top-[6.35vw] font-title text-[4.19vw] leading-none text-white">
        Recap
      </h2>

      <Image
        src="/assets/recap/green-frame.svg"
        alt=""
        width={275}
        height={206}
        className="absolute left-[42.41vw] top-[36.52vw] h-[13.48vw] w-[18vw]"
      />
      <Image
        src="/assets/recap/red-frame.svg"
        alt=""
        width={299}
        height={292}
        className="absolute left-[21.86vw] top-[44.37vw] h-[19.08vw] w-[19.57vw]"
      />
      <Image
        src="/assets/recap/clock.svg"
        alt=""
        width={195}
        height={236}
        className="absolute left-[53.86vw] top-[3.01vw] h-[15.45vw] w-[12.76vw]"
      />

      <Image
        src="/assets/recap/purple-frame.svg"
        alt=""
        width={289}
        height={371}
        className="absolute left-[1.57vw] top-[41.49vw] h-[24.25vw] w-[18.91vw]"
      />
      <Image
        src="/assets/recap/purple-frame-bow-left.svg"
        alt=""
        width={29}
        height={16}
        className="absolute left-[8.28vw] top-[43.37vw] h-[0.91vw] w-[1.69vw] rotate-[-20.76deg]"
      />
      <Image
        src="/assets/recap/purple-frame-bow-right.svg"
        alt=""
        width={29}
        height={16}
        className="absolute left-[12.04vw] top-[43.37vw] h-[0.91vw] w-[1.69vw] rotate-[159.24deg]"
      />
      <Image
        src="/assets/recap/purple-frame-gem-outer.svg"
        alt=""
        width={32}
        height={31}
        className="absolute left-[9.99vw] top-[41.98vw] h-[1.97vw] w-[2.08vw]"
      />
      <Image
        src="/assets/recap/purple-frame-gem-inner.svg"
        alt=""
        width={20}
        height={18}
        className="absolute left-[10.38vw] top-[42.4vw] h-[1.12vw] w-[1.27vw]"
      />
      <Image
        src="/assets/recap/purple-frame-foot-left.svg"
        alt=""
        width={34}
        height={23}
        className="absolute left-[8.87vw] top-[63.58vw] h-[1.49vw] w-[2.2vw]"
      />
      <Image
        src="/assets/recap/purple-frame-foot-right.svg"
        alt=""
        width={34}
        height={23}
        className="absolute left-[11.23vw] top-[63.58vw] h-[1.49vw] w-[2.2vw]"
      />

      <div className="absolute left-[60.6vw] top-[32.53vw] h-[2.16vw] w-[32.33vw] overflow-hidden rounded-[0.26vw] bg-[#7b471c]">
        <Image
          src="/assets/recap/shelf-wood.svg"
          alt=""
          width={530}
          height={71}
          className="h-full w-full"
        />
      </div>

      <Image
        src="/assets/recap/hanging-frame.svg"
        alt=""
        width={246}
        height={371}
        className="absolute left-[89.86vw] top-[2.03vw] h-[24.28vw] w-[16.1vw]"
      />
      <Image
        src="/assets/recap/calendar.svg"
        alt=""
        width={127}
        height={122}
        className="absolute left-[51.83vw] top-[51.64vw] h-[7.98vw] w-[8.31vw]"
      />
      <Image
        src="/assets/recap/dark-brown-frame.svg"
        alt=""
        width={233}
        height={270}
        className="absolute left-[82.85vw] top-[40.51vw] h-[17.67vw] w-[15.26vw]"
      />
      <Image
        src="/assets/recap/mirror.svg"
        alt=""
        width={218}
        height={270}
        className="absolute left-[63.6vw] top-[40.95vw] h-[17.68vw] w-[14.29vw]"
      />

      <div className="absolute left-[6.02vw] top-[14.14vw] h-[24.35vw] w-[36.26vw] overflow-hidden rounded-[0.33vw] bg-[#f25c4e] shadow-[inset_-0.2vw_-0.39vw_0.26vw_0_rgba(0,0,0,0.25)]">
        <Image
          src="/assets/recap/video-frame-texture.svg"
          alt=""
          width={570}
          height={382}
          className="h-full w-full"
        />
      </div>
      <iframe
        src={RECAP_VIDEO}
        title="HackCamp 2025 recap"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute left-[8.29vw] top-[16.03vw] h-[20.57vw] w-[31.71vw] border-0"
      />

      <Image
        src="/assets/recap/brown-photo-frame.svg"
        alt=""
        width={330}
        height={255}
        className="absolute left-[66.3vw] top-[15.84vw] h-[16.69vw] w-[21.6vw]"
      />

      <svg width="0" height="0" className="absolute" aria-hidden>
        <defs>
          <clipPath id="recap-red-aperture" clipPathUnits="objectBoundingBox">
            <path d={RED_APERTURE} />
          </clipPath>
          <clipPath id="recap-mirror-aperture" clipPathUnits="objectBoundingBox">
            <path d={MIRROR_APERTURE} />
          </clipPath>
        </defs>
      </svg>

      {framePhotos.map((photo) => (
        <div
          key={photo.src}
          className={`absolute overflow-hidden ${photo.aperture}`}
          style={photo.clipPath ? { clipPath: photo.clipPath } : undefined}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.size[0]}
            height={photo.size[1]}
            className={`absolute max-w-none ${photo.crop}`}
          />
        </div>
      ))}

      <div
        className="absolute left-[63.6vw] top-[40.95vw] h-[17.68vw] w-[14.29vw]"
        style={{ clipPath: "url(#recap-mirror-aperture)" }}
      >
        <Image
          src="/assets/recap/photos/mirror.jpg"
          alt="A decorated corner of the venue"
          width={540}
          height={810}
          className="h-full w-full object-cover"
        />
      </div>

      <Image
        src="/assets/recap/light.svg"
        alt=""
        width={843}
        height={1033}
        className="pointer-events-none absolute left-[23.1vw] top-[0.13vw] h-[67.61vw] w-[55.12vw]"
      />

      <Image
        src="/assets/recap/baseboard-bottom.png"
        alt=""
        width={1543}
        height={16}
        className="absolute left-0 top-[0.65vw] w-[100.98vw] max-w-none"
      />
      <Image
        src="/assets/recap/baseboard-top.png"
        alt=""
        width={1543}
        height={10}
        className="absolute left-0 top-0 w-[100.98vw] max-w-none"
      />
    </div>
  );
};

export default Recap;
