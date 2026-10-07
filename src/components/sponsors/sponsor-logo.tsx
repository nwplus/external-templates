"use client";

import type { SponsorDoc } from "@/lib/firestore";
import { cn } from "@/lib/utils";

import Image from "next/image";
import { useState } from "react";

const SponsorLogo = ({
  sponsor,
  className,
}: {
  sponsor: SponsorDoc;
  className?: string;
}) => {
  const [failed, setFailed] = useState(false);

  if (failed || !sponsor.imgURL) {
    return (
      <span
        className={cn(
          "flex items-center justify-center text-center font-body font-semibold text-wood",
          className
        )}
      >
        {sponsor.name}
      </span>
    );
  }

  return (
    <Image
      src={sponsor.imgURL}
      alt={sponsor.name}
      width={400}
      height={300}
      className={cn("object-contain", className)}
      onError={() => setFailed(true)}
    />
  );
};

export default SponsorLogo;
