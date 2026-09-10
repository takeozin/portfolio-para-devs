// ============================================================
// ARQUIVO DE CONFIGURAÇÃO CENTRAL DO PORTFÓLIO
// ============================================================
// Edite APENAS este arquivo para personalizar todo o conteúdo
// do site: dados pessoais, links, SEO e configurações gerais.
// Os componentes React leem daqui — nada está hardcoded neles.
// ============================================================

export const siteConfig = {
  // ----- Informações Pessoais -----
  name: "John Doe",
  role: "Desenvolvedor Full Stack | React & Next.js | Node.js",
  tagline:
    "Transformo ideias complexas em produtos digitais escaláveis — com código limpo e foco no usuário.",

  // Texto da seção "Sobre Mim" (suporta múltiplos parágrafos)
  about: {
    paragraphs: [
      "Sou um desenvolvedor Full Stack com foco em criar soluções eficientes e sustentáveis para negócios. Combino experiência em desenvolvimento web moderno com arquiteturas robustas de backend.",
      "Trabalho com ecossistema JavaScript (React, Next.js, Node.js, TypeScript) para criar aplicações rápidas e otimizadas. Sou apaixonado por resolver problemas difíceis de forma simples.",
      "Acredito em código limpo, testes automatizados e boa comunicação para entregar o melhor valor aos clientes e equipes com quem trabalho.",
    ],
    // Destaques rápidos exibidos como cards/badges na seção
    highlights: [
      { label: "Anos de experiência", value: "5+" },
      { label: "Projetos entregues", value: "20+" },
      { label: "Foco principal", value: "SaaS & Web Apps" },
    ],
  },

  // ----- Contato -----
  contact: {
    email: "john@example.com", // Substitua pelo seu e-mail
    phone: "+55 (11) 99999-9999", // Substitua pelo seu telefone
    linkedin: "https://linkedin.com/in/johndoe", // Substitua pela sua URL
    github: "https://github.com/johndoe", // Substitua pela sua URL
  },

  // ----- Currículo -----
  resume: {
    // Caminho relativo ao diretório /public
    // Coloque seu PDF em public/cv.pdf e ajuste o nome se necessário
    filename: "cv.pdf",
    // Exibir botão de download? false = oculta a seção de currículo
    enabled: true,
    label: "Download do Currículo",
  },

  // ----- SEO & Metadados -----
  seo: {
    title: "John Doe — Desenvolvedor Full Stack",
    description:
      "Portfólio de John Doe, Desenvolvedor Full Stack especializado em React, Next.js e Node.js.",
    keywords: [
      "desenvolvedor full stack",
      "react",
      "next.js",
      "typescript",
      "node.js",
      "javascript",
      "web",
      "portfolio",
    ],
    // URL do seu site (sem barra final)
    // Em produção, use process.env.NEXT_PUBLIC_SITE_URL
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://johndoe.dev",
    // Imagem Open Graph (coloque em /public/og-image.png)
    ogImage: "/og-image.png",
  },

  // ----- Navegação -----
  nav: {
    links: [
      { label: "Sobre", href: "#sobre" },
      { label: "Competências", href: "#competencias" },
      { label: "Projetos", href: "#projetos" },
      { label: "Currículo", href: "#curriculo" },
      { label: "Contato", href: "#contato" },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;

