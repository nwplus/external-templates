"use client";

import { testimonials } from "@/constants/testimonials";

import Image from "next/image";
import { useState } from "react";

const BUBBLE_SHAPE =
  "polygon(0% 0%, 100% 0%, 92.71% 90.16%, 55.39% 91.77%, 47.81% 100%, 40.23% 92.17%, 6.41% 93.78%)";

type ArrowProps = {
  direction: "prev" | "next";
  onClick: () => void;
};

const Arrow = ({ direction, onClick }: ArrowProps) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={direction === "prev" ? "Previous testimonial" : "Next testimonial"}
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
      <polyline points={direction === "prev" ? "15,18 9,12 15,6" : "9,18 15,12 9,6"} />
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
      className="relative -mt-[132.32vw] h-[216.28vw] w-full overflow-hidden"
      id="testimonials-mobile"
    >
      <div className="absolute left-0 top-[132.32vw] h-[83.97vw] w-full bg-gradient-to-b from-[#393f52] to-[#222035]" />
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
      <Image
        src="/assets/testimonials/ruffled-cushion.svg"
        alt=""
        width={149}
        height={92}
        className="absolute left-[62.52vw] top-[154.77vw] h-[11.08vw] w-[18.04vw] rotate-[10deg]"
      />
      <Image
        src="/assets/testimonials/back-pillow.svg"
        alt=""
        width={151}
        height={136}
        className="absolute left-[30.53vw] top-[151.54vw] h-[16.42vw] w-[18.25vw]"
      />
      <Image
        src="/assets/testimonials/round-cushion.svg"
        alt=""
        width={166}
        height={78}
        className="absolute left-[41.87vw] top-[160.16vw] h-[9.36vw] w-[20.04vw]"
      />
      <Image
        src="/assets/testimonials/yellow-cushion.svg"
        alt=""
        width={370}
        height={217}
        className="absolute left-[16.46vw] top-[164.43vw] h-[26.28vw] w-[44.69vw]"
      />
      <Image
        src="/assets/testimonials/square-cushion.svg"
        alt=""
        width={209}
        height={209}
        className="absolute left-[62.96vw] top-[160.04vw] h-[25.21vw] w-[25.21vw]"
      />
      <Image
        src="/assets/testimonials/deer-antler-back.svg"
        alt=""
        width={41}
        height={89}
        className="absolute left-[69.57vw] top-[143.17vw] h-[10.79vw] w-[5.02vw] rotate-[-22.24deg]"
      />
      <Image
        src="/assets/testimonials/deer-antlers.svg"
        alt=""
        width={71}
        height={98}
        className="absolute left-[74.5vw] top-[142.75vw] h-[11.84vw] w-[8.59vw]"
      />
      <Image
        src="/assets/testimonials/deer-body.svg"
        alt=""
        width={153}
        height={140}
        className="absolute left-[64.4vw] top-[164.54vw] h-[16.97vw] w-[18.54vw]"
      />
      <Image
        src="/assets/testimonials/deer-pyjamas.svg"
        alt=""
        width={78}
        height={165}
        className="absolute left-[70.22vw] top-[154.01vw] h-[19.93vw] w-[9.47vw]"
      />
      <Image
        src="/assets/testimonials/deer-ear-left.svg"
        alt=""
        width={30}
        height={32}
        className="absolute left-[68.87vw] top-[152.39vw] h-[3.84vw] w-[3.62vw] rotate-[-5.37deg]"
      />
      <Image
        src="/assets/testimonials/deer-ear-right.svg"
        alt=""
        width={32}
        height={32}
        className="absolute left-[78.03vw] top-[152.52vw] h-[3.88vw] w-[3.86vw] rotate-[-5.37deg]"
      />
      <Image
        src="/assets/testimonials/deer-head.svg"
        alt=""
        width={116}
        height={106}
        className="absolute left-[69.22vw] top-[152.59vw] h-[12.8vw] w-[14.07vw]"
      />
      <Image
        src="/assets/testimonials/deer-spots.svg"
        alt=""
        width={22}
        height={14}
        className="absolute left-[73.71vw] top-[153.24vw] h-[1.66vw] w-[2.71vw]"
      />
      <Image
        src="/assets/testimonials/deer-muzzle.svg"
        alt=""
        width={47}
        height={30}
        className="absolute left-[71.72vw] top-[159.19vw] h-[3.68vw] w-[5.69vw]"
      />
      <Image
        src="/assets/testimonials/deer-eye-left.svg"
        alt=""
        width={6}
        height={9}
        className="absolute left-[71.33vw] top-[158.54vw] h-[1.07vw] w-[0.72vw]"
      />
      <Image
        src="/assets/testimonials/deer-eye-right.svg"
        alt=""
        width={6}
        height={9}
        className="absolute left-[76.87vw] top-[158.5vw] h-[1.09vw] w-[0.74vw]"
      />
      <Image
        src="/assets/testimonials/deer-mouth.svg"
        alt=""
        width={18}
        height={12}
        className="absolute left-[73.12vw] top-[160.2vw] h-[1.4vw] w-[2.16vw]"
      />
      <Image
        src="/assets/testimonials/deer-pyjama-cat.svg"
        alt=""
        width={15}
        height={12}
        className="absolute left-[75.24vw] top-[167.7vw] h-[1.44vw] w-[1.85vw]"
      />
      <Image
        src="/assets/testimonials/bear-body.svg"
        alt=""
        width={138}
        height={126}
        className="absolute left-[20.28vw] top-[161.73vw] h-[15.18vw] w-[16.66vw] rotate-[-1.14deg]"
      />
      <Image
        src="/assets/testimonials/bear-head.svg"
        alt=""
        width={116}
        height={98}
        className="absolute left-[21.5vw] top-[151.39vw] h-[11.82vw] w-[14.0vw]"
      />
      <Image
        src="/assets/testimonials/bear-hat.svg"
        alt=""
        width={92}
        height={48}
        className="absolute left-[21.33vw] top-[147.83vw] h-[5.84vw] w-[11.12vw]"
      />
      <Image
        src="/assets/testimonials/nugget.svg"
        alt=""
        width={181}
        height={154}
        className="absolute left-[42.81vw] top-[148.22vw] h-[18.58vw] w-[21.92vw]"
      />
      <Image
        src="/assets/testimonials/light-box.svg"
        alt=""
        width={117}
        height={83}
        className="absolute left-[42.2vw] top-[167.7vw] h-[10.01vw] w-[14.09vw]"
      />
      <Image
        src="/assets/testimonials/candle-large.svg"
        alt=""
        width={30}
        height={30}
        className="absolute left-[62.3vw] top-[164.84vw] h-[3.62vw] w-[3.6vw]"
      />
      <Image
        src="/assets/testimonials/candle-small.svg"
        alt=""
        width={17}
        height={21}
        className="absolute left-[66.45vw] top-[164.54vw] h-[2.55vw] w-[1.99vw]"
      />
      <Image
        src="/assets/testimonials/blanket-left.svg"
        alt=""
        width={242}
        height={262}
        className="absolute left-[6.62vw] top-[165.3vw] h-[31.67vw] w-[29.22vw]"
      />
      <Image
        src="/assets/testimonials/oval-pillow.svg"
        alt=""
        width={124}
        height={107}
        className="absolute left-[49.72vw] top-[180.39vw] h-[12.96vw] w-[14.96vw]"
      />
      <Image
        src="/assets/testimonials/blanket-right.svg"
        alt=""
        width={303}
        height={166}
        className="absolute left-[55.17vw] top-[172.82vw] h-[20.0vw] w-[36.6vw]"
      />
      <Image
        src="/assets/testimonials/foreground-pillow.svg"
        alt=""
        width={193}
        height={133}
        className="absolute left-[11.47vw] top-[177.04vw] h-[16.12vw] w-[23.29vw]"
      />
      <Image
        src="/assets/testimonials/star-pillow.svg"
        alt=""
        width={126}
        height={112}
        className="absolute left-[37.09vw] top-[179.37vw] h-[13.52vw] w-[15.24vw]"
      />
      <Image
        src="/assets/testimonials/log-pillow.svg"
        alt=""
        width={196}
        height={118}
        className="absolute left-[72.47vw] top-[175.75vw] h-[14.26vw] w-[23.73vw]"
      />

      <div
        className="absolute left-[27.04vw] top-[157.56vw] h-[30.69vw] w-[45.56vw] opacity-50 mix-blend-plus-lighter"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%)",
        }}
      />
      <div
        className="absolute left-[45.16vw] top-[147.77vw] h-[30.69vw] w-[45.45vw] opacity-25 mix-blend-plus-lighter"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(255,223,141,1) 0%, rgba(255,223,141,0) 100%)",
        }}
      />

      <h2 className="absolute left-[8.65vw] top-0 font-title text-[8.14vw] leading-none text-white">
        Testimonials
      </h2>

      <div
        className="absolute left-[8.14vw] top-[11.45vw] h-[126.72vw] w-[87.28vw] bg-[#f4e9ff]"
        style={{ clipPath: BUBBLE_SHAPE }}
      />
      <div className="absolute left-[16.54vw] top-[17.56vw] w-[70.23vw]">
        <p className="text-[6.11vw] font-bold leading-none text-black">
          {person.name}
        </p>
        <p className="mt-[2.04vw] text-[4.07vw] leading-none text-[#2b2b33]">
          {person.pronouns} | {person.role}
        </p>
        <p className="mt-[7.12vw] text-[3.82vw] leading-[1.5] text-black">
          {person.testimonial}
        </p>
      </div>

      <div className="absolute left-[29.52vw] top-[197.96vw] flex w-[44.53vw] items-center justify-between">
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
