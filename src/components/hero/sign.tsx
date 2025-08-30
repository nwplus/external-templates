import { cn } from "@/lib/utils";

import Image from "next/image";

const SignButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <button
      className={cn(
        "absolute bg-[#2C6D7D] text-[1vw] py-[0.5vw] px-[1vw] rounded-[0.5vw] text-title cursor-pointer hover:opacity-80 transition-opacity",
        className
      )}
    >
      {children}
    </button>
  );
};

const Sign = () => {
  return (
    <div>
      <Image
        src="/assets/hero/sign.png"
        alt="sign"
        width={1200}
        height={800}
        className="pointer-events-none"
      />
      <div className="absolute left-1/2 -translate-x-1/2 top-[20%] flex flex-col ml-[1vw] items-center font-title text-title">
        <h1 className="text-[6.8vw] text-shadow-lg leading-tight">HackCamp</h1>
        <h2 className="text-[1.5vw]">
          Canada&apos;s largest beginner-only hackathon
        </h2>
      </div>
      <SignButton className="left-[22.6vw] top-[19.8vw]">
        Register Now
      </SignButton>
      <SignButton className="right-[20.5vw] top-[19.8vw]">
        Become a Mentor
      </SignButton>
    </div>
  );
};

export default Sign;
