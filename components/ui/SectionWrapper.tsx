interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  innerClassName?: string;
}

export default function SectionWrapper({
  children,
  id,
  className = "",
  innerClassName = "",
}: SectionWrapperProps) {
  return (
    <section id={id} className={`py-12 sm:py-16 md:py-24 lg:py-32 ${className}`}>
      <div className={`mx-auto max-w-6xl px-5 sm:px-6 md:px-10 ${innerClassName}`}>
        {children}
      </div>
    </section>
  );
}
