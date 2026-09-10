import { siteConfig } from "@/config/site.config";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Resume() {
  if (!siteConfig.resume.enabled) return null;

  return (
    <section
      id="curriculo"
      className="section-padding"
      style={{ backgroundColor: "var(--color-navy-950)" }}
    >
      <div className="container-custom">
        <SectionHeader
          label="// currículo"
          title="Meu Currículo"
          subtitle="Baixe meu currículo completo com experiências, formação e projetos."
          centered
        />

        <div className="flex flex-col items-center gap-6">
          <div className="card-surface w-full max-w-md p-8 text-center flex flex-col items-center gap-4">
            {/* Ícone de documento */}
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: "rgba(245, 158, 11, 0.12)" }}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                style={{ color: "var(--color-amber-500)" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>

            <div>
              <p
                className="font-bold text-lg"
                style={{ color: "var(--color-slate-100)" }}
              >
                {siteConfig.name}
              </p>
              <p className="text-sm mt-1" style={{ color: "var(--color-slate-400)" }}>
                Currículo — PDF
              </p>
            </div>

            <a
              href={`/${siteConfig.resume.filename}`}
              download
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105 hover:brightness-110 shadow-lg"
              style={{
                backgroundColor: "var(--color-amber-500)",
                color: "var(--color-navy-900)",
                boxShadow: "0 4px 20px rgba(245, 158, 11, 0.3)",
              }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              {siteConfig.resume.label}
            </a>
          </div>

          <p className="text-sm" style={{ color: "var(--color-slate-500)" }}>
            Prefere entrar em contato direto?{" "}
            <a
              href="#contato"
              className="underline underline-offset-2 hover:text-amber-400 transition-colors"
              style={{ color: "var(--color-amber-500)" }}
            >
              Use o formulário abaixo.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
