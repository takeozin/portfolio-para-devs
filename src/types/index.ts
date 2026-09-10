// ============================================================
// TIPOS COMPARTILHADOS DO PORTFÓLIO
// ============================================================

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  stack: string[];
  category: "fullstack" | "frontend" | "backend" | "ia-automacao";
  liveUrl?: string;
  repoUrl?: string;
  imageUrl?: string;
  featured: boolean;
  confidential?: boolean; // true = sem link externo, descrição apenas de alto nível
}

export interface Skill {
  name: string;
  level?: "básico" | "intermediário" | "avançado";
}

export interface SkillCategory {
  id: string;
  label: string;
  icon: string;
  items: Skill[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  _gotcha?: string; // honeypot anti-spam
}

export interface NavLink {
  label: string;
  href: string;
}
