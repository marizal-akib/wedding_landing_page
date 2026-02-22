import Image from "next/image";
import { timelineSteps } from "@/lib/content/weddingLanding";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function CoverageTimeline() {
  return (
    <SectionWrapper className="bg-ivory">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-10 sm:mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="block h-px w-8 bg-amber/60" />
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-amber">
            A Day in Our Lens
          </span>
          <span className="block h-px w-8 bg-amber/60" />
        </div>
        <h2 className="font-serif font-light text-charcoal text-[clamp(1.5rem,4vw,3rem)] md:text-4xl lg:text-5xl">
          Every Moment, Beautifully Covered
        </h2>
      </div>

      {/* Desktop: horizontal timeline */}
      <div className="hidden md:flex gap-4">
        {timelineSteps.map((step) => (
          <div key={step.label} className="flex-1 flex flex-col items-center text-center gap-4">
            {/* Image */}
            <div className="relative w-full aspect-[3/4] overflow-hidden">
              <Image
                src={step.image}
                alt={step.label}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1280px) 20vw, 256px"
              />
            </div>

            {/* Time */}
            <span className="font-sans text-xs uppercase tracking-widest text-amber">
              {step.time}
            </span>

            {/* Label */}
            <h3 className="font-serif text-lg text-charcoal leading-tight">
              {step.label}
            </h3>
          </div>
        ))}
      </div>

      {/* Mobile: vertical timeline */}
      <div className="md:hidden flex flex-col gap-6 sm:gap-8">
        {timelineSteps.map((step) => (
          <div key={step.label} className="flex flex-col gap-3">
            {/* Image */}
            <div className="relative w-full aspect-video overflow-hidden">
              <Image
                src={step.image}
                alt={step.label}
                fill
                className="object-cover object-top"
                sizes="100vw"
              />
            </div>

            <span className="font-sans text-xs uppercase tracking-widest text-amber">
              {step.time}
            </span>
            <h3 className="font-serif text-xl text-charcoal">{step.label}</h3>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
