import { WHATSAPP_PHONE } from "../data/siteContent";

export type LeadForm = {
  name: string;
  phone: string;
  service: string;
  message: string;
};

export type LeadFormErrors = Partial<Record<keyof LeadForm, string>>;

const normalizeText = (value: string) =>
  value.replace(/[\u0000-\u001F\u007F]/g, " ").replace(/\s+/g, " ").trim();

const normalizeMultilineText = (value: string) =>
  value
    .split(/\r?\n/)
    .map((line) => normalizeText(line))
    .filter(Boolean)
    .join("\n");

export function validateLeadForm(form: LeadForm): LeadFormErrors {
  const errors: LeadFormErrors = {};
  const name = normalizeText(form.name);
  const phoneDigits = form.phone.replace(/\D/g, "");
  const message = normalizeText(form.message);

  if (name.length < 2) {
    errors.name = "Informe seu nome.";
  }

  if (form.phone.trim() && phoneDigits.length < 10) {
    errors.phone = "Informe um telefone válido ou deixe em branco.";
  }

  if (!form.service) {
    errors.service = "Escolha o tipo de serviço.";
  }

  if (message.length < 8) {
    errors.message = "Descreva rapidamente o que precisa.";
  }

  return errors;
}

export function buildWhatsAppHref(message?: string) {
  const url = new URL("https://api.whatsapp.com/send/");
  url.searchParams.set("phone", WHATSAPP_PHONE);

  const cleanMessage = message ? normalizeMultilineText(message) : "";
  if (cleanMessage) {
    url.searchParams.set("text", cleanMessage);
  }

  url.searchParams.set("type", "phone_number");
  url.searchParams.set("app_absent", "0");
  return url.toString();
}

export function composeLeadMessage(form: LeadForm) {
  const clean = {
    name: normalizeText(form.name),
    phone: normalizeText(form.phone),
    service: normalizeText(form.service),
    message: normalizeText(form.message),
  };

  return [
    "Olá, Nélio.",
    "",
    "Solicito um orçamento de pintura.",
    "",
    "Dados do atendimento:",
    `- Nome: ${clean.name}`,
    clean.phone ? `- Telefone: ${clean.phone}` : null,
    `- Serviço: ${clean.service}`,
    "",
    "Resumo do pedido:",
    clean.message,
  ]
    .filter((line): line is string => line !== null)
    .join("\n");
}
