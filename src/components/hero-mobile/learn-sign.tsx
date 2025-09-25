"use client";

import { cn } from "@/lib/utils";

import Image from "next/image";
import { useState } from "react";

interface SignProps {
  faceContent: React.ReactNode;
  backTitle: string;
  backDate: string;
  backDescription: string;
  className?: string;
}

const LearnSign = ({
  faceContent,
  backTitle,
  backDate,
  backDescription,
  className,
}: SignProps) => {
  const [isClicked, setisClicked] = useState(false);

  return (
    <div
      className={cn("relative w-[80vw]", className)}
      onClick={() => setisClicked(!isClicked)}
    >
      <Image
        src="/assets/learn/learn-sign.svg"
        alt="Learn sign"
        width={600}
        height={500}
      />
      <div className="absolute w-full top-0 left-0">
        <div
          className={cn(
            "absolute left-[2.5%] top-[1vw] w-[95%] transition-opacity",
            isClicked && "opacity-0 pointer-events-none"
          )}
        >
          {faceContent}
        </div>
        <div
          className={cn(
            "flex flex-col px-[2vw] py-[1.8vw] text-title gap-[0.5vw] transition-opacity",
            !isClicked && "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex justify-between items-center text-shadow-lg">
            <h2 className="text-[2.5vw] font-title leading-none">
              {backTitle}
            </h2>
            <h3 className="text-[1.5vw]">{backDate}</h3>
          </div>
          <div className="h-1 bg-title w-full mb-[0.5vw]" />
          <p className="text-[1vw] whitespace-pre-line">{backDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default LearnSign;
