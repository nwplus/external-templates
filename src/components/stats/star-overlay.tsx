import { cn } from "@/lib/utils";

export type StarContent = {
  value: string;
  label: string;
};

type StarOverlayProps = StarContent & {
  className?: string;
};

export const StarOverlay = ({ value, label, className }: StarOverlayProps) => (
  <div
    className={cn(
      "absolute -translate-x-1/2 -translate-y-1/2 text-center text-[#0B1327] flex flex-col items-center pointer-events-none select-none",
      className
    )}
  >
    <p className="font-title text-3xl md:text-7xl leading-none">{value}</p>
    <p className="font-title text-sm md:text-2xl leading-[1.2rem] -mt-3 max-w-25">{label}</p>
  </div>
);
