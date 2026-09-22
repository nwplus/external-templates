"use client";

import { cn } from "@/lib/utils";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import {
  createContext,
  type CSSProperties,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { createPortal } from "react-dom";

/**
 * A window onto one picture on a sheet that holds several: the window as
 * fractions (0–1) of the sheet, and how wide the whole sheet is drawn, in CSS
 * px, which sets how big the picture comes up.
 */
export type LightboxCrop = {
  x: number;
  y: number;
  w: number;
  h: number;
  sheetWidth: number;
};

/** What the lightbox shows: the file, its own size, and a caption under it. */
export type LightboxPhoto = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  crop?: LightboxCrop;
};

type LightboxProps = LightboxPhoto & {
  open: boolean;
  onClose: () => void;
};

/**
 * A trackpad keeps sending wheel events for a moment after a scroll, so a
 * lightbox opened right after one would close before it had appeared.
 */
const SCROLL_GRACE_MS = 400;

/** False on the server and while hydrating, true once there is a body to portal into. */
const useMounted = () =>
  useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

/**
 * A photo, bigger, with its caption on a cream card, over a dimmed page. It
 * is portalled to the body because the sections clip their overflow and
 * transform their art, either of which would trap a fixed layer. Closes on
 * the backdrop, the close button, Esc, or the first scroll; the page behind
 * stays put while it is up, and focus goes back to whatever opened it.
 */
export const Lightbox = ({
  open,
  onClose,
  src,
  alt,
  caption,
  width,
  height,
  crop,
}: LightboxProps) => {
  const mounted = useMounted();
  const reduceMotion = useReducedMotion();
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const opener = document.activeElement;
    closeButton.current?.focus();

    const root = document.documentElement;
    const overflow = root.style.overflow;
    root.style.overflow = "hidden";

    const openedAt = performance.now();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      } else if (event.key === "Tab") {
        // The close button is the only control, so Tab stays on it rather
        // than wandering off into the page behind the backdrop.
        event.preventDefault();
        closeButton.current?.focus();
      }
    };
    const onScroll = () => {
      if (performance.now() - openedAt > SCROLL_GRACE_MS) onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("wheel", onScroll, { passive: true });
    window.addEventListener("touchmove", onScroll, { passive: true });

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("wheel", onScroll);
      window.removeEventListener("touchmove", onScroll);
      root.style.overflow = overflow;
      if (opener instanceof HTMLElement) opener.focus({ preventScroll: true });
    };
  }, [open, onClose]);

  if (!mounted) return null;

  const sheetHeight = crop ? crop.sheetWidth * (height / width) : 0;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          key="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={caption}
          className="fixed inset-0 z-[1100] flex items-center justify-center bg-night-top/85 p-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.2 }}
          onClick={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.figure
            className="m-0 flex flex-col items-center rounded-sm bg-cream-soft p-2 shadow-[0_1.5rem_3rem_rgba(0,0,0,0.55)]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { type: "spring", stiffness: 340, damping: 30 }
            }
          >
            {crop ? (
              // The whole sheet is drawn at its enlarged size and slid so the
              // chosen picture fills the window.
              <span
                className="relative block overflow-hidden"
                style={{
                  width: crop.w * crop.sheetWidth,
                  height: crop.h * sheetHeight,
                }}
              >
                <Image
                  src={src}
                  alt={alt}
                  width={width}
                  height={height}
                  className="absolute max-w-none"
                  style={{
                    width: crop.sheetWidth,
                    height: sheetHeight,
                    left: -crop.x * crop.sheetWidth,
                    top: -crop.y * sheetHeight,
                  }}
                />
              </span>
            ) : (
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="block h-auto max-h-[80vh] w-auto max-w-[90vw] object-contain"
              />
            )}
            <figcaption className="max-w-[90vw] px-2 pt-2 pb-1 text-center font-display text-lg leading-tight text-ink">
              {caption}
            </figcaption>
          </motion.figure>
          {/* After the card in the tree so it paints over a tall photo's corner on a phone. */}
          <button
            ref={closeButton}
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="absolute top-3 right-3 z-10 flex size-11 cursor-pointer items-center justify-center rounded-full bg-cream-soft text-ink shadow-md transition-transform duration-150 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-star"
          >
            <X className="size-6" aria-hidden="true" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

const OpenPhoto = createContext<((photo: LightboxPhoto) => void) | null>(null);

/**
 * One lightbox shared by every trigger inside it. The sections stay server
 * components, so this is their client island: it keeps which photo is open,
 * renders the lightbox once, and the triggers reach it through context. The
 * photo is kept after closing so the exit animation shows the same one.
 */
export const LightboxGallery = ({ children }: { children: ReactNode }) => {
  const [photo, setPhoto] = useState<LightboxPhoto | null>(null);
  const [open, setOpen] = useState(false);
  const show = useCallback((next: LightboxPhoto) => {
    setPhoto(next);
    setOpen(true);
  }, []);
  const close = useCallback(() => setOpen(false), []);

  return (
    <OpenPhoto.Provider value={show}>
      {children}
      {photo && <Lightbox {...photo} open={open} onClose={close} />}
    </OpenPhoto.Provider>
  );
};

type TriggerProps = {
  photo: LightboxPhoto;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

/**
 * A transparent button that opens its photo in the surrounding gallery's
 * lightbox. It takes the box of whatever it replaces, so the picture inside
 * sits exactly where it did; `group` lets that picture react to hover.
 */
export const LightboxTrigger = ({
  photo,
  className,
  style,
  children,
}: TriggerProps) => {
  const show = useContext(OpenPhoto);
  return (
    <button
      type="button"
      aria-label={`Open photo: ${photo.alt}`}
      onClick={() => show?.(photo)}
      className={cn(
        "group cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-star",
        className
      )}
      style={style}
    >
      {children}
    </button>
  );
};
