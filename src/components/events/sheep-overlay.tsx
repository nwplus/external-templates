import { cn } from "@/lib/utils";

import { Cursor } from "./cursor";

export type SheepContent = {
  title: string;
  subtitle: string;
  description: string;
};

type SheepOverlayProps = SheepContent & {
  className?: string;
};

export const SheepOverlay = ({
  title,
  subtitle,
  description,
  className,
}: SheepOverlayProps) => (
  <div
    className={cn(
      "absolute -translate-x-1/2 -translate-y-1/2 text-[#071074] text-center pointer-events-none select-none",
      className
    )}
  >
    <div className="grid items-center justify-items-center">
      <div className="col-start-1 row-start-1 flex flex-col items-center gap-1 transition-opacity duration-200 group-hover:opacity-0">
        <h3 className="font-title text-6xl leading-none">{title}</h3>
        <p className="text-2xl font-semibold leading-snug">{subtitle}</p>
        <p className="flex items-center justify-center gap-2 text-2xl pt-1">
          Hover to learn more
          <Cursor />
        </p>
      </div>
      <p className="col-start-1 row-start-1 text-xl leading-relaxed opacity-0 transition-opacity duration-200 group-hover:opacity-100 whitespace-pre-line">
        {description}
      </p>
    </div>
  </div>
);
