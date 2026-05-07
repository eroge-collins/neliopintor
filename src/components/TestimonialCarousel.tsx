import { useEffect, useState } from "react";
import { feedbackItems } from "../data/siteContent";

export function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = feedbackItems[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % feedbackItems.length);
    }, 5400);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="feedback section-screen">
      <div className="content-shell feedback__grid">
        <div className="feedback__visual" aria-hidden="true">
          {feedbackItems.map((item, index) => (
            <img
              className="feedback__thumb"
              data-active={activeIndex === index}
              src={item.image}
              alt=""
              key={item.title}
            />
          ))}
        </div>

        <div className="feedback__content">
          <h2>O cuidado que aparece na entrega</h2>
          <div className="feedback-card" aria-live="polite">
            <p>{active.quote}</p>
            <div>
              <strong>{active.title}</strong>
              <span>{active.meta}</span>
            </div>
          </div>
          <div className="feedback-controls">
            {feedbackItems.map((item, index) => (
              <button
                type="button"
                data-active={activeIndex === index}
                aria-label={`Mostrar ${item.title}`}
                onClick={() => setActiveIndex(index)}
                key={item.title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
