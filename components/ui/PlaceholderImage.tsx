interface PlaceholderImageProps {
  aspectRatio?: string;
  label?: string;
  tone?: "warm" | "dark" | "mid";
  className?: string;
}

const toneStyles: Record<string, string> = {
  warm: "bg-gradient-to-br from-[#E8DDD0] via-[#D4C4B0] to-[#C8B898]",
  dark: "bg-gradient-to-br from-[#2E2820] via-[#3A3028] to-[#2A2218]",
  mid: "bg-gradient-to-br from-[#C4B8A8] via-[#B8A898] to-[#A89880]",
};

export default function PlaceholderImage({
  aspectRatio = "aspect-[4/3]",
  label,
  tone = "warm",
  className = "",
}: PlaceholderImageProps) {
  return (
    <div
      className={`relative w-full overflow-hidden ${aspectRatio} ${toneStyles[tone]} ${className}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-30">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className={tone === "dark" ? "text-ivory" : "text-warm-dark"}
        >
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
        {label && (
          <span
            className={`font-sans text-xs uppercase tracking-widest ${
              tone === "dark" ? "text-ivory" : "text-warm-dark"
            }`}
          >
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
