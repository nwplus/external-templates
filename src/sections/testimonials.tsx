"use client";

import { Candle } from "@/components/testimonials/candle";
import { DeerHead } from "@/components/testimonials/deer-head";
import { Pillow } from "@/components/testimonials/pillow";
import { TappableBear } from "@/components/testimonials/tappable-bear";
import { type Testimonial, testimonials } from "@/constants/testimonials";

import Image from "next/image";
import { useState } from "react";

const bubbles = [
  {
    src: "/assets/testimonials/bubble-left.svg",
    className: "left-[10.39vw] top-[9.46vw] h-[8.21vw] w-[10.66vw]",
    textClassName: "left-[1.5vw] right-[1.1vw] top-0 h-[5.9vw]",
    flipped: true,
  },
  {
    src: "/assets/testimonials/bubble-mid.svg",
    className: "left-[24.57vw] top-[8.9vw] h-[8.77vw] w-[9.76vw]",
    textClassName: "left-[1.3vw] right-[1vw] top-0 h-[6.3vw]",
    flipped: false,
  },
  {
    src: "/assets/testimonials/bubble-right.svg",
    className: "left-[37.66vw] top-[9.19vw] h-[9.41vw] w-[10.5vw]",
    textClassName: "left-[1.4vw] right-[1vw] top-0 h-[6.6vw]",
    flipped: false,
  },
];

type SpeechBubbleProps = {
  bubble: (typeof bubbles)[number];
  person: Testimonial;
  selected: boolean;
  dimmed: boolean;
  onSelect: () => void;
};

const SpeechBubble = ({
  bubble,
  person,
  selected,
  dimmed,
  onSelect,
}: SpeechBubbleProps) => (
  <button
    type="button"
    onClick={onSelect}
    aria-pressed={selected}
    className={`absolute cursor-pointer transition duration-200 hover:-translate-y-[0.2vw] ${
      dimmed ? "opacity-75" : "opacity-100"
    } ${bubble.className}`}
  >
    <Image
      src={bubble.src}
      alt=""
      width={163}
      height={144}
      className={`h-full w-full ${bubble.flipped ? "-scale-x-100" : ""}`}
    />
    <span
      className={`absolute flex flex-col items-start justify-center text-left ${bubble.textClassName}`}
    >
      <span className="text-[0.96vw] font-bold leading-tight text-[#16224f]">
        {person.name}
      </span>
      <span className="mt-[0.3vw] text-[0.83vw] leading-tight text-[#5a6396]">
        {person.role}
      </span>
    </span>
  </button>
);

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const person = testimonials[selected];
  const shown = testimonials.slice(0, bubbles.length);

  return (
    <div
      className="relative -mt-[16.5vw] h-[114.33vw] w-full scroll-mt-[5vw] overflow-hidden"
      id="testimonials"
    >
      <div className="absolute left-[-0.33vw] top-[16.45vw] h-[97.89vw] w-[100.98vw] bg-gradient-to-b from-[#393f52] to-[#222035]" />
      <Image
        src="/assets/testimonials/baseboard-bottom.png"
        alt=""
        width={1543}
        height={16}
        className="absolute left-[-0.33vw] top-[15.37vw] w-[100.98vw] max-w-none"
      />
      <Image
        src="/assets/testimonials/baseboard-top.png"
        alt=""
        width={1543}
        height={10}
        className="absolute left-[-0.33vw] top-[14.73vw] w-[100.98vw] max-w-none"
      />

      <Image
        src="/assets/testimonials/dog-bed.svg"
        alt=""
        width={665}
        height={239}
        className="absolute left-[8.46vw] top-[24.21vw] h-[15.64vw] w-[43.52vw]"
      />
      <Pillow
        src="/assets/testimonials/ruffled-cushion.svg"
        width={149}
        height={92}
        label="Ruffled cushion"
        className="left-[35.51vw] top-[21.72vw] h-[6vw] w-[9.77vw] rotate-[10deg]"
      />
      <Pillow
        src="/assets/testimonials/back-pillow.svg"
        width={151}
        height={136}
        label="Back pillow"
        className="left-[18.19vw] top-[19.97vw] h-[8.89vw] w-[9.88vw]"
      />
      <Pillow
        src="/assets/testimonials/round-cushion.svg"
        width={166}
        height={78}
        label="Round cushion"
        className="left-[24.33vw] top-[24.64vw] h-[5.07vw] w-[10.85vw]"
      />
      <Pillow
        src="/assets/testimonials/yellow-cushion.svg"
        width={370}
        height={217}
        label="Yellow cushion"
        className="left-[10.57vw] top-[26.95vw] h-[14.23vw] w-[24.2vw]"
      />
      <Pillow
        src="/assets/testimonials/square-cushion.svg"
        width={209}
        height={209}
        label="Square cushion"
        className="left-[35.75vw] top-[24.57vw] h-[13.65vw] w-[13.65vw]"
      />

      <Image
        src="/assets/testimonials/deer-antler-back.svg"
        alt=""
        width={41}
        height={89}
        className="absolute left-[39.33vw] top-[15.44vw] h-[5.84vw] w-[2.72vw] rotate-[-22.24deg]"
      />
      <Image
        src="/assets/testimonials/deer-antlers.svg"
        alt=""
        width={71}
        height={98}
        className="absolute left-[42vw] top-[15.21vw] h-[6.41vw] w-[4.65vw]"
      />
      <Image
        src="/assets/testimonials/deer-body.svg"
        alt=""
        width={153}
        height={140}
        className="absolute left-[36.53vw] top-[27.01vw] h-[9.19vw] w-[10.04vw]"
      />
      <Image
        src="/assets/testimonials/deer-pyjamas.svg"
        alt=""
        width={78}
        height={165}
        className="absolute left-[39.68vw] top-[21.31vw] h-[10.79vw] w-[5.13vw]"
      />
      <Image
        src="/assets/testimonials/deer-ear-left.svg"
        alt=""
        width={30}
        height={32}
        className="absolute left-[38.95vw] top-[20.43vw] h-[2.08vw] w-[1.96vw] rotate-[-5.37deg]"
      />
      <Image
        src="/assets/testimonials/deer-ear-right.svg"
        alt=""
        width={32}
        height={32}
        className="absolute left-[43.91vw] top-[20.5vw] h-[2.1vw] w-[2.09vw] rotate-[-5.37deg]"
      />
      <DeerHead className="left-[39.14vw] top-[20.54vw] h-[6.93vw] w-[7.62vw]" />
      <Image
        src="/assets/testimonials/deer-pyjama-cat.svg"
        alt=""
        width={15}
        height={12}
        className="absolute left-[42.4vw] top-[28.72vw] h-[0.78vw] w-[1vw]"
      />

      <TappableBear
        onClick={() => setSelected((i) => (i + 1) % shown.length)}
        whileHover={{ y: "-0.3vw", scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="left-[12.64vw] top-[17.96vw] h-[15.75vw] w-[9.02vw]"
      />

      <Image
        src="/assets/testimonials/nugget.svg"
        alt=""
        width={181}
        height={154}
        className="absolute left-[24.84vw] top-[18.17vw] h-[10.06vw] w-[11.87vw]"
      />
      <Image
        src="/assets/testimonials/light-box.svg"
        alt=""
        width={117}
        height={83}
        className="absolute left-[24.51vw] top-[28.72vw] h-[5.42vw] w-[7.63vw]"
      />
      <Candle
        variant="large"
        className="left-[35.39vw] top-[27.17vw] h-[1.96vw] w-[1.95vw]"
      />
      <Candle
        variant="small"
        className="left-[37.64vw] top-[27.01vw] h-[1.38vw] w-[1.08vw]"
      />

      <Image
        src="/assets/testimonials/blanket-left.svg"
        alt=""
        width={242}
        height={262}
        className="pointer-events-none absolute left-[5.24vw] top-[27.42vw] h-[17.15vw] w-[15.82vw]"
      />
      <Pillow
        src="/assets/testimonials/oval-pillow.svg"
        width={124}
        height={107}
        label="Oval pillow"
        className="left-[28.58vw] top-[35.59vw] h-[7.02vw] w-[8.1vw]"
      />
      <Image
        src="/assets/testimonials/blanket-right.svg"
        alt=""
        width={303}
        height={166}
        className="absolute left-[31.53vw] top-[31.49vw] h-[10.83vw] w-[19.82vw]"
      />
      <Pillow
        src="/assets/testimonials/foreground-pillow.svg"
        width={193}
        height={133}
        label="Foreground pillow"
        className="left-[7.87vw] top-[33.78vw] h-[8.73vw] w-[12.61vw]"
      />
      <Pillow
        src="/assets/testimonials/star-pillow.svg"
        width={126}
        height={112}
        label="Star pillow"
        className="left-[21.74vw] top-[35.04vw] h-[7.32vw] w-[8.25vw]"
      />
      <Pillow
        src="/assets/testimonials/log-pillow.svg"
        width={196}
        height={118}
        label="Log pillow"
        className="left-[40.9vw] top-[33.08vw] h-[7.72vw] w-[12.85vw]"
      />

      {/* The lamp light lies over the whole nook, so it must let clicks
          through to the pillows and the deer underneath. */}
      <div
        className="pointer-events-none absolute left-[16.3vw] top-[23.23vw] h-[16.62vw] w-[24.67vw] opacity-50 mix-blend-plus-lighter"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute left-[26.11vw] top-[17.93vw] h-[16.62vw] w-[24.61vw] opacity-25 mix-blend-plus-lighter"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(255,223,141,1) 0%, rgba(255,223,141,0) 100%)",
        }}
      />

      <div className="absolute left-[8.12vw] top-0 flex w-[18.78vw] flex-col gap-[1.05vw] text-white">
        <h2 className="font-title text-[4.19vw] leading-none">Testimonials</h2>
        <p className="text-[1.31vw] leading-[1.4]">
          Click on the speech bubbles to read
        </p>
      </div>

      {shown.map((person, index) => (
        <SpeechBubble
          key={person.name}
          bubble={bubbles[index]}
          person={person}
          selected={index === selected}
          dimmed={index !== selected}
          onSelect={() => setSelected(index)}
        />
      ))}

      <Image
        src="/assets/testimonials/quote-card-shadow.svg"
        alt=""
        width={698}
        height={283}
        className="absolute left-[54.91vw] top-[16.62vw] h-[18.5vw] w-[45.66vw] rotate-[3.99deg]"
      />
      <Image
        src="/assets/testimonials/quote-card.svg"
        alt=""
        width={665}
        height={468}
        className="absolute left-[53.73vw] top-[6.35vw] h-[30.63vw] w-[43.52vw]"
      />
      <Image
        src="/assets/testimonials/quote-card-shading.svg"
        alt=""
        width={23}
        height={314}
        className="absolute left-[55.07vw] top-[11.42vw] h-[20.52vw] w-[1.51vw]"
      />
      <div className="absolute left-[58.8vw] top-[7.4vw] flex h-[28.4vw] w-[35vw] flex-col justify-center">
        <p className="font-title text-[2.2vw] leading-none text-[#16224f]">
          {person.name}
        </p>
        <p className="mt-[0.6vw] text-[1.1vw] leading-none text-[#5a6396]">
          {person.role}
        </p>
        <p className="mt-[1.3vw] text-[1.2vw] leading-[1.5] text-[#2b3055]">
          {person.testimonial}
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
