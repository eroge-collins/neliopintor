import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PARTICLE_COUNT = 22;

export function SiteMotion() {
  const layerRef = useRef<HTMLDivElement>(null);
  const particles = useMemo(
    () =>
      Array.from({ length: PARTICLE_COUNT }, (_, index) => ({
        left: `${(index * 37 + 11) % 100}%`,
        top: `${(index * 53 + 19) % 100}%`,
        size: 2 + ((index * 7) % 7),
        delay: `${(index % 9) * -0.6}s`,
      })),
    [],
  );

  useEffect(() => {
    if (!layerRef.current) {
      return;
    }

    const context = gsap.context(() => {
      gsap.to(".scroll-progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.4,
        },
      });

      gsap.to(".ambient-particle", {
        y: (index) => (index % 2 === 0 ? -180 : 150),
        x: (index) => (index % 3 === 0 ? 48 : -34),
        opacity: 0.22,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.4,
        },
      });

      gsap.to(".motion-layer", {
        opacity: 0.72,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
        },
      });
    });

    return () => context.revert();
  }, []);

  return (
    <div className="motion-layer" ref={layerRef} aria-hidden="true">
      <div className="scroll-progress" />
      <div className="ambient-particles">
        {particles.map((particle, index) => (
          <span
            className="ambient-particle"
            key={index}
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              animationDelay: particle.delay,
            }}
          />
        ))}
      </div>
    </div>
  );
}
