"use client";

import { useEffect } from "react";
import { trackWhatsAppCta } from "@/lib/whatsapp/analytics";
import type { WhatsAppIntent } from "@/lib/whatsapp/messages";
import type { CtaLocation } from "@/lib/whatsapp/analytics";

export default function WhatsAppAnalyticsHandler() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("[data-whatsapp-cta]");
      if (!target) return;

      const intent = target.getAttribute("data-cta-intent") as WhatsAppIntent | null;
      const location = target.getAttribute("data-cta-location") as CtaLocation | null;

      if (intent && location) {
        trackWhatsAppCta(intent, location);
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
