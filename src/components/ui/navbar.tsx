import { Button } from "./button";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-25 mt-10">
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
      <Button className="bg-blue-300 z-10 w-[160px] h-[60px] rounded-xl text-xl font-bold ">
        Live Portal
      </Button>
    </div>
  );
}
