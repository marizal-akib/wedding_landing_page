// ─── WhatsApp CTA Analytics ─────────────────────────────────────────────────
// Fires to GA4, Vercel Analytics, or no-ops if not configured.
// Add gtag or va to your layout when ready.

import type { WhatsAppIntent } from "./messages";

export type CtaLocation =
  | "hero"
  | "header"
  | "packages"
  | "preWeddingShoot"
  | "finalCTA"
  | "footer";

export function trackWhatsAppCta(intent: WhatsAppIntent, location: CtaLocation): void {
  if (typeof window === "undefined") return;

  // Google Analytics 4
  if (typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === "function") {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", "whatsapp_cta_click", {
      cta_intent: intent,
      cta_location: location,
    });
  }

  // Vercel Analytics
  if (typeof (window as unknown as { va?: { track: (name: string, data?: Record<string, unknown>) => void } }).va?.track === "function") {
    (window as unknown as { va: { track: (name: string, data?: Record<string, unknown>) => void } }).va.track("WhatsApp CTA", {
      intent,
      location,
    });
  }
}
