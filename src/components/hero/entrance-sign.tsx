import { cn } from "@/lib/utils";

import Image from "next/image";

const SignButton = ({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className: string;
  href: string;
}) => {
  return (
    <a
      className={cn(
        "absolute bg-[#2C6D7D] text-[1vw] py-[0.5vw] px-[1vw] rounded-[0.5vw] text-title cursor-pointer hover:opacity-80 transition-opacity",
        className
      )}
      href={href}
      target="_blank"
      rel="noopener"
    >
      {children}
    </a>
  );
};

const EntranceSign = () => {
  return (
    <div className="w-full">
      <Image
        src="/assets/hero/entrance-sign-without-buttons.png"
        alt="Entrance sign"
        width={1200}
        height={800}
        className="pointer-events-none w-full"
      />
      <div className="absolute left-1/2 -translate-x-1/2 top-[20%] ml-[1vw] flex flex-col items-center font-title text-title">
        <h1 className="text-[6.8vw] text-shadow-lg leading-tight">HackCamp</h1>
        <h2 className="text-[1.5vw]">
          Canada&apos;s largest beginner-only hackathon
        </h2>
      </div>
      <SignButton
        className="left-1/2 -translate-x-1/2 top-[19.8vw]"
        href="https://forms.gle/B6Eai84mh9SKLNa28"
      >
        Interest Form
      </SignButton>
    </div>
  );
};

export default EntranceSign;
