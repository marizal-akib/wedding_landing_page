// ─── WhatsApp Configuration ──────────────────────────────────────────────
// Phone number in international format: [country code][number]
// No +, spaces, or leading zeros.

export const WHATSAPP_PHONE = "447459130661";

// Basic validation: UK numbers are 44 + 10 digits = 12 chars
const UK_PHONE_REGEX = /^44\d{10}$/;

if (!UK_PHONE_REGEX.test(WHATSAPP_PHONE)) {
  console.warn(
    "[whatsapp/config] Phone number may be invalid. Expected UK format: 44 + 10 digits."
  );
}

export function getWhatsAppBaseUrl(): string {
  return `https://wa.me/${WHATSAPP_PHONE}`;
}
