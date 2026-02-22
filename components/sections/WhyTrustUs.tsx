import { whyTrustUs } from "@/lib/content/weddingLanding";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function WhyTrustUs() {
  return (
    <SectionWrapper className="bg-ivory">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-10">
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <span className="block h-px w-8 bg-amber/60" />
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-amber">
            {whyTrustUs.eyebrow}
          </span>
          <span className="block h-px w-8 bg-amber/60" />
        </div>

        {/* Heading */}
        <h2 className="font-serif font-light text-charcoal text-[clamp(1.5rem,4vw,3rem)] md:text-4xl lg:text-5xl leading-snug">
          {whyTrustUs.heading}
        </h2>

        {/* Emotional statements */}
        <div className="flex flex-col gap-2">
          {whyTrustUs.statements.map((s) => (
            <p key={s} className="font-serif italic text-2xl md:text-3xl text-amber">
              {s}
            </p>
          ))}
        </div>

        {/* Divider */}
        <div className="w-10 h-px bg-amber" />

        {/* Trust points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {whyTrustUs.points.map((point) => (
            <div
              key={point}
              className="flex items-center gap-3 bg-ivory-dark border border-ivory-dark/80 px-6 py-4"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-amber flex-shrink-0"
              >
                <polyline points="2,8 6,12 14,4" />
              </svg>
              <span className="font-sans text-base sm:text-sm text-charcoal-soft leading-relaxed">
                {point}
              </span>
            </div>
          ))}
        </div>

        {/* Closing */}
        <p className="font-serif italic text-xl md:text-2xl text-charcoal-soft leading-relaxed">
          {whyTrustUs.closing}
        </p>
      </div>
    </SectionWrapper>
  );
}
