import { CTF_PRIZING_URL } from "@/constants/ctf";

const LABEL = "HackCamp logo on the prizing house";

const LINK_CLASS =
  "pointer-events-auto absolute cursor-pointer rounded-sm outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-star";

/**
 * The logo is painted into the flattened house artwork, so the CTF target has
 * to live in the same image coordinate system as the desktop art box.
 */
export const DesktopPrizingHouseLink = () => {
  if (!CTF_PRIZING_URL) return null;

  return (
    <a
      href={CTF_PRIZING_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={LABEL}
      className={`${LINK_CLASS} top-[66%] left-[64.6%] h-[1.1%] w-[1.6%]`}
    >
      <span className="sr-only">{LABEL}</span>
    </a>
  );
};

/** The phone crop uses its own house image and therefore needs its own box. */
export const MobilePrizingHouseLink = () => {
  if (!CTF_PRIZING_URL) return null;

  return (
    <a
      href={CTF_PRIZING_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={LABEL}
      className={`${LINK_CLASS} top-[31.5%] left-[59.1%] h-[1.7%] w-[2.8%]`}
    >
      <span className="sr-only">{LABEL}</span>
    </a>
  );
};
