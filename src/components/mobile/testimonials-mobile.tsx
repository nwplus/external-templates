"use client";

import { Candle } from "@/components/testimonials/candle";
import { DeerHead } from "@/components/testimonials/deer-head";
import { nookShape } from "@/components/testimonials/nook-shapes";
import { Nugget } from "@/components/testimonials/nugget";
import { Pillow } from "@/components/testimonials/pillow";
import { TappableBear } from "@/components/testimonials/tappable-bear";
import { testimonials } from "@/constants/testimonials";
import { cn } from "@/lib/utils";

import Image from "next/image";
import { useState } from "react";

const BUBBLE_WIDTH = 345;
const BUBBLE_HEIGHT = 513;
// every tail needs the same number of points or the clip-path transition just snaps
const BUBBLE_TAILS = [
  [
    [141.774, 469.465],
    [105, 513],
    [105, 469.465],
  ],
  [
    [184.5, 459],
    [168, 500],
    [136, 459],
  ],
  [
    [261.5, 456],
    [261.5, 493],
    [223, 459.5],
  ],
];

const bubbleShape = (tail: number[][]) =>
  `polygon(${[
    [0, 0],
    [BUBBLE_WIDTH, 0],
    [320.5, 450],
    ...tail,
    [23.116, 469.465],
  ]
    .map(
      ([x, y]) => `${(x / BUBBLE_WIDTH) * 100}% ${(y / BUBBLE_HEIGHT) * 100}%`
    )
    .join(", ")})`;

type ArrowProps = {
  direction: "prev" | "next";
  onClick: () => void;
};

const Arrow = ({ direction, onClick }: ArrowProps) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={
      direction === "prev" ? "Previous testimonial" : "Next testimonial"
    }
    className="flex h-[10.18vw] w-[10.18vw] items-center justify-center rounded-full bg-white/[0.18]"
  >
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#7c83a7"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[4.6vw] w-[4.6vw]"
    >
      <polyline
        points={direction === "prev" ? "15,18 9,12 15,6" : "9,18 15,12 9,6"}
      />
    </svg>
  </button>
);

const TestimonialsMobile = () => {
  const [current, setCurrent] = useState(0);
  const person = testimonials[current];
  const step = (by: number) =>
    setCurrent((i) => (i + by + testimonials.length) % testimonials.length);

  return (
    <div
      className="relative -mt-[132.32vw] h-[225.28vw] w-full scroll-mt-[16vw] overflow-hidden"
      id="testimonials-mobile"
    >
      <div className="absolute left-0 top-[132.32vw] h-[92.97vw] w-full bg-gradient-to-b from-[#393f52] to-[#222035]" />
      <Image
        src="/assets/testimonials/baseboard-bottom.png"
        alt=""
        width={1543}
        height={16}
        className="absolute left-0 top-[132.32vw] h-[2.8vw] w-full"
      />
      <Image
        src="/assets/testimonials/baseboard-top.png"
        alt=""
        width={1543}
        height={10}
        className="absolute left-0 top-[130.79vw] h-[1.53vw] w-full"
      />

      <Image
        src="/assets/testimonials/dog-bed.svg"
        alt=""
        width={665}
        height={239}
        className="absolute left-[12.56vw] top-[159.37vw] h-[28.88vw] w-[80.37vw]"
      />
      <Pillow
        src="/assets/testimonials/ruffled-cushion.svg"
        width={149}
        height={92}
        label="Ruffled cushion"
        className="left-[62.52vw] top-[154.77vw] h-[11.08vw] w-[18.04vw] rotate-[10deg]"
      />
      <Pillow
        src="/assets/testimonials/back-pillow.svg"
        width={151}
        height={136}
        label="Back pillow"
        className="left-[30.53vw] top-[151.54vw] h-[16.42vw] w-[18.25vw]"
      />
      <Pillow
        src="/assets/testimonials/round-cushion.svg"
        width={166}
        height={78}
        label="Round cushion"
        className="left-[41.87vw] top-[160.16vw] h-[9.36vw] w-[20.04vw]"
      />
      <Pillow
        src="/assets/testimonials/yellow-cushion.svg"
        width={370}
        height={217}
        label="Yellow cushion"
        className="left-[16.46vw] top-[164.43vw] h-[26.28vw] w-[44.69vw]"
      />
      <Pillow
        src="/assets/testimonials/square-cushion.svg"
        width={209}
        height={209}
        label="Square cushion"
        className="left-[62.96vw] top-[160.04vw] h-[25.21vw] w-[25.21vw]"
      />
      <Image
        src="/assets/testimonials/deer-antler-back.svg"
        alt=""
        width={41}
        height={89}
        className="absolute left-[69.57vw] top-[143.17vw] h-[10.79vw] w-[5.02vw] rotate-[-22.24deg]"
        style={nookShape("/assets/testimonials/deer-antler-back.svg")}
      />
      <Image
        src="/assets/testimonials/deer-antlers.svg"
        alt=""
        width={71}
        height={98}
        className="absolute left-[74.5vw] top-[142.75vw] h-[11.84vw] w-[8.59vw]"
        style={nookShape("/assets/testimonials/deer-antlers.svg")}
      />
      <Image
        src="/assets/testimonials/deer-body.svg"
        alt=""
        width={153}
        height={140}
        className="absolute left-[64.4vw] top-[164.54vw] h-[16.97vw] w-[18.54vw]"
        style={nookShape("/assets/testimonials/deer-body.svg")}
      />
      <Image
        src="/assets/testimonials/deer-pyjamas.svg"
        alt=""
        width={78}
        height={165}
        className="absolute left-[70.22vw] top-[154.01vw] h-[19.93vw] w-[9.47vw]"
        style={nookShape("/assets/testimonials/deer-pyjamas.svg")}
      />
      <Image
        src="/assets/testimonials/deer-ear-left.svg"
        alt=""
        width={30}
        height={32}
        className="absolute left-[68.87vw] top-[152.39vw] h-[3.84vw] w-[3.62vw] rotate-[-5.37deg]"
        style={nookShape("/assets/testimonials/deer-ear-left.svg")}
      />
      <Image
        src="/assets/testimonials/deer-ear-right.svg"
        alt=""
        width={32}
        height={32}
        className="absolute left-[78.03vw] top-[152.52vw] h-[3.88vw] w-[3.86vw] rotate-[-5.37deg]"
        style={nookShape("/assets/testimonials/deer-ear-right.svg")}
      />
      <DeerHead className="left-[69.22vw] top-[152.59vw] h-[12.8vw] w-[14.07vw]" />
      <Image
        src="/assets/testimonials/deer-pyjama-cat.svg"
        alt=""
        width={15}
        height={12}
        className="absolute left-[75.24vw] top-[167.7vw] h-[1.44vw] w-[1.85vw]"
        style={nookShape("/assets/testimonials/deer-pyjama-cat.svg")}
      />
      <TappableBear
        onClick={() => step(1)}
        whileTap={{ scale: 0.95 }}
        className="left-[20.28vw] top-[147.83vw] h-[29.08vw] w-[16.66vw]"
      />
      <Nugget className="left-[42.81vw] top-[148.22vw] h-[18.58vw] w-[21.92vw]" />
      <Image
        src="/assets/testimonials/light-box.svg"
        alt=""
        width={117}
        height={83}
        className="absolute left-[42.2vw] top-[167.7vw] h-[10.01vw] w-[14.09vw]"
        style={nookShape("/assets/testimonials/light-box.svg")}
      />
      <Candle
        variant="large"
        className="left-[62.3vw] top-[164.84vw] h-[3.62vw] w-[3.6vw]"
      />
      <Candle
        variant="small"
        className="left-[66.45vw] top-[164.54vw] h-[2.55vw] w-[1.99vw]"
      />
      <Image
        src="/assets/testimonials/blanket-left.svg"
        alt=""
        width={242}
        height={262}
        className="pointer-events-none absolute left-[6.62vw] top-[165.3vw] h-[31.67vw] w-[29.22vw]"
      />
      <Pillow
        src="/assets/testimonials/oval-pillow.svg"
        width={124}
        height={107}
        label="Oval pillow"
        className="left-[49.72vw] top-[180.39vw] h-[12.96vw] w-[14.96vw]"
      />
      <Image
        src="/assets/testimonials/blanket-right.svg"
        alt=""
        width={303}
        height={166}
        className="absolute left-[55.17vw] top-[172.82vw] h-[20.0vw] w-[36.6vw]"
        style={nookShape("/assets/testimonials/blanket-right.svg")}
      />
      <Pillow
        src="/assets/testimonials/foreground-pillow.svg"
        width={193}
        height={133}
        label="Foreground pillow"
        className="left-[11.47vw] top-[177.04vw] h-[16.12vw] w-[23.29vw]"
      />
      <Pillow
        src="/assets/testimonials/star-pillow.svg"
        width={126}
        height={112}
        label="Star pillow"
        className="left-[37.09vw] top-[179.37vw] h-[13.52vw] w-[15.24vw]"
      />
      <Pillow
        src="/assets/testimonials/log-pillow.svg"
        width={196}
        height={118}
        label="Log pillow"
        className="left-[72.47vw] top-[175.75vw] h-[14.26vw] w-[23.73vw]"
      />

      {/* The lamp light lies over the whole nook, so it must let taps
          through to the pillows and the deer underneath. */}
      <div
        className="pointer-events-none absolute left-[27.04vw] top-[157.56vw] h-[30.69vw] w-[45.56vw] opacity-50 mix-blend-plus-lighter"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute left-[45.16vw] top-[147.77vw] h-[30.69vw] w-[45.45vw] opacity-25 mix-blend-plus-lighter"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(255,223,141,1) 0%, rgba(255,223,141,0) 100%)",
        }}
      />

      <h2 className="absolute left-[8.65vw] top-0 font-title text-[8.14vw] leading-none text-white">
        Testimonials
      </h2>

      <div
        className="absolute left-[8.14vw] top-[11.45vw] h-[129.78vw] w-[87.28vw] bg-[#f4e9ff] transition-[clip-path] duration-300 ease-out"
        style={{
          clipPath: bubbleShape(BUBBLE_TAILS[current % BUBBLE_TAILS.length]),
        }}
      />
      <div className="absolute left-[16.54vw] top-[17.56vw] w-[70.23vw]">
        <p className="text-[6.11vw] font-bold leading-none text-black">
          {person.name}
        </p>
        <p className="mt-[2.04vw] text-[4.07vw] leading-none text-[#2b2b33]">
          {person.role}
        </p>
        {/* the longest quote needs smaller type to stay inside the bubble */}
        <p
          className={cn(
            "mt-[7.12vw] leading-[1.5] text-black",
            person.testimonial.length > 700 ? "text-[3.25vw]" : "text-[3.82vw]"
          )}
        >
          {person.testimonial}
        </p>
      </div>

      <div className="absolute left-[29.52vw] top-[206.96vw] flex w-[44.53vw] items-center justify-between">
        <Arrow direction="prev" onClick={() => step(-1)} />
        <div className="flex gap-[2.8vw]">
          {testimonials.map((entry, index) => (
            <button
              key={entry.name}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Show ${entry.name}'s testimonial`}
              aria-current={index === current}
              className={`h-[1.78vw] w-[1.78vw] rounded-full bg-[#8890b6] ${
                index === current ? "opacity-100" : "opacity-40"
              }`}
            />
          ))}
        </div>
        <Arrow direction="next" onClick={() => step(1)} />
      </div>
    </div>
  );
};

export default TestimonialsMobile;
