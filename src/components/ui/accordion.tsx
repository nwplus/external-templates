"use client";

import { cn } from "@/lib/utils";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import * as React from "react";
import { MinusIcon, PlusIcon } from "lucide-react";
import Image from "next/image";

interface AccordionTriggerProps
  extends React.ComponentProps<typeof AccordionPrimitive.Trigger> {
  variant?: "faq" | "hero";
}

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={className}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  variant = "faq",
  ...props
}: AccordionTriggerProps) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start  gap-4 rounded-md py-4 text-left text-sm transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50",
          className,
          variant == "faq" &&
            "[&[data-state=open]_.plus-icon]:hidden [&[data-state=open]_.minus-icon]:block justify-between"
        )}
        {...props}
      >
        {variant == "hero" && (
          <>
            <Image
              src="/assets/hero/arrow.svg"
              alt="Arrow"
              className="arrow-right pointer-events-none my-auto transition-all duration-200"
              width={16}
              height={16}
            />
          </>
        )}
        {children}
        {variant == "faq" && (
          <>
            <PlusIcon className="plus-icon text-[#FFD700] pointer-events-none size-4 shrink-0 translate-y-0.5 transition-all duration-200" />
            <MinusIcon className="minus-icon text-[#FFD700] pointer-events-none size-4 shrink-0 translate-y-0.5 transition-all duration-200 hidden" />
          </>
        )}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
