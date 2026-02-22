import { hero } from "@/lib/content/weddingLanding";
import { buildWhatsAppUrl, WHATSAPP_INTENTS } from "@/lib/whatsapp";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-warm-dark pt-16 md:pt-20">
      {/* Fullscreen background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
      />

      {/* Dark overlay to keep text legible */}
      <div
        className="absolute inset-0 bg-black/50"
        aria-hidden
      />

      {/* Warm tinted overlay layer - subtle golden glow */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,_rgba(196,154,60,0.12)_0%,_rgba(196,154,60,0.06)_40%,_transparent_70%)]"
        aria-hidden
      />

      {/* Subtle vignette */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(0,0,0,0.4)_100%)]"
        aria-hidden
      />

      {/* Thin decorative horizontal rule */}
      <div
        className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber/20 to-transparent pointer-events-none"
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center justify-center mb-6 sm:mb-8">
          <span className="font-sans text-sm uppercase tracking-[0.3em] text-amber/90">
            London Wedding Photographer & Filmmaker
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-italianno font-normal text-ivory text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15] tracking-wide sm:tracking-normal mb-6 sm:mb-8">
          {hero.headline}
        </h1>

        {/* Divider */}
        <div className="mb-6 sm:mb-8" />

        {/* Subheadline */}
        <p className="font-sans font-light text-ivory/70 text-base md:text-lg max-w-2xl leading-relaxed mb-8 sm:mb-12">
          {hero.subheadline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 sm:mb-20">
          <Button
            href={buildWhatsAppUrl(WHATSAPP_INTENTS.availability)}
            variant="primary"
            size="lg"
            external
            whatsAppCta={{
              intent: WHATSAPP_INTENTS.availability,
              location: "hero",
              ariaLabel: "Check availability on WhatsApp",
            }}
          >
            Check Availability
          </Button>
          <Button
            href={buildWhatsAppUrl(WHATSAPP_INTENTS.general)}
            variant="ghost-light"
            size="lg"
            external
            whatsAppCta={{
              intent: WHATSAPP_INTENTS.general,
              location: "hero",
              ariaLabel: "Chat on WhatsApp",
            }}
          >
            Chat on WhatsApp
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50 z-10">
        <span className="font-sans text-xs uppercase tracking-[0.2em] text-ivory/50">
          Scroll
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-ivory/50"
        >
          <polyline points="2,6 8,12 14,6" />
        </svg>
      </div>
    </section>
  );
}
