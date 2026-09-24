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

type FramedPhotoProps = {
  className: string;
  frame: { src: string; size: [number, number] };
  photo: { src: string; alt: string; size: [number, number] };
  aperture: [number, number, number, number];
  objectPosition: string;
  rounded?: boolean;
  /** A `url(#…)` clip for an opening that is neither a box nor an oval. */
  clipPath?: string;
};

/**
 * A frame with its photo in the aperture. The aperture is a button that opens
 * the whole photo large, with a caption.
 */
const FramedPhoto = ({
  className,
  frame,
  photo,
  aperture: [left, top, width, height],
  objectPosition,
  rounded,
  clipPath,
}: FramedPhotoProps) => (
  <div className={`absolute ${className}`}>
    <Image
      src={frame.src}
      alt=""
      width={frame.size[0]}
      height={frame.size[1]}
      className="absolute inset-0 h-full w-full"
    />
    <LightboxTrigger
      photo={{
        src: photo.src,
        alt: photo.alt,
        caption: recapCaption(photo.src),
        width: photo.size[0],
        height: photo.size[1],
      }}
      className={`absolute overflow-hidden ${rounded ? "rounded-full" : ""}`}
      style={{
        left: `${left}%`,
        top: `${top}%`,
        width: `${width}%`,
        height: `${height}%`,
      }}
    >
      {/* The clip sits on a span inside, so the focus ring is not clipped. */}
      <span
        className="absolute inset-0 overflow-hidden rounded-[inherit]"
        style={clipPath ? { clipPath } : undefined}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.size[0]}
          height={photo.size[1]}
          className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-[1.02]"
          style={{ objectPosition }}
        />
      </span>
    </LightboxTrigger>
  </div>
);

const RecapMobile = () => {
  return (
    <div
      className="relative h-[319.85vw] w-full overflow-clip bg-[#0b101c]"
      id="recap-mobile"
    >
      <LightboxGallery>
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
              id="recap-mobile-dark-brown-aperture"
              clipPathUnits="objectBoundingBox"
            >
              <path d={DARK_BROWN_APERTURE} />
            </clipPath>
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
          className="left-[53vw] top-[182.4vw] h-[14.1vw] w-[20.5vw]"
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
          className="absolute left-[28.24vw] top-[118.07vw] h-[30.84vw] w-[31.81vw]"
        />
        {/* The two photos with a drawn aperture keep their clipping on a span
          inside the button, so the focus ring is not clipped away with them. */}
        <LightboxTrigger
          photo={{
            src: "/assets/recap/photos/red.jpg",
            alt: "Teams building together in the atrium",
            caption: recapCaption("/assets/recap/photos/red.jpg"),
            width: 730,
            height: 487,
          }}
          className="absolute left-[28.24vw] top-[118.07vw] h-[30.84vw] w-[31.81vw]"
        >
          <span
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: "url(#recap-mobile-red-aperture)" }}
          >
            <Image
              src="/assets/recap/photos/red.jpg"
              alt="Teams building together in the atrium"
              width={730}
              height={487}
              className="absolute left-[-5.59vw] top-[1.36vw] h-[26.98vw] w-[40.46vw] max-w-none transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </span>
        </LightboxTrigger>

        <Image
          src="/assets/recap/clock.webp"
          alt=""
          width={195}
          height={236}
          className="absolute left-[72.26vw] top-[10.94vw] h-[24.4vw] w-[17.81vw]"
        />

        <FramedPhoto
          className="left-[2.06vw] top-[114.05vw] h-[35.27vw] w-[24.21vw]"
          frame={{ src: "/assets/recap/purple-frame.webp", size: [306, 381] }}
          photo={{
            src: "/assets/recap/photos/purple.jpg",
            alt: "Two hackers demoing their project beside a hand-lettered sign",
            size: [570, 760],
          }}
          aperture={[9.86, 15.53, 85.19, 75.44]}
          objectPosition="70% 91%"
          rounded
        />

        <FramedPhoto
          className="left-[74.55vw] top-[146.07vw] h-[32.13vw] w-[20.11vw]"
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
          className="left-[20.87vw] top-[151.4vw] h-[29.96vw] w-[24.5vw]"
          frame={{
            src: "/assets/recap/dark-brown-frame.webp",
            size: [233, 270],
          }}
          photo={{
            src: "/assets/recap/photos/dark-brown.jpg",
            alt: "A participant coding on a laptop during the event",
            size: [396, 594],
          }}
          aperture={[11.86, 11.6, 67.82, 75.55]}
          clipPath="url(#recap-mobile-dark-brown-aperture)"
          objectPosition="49% 49%"
        />

        <Image
          src="/assets/recap/mirror.webp"
          alt=""
          width={278}
          height={308}
          className="absolute left-[40.7vw] top-[146.17vw] h-[35.66vw] w-[36.04vw]"
        />
        <LightboxTrigger
          photo={{
            src: "/assets/recap/photos/mirror.jpg",
            alt: "A speaker at the lecture hall podium, running a workshop",
            caption: recapCaption("/assets/recap/photos/mirror.jpg"),
            width: 540,
            height: 810,
          }}
          className="absolute left-[42.42vw] top-[147.87vw] h-[32.28vw] w-[32.59vw]"
        >
          <span
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: "url(#recap-mobile-mirror-aperture)" }}
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

        <Image
          src="/assets/recap/video-frame.webp"
          alt=""
          width={568}
          height={389}
          className="absolute left-[6.92vw] top-[42.27vw] h-[66.32vw] w-[88.0vw]"
        />
        <RecapVideo className="absolute left-[14.29vw] top-[49.97vw] h-[53.69vw] w-[75.23vw]" />

        <FramedPhoto
          className="left-[63.54vw] top-[116.85vw] h-[25.01vw] w-[32.12vw]"
          frame={{
            src: "/assets/recap/brown-photo-frame.webp",
            size: [345, 260],
          }}
          photo={{
            src: "/assets/recap/photos/brown.jpg",
            alt: "A team gathered around a laptop at a table",
            size: [681, 454],
          }}
          aperture={[16.5, 20.5, 60.2, 61.5]}
          objectPosition="50% 40%"
        />

        <SwingingLamp className="absolute left-[11.7vw] top-[2.54vw] h-[85.02vw] w-[76.53vw]" />

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
          className="absolute left-[2.8vw] top-[153.18vw] h-[12.47vw] w-[13.23vw]"
        />
      </LightboxGallery>
    </div>
  );
};

export default RecapMobile;
