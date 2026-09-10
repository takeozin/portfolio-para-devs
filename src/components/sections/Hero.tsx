import { siteConfig } from "@/config/site.config";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-12 overflow-hidden"
    >
      {/* Fundo decorativo: gradiente radial */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(245,158,11,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Grid decorativo sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--color-slate-400) 1px, transparent 1px), linear-gradient(90deg, var(--color-slate-400) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Conteúdo */}
      <div className="relative z-10 container-custom text-center flex flex-col items-center gap-6">
        {/* Label de status */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium border"
          style={{
            backgroundColor: "rgba(245, 158, 11, 0.08)",
            borderColor: "rgba(245, 158, 11, 0.25)",
            color: "var(--color-amber-400)",
          }}
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: "var(--color-amber-500)" }}
          />
          Disponível para novos projetos
        </div>

        {/* Nome */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none">
          <span style={{ color: "var(--color-slate-100)" }}>
            {siteConfig.name.split(" ")[0]}{" "}
          </span>
          <span className="text-gradient-amber">
            {siteConfig.name.split(" ").slice(1).join(" ")}
          </span>
        </h1>

        {/* Cargo */}
        <p
          className="text-lg sm:text-xl font-mono font-medium max-w-2xl leading-relaxed"
          style={{ color: "var(--color-slate-400)" }}
        >
          {siteConfig.role}
        </p>

        {/* Frase de posicionamento */}
        <p
          className="text-xl sm:text-2xl font-medium max-w-xl leading-snug"
          style={{ color: "var(--color-slate-200)" }}
        >
          &ldquo;{siteConfig.tagline}&rdquo;
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a
            href="#contato"
            className="px-8 py-3 rounded-xl font-semibold text-base transition-all duration-200 hover:scale-105 shadow-lg hover:brightness-110"
            style={{
              backgroundColor: "var(--color-amber-500)",
              color: "var(--color-navy-900)",
              boxShadow: "0 4px 20px rgba(245, 158, 11, 0.3)",
            }}
          >
            Entrar em Contato
          </a>

          {siteConfig.resume.enabled && (
            <a
              href={`/${siteConfig.resume.filename}`}
              download
              className="px-8 py-3 rounded-xl font-semibold text-base transition-all duration-200 hover:scale-105 border flex items-center gap-2 hover:border-amber-500 hover:text-amber-400"
              style={{
                backgroundColor: "transparent",
                borderColor: "var(--color-navy-700)",
                color: "var(--color-slate-200)",
              }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {siteConfig.resume.label}
            </a>
          )}
        </div>

        {/* Links rápidos de redes sociais */}
        <div className="flex items-center gap-4 mt-2">
          <a
            href={siteConfig.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-amber-400"
            style={{ color: "var(--color-slate-500)" }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href={siteConfig.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-amber-400"
            style={{ color: "var(--color-slate-500)" }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            aria-label="E-mail"
            className="transition-colors hover:text-amber-400"
            style={{ color: "var(--color-slate-500)" }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#sobre"
        aria-label="Ir para seção sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce"
        style={{ color: "var(--color-slate-600)" }}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}
