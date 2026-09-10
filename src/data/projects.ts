// ============================================================
// DADOS DOS PROJETOS
// ============================================================
// Edite este arquivo para adicionar, remover ou atualizar projetos.
// Para projetos sem repositório público, deixe repoUrl como undefined.
// Para projetos sem demo, deixe liveUrl como undefined.
// ============================================================

import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Moderno",
    description:
      "Plataforma completa de e-commerce com carrinho de compras, integração de pagamentos via Stripe e painel de administração.",
    shortDescription:
      "E-commerce com Next.js, Tailwind CSS e Stripe.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Prisma"],
    category: "fullstack",
    liveUrl: "https://demo.exemplo.com", 
    repoUrl: "https://github.com/johndoe/projeto", 
    featured: true,
  },
  {
    id: "2",
    title: "Dashboard Analítico B2B",
    description:
      "Dashboard para gestão de métricas e KPIs com gráficos interativos e exportação de relatórios em PDF. Desenvolvido para agências de marketing.",
    shortDescription:
      "Dashboard B2B com métricas, gráficos interativos e exportação de PDF.",
    stack: ["React", "TypeScript", "Recharts", "Node.js", "PostgreSQL"],
    category: "fullstack",
    liveUrl: "https://demo.exemplo.com",
    featured: true,
  },
  {
    id: "3",
    title: "API RESTful para Logística",
    description:
      "API backend para rastreamento de frotas em tempo real, com websockets, cache no Redis e arquitetura de microsserviços.",
    shortDescription:
      "API de rastreamento logístico com websockets e Redis.",
    stack: ["Node.js", "Express", "Redis", "PostgreSQL", "Docker"],
    category: "backend",
    featured: true,
  },
  {
    id: "4",
    title: "Blog com Headless CMS",
    description:
      "Blog otimizado para SEO com geração de páginas estáticas (SSG), integrado ao Sanity CMS para fácil gestão de conteúdo.",
    shortDescription:
      "Blog rápido otimizado para SEO usando Headless CMS.",
    stack: ["Next.js", "Sanity CMS", "Tailwind CSS"],
    category: "frontend",
    repoUrl: "https://github.com/johndoe/projeto",
    featured: false,
  },
  {
    id: "5",
    title: "Sistema ERP — Cliente Confidencial",
    description:
      "Sistema de gestão interna (ERP) desenvolvido sob medida. Conta com módulos de RH, financeiro e controle de estoque. Tecnologias modernas para garantir segurança e escalabilidade.",
    shortDescription:
      "Sistema ERP sob medida. Arquitetura protegida por contrato de confidencialidade (NDA).",
    stack: ["React", "Node.js", "TypeScript", "MongoDB"],
    category: "fullstack",
    featured: false,
    confidential: true,
  },
];

// Projetos em destaque (exibidos primeiro na seção de projetos)
export const featuredProjects = projects.filter((p) => p.featured);
