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
  md: "px-7 py-3.5 text-sm tracking-widest",
  lg: "px-9 py-4 text-sm tracking-widest",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  className = "",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center font-sans font-medium uppercase transition-all duration-200 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
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
