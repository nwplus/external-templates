import { RecapVideo } from "@/components/recap/recap-video";
import { SwingingLamp } from "@/components/recap/swinging-lamp";
import { LightboxGallery, LightboxTrigger } from "@/components/ui/lightbox";
import {
  DARK_BROWN_APERTURE,
  MIRROR_APERTURE,
  RED_APERTURE,
} from "@/constants/recap-apertures";
import { recapCaption } from "@/constants/recap-captions";

import Image from "next/image";

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
      "left-[87.35vw] top-[10.98vw] h-[9.67vw] w-[10.13vw] rounded-full",
    crop: "left-[-1.97vw] top-[-0.69vw] h-[10.81vw] w-[16.19vw]",
    size: [609, 406],
  },
  {
    src: "/assets/recap/photos/brown.jpg",
    alt: "A team gathered around a laptop at a table",
    aperture: "left-[69.97vw] top-[19.09vw] h-[10.41vw] w-[13.56vw]",
    crop: "left-[-1.03vw] top-0 h-[10.41vw] w-[15.62vw]",
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
    clipPath: "url(#recap-dark-brown-aperture)",
    size: [396, 594],
  },
  {
    src: "/assets/recap/photos/purple.jpg",
    alt: "Two hackers demoing their project beside a hand-lettered sign",
    aperture: "left-[2.51vw] top-[44.64vw] h-[18.8vw] w-[17.03vw] rounded-full",
    crop: "left-[-1.14vw] top-[-4.2vw] h-[24.87vw] w-[18.65vw]",
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
      className="relative h-[98.56vw] w-full overflow-clip bg-[#0b101c]"
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
        src="/assets/recap/green-frame.webp"
        alt=""
        width={275}
        height={206}
        className="absolute left-[42.41vw] top-[36.52vw] h-[13.48vw] w-[18vw]"
      />
      <Image
        src="/assets/recap/red-frame.webp"
        alt=""
        width={299}
        height={292}
        className="absolute left-[21.86vw] top-[44.37vw] h-[19.08vw] w-[19.57vw]"
      />
      <Image
        src="/assets/recap/clock.webp"
        alt=""
        width={195}
        height={236}
        className="absolute left-[53.86vw] top-[3.01vw] h-[15.45vw] w-[12.76vw]"
      />

      <Image
        src="/assets/recap/purple-frame.webp"
        alt=""
        width={306}
        height={381}
        className="absolute left-[0.54vw] top-[40.77vw] h-[24.92vw] w-[19.99vw]"
      />

      <Image
        src="/assets/recap/shelf.webp"
        alt=""
        width={494}
        height={33}
        className="absolute left-[60.57vw] top-[32.54vw] h-[2.16vw] w-[32.27vw]"
      />

      <Image
        src="/assets/recap/hanging-frame.webp"
        alt=""
        width={246}
        height={371}
        className="absolute left-[86.5vw] top-[1.5vw] h-[19.75vw] w-[13.1vw]"
      />
      <Image
        src="/assets/recap/calendar.webp"
        alt=""
        width={127}
        height={122}
        className="absolute left-[51.83vw] top-[51.64vw] h-[7.98vw] w-[8.31vw]"
      />
      <Image
        src="/assets/recap/dark-brown-frame.webp"
        alt=""
        width={233}
        height={270}
        className="absolute left-[82.85vw] top-[40.51vw] h-[17.67vw] w-[15.26vw]"
      />
      <Image
        src="/assets/recap/mirror.webp"
        alt=""
        width={278}
        height={308}
        className="absolute left-[61.03vw] top-[39.14vw] h-[20.09vw] w-[18.16vw]"
      />

      <Image
        src="/assets/recap/video-frame.webp"
        alt=""
        width={568}
        height={389}
        className="absolute left-[5.18vw] top-[13.08vw] h-[25.41vw] w-[37.1vw]"
      />
      <RecapVideo className="absolute left-[8.29vw] top-[16.03vw] h-[20.57vw] w-[31.71vw]" />

      <Image
        src="/assets/recap/brown-photo-frame.webp"
        alt=""
        width={345}
        height={260}
        className="absolute left-[66.25vw] top-[15.62vw] h-[16.92vw] w-[22.53vw]"
      />

      <svg width="0" height="0" className="absolute" aria-hidden>
        <defs>
          <clipPath
            id="recap-dark-brown-aperture"
            clipPathUnits="objectBoundingBox"
          >
            <path d={DARK_BROWN_APERTURE} />
          </clipPath>
          <clipPath id="recap-red-aperture" clipPathUnits="objectBoundingBox">
            <path d={RED_APERTURE} />
          </clipPath>
          <clipPath
            id="recap-mirror-aperture"
            clipPathUnits="objectBoundingBox"
          >
            <path d={MIRROR_APERTURE} />
          </clipPath>
        </defs>
      </svg>

      {/* Each photo is a button that opens it large, with a caption. The
          button keeps the aperture's box and the clipping moves to a span
          inside it, so the focus ring is not clipped away with the photo. */}
      <LightboxGallery>
        {framePhotos.map((photo) => (
          <LightboxTrigger
            key={photo.src}
            photo={{
              src: photo.src,
              alt: photo.alt,
              caption: recapCaption(photo.src),
              width: photo.size[0],
              height: photo.size[1],
            }}
            className={`absolute ${photo.aperture}`}
          >
            <span
              className="absolute inset-0 overflow-hidden rounded-[inherit]"
              style={photo.clipPath ? { clipPath: photo.clipPath } : undefined}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.size[0]}
                height={photo.size[1]}
                className={`absolute max-w-none transition-transform duration-200 group-hover:scale-[1.02] ${photo.crop}`}
              />
            </span>
          </LightboxTrigger>
        ))}

        <LightboxTrigger
          photo={{
            src: "/assets/recap/photos/mirror.jpg",
            alt: "A speaker at the lecture hall podium, running a workshop",
            caption: recapCaption("/assets/recap/photos/mirror.jpg"),
            width: 540,
            height: 810,
          }}
          className="absolute left-[61.9vw] top-[40.1vw] h-[18.18vw] w-[16.42vw]"
        >
          <span
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: "url(#recap-mirror-aperture)" }}
          >
            <Image
              src="/assets/recap/photos/mirror.jpg"
              alt="A speaker at the lecture hall podium, running a workshop"
              width={540}
              height={810}
              className="absolute max-w-none object-cover transition-transform duration-200 group-hover:scale-[1.02]"
              style={{
                left: "11.43%",
                top: "-5.28%",
                width: "79.94%",
                height: "108.12%",
              }}
            />
          </span>
        </LightboxTrigger>
      </LightboxGallery>

      <SwingingLamp className="absolute left-[23.1vw] top-[0.13vw] h-[67.61vw] w-[55.12vw]" />

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
