import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-foreground">Amanda Shpendi</h2>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-smooth">
              About
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition-smooth">
              Projects
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-smooth">
              Contact
            </a>
            <Button variant="hero" size="sm" asChild>
              <a
                href="/cv/Amanda-Shpendi-CV.pdf"
                download="Amanda-Shpendi-CV.pdf"
                aria-label="Download my CV"
              >
                Download CV
              </a>
            </Button>

          </div>
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;