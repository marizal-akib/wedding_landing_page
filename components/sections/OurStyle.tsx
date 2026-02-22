import Image from "next/image";
import { styleSection } from "@/lib/content/weddingLanding";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function OurStyle() {
  return (
    <SectionWrapper className="bg-ivory-dark">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
        {/* Style Preview image */}
        <div className="relative aspect-[3/4] overflow-hidden mb-8 lg:mb-0">
          {styleSection.stylePreviewImage ? (
            <Image
              src={styleSection.stylePreviewImage}
              alt="Style Preview"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          ) : (
            <div className="absolute inset-0 bg-amber/10 flex items-center justify-center">
              <span className="font-sans text-sm uppercase tracking-widest text-charcoal/40">
                Style Preview
              </span>
            </div>
          )}
          {/* Decorative offset border */}
          <div className="absolute -bottom-4 -right-4 w-full h-full border border-amber/20 pointer-events-none" />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-6 sm:gap-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="block h-px w-8 bg-amber/60" />
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-amber">
              {styleSection.eyebrow}
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-serif font-light text-charcoal text-[clamp(1.5rem,4vw,3rem)] md:text-4xl lg:text-5xl leading-snug">
            {styleSection.heading}
          </h2>

          {/* Divider */}
          <div className="w-10 h-px bg-amber" />

          {/* Blend bullets */}
          <div className="flex flex-col gap-3">
            <p className="font-sans text-xs uppercase tracking-widest text-charcoal-soft mb-1">
              We blend
            </p>
            {styleSection.blends.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-2 flex-shrink-0 w-1 h-1 rounded-full bg-amber" />
                <span className="font-sans text-base text-charcoal-soft leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Closing lines */}
          <div className="flex flex-col gap-1 pt-2">
            {styleSection.closing.map((line, i) => (
              <p
                key={i}
                className={`font-serif text-xl md:text-2xl ${
                  i === styleSection.closing.length - 1
                    ? "text-charcoal"
                    : "text-charcoal-soft italic"
                }`}
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
