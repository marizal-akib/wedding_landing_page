"use client";

import { useState } from "react";
import { faqItems } from "@/lib/content/weddingLanding";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AccordionItem from "@/components/ui/AccordionItem";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionWrapper id="faq" className="bg-ivory-dark">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="block h-px w-8 bg-amber/60" />
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-amber">
              FAQ
            </span>
            <span className="block h-px w-8 bg-amber/60" />
          </div>
          <h2 className="font-serif font-light text-charcoal text-[clamp(1.5rem,4vw,3rem)] md:text-4xl lg:text-5xl">
            Common Questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="border-t border-ivory-dark/80">
          {faqItems.map((item, i) => (
            <AccordionItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
