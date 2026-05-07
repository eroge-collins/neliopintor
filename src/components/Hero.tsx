import { useEffect, useRef, useState } from "react";
import { Images } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { heroSlides, WHATSAPP_DIRECT_URL } from "../data/siteContent";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!heroRef.current) {
      return;
    }

    const context = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .fromTo(".hero__media-slide", { scale: 1.13 }, { scale: 1, duration: 1.8 })
        .fromTo(".hero__title", { y: 48, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=1.1")
        .fromTo(".hero__lead", { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, "-=0.65")
        .fromTo(".hero__actions", { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.85 }, "-=0.55")
        .fromTo(".hero__progress", { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=0.35");

      gsap.to(".hero__media-stack", {
        yPercent: 11,
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".hero__content", {
        y: -88,
        opacity: 0.35,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "45% top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => context.revert();
  }, []);

  return (
    <section className="hero section-screen" ref={heroRef} aria-labelledby="hero-title">
      <div className="hero__media-stack" aria-hidden="true">
        {heroSlides.map((slide, index) => (
          <div
            className="hero__media-slide"
            data-active={activeIndex === index}
            key={slide.title}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
      </div>
      <div className="hero__content content-shell">
        <h1 className="hero__title" id="hero-title">
          NÉLIO PINTOR
        </h1>
        <p className="hero__lead">
          Pintura de alto padrão para interiores, fachadas e espaços comerciais, com obra limpa,
          acabamento preciso e atendimento direto.
        </p>
        <div className="hero__actions">
          <a className="button button--light" href={WHATSAPP_DIRECT_URL} target="_blank" rel="noreferrer">
            <WhatsappLogo aria-hidden="true" size={20} weight="fill" />
            Fale pelo WhatsApp
          </a>
          <a className="button button--ghost" href="#portfolio">
            <Images aria-hidden="true" size={19} />
            Ver portfólio
          </a>
        </div>
        <div className="hero__progress" aria-hidden="true">
          {heroSlides.map((slide, index) => (
            <span data-active={activeIndex === index} key={slide.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
