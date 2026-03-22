interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeading({ title, subtitle, light }: SectionHeadingProps) {
  return (
    <div className="text-center mb-12">
      {/* Decorative rosette */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <span className="h-px w-12 bg-gold/40" />
        <svg width="20" height="20" viewBox="0 0 20 20" className="text-gold">
          <path
            fill="currentColor"
            d="M10 0l2.24 6.47L20 6.47l-5.53 4.22L16.71 20 10 15.28 3.29 20l2.24-9.31L0 6.47l7.76 0z"
          />
        </svg>
        <span className="h-px w-12 bg-gold/40" />
      </div>
      <h2
        className={`font-heading text-3xl sm:text-4xl font-bold mb-3 ${
          light ? "text-white" : "text-purple"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`max-w-2xl mx-auto text-base sm:text-lg leading-relaxed ${
            light ? "text-white/80" : "text-gray-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
