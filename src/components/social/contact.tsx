import Facebook from "./facebook";
import Instagram from "./instagram";
import Linkedin from "./linkedin";
import Medium from "./medium";
import Youtube from "./youtube";

const Contact = () => {
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
      <div className="relative flex items-center text-sm">
        <input
          type="text"
          placeholder="Sign up for our newsletter!"
          className="py-2 px-4 pr-20 rounded-lg text-black bg-white w-xl"
        />
        <button className="font-semibold absolute right-2 bg-[#350001] text-white py-1.5 px-6 rounded-md text-xs">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
