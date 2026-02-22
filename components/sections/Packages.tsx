import { packages } from "@/lib/content/weddingLanding";
import { buildWhatsAppUrl, WHATSAPP_INTENTS } from "@/lib/whatsapp";

export default function Packages() {
  return (
    <section id="packages" className="bg-warm-dark py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Price callout */}
          <div className="flex flex-col gap-8">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="block h-px w-8 bg-amber/60" />
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-amber">
                {packages.eyebrow}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-serif font-light text-ivory text-3xl md:text-4xl">
                {packages.heading}
              </h2>
              <p className="font-serif text-6xl md:text-7xl text-amber">
                {packages.startingFrom}
              </p>
            </div>

            <div className="w-10 h-px bg-amber/40" />

            <p className="font-sans font-light text-ivory/60 text-base leading-relaxed">
              {packages.note}
            </p>

            <a
              href={buildWhatsAppUrl(WHATSAPP_INTENTS.pricing)}
              target="_blank"
              rel="noopener noreferrer"
              data-whatsapp-cta
              data-cta-intent={WHATSAPP_INTENTS.pricing}
              data-cta-location="packages"
              aria-label="Request full pricing guide on WhatsApp"
              className="inline-flex items-center gap-3 bg-amber text-warm-dark px-8 py-4 font-sans text-sm font-medium uppercase tracking-widest hover:bg-amber-dark transition-colors duration-200 self-start focus:outline-none focus:ring-2 focus:ring-amber focus:ring-offset-2 focus:ring-offset-warm-dark"
            >
              Request Full Pricing Guide
            </a>
          </div>

          {/* Right: Custom options */}
          <div className="border border-white/10 p-8 md:p-10">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-amber/80 mb-8">
              Custom Packages Available For
            </p>

            <ul className="flex flex-col gap-5">
              {packages.customOptions.map((option) => (
                <li
                  key={option}
                  className="flex items-center gap-4 pb-5 border-b border-white/10 last:border-0 last:pb-0"
                >
                  <span className="flex-shrink-0 flex h-8 w-8 items-center justify-center border border-amber/30">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-amber"
                    >
                      <polyline points="1,6 4.5,9.5 11,2.5" />
                    </svg>
                  </span>
                  <span className="font-serif text-xl text-ivory/80">
                    {option}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
