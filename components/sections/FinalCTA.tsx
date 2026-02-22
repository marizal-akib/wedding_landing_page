import { finalCTA, WA_AVAILABILITY, WA_CALL } from "@/lib/content/weddingLanding";

export default function FinalCTA() {
  return (
    <section className="relative bg-warm-dark py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Dark overlay for depth */}
      <div
        className="absolute inset-0 bg-black/20"
        aria-hidden
      />
      {/* Background radial glow - subtle amber warmth */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_50%,_rgba(196,154,60,0.08)_0%,_rgba(196,154,60,0.04)_35%,_transparent_70%)]"
        aria-hidden
      />

      {/* Decorative lines */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber/30 to-transparent"
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber/30 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 md:px-10 flex flex-col items-center text-center gap-6 sm:gap-8 md:gap-10">
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <span className="block h-px w-8 bg-amber/60" />
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-amber">
            Let&apos;s Begin
          </span>
          <span className="block h-px w-8 bg-amber/60" />
        </div>

        {/* Heading */}
        <h2 className="font-serif font-light text-ivory text-3xl md:text-5xl lg:text-6xl leading-snug">
          {finalCTA.heading}
        </h2>

        {/* Subheading */}
        <p className="font-italianno text-2xl sm:text-3xl md:text-4xl text-amber leading-tight">
          {finalCTA.subheading}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
          <a
            href={WA_AVAILABILITY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-amber text-warm-dark px-9 py-4 font-sans text-sm font-medium uppercase tracking-widest hover:bg-amber-dark transition-colors duration-200"
          >
            Check Availability
          </a>
          <a
            href={WA_CALL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-transparent text-ivory border border-ivory/40 px-9 py-4 font-sans text-sm font-medium uppercase tracking-widest hover:bg-ivory hover:text-warm-dark transition-colors duration-200"
          >
            Book a Call
          </a>
        </div>

        {/* Reassurance */}
        <p className="font-sans text-xs text-ivory/50 tracking-wide">
          No pressure. No commitment. Just a friendly conversation.
        </p>
      </div>
    </section>
  );
}
