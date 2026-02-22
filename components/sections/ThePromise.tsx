import { promise } from "@/lib/content/weddingLanding";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function ThePromise() {
  return (
    <SectionWrapper className="bg-ivory">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6 sm:mb-10">
          <span className="block h-px w-8 bg-amber/60" />
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-amber">
            {promise.eyebrow}
          </span>
          <span className="block h-px w-8 bg-amber/60" />
        </div>

        {/* Heading */}
        <h2 className="font-serif font-light text-charcoal text-[clamp(1.5rem,4vw,3rem)] md:text-4xl lg:text-5xl leading-snug mb-8 sm:mb-12 whitespace-pre-line">
          {promise.heading}
        </h2>

        {/* Thin amber rule */}
        <div className="w-10 h-px bg-amber mb-8 sm:mb-12" />

        {/* Body paragraphs */}
        <div className="flex flex-col gap-4 sm:gap-6">
          {promise.paragraphs.map((p, i) => (
            <p
              key={i}
              className="font-sans font-light text-charcoal-soft text-base md:text-lg leading-relaxed"
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
