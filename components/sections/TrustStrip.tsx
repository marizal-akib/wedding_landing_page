import { trustStrip } from "@/lib/content/weddingLanding";

export default function TrustStrip() {
  return (
    <div className="bg-ivory-dark border-y border-ivory-dark/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10 py-4 sm:py-5">
        {/* Mobile: horizontal scroll with snap */}
        <ul className="flex sm:flex-wrap overflow-x-auto flex-nowrap sm:overflow-visible sm:flex-row gap-x-0 gap-y-2 sm:gap-y-3 items-center justify-start sm:justify-center snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
          {trustStrip.map((item, i) => (
            <li key={item} className="flex items-center flex-shrink-0 sm:flex-shrink snap-center first:pl-0 last:pr-0">
              <span className="font-sans text-xs md:text-sm text-charcoal-soft uppercase tracking-widest px-4 sm:px-6">
                {item}
              </span>
              {i < trustStrip.length - 1 && (
                <span
                  className="hidden sm:block h-4 w-px bg-charcoal/20 flex-shrink-0"
                  aria-hidden
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
