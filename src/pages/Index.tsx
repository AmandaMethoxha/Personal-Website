import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/portfolio/Navigation";
import HeroSection from "@/components/portfolio/HeroSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ContactSection from "@/components/portfolio/ContactSection";

function useScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    const el = document.getElementById(id);
    if (el) {
      // Let layout settle, then scroll
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [hash]);
}

export default function Index() {
  useScrollToHash();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm opacity-80">
            © 2024 Amanda Methoxha. Built with precision and creativity.
          </p>
        </div>
      </footer>
    </div>
  );
}
