import { MIRROR_APERTURE, RED_APERTURE } from "@/constants/recap-apertures";

import Image from "next/image";

const RECAP_VIDEO = "https://www.youtube.com/embed/3AQoV3BiRpc";

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

      <Image
        src="/assets/recap/green-frame.svg"
        alt=""
        width={275}
        height={206}
        className="absolute left-[52.42vw] top-[175.83vw] h-[15.78vw] w-[22.9vw]"
      />
      <div className="absolute left-[55vw] top-[178.38vw] h-[10.68vw] w-[17.73vw] overflow-hidden rounded-full">
        <Image
          src="/assets/recap/photos/green.jpg"
          alt="Participants working at desks across a lecture hall"
          width={496}
          height={331}
          className="absolute left-[-2.33vw] top-[-3.15vw] h-[14.15vw] w-[21.27vw] max-w-none"
        />
      </div>

      <Image
        src="/assets/recap/red-frame.svg"
        alt=""
        width={299}
        height={292}
        className="absolute left-[28.24vw] top-[118.07vw] h-[30.84vw] w-[31.81vw]"
      />
      <div
        className="absolute left-[28.24vw] top-[118.07vw] h-[30.84vw] w-[31.81vw] overflow-hidden"
        style={{ clipPath: "url(#recap-mobile-red-aperture)" }}
      >
        <Image
          src="/assets/recap/photos/red.jpg"
          alt="Teams building together in the atrium"
          width={730}
          height={487}
          className="absolute left-[-5.59vw] top-[1.36vw] h-[26.98vw] w-[40.46vw] max-w-none"
        />
      </div>

      <Image
        src="/assets/recap/clock.svg"
        alt=""
        width={195}
        height={236}
        className="absolute left-[72.26vw] top-[10.94vw] h-[24.4vw] w-[17.81vw]"
      />

      <Image
        src="/assets/recap/purple-frame.svg"
        alt=""
        width={289}
        height={371}
        className="absolute left-[3.31vw] top-[115.07vw] h-[34.32vw] w-[22.9vw]"
      />
      <div className="absolute left-[4.45vw] top-[119.53vw] h-[26.61vw] w-[20.62vw] overflow-hidden rounded-full">
        <Image
          src="/assets/recap/photos/purple.jpg"
          alt="Two hackers demoing their project beside a hand-lettered sign"
          width={570}
          height={760}
          className="absolute left-[-2.3vw] top-[-6.47vw] h-[32.56vw] w-[24.42vw] max-w-none"
        />
      </div>
      <Image
        src="/assets/recap/purple-frame-bow-left.svg"
        alt=""
        width={29}
        height={16}
        className="absolute left-[11.43vw] top-[117.73vw] h-[1.29vw] w-[2.05vw] rotate-[-20.76deg]"
      />
      <Image
        src="/assets/recap/purple-frame-bow-right.svg"
        alt=""
        width={29}
        height={16}
        className="absolute left-[15.99vw] top-[117.73vw] h-[1.29vw] w-[2.05vw] rotate-[159.24deg]"
      />
      <Image
        src="/assets/recap/purple-frame-gem-outer.svg"
        alt=""
        width={32}
        height={31}
        className="absolute left-[13.5vw] top-[115.76vw] h-[2.79vw] w-[2.52vw]"
      />
      <Image
        src="/assets/recap/purple-frame-gem-inner.svg"
        alt=""
        width={20}
        height={18}
        className="absolute left-[13.98vw] top-[116.36vw] h-[1.59vw] w-[1.54vw]"
      />
      <Image
        src="/assets/recap/purple-frame-foot-left.svg"
        alt=""
        width={34}
        height={23}
        className="absolute left-[12.14vw] top-[146.33vw] h-[2.11vw] w-[2.67vw]"
      />
      <Image
        src="/assets/recap/purple-frame-foot-right.svg"
        alt=""
        width={34}
        height={23}
        className="absolute left-[15vw] top-[146.33vw] h-[2.11vw] w-[2.67vw]"
      />

      <Image
        src="/assets/recap/hanging-frame.svg"
        alt=""
        width={246}
        height={371}
        className="absolute left-[74.55vw] top-[146.07vw] h-[32.13vw] w-[20.11vw]"
      />
      <div className="absolute left-[76vw] top-[160.63vw] h-[16.53vw] w-[17.31vw] overflow-hidden rounded-full">
        <Image
          src="/assets/recap/photos/hanging.jpg"
          alt="The opening ceremony in a packed lecture theatre"
          width={609}
          height={406}
          className="absolute left-[-3.37vw] top-[-1.18vw] h-[18.47vw] w-[27.67vw] max-w-none"
        />
      </div>

      <Image
        src="/assets/recap/dark-brown-frame.svg"
        alt=""
        width={233}
        height={270}
        className="absolute left-[20.87vw] top-[151.4vw] h-[29.96vw] w-[24.5vw]"
      />
      <div className="absolute left-[24.02vw] top-[154.76vw] h-[23.33vw] w-[18.08vw] overflow-hidden">
        <Image
          src="/assets/recap/photos/dark-brown.jpg"
          alt="A participant coding on a laptop during the event"
          width={396}
          height={594}
          className="absolute left-[-2.24vw] top-[-5.19vw] h-[33.96vw] w-[22.64vw] max-w-none"
        />
      </div>

      <Image
        src="/assets/recap/mirror.svg"
        alt=""
        width={218}
        height={270}
        className="absolute left-[45.8vw] top-[149.38vw] h-[31.38vw] w-[28.36vw]"
      />
      <div
        className="absolute left-[45.8vw] top-[149.38vw] h-[31.38vw] w-[28.36vw]"
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

      <Image
        src="/assets/recap/brown-photo-frame.svg"
        alt=""
        width={330}
        height={255}
        className="absolute left-[63.61vw] top-[117.18vw] h-[24.67vw] w-[30.79vw]"
      />
      <div className="absolute left-[68.15vw] top-[120.68vw] h-[17.66vw] w-[21.71vw] overflow-hidden">
        <Image
          src="/assets/recap/photos/brown.jpg"
          alt="A team gathered around a laptop at a table"
          width={681}
          height={454}
          className="absolute left-[-6.4vw] top-[-1.47vw] h-[22.01vw] w-[33.01vw] max-w-none"
        />
      </div>

      <Image
        src="/assets/recap/light.svg"
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
        src="/assets/recap/calendar.svg"
        alt=""
        width={127}
        height={122}
        className="absolute left-[2.8vw] top-[153.18vw] h-[12.47vw] w-[13.23vw]"
      />
    </div>
  );
};

export default RecapMobile;
