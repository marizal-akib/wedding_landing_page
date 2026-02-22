// ─── WhatsApp URL Builder ───────────────────────────────────────────────────
// Uses encodeURIComponent for correct URL encoding of message text.

import { getWhatsAppBaseUrl } from "./config";
import { WHATSAPP_MESSAGES, type WhatsAppIntent } from "./messages";

export function buildWhatsAppUrl(intent: WhatsAppIntent, messageOverride?: string): string {
  const message = messageOverride ?? WHATSAPP_MESSAGES[intent];
  const encoded = encodeURIComponent(message);
  return `${getWhatsAppBaseUrl()}?text=${encoded}`;
}
