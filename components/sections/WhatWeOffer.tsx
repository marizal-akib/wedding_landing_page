import { offerings } from "@/lib/content/weddingLanding";
import SectionWrapper from "@/components/ui/SectionWrapper";

const icons = [
  // Camera
  <svg key="photo" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>,
  // Film
  <svg key="video" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
    <line x1="7" y1="2" x2="7" y2="22" />
    <line x1="17" y1="2" x2="17" y2="22" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <line x1="2" y1="7" x2="7" y2="7" />
    <line x1="2" y1="17" x2="7" y2="17" />
    <line x1="17" y1="17" x2="22" y2="17" />
    <line x1="17" y1="7" x2="22" y2="7" />
  </svg>,
  // Star / full coverage
  <svg key="full" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>,
];

export default function WhatWeOffer() {
  return (
    <SectionWrapper id="services" className="bg-ivory-dark">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-10 sm:mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="block h-px w-8 bg-amber/60" />
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-amber">
            What We Offer
          </span>
          <span className="block h-px w-8 bg-amber/60" />
        </div>
        <h2 className="font-serif font-light text-charcoal text-[clamp(1.5rem,4vw,3rem)] md:text-4xl lg:text-5xl">
          Coverage Crafted for Every Couple
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {offerings.map((offer, i) => (
          <div
            key={offer.title}
            className="bg-ivory border border-ivory-dark/80 p-6 sm:p-8 flex flex-col gap-6 group hover:border-amber/30 transition-colors duration-300"
          >
            {/* Top accent + icon */}
            <div className="flex flex-col gap-4">
              <div className="w-full h-px bg-gradient-to-r from-amber/60 to-transparent" />
              <span className="text-amber">{icons[i]}</span>
            </div>

            {/* Title */}
            <h3 className="font-serif text-xl md:text-2xl text-charcoal">
              {offer.title}
            </h3>

            {/* Bullets */}
            <ul className="flex flex-col gap-3">
              {offer.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-3 font-sans text-base sm:text-sm text-charcoal-soft leading-relaxed"
                >
                  <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-amber" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
