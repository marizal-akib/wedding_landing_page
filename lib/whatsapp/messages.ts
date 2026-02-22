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
    "Hi Daniel lawani team, I hope you're well. We'd love to check your availability for our wedding date.",
  [WHATSAPP_INTENTS.bookCall]:
    "Hi Daniel lawani team, we'd love to book a quick call to discuss wedding coverage and see if we're the right fit.",
  [WHATSAPP_INTENTS.pricing]:
    "Hi Daniel lawani team, could you please share your full wedding pricing guide and package options?",
  [WHATSAPP_INTENTS.preWeddingShoot]:
    "Hi Daniel lawani team, we're interested in a pre-wedding / engagement shoot. Could you share availability and pricing?",
  [WHATSAPP_INTENTS.portfolio]:
    "Hi Daniel lawani team, I'd love to view more of your wedding portfolio and learn more about your style.",
  [WHATSAPP_INTENTS.general]:
    "Hi Daniel lawani team, We'd love to check your availability for our wedding date.",
};
