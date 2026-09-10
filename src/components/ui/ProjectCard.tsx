import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const hasLink = project.liveUrl || project.repoUrl;

  return (
    <article
      className="card-surface flex flex-col gap-4 p-6 transition-all duration-300 hover:-translate-y-1 group"
      style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.3)" }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <h3
            className="text-lg font-semibold transition-colors group-hover:text-amber-400"
            style={{ color: "var(--color-slate-100)" }}
          >
            {project.title}
          </h3>
          {project.confidential && (
            <span
              className="text-xs font-mono px-2 py-0.5 rounded mt-1 inline-block"
              style={{
                backgroundColor: "rgba(100, 116, 139, 0.15)",
                color: "var(--color-slate-500)",
                border: "1px solid rgba(100, 116, 139, 0.2)",
              }}
            >
              🔒 confidencial
            </span>
          )}
        </div>

        {/* Links externos */}
        {hasLink && (
          <div className="flex items-center gap-2 shrink-0">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Repositório GitHub de ${project.title}`}
                className="p-2 rounded-lg transition-colors hover:text-amber-500"
                style={{ color: "var(--color-slate-400)" }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Demo ao vivo de ${project.title}`}
                className="p-2 rounded-lg transition-colors hover:text-amber-500"
                style={{ color: "var(--color-slate-400)" }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        )}
      </div>

      {/* Descrição */}
      <p
        className="text-sm leading-relaxed flex-1"
        style={{ color: "var(--color-slate-400)" }}
      >
        {project.shortDescription}
      </p>

      {/* Stack */}
      <div
        className="flex flex-wrap gap-2 mt-auto pt-2 border-t"
        style={{ borderColor: "var(--color-navy-700)" }}
      >
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-1 rounded font-mono"
            style={{
              backgroundColor: "rgba(245, 158, 11, 0.08)",
              color: "var(--color-amber-400)",
              border: "1px solid rgba(245, 158, 11, 0.2)",
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
