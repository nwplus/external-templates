"use client";

import { Button } from "@/components/ui/button";

import { useEffect, useState } from "react";

import Facebook from "./social/facebook";
import Instagram from "./social/instagram";
import Linkedin from "./social/linkedin";
import Medium from "./social/medium";
import Youtube from "./social/youtube";

const SOCIALS = [
  {
    href: "https://www.instagram.com/nwplusubc",
    label: "Instagram",
    Icon: Instagram,
  },
  {
    href: "https://www.linkedin.com/company/nwplus",
    label: "LinkedIn",
    Icon: Linkedin,
  },
  {
    href: "https://www.youtube.com/c/nwPlusUBC",
    label: "YouTube",
    Icon: Youtube,
  },
  { href: "https://medium.com/nwplusubc", label: "Medium", Icon: Medium },
  {
    href: "https://www.facebook.com/nwplusubc",
    label: "Facebook",
    Icon: Facebook,
  },
];

const LINKS = [
  { href: "mailto:info@nwplus.io", label: "Email Us" },
  {
    href: "mailto:sponsorship@nwplus.io?subject=Sponsorship%20Inquiry",
    label: "Become a Sponsor",
  },
  {
    href: "https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md",
    label: "Code of Conduct",
  },
];

const NARROW_QUERY = "(max-width: 1279px)";

const Contact = () => {
  const [inputMessage, setInputMessage] = useState("");
  const [isNarrow, setIsNarrow] = useState(false);

  // The phone frame labels the field and asks for "Enter your email"; the desktop
  // frame drops the label and puts the invitation in the placeholder instead.
  useEffect(() => {
    const query = window.matchMedia(NARROW_QUERY);
    const sync = () => setIsNarrow(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    setInputMessage("");

    try {
      const response = await fetch(
        "https://us-central1-nwplus-ubc.cloudfunctions.net/addToMailingList",
        { method: "POST", body: JSON.stringify({ email }) }
      );
      if (response.ok) {
        setInputMessage(`${email} is now subscribed!`);
        form.reset();
      } else if (response.status === 409) {
        setInputMessage(`${email} is already subscribed!`);
      } else {
        setInputMessage("Something went wrong, please try again later.");
      }
    } catch {
      setInputMessage("Something went wrong, please try again later.");
    }
  };

  return (
    <div className="flex w-full flex-col items-center gap-6 xl:gap-[max(2rem,2.09vw)]">
      <div className="flex items-center gap-5 xl:gap-[max(2.75rem,2.874vw)]">
        {SOCIALS.map(({ href, label, Icon }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="transition-opacity hover:opacity-80"
          >
            <Icon className="size-7 xl:size-[max(3.75rem,3.919vw)]" />
          </a>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 font-body text-sm font-bold underline xl:gap-x-[max(2.25rem,2.351vw)] xl:text-[length:max(1.875rem,1.96vw)]/[1.2]">
        {LINKS.map(({ href, label }) => {
          const external = href.startsWith("http");
          return (
            <a
              key={href}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
            >
              {label}
            </a>
          );
        })}
      </div>

      <form
        className="flex w-full max-w-[45rem] flex-col gap-1 xl:max-w-[max(45rem,47.028vw)]"
        onSubmit={handleSubmit}
      >
        <label
          htmlFor="newsletter-email"
          className="font-body text-lg xl:sr-only"
        >
          Sign up for our newsletter!
        </label>

        <div className="flex items-center gap-2 xl:gap-[max(1.25rem,1.306vw)]">
          <input
            id="newsletter-email"
            type="email"
            name="email"
            required
            placeholder={
              isNarrow ? "Enter your email" : "Sign up for our newsletter!"
            }
            className="grow rounded-2xl border border-white bg-cream-soft/70 px-5 py-2.5 font-body text-night-top placeholder:text-night-top focus:outline-none focus-visible:ring-2 focus-visible:ring-sun xl:rounded-[max(1rem,1.045vw)] xl:px-[max(1.25rem,1.306vw)] xl:py-[max(0.625rem,0.653vw)] xl:text-[length:max(1.25rem,1.306vw)]/[1.4]"
          />
          <Button
            type="submit"
            className="h-auto shrink-0 rounded-[10px] bg-sun px-6 py-3 font-body text-sun-ink hover:bg-sun/90 xl:rounded-[max(10px,0.653vw)] xl:px-[max(1.5rem,1.568vw)] xl:py-[max(0.75rem,0.784vw)] xl:text-[length:max(1.125rem,1.176vw)]/[1.5556]"
          >
            Submit
          </Button>
        </div>
      </form>

      <p
        aria-live="polite"
        className="min-h-5 font-body text-sm text-cream-soft xl:min-h-[max(1.25rem,1.306vw)] xl:text-[length:max(0.875rem,0.914vw)]/[1.4286]"
      >
        {inputMessage}
      </p>
    </div>
  );
};

export default Contact;
