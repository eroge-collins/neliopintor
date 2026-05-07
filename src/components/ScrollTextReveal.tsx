import { Fragment, useEffect, useRef } from "react";
import gsap from "gsap";

type ScrollTextRevealProps = {
  text: string;
};

export function ScrollTextReveal({ text }: ScrollTextRevealProps) {
  const textRef = useRef<HTMLParagraphElement>(null);
  const words = text.trim().split(/\s+/);

  useEffect(() => {
    if (!textRef.current) {
      return;
    }

    const element = textRef.current;
    const wordElements = Array.from(element.querySelectorAll<HTMLElement>(".reveal-word"));
    let isActive = false;

    const reveal = () => {
      if (isActive) {
        return;
      }

      isActive = true;
      gsap.killTweensOf(wordElements);

      gsap.fromTo(
        wordElements,
        { opacity: 0.42, y: 8 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.018,
          ease: "power2.out",
          clearProps: "opacity,transform",
        },
      );
    };

    const reset = () => {
      if (!isActive) {
        return;
      }

      isActive = false;
      gsap.killTweensOf(wordElements);
      gsap.set(wordElements, { opacity: 0.42, y: 8 });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
        } else {
          reset();
        }
      },
      {
        rootMargin: "0px 0px -14% 0px",
        threshold: 0.16,
      },
    );

    observer.observe(element);

    window.requestAnimationFrame(() => {
      const rect = element.getBoundingClientRect();

      if (rect.top < window.innerHeight * 0.86 && rect.bottom > 0) {
        reveal();
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <p className="scroll-reveal" ref={textRef}>
      {words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <span className="reveal-word">{word}</span>
          {index < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </p>
  );
}
