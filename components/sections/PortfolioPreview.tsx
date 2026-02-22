"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { portfolio } from "@/lib/content/weddingLanding";
import SectionWrapper from "@/components/ui/SectionWrapper";

function useVisibleCount() {
  const [visibleCount, setVisibleCount] = useState(1);
  useEffect(() => {
    const mq = (w: number) => window.matchMedia(`(min-width: ${w}px)`);
    const update = () => {
      if (mq(768).matches) setVisibleCount(3);
      else if (mq(640).matches) setVisibleCount(2);
      else setVisibleCount(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return visibleCount;
}

export default function PortfolioPreview() {
  const { videoEmbedUrl, images } = portfolio;
  const visibleCount = useVisibleCount();

  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const prev = () => setCurrent((i) => (i - 1 + images.length) % images.length);
  const next = () => setCurrent((i) => (i + 1) % images.length);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const lightboxPrev = useCallback(
    () => setLightboxIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );
  const lightboxNext = useCallback(
    () => setLightboxIndex((i) => (i + 1) % images.length),
    [images.length]
  );

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") lightboxPrev();
      if (e.key === "ArrowRight") lightboxNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen, lightboxPrev, lightboxNext]);

  return (
    <SectionWrapper id="portfolio" className="bg-ivory-dark">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="block h-px w-8 bg-amber/60" />
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-amber">
            Portfolio
          </span>
          <span className="block h-px w-8 bg-amber/60" />
        </div>
        <h2 className="font-serif font-light text-charcoal text-[clamp(1.5rem,4vw,3rem)] md:text-4xl lg:text-5xl mb-4">
          Moments We&apos;ve Captured
        </h2>
        <p className="font-sans text-sm text-charcoal-soft max-w-md">
          A glimpse into the stories we&apos;ve had the privilege of telling.
        </p>
      </div>

      {/* ── Video Highlight ── */}
      <div className="relative w-full aspect-video bg-warm-dark mb-10 overflow-hidden">
        {videoEmbedUrl ? (
          <iframe
            src={videoEmbedUrl}
            className="absolute inset-0 w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Wedding Highlight Film"
          />
        ) : (
          /* Placeholder while video URL is not yet set */
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-warm-dark">
            <div className="flex h-20 w-20 items-center justify-center border-2 border-amber/50 bg-black/30">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-amber ml-1"
              >
                <polygon points="5,3 22,12 5,21" />
              </svg>
            </div>
            <p className="font-sans text-xs uppercase tracking-widest text-ivory/50">
              Highlight Film Coming Soon
            </p>
          </div>
        )}
      </div>

      {/* ── Image Carousel ── */}
      <div className="relative">
        {/* Cards */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${(current * 100) / visibleCount}%)` }}
          >
            {images.map((img, i) => (
              <div
                key={img.src}
                className="flex-none w-full sm:w-1/2 md:w-1/3 px-2 cursor-pointer group"
                onClick={() => openLightbox(i)}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.label}
                    fill
                    quality={100}
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Hover label */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end p-4 opacity-0 group-hover:opacity-100">
                    <span className="font-sans text-xs uppercase tracking-widest text-ivory">
                      {img.label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prev / Next arrows - visible on sm+ */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center border border-amber/40 bg-ivory hover:bg-amber/10 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-charcoal">
            <polyline points="10,2 4,8 10,14" />
          </svg>
        </button>
        <button
          onClick={next}
          aria-label="Next"
          className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center border border-amber/40 bg-ivory hover:bg-amber/10 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-charcoal">
            <polyline points="6,2 12,8 6,14" />
          </svg>
        </button>
      </div>

      {/* Dot indicators - touch-friendly tap area (min 24px) */}
      <div className="flex justify-center gap-0.5 sm:gap-2 mt-4 sm:mt-6 flex-wrap">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="p-2 min-w-[28px] min-h-[28px] flex items-center justify-center rounded-full"
          >
            <span
              className={`block rounded-full transition-all duration-300 flex-shrink-0 ${
                i === current ? "w-6 h-1.5 bg-amber" : "w-1.5 h-1.5 bg-amber/30"
              }`}
            />
          </button>
        ))}
      </div>

      {/* ── Lightbox ── */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Image */}
          <div
            className="relative w-full max-w-4xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[3/4] sm:aspect-video w-full">
                <Image
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].label}
                fill
                quality={100}
                className="object-contain"
                sizes="100vw"
              />
            </div>
            {/* Label */}
            <p className="text-center font-sans text-xs uppercase tracking-widest text-ivory/60 mt-3">
              {images[lightboxIndex].label}
            </p>
          </div>

          {/* Close */}
          <button
            onClick={closeLightbox}
            aria-label="Close"
            className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center border border-white/20 text-white/70 hover:text-white hover:border-white/60 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="2" y1="2" x2="14" y2="14" />
              <line x1="14" y1="2" x2="2" y2="14" />
            </svg>
          </button>

          {/* Lightbox prev */}
          <button
            onClick={(e) => { e.stopPropagation(); lightboxPrev(); }}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center border border-white/20 text-white/70 hover:text-white hover:border-white/60 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polyline points="10,2 4,8 10,14" />
            </svg>
          </button>

          {/* Lightbox next */}
          <button
            onClick={(e) => { e.stopPropagation(); lightboxNext(); }}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center border border-white/20 text-white/70 hover:text-white hover:border-white/60 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polyline points="6,2 12,8 6,14" />
            </svg>
          </button>

          {/* Counter */}
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 font-sans text-xs text-white/40 tracking-widest">
            {lightboxIndex + 1} / {images.length}
          </p>
        </div>
      )}
    </SectionWrapper>
  );
}
