import { cn } from "@/lib/utils";

import type { CSSProperties, ReactNode } from "react";

type SlabButtonProps = {
  /** Background of the button face (any CSS background). */
  face: string;
  /** Background of the darker slab peeking out underneath. */
  slab: string;
  /** Text colour. */
  ink?: string;
  /** Leave empty for a placeholder that isn't a link yet. */
  href?: string;
  /** Open in a new tab (for links off the site). */
  external?: boolean;
  className?: string;
  children: ReactNode;
};

/**
 * The design's raised button: a face sitting on a darker slab a few px lower.
 * Everything is em-based (20px type in Figma), so size it with a font-size on
 * `className`. On hover the face sinks a little towards the slab.
 */
export const SlabButton = ({
  face,
  slab,
  ink = "#ffffff",
  href,
  external = false,
  className,
  children,
}: SlabButtonProps) => (
  <a
    href={href || undefined}
    aria-disabled={href ? undefined : true}
    {...(href && external ? { target: "_blank", rel: "noreferrer" } : {})}
    style={{ "--face": face, "--slab": slab, "--ink": ink } as CSSProperties}
    className={cn(
      "group relative inline-block shrink-0 pb-[0.188em] font-bold whitespace-nowrap text-(--ink)",
      href
        ? "cursor-pointer focus-visible:rounded-[0.5em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lamp"
        : "cursor-default",
      className
    )}
  >
    <span
      aria-hidden="true"
      className="absolute inset-x-0 top-[0.188em] bottom-0 rounded-[0.5em] [background:var(--slab)]"
    />
    <span className="relative flex h-[2.2075em] items-center justify-center rounded-[0.5em] [background:var(--face)] px-[0.8em] leading-[0.98] tracking-[-0.017em] transition-transform duration-150 group-hover:translate-y-[0.08em] group-active:translate-y-[0.188em]">
      {children}
    </span>
  </a>
);
