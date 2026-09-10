// ============================================================
// DADOS DE COMPETÊNCIAS TÉCNICAS
// ============================================================
// Edite este arquivo para personalizar suas habilidades.
// Organize por categoria, adicionando ou removendo skills.
// ============================================================

import type { SkillCategory } from "@/types";

export const skills: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    icon: "🖥️",
    items: [
      { name: "React", level: "avançado" },
      { name: "Next.js", level: "avançado" },
      { name: "TypeScript", level: "avançado" },
      { name: "Tailwind CSS", level: "avançado" },
      { name: "Framer Motion", level: "intermediário" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: "⚙️",
    items: [
      { name: "Node.js", level: "avançado" },
      { name: "Express", level: "avançado" },
      { name: "NestJS", level: "intermediário" },
      { name: "PostgreSQL", level: "intermediário" },
      { name: "MongoDB", level: "avançado" },
    ],
  },
  {
    id: "devops-cloud",
    label: "DevOps & Cloud",
    icon: "☁️",
    items: [
      { name: "Docker", level: "intermediário" },
      { name: "AWS", level: "básico" },
      { name: "Vercel", level: "avançado" },
      { name: "GitHub Actions", level: "intermediário" },
    ],
  },
  {
    id: "ferramentas",
    label: "Ferramentas",
    icon: "🛠️",
    items: [
      { name: "Git & GitHub", level: "avançado" },
      { name: "Figma", level: "intermediário" },
      { name: "Jest / Testing", level: "intermediário" },
    ],
  },
];
