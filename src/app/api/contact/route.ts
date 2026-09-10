import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validations";
import { contactRateLimiter } from "@/lib/rate-limit";

// Resend é instanciado dentro do handler (não no topo do módulo)
// para evitar erros de build quando RESEND_API_KEY não está disponível
// no ambiente de CI/CD ou durante next build sem .env.local

export async function POST(request: Request) {
  // 1. Extrair IP para rate limiting
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown";

  // 2. Verificar rate limit
  const { success, remaining, resetAt } = contactRateLimiter.check(ip);
  if (!success) {
    const retryAfterMs = resetAt - Date.now();
    return NextResponse.json(
      { error: "Muitas requisições. Aguarde alguns minutos e tente novamente." },
      {
        status: 429,
        headers: {
          "Retry-After": String(Math.ceil(retryAfterMs / 1000)),
          "X-RateLimit-Remaining": "0",
        },
      }
    );
  }

  // 3. Parsear e validar o body
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Body da requisição inválido." },
      { status: 400 }
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Dados inválidos.", details: parsed.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  const { name, email, message, _gotcha } = parsed.data;

  // 4. Verificar honeypot — bots preenchem campos ocultos
  if (_gotcha && _gotcha.length > 0) {
    // Retornar 200 para não alertar o bot, mas não enviar e-mail
    return NextResponse.json({ success: true });
  }

  // 5. Verificar configuração do servidor
  const emailTo = process.env.CONTACT_EMAIL_TO;
  const emailFrom =
    process.env.CONTACT_EMAIL_FROM ?? "Portfolio <noreply@resend.dev>";

  if (!emailTo || !process.env.RESEND_API_KEY) {
    console.error("[Contact API] Variáveis de ambiente não configuradas.");
    return NextResponse.json(
      { error: "Serviço de e-mail não configurado. Tente entrar em contato diretamente." },
      { status: 503 }
    );
  }

  // 6. Enviar e-mail via Resend (server-side only — chave nunca exposta ao cliente)
  // Instanciado aqui (dentro do handler) para evitar erros de build sem .env.local
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    await resend.emails.send({
      from: emailFrom,
      to: emailTo,
      replyTo: email,
      subject: `[Portfólio] Nova mensagem de ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0a1628; border-bottom: 2px solid #f59e0b; padding-bottom: 8px;">
            Nova mensagem do portfólio
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #64748b; width: 100px;">Nome:</td>
              <td style="padding: 8px 0; color: #0a1628;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #64748b;">E-mail:</td>
              <td style="padding: 8px 0; color: #0a1628;">
                <a href="mailto:${email}" style="color: #f59e0b;">${email}</a>
              </td>
            </tr>
          </table>
          <div style="margin-top: 16px;">
            <p style="font-weight: bold; color: #64748b; margin-bottom: 8px;">Mensagem:</p>
            <div style="background: #f8fafc; border-left: 4px solid #f59e0b; padding: 16px; border-radius: 4px; white-space: pre-wrap; color: #0a1628;">
              ${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}
            </div>
          </div>
          <p style="color: #94a3b8; font-size: 12px; margin-top: 24px;">
            Enviado via formulário de contato do portfólio.
            IP: ${ip} | Restantes (rate limit): ${remaining}
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Contact API] Erro ao enviar e-mail:", error);
    return NextResponse.json(
      { error: "Erro ao enviar mensagem. Tente novamente mais tarde." },
      { status: 500 }
    );
  }
}

// Não permitir outros métodos HTTP
export async function GET() {
  return NextResponse.json({ error: "Método não permitido." }, { status: 405 });
}
