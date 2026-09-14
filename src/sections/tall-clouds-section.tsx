import Image from "next/image";
import { type ReactNode } from "react";

export default function TallCloudsSection({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="relative bg-linear-to-b from-[#12204D] to-[#28418D]">
      <div className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden md:block">
        <div className="absolute right-0 -bottom-40 w-full">
          <Image
            src="/assets/tall-clouds-section/desktop-tall-clouds.svg"
            alt=""
            width={1531}
            height={2651}
            className="block w-full h-auto"
          />
        </div>
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
