import { processSteps } from "@/lib/content/weddingLanding";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function HowItWorks() {
  return (
    <SectionWrapper id="process" className="bg-ivory-dark">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-10 sm:mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="block h-px w-8 bg-amber/60" />
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-amber">
            How It Works
          </span>
          <span className="block h-px w-8 bg-amber/60" />
        </div>
        <h2 className="font-serif font-light text-charcoal text-3xl md:text-4xl lg:text-5xl">
          From Enquiry to Delivery
        </h2>
      </div>

      {/* Steps grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {processSteps.map((step, i) => (
          <div key={step.step} className="relative flex flex-col gap-5">
            {/* Connector line (desktop only, not last item) */}
            {i < processSteps.length - 1 && (
              <div
                className="hidden lg:block absolute top-5 left-[calc(100%_-_12px)] w-full h-px bg-amber/20 z-0"
                aria-hidden
              />
            )}

            {/* Number */}
            <div className="relative z-10 flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center border border-amber/40 bg-ivory">
                <span className="font-serif text-lg text-amber leading-none">
                  {step.step}
                </span>
              </div>
              <div className="flex-1 h-px bg-amber/20 lg:hidden" />
            </div>

            {/* Title */}
            <h3 className="font-serif text-xl md:text-2xl text-charcoal">
              {step.title}
            </h3>

            {/* Description */}
            <p className="font-sans text-sm text-charcoal-soft leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
