import { useState } from "react";
import { Menu, X } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react";
import { navItems, WHATSAPP_DIRECT_URL } from "../data/siteContent";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <a className="skip-link" href="#servicos">
        Ir para o conteúdo
      </a>
      <nav className="nav-shell" aria-label="Navegação principal">
        <a className="brand-mark" href="#inicio" onClick={closeMenu} aria-label="Nélio Lima | Pintor">
          <span className="brand-mark__name">Nélio Lima</span>
          <span className="brand-mark__role">Pintor</span>
        </a>

        <div className="nav-links" data-open={isOpen}>
          {navItems.map((item) => (
            <a href={item.href} key={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </div>

        <a className="nav-cta" href={WHATSAPP_DIRECT_URL} target="_blank" rel="noreferrer">
          <WhatsappLogo aria-hidden="true" size={19} weight="fill" />
          Orçamento
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X aria-hidden="true" size={21} /> : <Menu aria-hidden="true" size={21} />}
        </button>
      </nav>
    </header>
  );
}
