interface SectionHeaderProps {
  label?: string;     // label pequena acima do título (ex: "// sobre")
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {label && (
        <span
          className="inline-block text-sm font-mono font-medium mb-3"
          style={{ color: "var(--color-amber-500)" }}
        >
          {label}
        </span>
      )}
      <h2
        className="text-3xl sm:text-4xl font-bold tracking-tight"
        style={{ color: "var(--color-slate-100)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="mt-3 text-lg max-w-2xl"
          style={{
            color: "var(--color-slate-400)",
            marginLeft: centered ? "auto" : undefined,
            marginRight: centered ? "auto" : undefined,
          }}
        >
          {subtitle}
        </p>
      )}
      <div
        className="mt-4 h-1 w-12 rounded-full"
        style={{
          background: "linear-gradient(to right, var(--color-amber-500), var(--color-amber-600))",
          marginLeft: centered ? "auto" : undefined,
          marginRight: centered ? "auto" : undefined,
        }}
      />
    </div>
  );
}
