interface SkillBadgeProps {
  name: string;
  level?: "básico" | "intermediário" | "avançado";
}

const levelColors: Record<string, { bg: string; text: string; border: string }> = {
  avançado: {
    bg: "rgba(245, 158, 11, 0.12)",
    text: "var(--color-amber-400)",
    border: "rgba(245, 158, 11, 0.3)",
  },
  intermediário: {
    bg: "rgba(30, 58, 95, 0.6)",
    text: "var(--color-slate-200)",
    border: "var(--color-navy-700)",
  },
  básico: {
    bg: "rgba(15, 32, 64, 0.8)",
    text: "var(--color-slate-400)",
    border: "var(--color-navy-700)",
  },
};

export default function SkillBadge({ name, level }: SkillBadgeProps) {
  const colors = level ? levelColors[level] : levelColors["intermediário"];

  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105"
      style={{
        backgroundColor: colors.bg,
        color: colors.text,
        border: `1px solid ${colors.border}`,
      }}
      title={level ? `Nível: ${level}` : undefined}
    >
      {name}
    </span>
  );
}
