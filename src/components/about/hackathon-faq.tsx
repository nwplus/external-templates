import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  HACKATHON_BENEFITS,
  HACKATHON_BENEFITS_QUESTION,
  HACKATHON_DESCRIPTION,
  HACKATHON_TITLE,
  MEDIUM_ARTICLE_URL,
} from "@/constants/about";

import { AccordionIcon } from "./accordion-icon";

/** "What is a hackathon?" copy + benefits accordion, shared by desktop and mobile. */
export const HackathonFaq = ({ className }: { className?: string }) => (
  <div className={className}>
    <h2 className="font-title text-6xl">{HACKATHON_TITLE}</h2>
    <p className="text-lg">{HACKATHON_DESCRIPTION}</p>
    <Accordion type="single" collapsible>
      <AccordionItem value="benefits">
        <AccordionTrigger
          variant="hero"
          icon={<AccordionIcon />}
          className="text-lg items-center"
        >
          {HACKATHON_BENEFITS_QUESTION}
        </AccordionTrigger>
        <AccordionContent>
          <ul className="list-disc pl-6 space-y-1 text-lg">
            {HACKATHON_BENEFITS.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    <p className="text-lg">
      To learn more about hackathons and what to expect, check out our article
      on{" "}
      <a
        href={MEDIUM_ARTICLE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:opacity-80 transition-opacity"
      >
        Medium
      </a>
      .
    </p>
  </div>
);
