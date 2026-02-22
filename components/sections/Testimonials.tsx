import { testimonials } from "@/lib/content/weddingLanding";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function Testimonials() {
  return (
    <SectionWrapper className="bg-ivory">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="block h-px w-8 bg-amber/60" />
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-amber">
            Testimonials
          </span>
          <span className="block h-px w-8 bg-amber/60" />
        </div>
        <h2 className="font-serif font-light text-charcoal text-3xl md:text-4xl lg:text-5xl">
          What Couples Say
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.author}
            className="relative bg-ivory-dark border border-ivory-dark/80 p-8 flex flex-col gap-6"
          >
            {/* Large quote mark */}
            <span
              className="absolute top-4 right-6 font-serif text-7xl text-amber/15 leading-none select-none pointer-events-none"
              aria-hidden
            >
              &ldquo;
            </span>

            {/* Stars */}
            <div className="flex gap-1" aria-label="5 stars">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="currentColor"
                  className="text-amber"
                >
                  <path d="M6 1l1.5 3.1L11 4.6l-2.5 2.4.6 3.4L6 8.8l-3.1 1.6.6-3.4L1 4.6l3.5-.5L6 1z" />
                </svg>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="font-serif italic text-lg text-charcoal leading-relaxed">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex flex-col gap-0.5 mt-auto pt-4 border-t border-ivory-dark/80">
              <span className="font-sans text-sm font-medium text-charcoal">
                {t.author}
              </span>
              <span className="font-sans text-xs text-charcoal-soft">
                {t.detail}
              </span>
              {t.placeholder && (
                <span className="font-sans text-xs text-amber/50 mt-1">
                  (Placeholder — real testimonial coming soon)
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
