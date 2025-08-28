"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Minus, Plus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSection {
  title: string;
  items: FaqItem[];
}

const Comet = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="252"
    height="226"
    viewBox="0 0 252 226"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_d_2_2)">
      <path
        d="M222.995 189.831C223.619 190.203 224.166 190.657 224.61 191.175L225 191.499L224.901 191.542C225.473 192.329 225.821 193.239 225.869 194.216C226.024 197.374 222.996 200.035 219.105 200.161C216.243 200.254 213.712 198.947 212.513 196.992L212.5 196.999L26 26L222.995 189.831Z"
        fill="url(#paint0_linear_2_2)"
        shapeRendering="crispEdges"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_2_2"
        x="0.299999"
        y="0.299999"
        width="251.275"
        height="225.566"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="12.85" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.902376 0 0 0 0 0.647167 0 0 0 0 0.340917 0 0 0 0.5 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_2_2"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_2_2"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_2_2"
        x1="72.735"
        y1="65.8951"
        x2="163.6"
        y2="223.091"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFF0DD" stopOpacity="0" />
        <stop offset="1" stopColor="#EBC798" />
      </linearGradient>
    </defs>
  </svg>
);

const Firefly = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="55"
    height="56"
    viewBox="0 0 65 66"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_d_4_6)">
      <ellipse
        cx="7.04801"
        cy="5.7246"
        rx="7.04801"
        ry="5.7246"
        transform="matrix(-0.520391 0.853928 -0.862513 -0.506036 41.2104 29.7939)"
        fill="url(#paint0_radial_4_6)"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_4_6"
        x="0.75407"
        y="0.534676"
        width="63.7022"
        height="64.7618"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="12.85" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.902376 0 0 0 0 0.647167 0 0 0 0 0.340917 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_4_6"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_4_6"
          result="shape"
        />
      </filter>
      <radialGradient
        id="paint0_radial_4_6"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(7.04801 5.7246) rotate(90) scale(5.7246 7.04801)"
      >
        <stop stopColor="#FFF0DD" />
        <stop offset="1" stopColor="#EBC798" />
      </radialGradient>
    </defs>
  </svg>
);

const Faq = () => {
  const faqData: FaqSection[] = [
    {
      title: "General",
      items: [
        {
          question: "What is HackCamp?",
          answer:
            "HackCamp is a beginner-friendly hackathon designed to introduce newcomers to the world of coding and technology. It's a supportive environment where participants can learn, build, and showcase their first projects.",
        },
        {
          question: "When and where is HackCamp being held?",
          answer:
            "HackCamp will be held on [Date] at [Location]. Please check our official website for the most up-to-date information about timing and venue details.",
        },
        {
          question: "Will the entire event be recorded?",
          answer:
            "Portions of the event may be recorded for documentation and promotional purposes. Participants will be notified of any recording activities, and we respect privacy preferences.",
        },
        {
          question: "Who can participate in HackCamp?",
          answer:
            "HackCamp is open to all skill levels, with a special focus on beginners. Whether you're a complete beginner or have some experience, you're welcome to join and learn.",
        },
        {
          question: "What if I've never been to a hackathon before?",
          answer:
            "Perfect! HackCamp is specifically designed for first-time hackers. We provide mentorship, workshops, and resources to help you get started and feel comfortable throughout the event.",
        },
        {
          question:
            "I'm not sure if I've done a hackathon — what counts as one?",
          answer:
            "A hackathon is any event where you build a project within a set timeframe, usually 24-48 hours. If you're unsure, you're probably in the right place! HackCamp welcomes all experience levels.",
        },
        {
          question: "Do I need to attend Learn Day AND Build Night?",
          answer:
            "While we recommend attending both for the full experience, you can choose to attend either Learn Day or Build Night based on your schedule and interests.",
        },
        {
          question: "I've registered/RSVPed but I can no longer attend!",
          answer:
            "Please let us know as soon as possible if you can't attend. This helps us plan better and potentially offer your spot to someone on the waitlist.",
        },
      ],
    },
    {
      title: "Projects",
      items: [
        {
          question: "How do teams work?",
          answer:
            "Teams typically consist of 2-4 people with diverse skills. We'll help facilitate team formation during the event, or you can come with pre-formed teams.",
        },
        {
          question: "When can I start hacking?",
          answer:
            "Official hacking begins during Build Night. However, you can start brainstorming and planning your project ideas anytime!",
        },
        {
          question: "What about prizes?",
          answer:
            "We have various prizes for different categories including Best Beginner Project, Most Creative Solution, and more. All participants receive swag and certificates.",
        },
        {
          question: "How many prizes can my team win?",
          answer:
            "Teams can win multiple prizes if their project excels in different categories. However, the main prizes are typically limited to one per team.",
        },
        {
          question: "Can I submit/work on previous projects?",
          answer:
            "Projects should be built during the hackathon timeframe. You can use existing libraries and frameworks, but the core project should be new work.",
        },
        {
          question:
            "Can I submit projects from hackathons other than HackCamp?",
          answer:
            "No, submissions should be projects created specifically during HackCamp. This ensures fairness and aligns with the learning objectives of the event.",
        },
        {
          question: "Can I submit a prototype? e.g Figma, website builders",
          answer:
            "Yes! Prototypes, mockups, and proof-of-concepts are welcome. We value the learning process and creative thinking behind your ideas.",
        },
      ],
    },
  ];

  return (
    <div className="relative text-white flex flex-col items-center min-h-screen w-full bg-[radial-gradient(circle,#0C182B_15%,#0B1526_50%,#0B101C_80%)]">
      <div className="flex flex-col px-32 pt-16 pb-28 gap-8 w-full z-10">
        <h1 className="font-title text-6xl text-center">FAQ</h1>

        <div className="flex justify-center gap-28">
          {faqData.map((section) => (
            <div key={section.title} className="flex flex-col gap-6 basis-1/2">
              <h2 className="font-title text-3xl text-center">
                {section.title}
              </h2>

              <Accordion type="multiple" className="flex flex-col gap-4">
                {section.items.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`${section.title}-${index}`}
                  >
                    <AccordionTrigger className="text-lg">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="leading-loose text-slate-300">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>

      {/* Left side graphics */}
      <Comet className="absolute -top-[4rem] -left-[10rem] opacity-10 rotate-6" />
      <Comet className="absolute top-[3rem] -left-[9rem] opacity-30 rotate-6" />
      <Firefly className="absolute bottom-[18rem] left-[4rem]" />
      <Firefly className="absolute bottom-[11rem] left-[0rem]" />
      <Firefly className="absolute bottom-[2rem] left-[5rem]" />

      {/* Right side graphics */}
      <Comet className="absolute top-[10rem] -right-[10rem] opacity-10 -scale-x-100" />
      <Comet className="absolute top-[17rem] -right-[9rem] rotate-6 -scale-x-100" />
      <Firefly className="absolute bottom-[6rem] right-[8rem]" />
      <Firefly className="absolute bottom-[6rem] right-[2rem]" />
      <Firefly className="absolute bottom-0 right-[8rem]" />
    </div>
  );
};

export default Faq;
