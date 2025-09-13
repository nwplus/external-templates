"use client";

import { useAutoplayAudio } from "@/hooks/use-autoplay-audio";

import { useRef, useState } from "react";

import { Button } from "../ui/button";
import Facebook from "./social/facebook";
import Instagram from "./social/instagram";
import Linkedin from "./social/linkedin";
import Medium from "./social/medium";
import Youtube from "./social/youtube";

const Contact = () => {
  const [inputMessage, setInputMessage] = useState("");
  const audioThresholdRef = useRef<HTMLInputElement>(null);

  // Comes from https://pixabay.com/sound-effects/campfire-crackling-fireplace-sound-119594/
  useAutoplayAudio(
    audioThresholdRef,
    "/assets/sponsor-footer/campfire-sound.mp3"
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = e.currentTarget.email.value;
    setInputMessage("");
    const response = await fetch(
      "https://us-central1-nwplus-ubc.cloudfunctions.net/addToMailingList",
      {
        method: "POST",
        body: JSON.stringify({ email }),
      }
    );
    if (response.ok) {
      setInputMessage(`${email} is now subscribed!`);
      e.currentTarget.reset();
    } else {
      // If the email is already subscribed we get a 409
      if (response.status === 409) {
        setInputMessage(`${email} is already subscribed!`);
      } else {
        setInputMessage("Something went wrong, please try again later.");
      }
    }
  };
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex gap-8">
        <a
          href="https://www.facebook.com/nwplusubc"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <Facebook />
        </a>
        <a
          href="https://www.instagram.com/nwplusubc"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <Instagram />
        </a>
        <a
          href="https://www.linkedin.com/company/nwplus"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <Linkedin />
        </a>
        <a
          href="https://www.youtube.com/c/nwPlusUBC"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <Youtube />
        </a>
        <a
          href="https://medium.com/nwplusubc"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <Medium />
        </a>
      </div>
      <div className="flex gap-8">
        <a
          href="mailto:info@nwplus.io"
          className="font-bold text-2xl underline"
        >
          Email Us
        </a>
        <a
          href="mailto:sponsorship@nwplus.io?subject=Sponsorship%20Inquiry"
          className="font-bold text-2xl underline"
        >
          Become a Sponsor
        </a>
        <a
          href="https://static.mlh.io/docs/mlh-code-of-conduct.pdft"
          className="font-bold text-2xl underline"
        >
          Code of Conduct
        </a>
      </div>
      <form
        className="relative flex items-center text-sm"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Sign up for our newsletter!"
          className="py-2 px-4 pr-20 rounded-lg text-black bg-white w-xl"
          name="email"
          ref={audioThresholdRef}
        />
        <Button
          className="absolute right-2 bg-[#350001]"
          type="submit"
          size="sm"
        >
          Submit
        </Button>
      </form>
      {inputMessage && <p className="text-sm text-slate-300">{inputMessage}</p>}
    </div>
  );
};

export default Contact;
