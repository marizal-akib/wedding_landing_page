import Image from "next/image";
import { preWedding, WA_AVAILABILITY } from "@/lib/content/weddingLanding";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

export default function PreWeddingShoot() {
  return (
    <SectionWrapper className="bg-ivory">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
        {/* Text */}
        <div className="flex flex-col gap-6 sm:gap-8 order-2 lg:order-1">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="block h-px w-8 bg-amber/60" />
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-amber">
              {preWedding.eyebrow}
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-serif font-light text-charcoal text-3xl md:text-4xl lg:text-5xl leading-snug">
            {preWedding.heading}
          </h2>

          {/* Divider */}
          <div className="w-10 h-px bg-amber" />

          {/* Bullets */}
          <ul className="flex flex-col gap-4">
            {preWedding.bullets.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 flex-shrink-0 w-1 h-1 rounded-full bg-amber" />
                <span className="font-sans text-base text-charcoal-soft leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* Tagline */}
          <p className="font-serif italic text-xl text-charcoal-soft leading-relaxed border-l-2 border-amber/40 pl-5">
            {preWedding.tagline}
          </p>

          <Button href={WA_AVAILABILITY} variant="ghost" size="md" external className="self-start">
            Enquire About a Shoot
          </Button>
        </div>

        {/* Image */}
        <div className="relative order-1 lg:order-2 aspect-[4/5] overflow-hidden mb-8 lg:mb-0">
          {preWedding.image ? (
            <Image
              src={preWedding.image}
              alt="Engagement session"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          ) : (
            <div className="absolute inset-0 bg-amber/10 flex items-center justify-center">
              <span className="font-sans text-sm uppercase tracking-widest text-charcoal/40">
                Engagement Session
              </span>
            </div>
          )}
          {/* Decorative offset border */}
          <div className="absolute -top-4 -left-4 w-full h-full border border-amber/20 pointer-events-none" />
        </div>
      </div>
    </SectionWrapper>
  );
}
