"use client";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  return (
    <div className="border-b border-ivory-dark">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-serif text-lg md:text-xl text-charcoal pr-6">
          {question}
        </span>
        <span
          className={`flex-shrink-0 flex h-7 w-7 items-center justify-center border border-amber/40 text-amber transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
          aria-hidden
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <line x1="7" y1="0" x2="7" y2="14" />
            <line x1="0" y1="7" x2="14" y2="7" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-60 pb-5" : "max-h-0"
        }`}
      >
        <p className="font-sans text-base text-charcoal-soft leading-relaxed pr-10">
          {answer}
        </p>
      </div>
    </div>
  );
}
