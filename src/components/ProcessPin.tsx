import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { processSteps } from "../data/siteContent";

gsap.registerPlugin(ScrollTrigger);

export function ProcessPin() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    const media = gsap.matchMedia();

    media.add("(min-width: 900px)", () => {
      const context = gsap.context(() => {
        gsap.fromTo(
          ".process-card",
          { y: 36, opacity: 0.72, scale: 0.97 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.85,
            stagger: 0.08,
            ease: "power3.out",
            immediateRender: false,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 68%",
            },
          },
        );

        gsap.fromTo(
          ".process-card__icon",
          { rotate: -10, scale: 0.88 },
          {
            rotate: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.06,
            ease: "power3.out",
            immediateRender: false,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 68%",
            },
          },
        );
      }, sectionRef);

      return () => context.revert();
    });

    return () => media.revert();
  }, []);

  return (
    <section className="process" id="metodo" ref={sectionRef}>
      <div className="content-shell process__grid">
        <div className="process__pin">
          <h2>Do primeiro contato à parede pronta</h2>
          <p>
            Um serviço de pintura precisa ser bonito no resultado e tranquilo no caminho. O método
            organiza expectativa, proteção, execução e revisão.
          </p>
        </div>

        <div className="process__cards">
          {processSteps.map((step) => {
            const Icon = step.icon;

            return (
              <article className="process-card" key={step.title}>
                <span className="process-card__icon">
                  <Icon aria-hidden="true" size={24} />
                </span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
