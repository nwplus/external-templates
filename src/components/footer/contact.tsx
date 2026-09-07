"use client";

import { Button } from "@/components/ui/button";

import { useState } from "react";

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

const Contact = () => {
  const [inputMessage, setInputMessage] = useState("");

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
    <div className="flex w-full flex-col items-center gap-6 md:gap-8">
      <div className="flex items-center gap-6 md:gap-10">
        {SOCIALS.map(({ href, label, Icon }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="transition-opacity hover:opacity-80"
          >
            <Icon className="size-8 md:size-12" />
          </a>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 font-body text-base font-bold underline md:text-2xl">
        {LINKS.map(({ href, label }) => (
          <a key={href} href={href} target="_blank" rel="noopener noreferrer">
            {label}
          </a>
        ))}
      </div>

      <form
        className="flex w-full max-w-xl flex-col items-stretch gap-3 md:flex-row md:items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          name="email"
          required
          placeholder="Sign up for our newsletter!"
          className="grow rounded-full bg-[#bab9c5] px-5 py-3 font-body text-ink placeholder:text-ink/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-sun"
        />
        <Button
          type="submit"
          className="rounded-md bg-sun px-6 py-3 font-body text-sun-ink hover:bg-sun/90"
        >
          Submit
        </Button>
      </form>

      {inputMessage && (
        <p className="font-body text-sm text-muted-cream">{inputMessage}</p>
      )}
    </div>
  );
};

export default Contact;
