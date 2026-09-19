import { MIRROR_APERTURE, RED_APERTURE } from "@/constants/recap-apertures";

import Image from "next/image";

const RECAP_VIDEO = "https://www.youtube.com/embed/3AQoV3BiRpc";

type FramedPhotoProps = {
  className: string;
  frame: { src: string; size: [number, number] };
  photo: { src: string; alt: string; size: [number, number] };
  aperture: [number, number, number, number];
  objectPosition: string;
  rounded?: boolean;
};

const FramedPhoto = ({
  className,
  frame,
  photo,
  aperture: [left, top, width, height],
  objectPosition,
  rounded,
}: FramedPhotoProps) => (
  <div className={`absolute ${className}`}>
    <Image
      src={frame.src}
      alt=""
      width={frame.size[0]}
      height={frame.size[1]}
      className="absolute inset-0 h-full w-full"
    />
    <div
      className={`absolute overflow-hidden ${rounded ? "rounded-full" : ""}`}
      style={{
        left: `${left}%`,
        top: `${top}%`,
        width: `${width}%`,
        height: `${height}%`,
      }}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        width={photo.size[0]}
        height={photo.size[1]}
        className="h-full w-full object-cover"
        style={{ objectPosition }}
      />
    </div>
  </div>
);

const RecapMobile = () => {
  return (
    <div
      className="relative h-[319.85vw] w-full overflow-hidden bg-[#0b101c]"
      id="recap-mobile"
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, #fff 0 5.09vw, transparent 5.09vw 10.18vw)",
          backgroundPosition: "2.8vw 0",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: [
            "linear-gradient(180deg, rgba(25,106,6,0.8) 4.5%, rgba(250,217,107,0.8) 36.28%, rgba(40,36,66,0.8) 64.92%, rgba(36,57,89,0.8) 84.33%)",
            "radial-gradient(92.75% 6.58% at 49.06% 10.76%, #fce6ad 1.4%, #fada87 25%, #f8ce60 48.6%, rgba(250,218,136,0.75) 61.4%, rgba(252,231,176,0.5) 74.3%, rgba(255,255,255,0) 100%)",
          ].join(","),
        }}
      />

      <svg width="0" height="0" className="absolute" aria-hidden>
        <defs>
          <clipPath
            id="recap-mobile-red-aperture"
            clipPathUnits="objectBoundingBox"
          >
            <path d={RED_APERTURE} />
          </clipPath>
          <clipPath
            id="recap-mobile-mirror-aperture"
            clipPathUnits="objectBoundingBox"
          >
            <path d={MIRROR_APERTURE} />
          </clipPath>
        </defs>
      </svg>

      <h2 className="absolute left-[8.4vw] top-[23.06vw] font-title text-[8.14vw] leading-none text-white">
        Recap
      </h2>

      <FramedPhoto
        className="left-[60vw] top-[176.5vw] h-[14.2vw] w-[20.61vw]"
        frame={{ src: "/assets/recap/green-frame.webp", size: [275, 206] }}
        photo={{
          src: "/assets/recap/photos/green.jpg",
          alt: "Participants working at desks across a lecture hall",
          size: [496, 331],
        }}
        aperture={[12.06, 14.39, 75.17, 60.46]}
        objectPosition="66% 91%"
        rounded
      />

      <Image
        src="/assets/recap/red-frame.webp"
        alt=""
        width={299}
        height={292}
        className="absolute left-[32.5vw] top-[113.5vw] h-[27.14vw] w-[27.99vw]"
      />
      <div
        className="absolute left-[32.5vw] top-[113.5vw] h-[27.14vw] w-[27.99vw] overflow-hidden"
        style={{ clipPath: "url(#recap-mobile-red-aperture)" }}
      >
        <Image
          src="/assets/recap/photos/red.jpg"
          alt="Teams building together in the atrium"
          width={730}
          height={487}
          className="absolute left-[-4.92vw] top-[1.2vw] h-[23.74vw] w-[35.6vw] max-w-none"
        />
      </div>

      <Image
        src="/assets/recap/clock.webp"
        alt=""
        width={195}
        height={236}
        className="absolute left-[72.26vw] top-[10.94vw] h-[24.4vw] w-[17.81vw]"
      />

      <FramedPhoto
        className="left-[4vw] top-[112vw] h-[30.2vw] w-[20.15vw]"
        frame={{ src: "/assets/recap/purple-frame.webp", size: [289, 371] }}
        photo={{
          src: "/assets/recap/photos/purple.jpg",
          alt: "Two hackers demoing their project beside a hand-lettered sign",
          size: [570, 760],
        }}
        aperture={[4.97, 12.99, 90.06, 77.53]}
        objectPosition="70% 91%"
        rounded
      />
      <Image
        src="/assets/recap/purple-frame-bow-left.webp"
        alt=""
        width={29}
        height={16}
        className="absolute left-[11.15vw] top-[114.34vw] h-[1.14vw] w-[1.8vw] rotate-[-20.76deg]"
      />
      <Image
        src="/assets/recap/purple-frame-bow-right.webp"
        alt=""
        width={29}
        height={16}
        className="absolute left-[15.16vw] top-[114.34vw] h-[1.14vw] w-[1.8vw] rotate-[159.24deg]"
      />
      <Image
        src="/assets/recap/purple-frame-gem-outer.webp"
        alt=""
        width={32}
        height={31}
        className="absolute left-[12.97vw] top-[112.61vw] h-[2.46vw] w-[2.22vw]"
      />
      <Image
        src="/assets/recap/purple-frame-gem-inner.webp"
        alt=""
        width={20}
        height={18}
        className="absolute left-[13.39vw] top-[113.14vw] h-[1.4vw] w-[1.36vw]"
      />
      <Image
        src="/assets/recap/purple-frame-foot-left.webp"
        alt=""
        width={34}
        height={23}
        className="absolute left-[11.77vw] top-[139.51vw] h-[1.86vw] w-[2.35vw]"
      />
      <Image
        src="/assets/recap/purple-frame-foot-right.webp"
        alt=""
        width={34}
        height={23}
        className="absolute left-[14.29vw] top-[139.51vw] h-[1.86vw] w-[2.35vw]"
      />

      <FramedPhoto
        className="left-[78.9vw] top-[143.5vw] h-[27.31vw] w-[17.09vw]"
        frame={{ src: "/assets/recap/hanging-frame.webp", size: [246, 371] }}
        photo={{
          src: "/assets/recap/photos/hanging.jpg",
          alt: "The opening ceremony in a packed lecture theatre",
          size: [609, 406],
        }}
        aperture={[6.46, 47.98, 77.33, 48.97]}
        objectPosition="32% 61%"
        rounded
      />

      <FramedPhoto
        className="left-[22.8vw] top-[146vw] h-[25.47vw] w-[20.83vw]"
        frame={{ src: "/assets/recap/dark-brown-frame.webp", size: [233, 270] }}
        photo={{
          src: "/assets/recap/photos/dark-brown.jpg",
          alt: "A participant coding on a laptop during the event",
          size: [396, 594],
        }}
        aperture={[11.86, 11.6, 67.82, 75.55]}
        objectPosition="49% 49%"
      />

      <Image
        src="/assets/recap/mirror.webp"
        alt=""
        width={218}
        height={270}
        className="absolute left-[49.2vw] top-[145.5vw] h-[26.67vw] w-[24.11vw]"
      />
      <div
        className="absolute left-[49.2vw] top-[145.5vw] h-[26.67vw] w-[24.11vw]"
        style={{ clipPath: "url(#recap-mobile-mirror-aperture)" }}
      >
        <Image
          src="/assets/recap/photos/mirror.jpg"
          alt="A decorated corner of the venue"
          width={540}
          height={810}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute left-[8.91vw] top-[45.04vw] h-[63.55vw] w-[86.01vw] overflow-hidden rounded-[0.64vw] bg-[#f25c4e] shadow-[inset_-0.5vw_-1vw_0.64vw_0_rgba(0,0,0,0.25)]">
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
        className="absolute left-[14.29vw] top-[49.97vw] h-[53.69vw] w-[75.23vw] border-0"
      />

      <FramedPhoto
        className="left-[68.9vw] top-[115.2vw] h-[21.71vw] w-[27.1vw]"
        frame={{ src: "/assets/recap/brown-photo-frame.webp", size: [330, 255] }}
        photo={{
          src: "/assets/recap/photos/brown.jpg",
          alt: "A team gathered around a laptop at a table",
          size: [681, 454],
        }}
        aperture={[13.89, 17.91, 66.44, 68.48]}
        objectPosition="50% 40%"
      />

      <Image
        src="/assets/recap/light.webp"
        alt=""
        width={843}
        height={1033}
        className="pointer-events-none absolute left-[11.7vw] top-[2.54vw] h-[85.02vw] w-[76.53vw]"
      />

      <Image
        src="/assets/recap/baseboard-bottom.png"
        alt=""
        width={1543}
        height={16}
        className="absolute left-0 top-[2.68vw] h-[4.29vw] w-full"
      />
      <Image
        src="/assets/recap/baseboard-top.png"
        alt=""
        width={1543}
        height={10}
        className="absolute left-0 top-0 h-[2.68vw] w-full"
      />

      <Image
        src="/assets/recap/calendar.webp"
        alt=""
        width={127}
        height={122}
        className="absolute left-[4vw] top-[150vw] h-[12.47vw] w-[13.23vw]"
      />
    </div>
  );
};

export default RecapMobile;
