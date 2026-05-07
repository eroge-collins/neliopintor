import { WhatsappLogo } from "@phosphor-icons/react";
import { WHATSAPP_DIRECT_URL } from "../data/siteContent";

export function WhatsAppFab() {
  return (
    <a className="whatsapp-fab" href={WHATSAPP_DIRECT_URL} target="_blank" rel="noreferrer" aria-label="Chamar no WhatsApp">
      <WhatsappLogo aria-hidden="true" size={26} weight="fill" />
    </a>
  );
}
