import Link from "next/link";

type ButtonVariant = "primary" | "ghost" | "ghost-light";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  external?: boolean;
  className?: string;
  /** For WhatsApp CTAs: adds analytics attributes */
  whatsAppCta?: { intent: string; location: string; ariaLabel?: string };
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-amber text-warm-dark border border-amber hover:bg-amber-dark hover:border-amber-dark",
  ghost:
    "bg-transparent text-amber border border-amber hover:bg-amber hover:text-warm-dark",
  "ghost-light":
    "bg-transparent text-ivory border border-ivory/60 hover:bg-ivory hover:text-warm-dark",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-xs tracking-widest",
  md: "px-7 py-3.5 text-sm tracking-widest min-h-[48px]",
  lg: "px-9 py-4 text-sm tracking-widest min-h-[48px]",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  className = "",
  whatsAppCta,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center font-sans font-medium uppercase transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-amber focus:ring-offset-2 focus:ring-offset-warm-dark ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...(whatsAppCta
          ? {
              "data-whatsapp-cta": "",
              "data-cta-intent": whatsAppCta.intent,
              "data-cta-location": whatsAppCta.location,
              ...(whatsAppCta.ariaLabel && { "aria-label": whatsAppCta.ariaLabel }),
            }
          : {})}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
