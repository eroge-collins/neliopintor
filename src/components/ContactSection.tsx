import { useMemo, useState } from "react";
import type { FormEvent, MouseEvent } from "react";
import { FacebookLogo, InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";
import { services, WHATSAPP_DIRECT_URL, WHATSAPP_DISPLAY } from "../data/siteContent";
import {
  buildWhatsAppHref,
  composeLeadMessage,
  LeadForm,
  LeadFormErrors,
  validateLeadForm,
} from "../utils/whatsapp";

const initialForm: LeadForm = {
  name: "",
  phone: "",
  service: "",
  message: "",
};

export function ContactSection() {
  const [form, setForm] = useState<LeadForm>(initialForm);
  const [errors, setErrors] = useState<LeadFormErrors>({});

  const serviceOptions = useMemo(() => [...services.map((service) => service.title), "Outros"], []);

  const updateField = (field: keyof LeadForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateLeadForm(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    window.open(buildWhatsAppHref(composeLeadMessage(form)), "_blank", "noopener,noreferrer");
  };

  const preventSocialNavigation = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
  };

  return (
    <section className="contact section-screen" id="contato">
      <div className="content-shell contact__grid">
        <div className="contact__copy">
          <h2>Fale conosco e peça um orçamento</h2>
          <p>
            Envie uma mensagem com o tipo de ambiente, fotos da parede e o acabamento desejado. O
            atendimento principal acontece pelo WhatsApp {WHATSAPP_DISPLAY}.
          </p>

          <div className="contact__cards">
            <a className="contact-mini" href={WHATSAPP_DIRECT_URL} target="_blank" rel="noreferrer">
              <WhatsappLogo aria-hidden="true" size={21} weight="fill" />
              <span>
                <strong>WhatsApp</strong>
                {WHATSAPP_DISPLAY}
              </span>
            </a>
            <a className="contact-mini" href="#" onClick={preventSocialNavigation} aria-label="Facebook indisponível">
              <FacebookLogo aria-hidden="true" size={20} weight="fill" />
              <span>
                <strong>Facebook</strong>
                Em breve
              </span>
            </a>
            <a className="contact-mini" href="#" onClick={preventSocialNavigation} aria-label="Instagram indisponível">
              <InstagramLogo aria-hidden="true" size={20} weight="bold" />
              <span>
                <strong>Instagram</strong>
                Em breve
              </span>
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <label>
            Nome
            <input
              type="text"
              autoComplete="name"
              value={form.name}
              aria-invalid={Boolean(errors.name)}
              onChange={(event) => updateField("name", event.target.value)}
            />
            {errors.name ? <span className="field-error">{errors.name}</span> : null}
          </label>

          <label>
            Telefone
            <input
              type="tel"
              autoComplete="tel"
              value={form.phone}
              aria-invalid={Boolean(errors.phone)}
              onChange={(event) => updateField("phone", event.target.value)}
            />
            {errors.phone ? <span className="field-error">{errors.phone}</span> : null}
          </label>

          <label>
            Serviço
            <select
              value={form.service}
              aria-invalid={Boolean(errors.service)}
              onChange={(event) => updateField("service", event.target.value)}
            >
              <option value="">Selecione</option>
              {serviceOptions.map((service) => (
                <option value={service} key={service}>
                  {service}
                </option>
              ))}
            </select>
            {errors.service ? <span className="field-error">{errors.service}</span> : null}
          </label>

          <label>
            Mensagem
            <textarea
              rows={5}
              value={form.message}
              aria-invalid={Boolean(errors.message)}
              onChange={(event) => updateField("message", event.target.value)}
            />
            {errors.message ? <span className="field-error">{errors.message}</span> : null}
          </label>

          <button className="button button--dark" type="submit">
            <WhatsappLogo aria-hidden="true" size={18} weight="fill" />
            Enviar pelo WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
