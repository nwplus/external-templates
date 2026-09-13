import { cn } from "@/lib/utils";

import { type ReactNode } from "react";

export const CtaLink = ({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={cn(
      "bg-[#EEB62A] text-2xl font-bold rounded-md px-4 py-2.5 hover:opacity-80 transition-opacity",
      className
    )}
  >
    {children}
  </a>
);
