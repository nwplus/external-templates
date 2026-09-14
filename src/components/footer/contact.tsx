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
    <div className="flex w-full flex-col items-center gap-6 xl:gap-8">
      <div className="flex items-center gap-5 xl:gap-11">
        {SOCIALS.map(({ href, label, Icon }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="transition-opacity hover:opacity-80"
          >
            <Icon className="size-7 xl:size-15" />
          </a>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 font-body text-sm font-bold underline xl:gap-x-9 xl:text-3xl">
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
        className="flex w-full max-w-[45rem] flex-col gap-1"
        onSubmit={handleSubmit}
      >
        <label
          htmlFor="newsletter-email"
          className="font-body text-lg xl:sr-only"
        >
          Sign up for our newsletter!
        </label>

        <div className="flex items-center gap-2 xl:gap-5">
          <input
            id="newsletter-email"
            type="email"
            name="email"
            required
            placeholder={
              isNarrow ? "Enter your email" : "Sign up for our newsletter!"
            }
            className="grow rounded-2xl border border-white bg-cream-soft/70 px-5 py-2.5 font-body text-night-top placeholder:text-night-top focus:outline-none focus-visible:ring-2 focus-visible:ring-sun xl:text-xl"
          />
          <Button
            type="submit"
            className="h-auto shrink-0 rounded-[10px] bg-sun px-6 py-3 font-body text-sun-ink hover:bg-sun/90 xl:text-lg"
          >
            Submit
          </Button>
        </div>
      </form>

      <p
        aria-live="polite"
        className="min-h-5 font-body text-sm text-cream-soft"
      >
        {inputMessage}
      </p>
    </div>
  );
};

export default Contact;
