import { cn } from "@/lib/utils";

const PUFFS = 4;
// has to match the 6s in --animate-smoke
const DURATION = 6;

type ChimneySmokeProps = {
  className?: string;
  blurClassName?: string;
};

export const ChimneySmoke = ({
  className,
  blurClassName = "blur-md",
}: ChimneySmokeProps) => (
  <div
    aria-hidden
    className={cn(
      "pointer-events-none absolute aspect-square -translate-x-1/2 -translate-y-1/2",
      className
    )}
  >
    {Array.from({ length: PUFFS }, (_, i) => (
      <div
        key={i}
        className={cn(
          "absolute inset-0 rounded-full animate-smoke motion-reduce:animate-none",
          blurClassName
        )}
        style={{
          background:
            "radial-gradient(circle, rgba(255,244,224,0.9) 0%, rgba(255,244,224,0.4) 45%, transparent 70%)",
          animationDelay: `${(i * DURATION) / PUFFS}s`,
          // only visible w/ reduced motion, the keyframes override it otherwise
          transform: `translate(${i * 20}%, ${i * -60}%) scale(${0.7 + i * 0.2})`,
          opacity: 0.25 - i * 0.05,
        }}
      />
    ))}
  </div>
);
