import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(100, "Nome muito longo")
    .regex(/^[\p{L}\s'-]+$/u, "Nome contém caracteres inválidos"),

  email: z
    .string()
    .email("E-mail inválido")
    .max(254, "E-mail muito longo")
    .toLowerCase(),

  message: z
    .string()
    .min(10, "Mensagem deve ter pelo menos 10 caracteres")
    .max(2000, "Mensagem muito longa (máx. 2000 caracteres)"),

  // Campo honeypot anti-spam: deve estar vazio em envios legítimos
  // Um bot que preenche todos os campos vai preencher este e ser bloqueado
  _gotcha: z.string().max(0, "Bot detectado").optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
