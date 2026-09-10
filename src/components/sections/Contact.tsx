"use client";

import { useState, useRef } from "react";
import { siteConfig } from "@/config/site.config";
import SectionHeader from "@/components/ui/SectionHeader";

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [charCount, setCharCount] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("loading");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
      _gotcha: formData.get("_gotcha") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? "Erro ao enviar mensagem. Tente novamente.");
        setFormState("error");
      } else {
        setFormState("success");
        formRef.current?.reset();
        setCharCount(0);
      }
    } catch {
      setErrorMsg("Erro de conexão. Verifique sua internet e tente novamente.");
      setFormState("error");
    }
  };

  const inputBaseStyle: React.CSSProperties = {
    backgroundColor: "var(--color-navy-950)",
    borderColor: "var(--color-navy-700)",
    color: "var(--color-slate-200)",
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 focus:ring-2 placeholder:text-slate-600";

  return (
    <section id="contato" className="section-padding">
      <div className="container-custom">
        <div className="section-divider mb-16" />

        <SectionHeader
          label="// contato"
          title="Vamos Conversar"
          subtitle="Tem um projeto em mente ou quer bater um papo? Me envie uma mensagem."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Informações de contato */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <p style={{ color: "var(--color-slate-400)" }} className="leading-relaxed">
              Estou disponível para freelances, projetos de consultoria e oportunidades em tempo integral. Responderei em até 24 horas.
            </p>

            <ul className="flex flex-col gap-4">
              {/* E-mail */}
              <li className="flex items-center gap-3">
                <span
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(245, 158, 11, 0.1)" }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "var(--color-amber-500)" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-medium mb-0.5" style={{ color: "var(--color-slate-500)" }}>E-mail</p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-sm font-medium transition-colors hover:text-amber-400"
                    style={{ color: "var(--color-slate-200)" }}
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </li>

              {/* Telefone */}
              {siteConfig.contact.phone && (
                <li className="flex items-center gap-3">
                  <span
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "rgba(245, 158, 11, 0.1)" }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "var(--color-amber-500)" }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-medium mb-0.5" style={{ color: "var(--color-slate-500)" }}>Telefone / WhatsApp</p>
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                      className="text-sm font-medium transition-colors hover:text-amber-400"
                      style={{ color: "var(--color-slate-200)" }}
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </li>
              )}

              {/* LinkedIn */}
              <li className="flex items-center gap-3">
                <span
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(245, 158, 11, 0.1)" }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" style={{ color: "var(--color-amber-500)" }}>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-medium mb-0.5" style={{ color: "var(--color-slate-500)" }}>LinkedIn</p>
                  <a
                    href={siteConfig.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium transition-colors hover:text-amber-400"
                    style={{ color: "var(--color-slate-200)" }}
                  >
                    {siteConfig.contact.linkedin.replace("https://", "")}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Formulário */}
          <div className="lg:col-span-3">
            {formState === "success" ? (
              <div className="card-surface p-8 text-center flex flex-col items-center gap-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(245, 158, 11, 0.12)" }}
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "var(--color-amber-500)" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold" style={{ color: "var(--color-slate-100)" }}>
                  Mensagem enviada!
                </h3>
                <p style={{ color: "var(--color-slate-400)" }}>
                  Obrigado pelo contato. Responderei em breve.
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  className="text-sm font-medium underline underline-offset-2 transition-colors hover:text-amber-400"
                  style={{ color: "var(--color-amber-500)" }}
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="card-surface p-6 sm:p-8 flex flex-col gap-5"
                noValidate
              >
                {/* Honeypot — oculto de usuários reais, bots preenchem */}
                <input
                  type="text"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ display: "none" }}
                />

                {/* Nome */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-name"
                    className="text-sm font-medium"
                    style={{ color: "var(--color-slate-300)" }}
                  >
                    Nome <span style={{ color: "var(--color-amber-500)" }}>*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    minLength={2}
                    maxLength={100}
                    placeholder="Seu nome completo"
                    className={inputClass}
                    style={inputBaseStyle}
                    disabled={formState === "loading"}
                  />
                </div>

                {/* E-mail */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-email"
                    className="text-sm font-medium"
                    style={{ color: "var(--color-slate-300)" }}
                  >
                    E-mail <span style={{ color: "var(--color-amber-500)" }}>*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    maxLength={254}
                    placeholder="seu@email.com"
                    className={inputClass}
                    style={inputBaseStyle}
                    disabled={formState === "loading"}
                  />
                </div>

                {/* Mensagem */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-message"
                    className="text-sm font-medium flex items-center justify-between"
                    style={{ color: "var(--color-slate-300)" }}
                  >
                    <span>
                      Mensagem <span style={{ color: "var(--color-amber-500)" }}>*</span>
                    </span>
                    <span
                      className="text-xs font-mono"
                      style={{
                        color: charCount > 1800 ? "var(--color-amber-400)" : "var(--color-slate-500)",
                      }}
                    >
                      {charCount}/2000
                    </span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    minLength={10}
                    maxLength={2000}
                    rows={5}
                    placeholder="Conte-me sobre seu projeto, dúvida ou proposta..."
                    className={`${inputClass} resize-none`}
                    style={inputBaseStyle}
                    disabled={formState === "loading"}
                    onChange={(e) => setCharCount(e.target.value.length)}
                  />
                </div>

                {/* Mensagem de erro */}
                {formState === "error" && (
                  <p
                    className="text-sm rounded-lg px-4 py-3"
                    style={{
                      backgroundColor: "rgba(239, 68, 68, 0.1)",
                      color: "#f87171",
                      border: "1px solid rgba(239, 68, 68, 0.2)",
                    }}
                    role="alert"
                  >
                    {errorMsg}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-base transition-all duration-200 hover:brightness-110 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
                  style={{
                    backgroundColor: "var(--color-amber-500)",
                    color: "var(--color-navy-900)",
                    boxShadow: "0 4px 20px rgba(245, 158, 11, 0.25)",
                  }}
                >
                  {formState === "loading" ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Mensagem
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
