// ─── Types ─────────────────────────────────────────────────────────────────

export type Offering = {
  title: string;
  bullets: string[];
};

export type TimelineStep = {
  time: string;
  label: string;
  image: string;
};

export type ProcessStep = {
  step: number;
  title: string;
  description: string;
};

export type TrustPoint = {
  icon: string;
  label: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  detail: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type PackageCustomOption = {
  label: string;
};

// ─── Content ───────────────────────────────────────────────────────────────

export const hero = {
  headline: "Cinematic Wedding Photography & Films in London",
  subheadline:
    "Timeless, emotional storytelling for couples who want more than just coverage  they want a legacy.",
};

export const trustStrip: string[] = [
  "Timeless Weddings Captured",
  "London & Beyond",
  "4.9★ Rated by Couples",
];

export const promise = {
  eyebrow: "Our Promise",
  heading: "Your wedding happens once.\nThe memories should last forever.",
  paragraphs: [
    "We don't just document your day. We craft a cinematic story that lets you relive the emotions — the nerves, the laughter, the vows, the celebration.",
    "From intimate registry ceremonies to full traditional weddings across London, we capture your story with intention, precision, and care.",
  ],
};

export const offerings: Offering[] = [
  {
    title: "Wedding Photography",
    bullets: [
      "250–400+ professionally edited images",
      "Natural tones with a warm, nostalgic finish",
      "Candid + posed portraits",
      "Family and group photography",
      "Private online gallery delivery",
    ],
  },
  {
    title: "Wedding Videography",
    bullets: [
      "1–2 minute cinematic highlight film",
      "20–30 minute documentary-style edit",
      "Professionally captured vows & speeches",
      "Colour-graded, sound-designed storytelling",
      "Delivered digitally in HD",
    ],
  },
  {
    title: "Full Coverage",
    bullets: [
      "Getting ready",
      "Ceremony",
      "Portrait sessions",
      "Reception & speeches",
      "First dance & celebration",
    ],
  },
];

export const timelineSteps: TimelineStep[] = [
  { time: "Morning", label: "Getting Ready", image: "/timeline-getting-ready.jpg" },
  { time: "Midday", label: "The Ceremony", image: "/timeline-ceremony.jpg" },
  { time: "Afternoon", label: "Portraits", image: "/timeline-portraits.jpg" },
  { time: "Evening", label: "Reception & Speeches", image: "/timeline-reception.jpg" },
  { time: "Night", label: "First Dance", image: "/timeline-first-dance.jpg" },
];

export const styleSection = {
  eyebrow: "Our Style",
  heading: "Warm. Nostalgic. Cinematic.",
  stylePreviewImage: "/style-preview-v2.jpg",
  blends: [
    "Natural candid moments",
    "Emotional storytelling",
    "Clean, elegant compositions",
    "Real audio from vows and speeches",
  ],
  closing: ["No awkward staging.", "No forced moments.", "Just your story — beautifully captured."],
};

export const whyTrustUs = {
  eyebrow: "Why Couples Trust Us",
  heading: "We understand that this isn't just an event.",
  statements: ["It's family.", "It's culture.", "It's legacy."],
  points: [
    "We plan thoroughly.",
    "We communicate clearly.",
    "We guide you through portraits.",
    "We anticipate moments before they happen.",
  ],
  closing:
    "You get calm professionals who let you enjoy your day — not worry about it.",
};

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery Call",
    description:
      "We understand your vision, style, traditions, and timeline — so nothing is left to chance.",
  },
  {
    step: 2,
    title: "Planning",
    description:
      "We create a structured coverage plan including key moments, family lists, and portrait flow.",
  },
  {
    step: 3,
    title: "Wedding Day",
    description:
      "We work seamlessly and respectfully — capturing moments without interrupting them.",
  },
  {
    step: 4,
    title: "Delivery",
    description:
      "Preview images within days. Full gallery & film delivered within 3–4 weeks.",
  },
];

export const packages = {
  eyebrow: "Investment",
  heading: "Wedding Coverage starts from",
  startingFrom: "£1,000",
  note: "Every wedding is different — pricing reflects your coverage time, team size, and deliverables.",
  customOptions: [
    "Registry ceremonies",
    "Full traditional weddings",
    "Multi-day events",
    "Pre-wedding shoots",
  ],
};

export const preWedding = {
  eyebrow: "Before the Big Day",
  heading: "Pre-Wedding / Engagement Session",
  image: "/before-the-big-day.jpg",
  bullets: [
    "2–3 hour relaxed session",
    "1–2 beautiful London locations",
    "20 professionally edited images",
  ],
  tagline:
    "Perfect for announcements, invitations, or simply celebrating your journey together before the big day.",
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "We felt completely comfortable from the first call. The final video brought us to tears — it was more than we ever expected.",
    author: "Amara & James",
    detail: "Summer Wedding, East London",
  },
  {
    quote:
      "Every single photo told a story. We keep going back to the gallery — it never gets old. Truly cinematic.",
    author: "Priya & David",
    detail: "Garden Wedding, Surrey",
  },
  {
    quote:
      "The team were so calm and professional. We barely noticed them and yet they captured everything. Magic.",
    author: "Fatima & Michael",
    detail: "Traditional Wedding, North London",
  },
];

export const faqItems: FAQItem[] = [
  {
    question: "How far in advance should we book?",
    answer:
      "Peak season dates (May–November) book quickly. We recommend securing your date as early as possible — often 9–12 months ahead for summer weddings.",
  },
  {
    question: "Do you travel outside London?",
    answer:
      "Yes — we cover London and surrounding areas. Weddings further afield may include a small travel supplement. Just ask and we'll confirm.",
  },
  {
    question: "How do payments work?",
    answer:
      "A 50% deposit secures your date. The remaining balance is due before or on the wedding day. We can discuss flexible arrangements on request.",
  },
  {
    question: "Can we customise a package?",
    answer:
      "Absolutely. Every couple is different, and every wedding is unique. We'll build a package around exactly what you need.",
  },
  {
    question: "When will we receive our photos and film?",
    answer:
      "You'll receive preview images within days of your wedding. Your full gallery and finished film are delivered within 3–4 weeks.",
  },
  {
    question: "Do you photograph both the ceremony and reception?",
    answer:
      "Yes — our full coverage packages cover everything from getting ready through to the evening celebration. We tailor the timeline to your day.",
  },
];

export const portfolio = {
  videoEmbedUrl: "https://player.mux.com/cGkl2WkcOhpSskxgds2wb02Jp9eqeV6o9fkwO1ctflsA",
  images: [
    { src: "/portfolio/portfolio-01.jpg", label: "Dance Floor Close-Up" },
    { src: "/portfolio/portfolio-02.jpg", label: "Bride Portrait" },
    { src: "/portfolio/portfolio-03.jpg", label: "Reception Entertainment" },
    { src: "/portfolio/portfolio-04.jpg", label: "Getting Ready" },
    { src: "/portfolio/portfolio-05.jpg", label: "First Dance" },
    { src: "/portfolio/portfolio-06.jpg", label: "Wedding Party Moment (B&W)" },
    { src: "/portfolio/portfolio-07.jpg", label: "Family Moment (B&W)" },
    { src: "/portfolio/portfolio-08.jpg", label: "Reception Celebration" },
    { src: "/portfolio/portfolio-09.jpg", label: "Couple Portrait" },
    { src: "/portfolio/portfolio-10.jpg", label: "Celebration Kiss (B&W)" },
    { src: "/portfolio/portfolio-11.jpg", label: "Traditional Speech" },
    { src: "/portfolio/portfolio-12.jpg", label: "Guest Celebration" },
    { src: "/portfolio/portfolio-13.jpg", label: "Couple Kiss" },
    { src: "/portfolio/portfolio-14.jpg", label: "Just Married Portrait" },
    { src: "/portfolio/portfolio-15.jpg", label: "Wedding Party Group" },
  ],
};

export const finalCTA = {
  heading: "Your wedding deserves to be remembered properly.",
  subheading: "Let's create something timeless.",
};

export const footer = {
  tagline: "Cinematic wedding photography & films in London.",
  links: [
    { label: "Home", href: "#" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Packages", href: "#packages" },
    { label: "FAQ", href: "#faq" },
  ],
  legal: `© ${new Date().getFullYear()} Daniel lawani. All rights reserved.`,
};
