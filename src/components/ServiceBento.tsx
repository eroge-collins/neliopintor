import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services, WHATSAPP_DIRECT_URL } from "../data/siteContent";
import { ScrollTextReveal } from "./ScrollTextReveal";

gsap.registerPlugin(ScrollTrigger);

export function ServiceBento() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        ".service-card",
        { y: 48, opacity: 0.62, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          stagger: 0.08,
          ease: "power3.out",
          clearProps: "transform",
          immediateRender: false,
          scrollTrigger: {
            trigger: ".service-grid",
            start: "top 76%",
          },
        },
      );
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section className="services section-screen" id="servicos" ref={sectionRef}>
      <div className="content-shell services__shell">
        <div className="services__intro">
          <h2>Acabamento limpo para cada tipo de parede</h2>
          <ScrollTextReveal text="Uma pintura premium não depende só da cor. Ela nasce da preparação da superfície, da proteção do ambiente, do tempo correto entre demãos e da revisão final de cada canto visível." />
        </div>

        <div className="service-grid" aria-label="Serviços de pintura">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <a
                className={`service-card ${index > 2 ? "service-card--wide" : ""}`}
                href={WHATSAPP_DIRECT_URL}
                target="_blank"
                rel="noreferrer"
                key={service.title}
              >
                <div className="service-card__image" aria-hidden="true">
                  <img src={service.image} alt="" />
                </div>
                <div className="service-card__content">
                  <span className="service-card__icon">
                    <Icon aria-hidden="true" size={20} />
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <small>{service.detail}</small>
                </div>
                <span className="service-card__signal" aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
