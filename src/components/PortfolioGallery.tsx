import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioItems } from "../data/siteContent";

gsap.registerPlugin(ScrollTrigger);

export function PortfolioGallery() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        ".portfolio .section-heading > *",
        { y: 52, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.95,
          stagger: 0.12,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
          },
        },
      );

      gsap.fromTo(
        ".portfolio-grid",
        { y: 76, opacity: 0.76, scale: 0.965 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          ease: "none",
          immediateRender: false,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 86%",
            end: "top 38%",
            scrub: 0.9,
          },
        },
      );

      gsap.utils.toArray<HTMLElement>(".portfolio-card").forEach((card, index) => {
        const image = card.querySelector("img");

        gsap.fromTo(
          card,
          {
            x: ((index % 3) - 1) * 22,
            y: index % 2 === 0 ? 120 : 82,
            opacity: 0.28,
            scale: 0.9,
            rotateZ: index % 2 === 0 ? -1.2 : 1.2,
            filter: "blur(3px) grayscale(0.55)",
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            rotateZ: 0,
            filter: "blur(0px) grayscale(0)",
            ease: "none",
            immediateRender: false,
            scrollTrigger: {
              trigger: card,
              start: "top 94%",
              end: "top 52%",
              scrub: 1.05,
            },
          },
        );

        if (image) {
          gsap.fromTo(
            image,
            {
              yPercent: index % 2 === 0 ? -15 : 12,
              scale: 1.24,
              filter: "grayscale(0.32) contrast(1.16) brightness(0.68)",
            },
            {
              yPercent: index % 2 === 0 ? 15 : -12,
              scale: 1.05,
              filter: "grayscale(0.02) contrast(1.04) brightness(1)",
              ease: "none",
              immediateRender: false,
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.25,
              },
            },
          );
        }
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section className="portfolio section-screen" id="portfolio" ref={sectionRef}>
      <div className="content-shell portfolio__shell">
        <div className="section-heading section-heading--center">
          <h2>Portfólio com obras reais</h2>
          <p>
            Uma seleção de trabalhos publicados por Nélio Lima, com interiores, texturas, fachadas
            e acabamentos de iluminação.
          </p>
        </div>

        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <article className={`portfolio-card portfolio-card--${item.span}`} key={item.title}>
              <div className="portfolio-card__media">
                <img src={item.image} alt={`${item.title} - trabalho de pintura`} />
              </div>
              <div className="portfolio-card__caption">
                <span>{item.category}</span>
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
