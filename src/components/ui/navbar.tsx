import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-25">
      <div className="flex gap-15 px-3 py-6 text-[1.3rem] font-extrabold">
        <a href="/about" className="">
          About
        </a>
        <a href="/about" className="">
          Our Events
        </a>
        <a href="/contact" className="">
          Recap
        </a>
        <a href="/blog" className="">
          Stats
        </a>
        <a href="/blog" className="">
          Testimonials
        </a>
        <a href="/blog" className="">
          10 Years
        </a>
        <a href="/blog" className="">
          FAQ
        </a>
        <a href="/blog" className="">
          Sponsors
        </a>
      </div>
      <div>
        <Image
          src="/assets/heropage/portal.svg"
          alt="logo"
          className="w-[160px] h-[60px]"
          width={120}
          height={40}
          priority
        />
      </div>
    </div>
  );
}
