import { useEffect, useRef, useState } from "react";
import { WhatsappLogo } from "@phosphor-icons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { specialties, WHATSAPP_DIRECT_URL } from "../data/siteContent";

gsap.registerPlugin(ScrollTrigger);

export function SpecialtyAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    const context = gsap.context(() => {
      const headingItems = gsap.utils.toArray<HTMLElement>(".section-heading h2, .section-heading p");

      gsap.set(headingItems, { y: 26, autoAlpha: 0 });

      gsap.to(
        headingItems,
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.95,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
          },
        },
      );

      gsap.fromTo(
        ".accordion-panel",
        { y: 64, opacity: 0, scale: 0.96, clipPath: "inset(12% 0% 12% 0%)" },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1,
          stagger: 0.08,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: ".accordion-row",
            start: "top 78%",
          },
        },
      );
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section className="specialties section-screen" ref={sectionRef}>
      <div className="content-shell">
        <div className="section-heading section-heading--split">
          <h2>Escolha a leitura visual do ambiente</h2>
          <p>
            O mesmo serviço pode pedir silêncio, contraste, presença de rua ou uma renovação rápida.
            A decisão certa evita excesso e melhora o resultado final.
          </p>
        </div>

        <div className="accordion-row" aria-label="Especialidades de pintura">
          {specialties.map((item, index) => (
            <button
              className="accordion-panel"
              data-active={activeIndex === index}
              key={item.title}
              type="button"
              aria-expanded={activeIndex === index}
              onFocus={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              style={{ backgroundImage: `linear-gradient(180deg, rgba(14, 13, 11, 0.08), rgba(14, 13, 11, 0.84)), url(${item.image})` }}
            >
              <span className="accordion-panel__body">
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </span>
            </button>
          ))}
        </div>

        <a className="inline-action" href={WHATSAPP_DIRECT_URL} target="_blank" rel="noreferrer">
          <WhatsappLogo aria-hidden="true" size={18} weight="fill" />
          Conversar sobre meu ambiente
        </a>
      </div>
    </section>
  );
}
