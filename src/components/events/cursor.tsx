import { cn } from "@/lib/utils";

export const Cursor = ({ className }: { className?: string }) => (
  <svg
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("shrink-0", className)}
    aria-hidden
  >
    <path
      d="M3.4971 3.49707L9.67824 18.3598L11.8727 11.8989L18.3598 9.67821L3.4971 3.49707Z"
      stroke="#071074"
      strokeWidth="1.74856"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
