// ─── CTA Intent → Message Mapping ─────────────────────────────────────────
// One message per intent. Keep short and actionable.

export const WHATSAPP_INTENTS = {
  availability: "availability",
  bookCall: "bookCall",
  pricing: "pricing",
  preWeddingShoot: "preWeddingShoot",
  portfolio: "portfolio",
  general: "general",
} as const;

export type WhatsAppIntent = (typeof WHATSAPP_INTENTS)[keyof typeof WHATSAPP_INTENTS];

export const WHATSAPP_MESSAGES: Record<WhatsAppIntent, string> = {
  [WHATSAPP_INTENTS.availability]:
    "Hi, I'd like to check availability for my wedding date.",
  [WHATSAPP_INTENTS.bookCall]:
    "Hi, I'd like to book a call for the wedding package.",
  [WHATSAPP_INTENTS.pricing]:
    "Hi, can you send me your full wedding pricing guide?",
  [WHATSAPP_INTENTS.preWeddingShoot]:
    "Hi, I'd like to enquire about a pre-wedding or engagement shoot.",
  [WHATSAPP_INTENTS.portfolio]:
    "Hi, I'd like to view your wedding portfolio and know more about your style.",
  [WHATSAPP_INTENTS.general]:
    "Hi, I'd like to get in touch about wedding photography.",
};
