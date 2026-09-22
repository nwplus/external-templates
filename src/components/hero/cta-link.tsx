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
      "bg-[#EEB62A] text-2xl font-bold rounded-md px-4 py-2.5 hover:bg-[#FFD979] transition-[background-color,box-shadow] duration-100 hover:shadow-[0_0_10px_#FFDA88,0_0_28px_#FFDA8820,0_0_28px_rgba(255,218,136,0.2)]",
      className
    )}
  >
    {children}
  </a>
);
