import { cn } from "@/lib/utils";

import Image from "next/image";

const ASSETS = {
  top: {
    src: "/assets/sponsors/string-lights-top.svg",
    width: 1495,
    height: 790,
    className: "w-full xl:w-[97.6%]",
  },
  bottom: {
    src: "/assets/sponsors/string-lights-bottom.svg",
    width: 1245,
    height: 595,
    className: "w-full xl:w-[81.3%]",
  },
} as const;

/** A garland of fairy lights: one across the top of the band, one hung off
 * the last shelf. */
const StringLights = ({
  variant,
  className,
}: {
  variant: "top" | "bottom";
  className?: string;
}) => {
  const asset = ASSETS[variant];
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none flex w-full justify-center",
        className
      )}
    >
      <Image
        src={asset.src}
        alt=""
        width={asset.width}
        height={asset.height}
        className={cn("h-auto", asset.className)}
      />
    </div>
  );
};

export default StringLights;
