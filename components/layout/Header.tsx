"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { WA_AVAILABILITY } from "@/lib/content/weddingLanding";

const navLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#process" },
  { label: "Packages", href: "#packages" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-ivory/95 backdrop-blur-sm shadow-sm border-b border-ivory-dark"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-6xl px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="#"
            className={`font-serif text-xl md:text-2xl tracking-[0.2em] uppercase transition-colors duration-300 ${
              scrolled ? "text-charcoal" : "text-ivory"
            }`}
            onClick={closeMenu}
          >
            Wani<span className="text-amber">London</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans text-xs uppercase tracking-widest transition-colors duration-300 hover:text-amber ${
                  scrolled ? "text-charcoal-soft" : "text-ivory/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href={WA_AVAILABILITY}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-amber text-warm-dark px-5 py-2.5 font-sans text-xs font-medium uppercase tracking-widest hover:bg-amber-dark transition-colors duration-200"
          >
            Check Availability
          </a>

          {/* Mobile Hamburger */}
          <button
            className={`md:hidden flex flex-col gap-1.5 p-1 transition-colors duration-300 ${
              scrolled ? "text-charcoal" : "text-ivory"
            }`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-px w-6 bg-current transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-[5px]" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-current transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-current transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-warm-dark/98 transition-all duration-300 flex flex-col justify-center items-center gap-8 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            className="font-serif text-3xl text-ivory hover:text-amber transition-colors duration-200 tracking-wide"
          >
            {link.label}
          </Link>
        ))}
        <a
          href={WA_AVAILABILITY}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
          className="mt-4 bg-amber text-warm-dark px-8 py-4 font-sans text-sm font-medium uppercase tracking-widest hover:bg-amber-dark transition-colors duration-200"
        >
          Check Availability
        </a>
      </div>
    </>
  );
}
