import { useEffect } from "react";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navigation } from "./components/Navigation";
import { PortfolioGallery } from "./components/PortfolioGallery";
import { ProcessPin } from "./components/ProcessPin";
import { ServiceBento } from "./components/ServiceBento";
import { SiteMotion } from "./components/SiteMotion";
import { SpecialtyAccordion } from "./components/SpecialtyAccordion";
import { TestimonialCarousel } from "./components/TestimonialCarousel";
import { WhatsAppFab } from "./components/WhatsAppFab";

export default function App() {
  useEffect(() => {
    const hashId = decodeURIComponent(window.location.hash.replace("#", ""));

    if (!/^[a-zA-Z0-9_-]+$/.test(hashId)) {
      return;
    }

    window.setTimeout(() => {
      document.getElementById(hashId)?.scrollIntoView();
    }, 80);
  }, []);

  return (
    <>
      <SiteMotion />
      <Navigation />
      <main className="site-main" id="inicio">
        <Hero />
        <ServiceBento />
        <ProcessPin />
        <SpecialtyAccordion />
        <PortfolioGallery />
        <TestimonialCarousel />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
