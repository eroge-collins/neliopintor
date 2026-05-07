import type { MouseEvent } from "react";
import { FacebookLogo, InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";
import { navItems, WHATSAPP_DIRECT_URL, WHATSAPP_DISPLAY } from "../data/siteContent";

export function Footer() {
  const year = new Date().getFullYear();
  const preventSocialNavigation = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
  };

  return (
    <footer className="footer">
      <div className="content-shell footer__grid">
        <div>
          <a className="footer__brand" href="#inicio" aria-label="Nélio Lima | Pintor">
            Nélio Lima | Pintor
          </a>
          <p>Portfólio profissional de pintura residencial, comercial, fachadas e acabamentos.</p>
        </div>

        <div className="footer__links" aria-label="Links do site">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="footer__social" aria-label="Contato e redes sociais">
          <a href={WHATSAPP_DIRECT_URL} target="_blank" rel="noreferrer" aria-label={`WhatsApp ${WHATSAPP_DISPLAY}`}>
            <WhatsappLogo aria-hidden="true" size={20} weight="fill" />
          </a>
          <a href="#" onClick={preventSocialNavigation} aria-label="Facebook indisponível">
            <FacebookLogo aria-hidden="true" size={19} weight="fill" />
          </a>
          <a href="#" onClick={preventSocialNavigation} aria-label="Instagram indisponível">
            <InstagramLogo aria-hidden="true" size={19} weight="bold" />
          </a>
        </div>
      </div>
      <div className="content-shell footer__bottom">
        <span>© {year} Nélio Lima | Pintor. Todos os direitos reservados.</span>
        <span>Imagens ilustrativas para substituição por portfólio real.</span>
      </div>
    </footer>
  );
}
