import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Security headers aplicados em todas as rotas
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Previne o site de ser embutido em iframes (clickjacking)
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          // Previne MIME type sniffing
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // Controla referrer em navegação cross-origin
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // Permissions Policy — desabilita features desnecessárias
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
          // Content Security Policy
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              // Scripts: próprio domínio + inline necessário para Next.js
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              // Estilos: próprio domínio + inline necessário para Tailwind
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              // Fontes: Google Fonts
              "font-src 'self' https://fonts.gstatic.com",
              // Imagens: próprio domínio + data URIs
              "img-src 'self' data: https:",
              // Conexões: próprio domínio + Resend API
              "connect-src 'self' https://api.resend.com",
              // Frames: nenhum
              "frame-src 'none'",
              // Objetos: nenhum
              "object-src 'none'",
              // Base URI: apenas próprio domínio
              "base-uri 'self'",
              // Form action: apenas próprio domínio
              "form-action 'self'",
            ].join("; "),
          },
          // HSTS — força HTTPS (habilitar só em produção com domínio próprio)
          // {
          //   key: "Strict-Transport-Security",
          //   value: "max-age=63072000; includeSubDomains; preload",
          // },
        ],
      },
    ];
  },

  // Imagens externas permitidas (adicione domínios conforme necessário)
  images: {
    remotePatterns: [
      // Exemplo: { protocol: "https", hostname: "github.com" }
    ],
  },
};

export default nextConfig;
