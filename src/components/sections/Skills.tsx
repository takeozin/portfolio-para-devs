import { skills } from "@/data/skills";
import SectionHeader from "@/components/ui/SectionHeader";
import SkillBadge from "@/components/ui/SkillBadge";

export default function Skills() {
  return (
    <section
      id="competencias"
      className="section-padding"
      style={{ backgroundColor: "var(--color-navy-950)" }}
    >
      <div className="container-custom">
        <SectionHeader
          label="// competências"
          title="Stack Técnico"
          subtitle="Tecnologias e ferramentas que uso no dia a dia para entregar produtos de qualidade."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((category) => (
            <div key={category.id} className="card-surface p-6 flex flex-col gap-4">
              {/* Header da categoria */}
              <div className="flex items-center gap-2">
                <span className="text-2xl" role="img" aria-label={category.label}>
                  {category.icon}
                </span>
                <h3
                  className="font-bold text-base"
                  style={{ color: "var(--color-slate-100)" }}
                >
                  {category.label}
                </h3>
              </div>

              {/* Divisor */}
              <div
                className="h-px w-full"
                style={{ backgroundColor: "var(--color-navy-700)" }}
              />

              {/* Skills */}
              <ul className="flex flex-col gap-2" role="list">
                {category.items.map((skill) => (
                  <li key={skill.name}>
                    <SkillBadge name={skill.name} level={skill.level} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legenda de níveis */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <span
            className="text-xs font-medium"
            style={{ color: "var(--color-slate-500)" }}
          >
            Legenda:
          </span>
          {(["básico", "intermediário", "avançado"] as const).map((level) => (
            <SkillBadge key={level} name={level} level={level} />
          ))}
        </div>
      </div>
    </section>
  );
}
