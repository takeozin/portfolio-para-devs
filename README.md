# portfolio-para-devs

Template de portfólio profissional para desenvolvedores Full Stack — construído com **Next.js**, **TypeScript** e **Tailwind CSS**.

> **Design 100% config-driven:** edite apenas `src/config/site.config.ts` e os arquivos em `src/data/` para personalizar completamente o portfólio. Nenhum dado pessoal está hardcoded nos componentes.

---

## Stack

- **Framework:** Next.js 16+ (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS v4
- **Validação:** Zod
- **E-mail (formulário de contato):** Resend

---

## Primeiros passos

### 1. Clone o repositório

```bash
git clone https://github.com/SEU_USUARIO/portfolio-para-devs.git
cd portfolio-para-devs
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

```bash
cp .env.example .env.local
```

Edite `.env.local` com suas credenciais. Veja o [.env.example](.env.example) para descrição de cada variável.

### 4. Rode o servidor de desenvolvimento

```bash
npm run dev
```

Acesse `http://localhost:3000`.

---

## Como personalizar

Toda a personalização é feita em **3 arquivos** — os componentes não precisam ser tocados:

### `src/config/site.config.ts`
Dados pessoais globais do portfólio:

- Nome, cargo e frase de posicionamento
- Texto da seção "Sobre mim" (parágrafos + destaques numéricos)
- E-mail, telefone, LinkedIn, GitHub
- Configurações de SEO (title, description, keywords, Open Graph)
- Links da navbar
- Configurações do botão de download do currículo

### `src/data/projects.ts`
Lista de projetos exibidos na seção de portfólio:

- `title`, `shortDescription`, `description` — textos do card
- `stack` — array de strings com as tecnologias usadas
- `liveUrl` e `repoUrl` — opcionais; omitir = nenhum link é exibido
- `featured: true` — projeto aparece na grade principal
- `confidential: true` — exibe badge 🔒 e oculta links automaticamente

### `src/data/skills.ts`
Competências técnicas organizadas por categoria:

- Cada categoria tem `id`, `label`, `icon` (emoji) e `items[]`
- Cada item tem `name` e `level` (`básico` | `intermediário` | `avançado`)
- Adicione, remova ou reordene categorias e itens livremente

### Currículo (PDF)

Coloque seu arquivo em `public/cv.pdf` (o nome é configurável em `site.config.ts` → `resume.filename`).
Para ocultar o botão de download, defina `resume.enabled: false`.

---

## Estrutura de pastas

```
src/
├── config/
│   └── site.config.ts      ← ✏️ dados pessoais, SEO, navegação
├── data/
│   ├── projects.ts          ← ✏️ seus projetos
│   └── skills.ts            ← ✏️ suas competências
├── app/
│   ├── layout.tsx           # root layout + metadados (lê de site.config.ts)
│   ├── page.tsx             # página principal (monta as seções)
│   ├── globals.css          # variáveis CSS e utilitários globais
│   └── api/
│       └── contact/
│           └── route.ts     # API de contato (Resend, validação, rate limit, honeypot)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # navegação sticky com menu mobile
│   │   └── Footer.tsx       # rodapé com links de redes sociais
│   ├── sections/
│   │   ├── Hero.tsx         # nome, cargo, tagline, CTAs
│   │   ├── About.tsx        # bio e destaques numéricos
│   │   ├── Skills.tsx       # grade de competências por categoria
│   │   ├── Projects.tsx     # cards de projetos (destaque + outros)
│   │   ├── Resume.tsx       # botão de download do currículo
│   │   └── Contact.tsx      # formulário + dados de contato direto
│   └── ui/
│       ├── ProjectCard.tsx  # card reutilizável de projeto
│       ├── SkillBadge.tsx   # badge de tecnologia com nível
│       ├── SectionHeader.tsx# título padronizado de seção
│       └── ScrollToTop.tsx  # botão flutuante de retorno ao topo
├── lib/
│   ├── validations.ts       # schemas Zod para o formulário
│   └── rate-limit.ts        # rate limiting por IP (5 req / 10 min)
└── types/
    └── index.ts             # interfaces TypeScript compartilhadas
```

---

## Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run start` | Inicia o servidor de produção |
| `npm run lint` | Linting com ESLint |
| `npm run typecheck` | Verificação de tipos sem build |

---

## Formulário de contato

O formulário usa a [API do Resend](https://resend.com) para envio de e-mails. Sem backend extra — apenas uma API Route do Next.js (`/api/contact`).

**Proteções implementadas:**
- Validação server-side com Zod (nome, e-mail, mensagem)
- Campo honeypot oculto para bloquear bots
- Rate limiting por IP: 5 requisições a cada 10 minutos

Para ativar, defina as variáveis `RESEND_API_KEY`, `CONTACT_EMAIL_TO` e `CONTACT_EMAIL_FROM` no `.env.local`.

---

## Segurança

- `RESEND_API_KEY` e demais chaves ficam **exclusivamente em variáveis server-side** — nunca expostas no bundle do frontend
- `.env*` está no `.gitignore` — apenas `.env.example` é versionado
- Security headers configurados em `next.config.ts`: `Content-Security-Policy`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`

---

## Licença

MIT
