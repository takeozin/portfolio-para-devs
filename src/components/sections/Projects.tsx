import { projects } from "@/data/projects";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projetos" className="section-padding">
      <div className="container-custom">
        <div className="section-divider mb-16" />

        <SectionHeader
          label="// projetos"
          title="Projetos em Destaque"
          subtitle="Uma seleção de trabalhos que demonstram minha abordagem e stack técnico."
        />

        {/* Projetos em destaque */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Outros projetos */}
        {others.length > 0 && (
          <>
            <h3
              className="mt-14 mb-6 text-lg font-semibold"
              style={{ color: "var(--color-slate-300)" }}
            >
              Outros projetos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {others.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
