import { siteConfig } from "@/config/site.config";
import SectionHeader from "@/components/ui/SectionHeader";

export default function About() {
  const { about } = siteConfig;

  return (
    <section id="sobre" className="section-padding">
      <div className="container-custom">
        <div className="section-divider mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Texto */}
          <div>
            <SectionHeader
              label="// sobre mim"
              title="Quem sou eu"
              subtitle="Um pouco sobre minha trajetória e o que me motiva."
            />

            <div className="flex flex-col gap-5">
              {about.paragraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className="leading-relaxed"
                  style={{ color: "var(--color-slate-300)" }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 font-semibold transition-colors hover:text-amber-400"
                style={{ color: "var(--color-amber-500)" }}
              >
                Vamos conversar
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Destaques / Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {about.highlights.map((highlight) => (
              <div
                key={highlight.label}
                className="card-surface p-6 text-center lg:text-left"
              >
                <p
                  className="text-4xl font-extrabold mb-1"
                  style={{ color: "var(--color-amber-400)" }}
                >
                  {highlight.value}
                </p>
                <p
                  className="text-sm font-medium"
                  style={{ color: "var(--color-slate-400)" }}
                >
                  {highlight.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
