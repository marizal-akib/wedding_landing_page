// ─── WhatsApp CTA Module ────────────────────────────────────────────────────

export { WHATSAPP_PHONE, getWhatsAppBaseUrl } from "./config";
export { WHATSAPP_INTENTS, WHATSAPP_MESSAGES, type WhatsAppIntent } from "./messages";
export { buildWhatsAppUrl } from "./utils";
export { trackWhatsAppCta, type CtaLocation } from "./analytics";
