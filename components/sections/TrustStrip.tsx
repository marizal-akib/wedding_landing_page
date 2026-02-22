import { trustStrip } from "@/lib/content/weddingLanding";

export default function TrustStrip() {
  return (
    <div className="bg-ivory-dark border-y border-ivory-dark/80">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-5">
        <ul className="flex flex-wrap items-center justify-center gap-x-0 gap-y-3">
          {trustStrip.map((item, i) => (
            <li key={item} className="flex items-center">
              <span className="font-sans text-xs md:text-sm text-charcoal-soft uppercase tracking-widest px-6">
                {item}
              </span>
              {i < trustStrip.length - 1 && (
                <span
                  className="hidden sm:block h-4 w-px bg-charcoal/20"
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
