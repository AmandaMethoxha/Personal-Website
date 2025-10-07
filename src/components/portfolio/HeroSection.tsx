import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/Amanda.png";

const HeroSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-subtle flex items-center justify-center px-6 pt-4 scroll-mt-24" 
    >
      <div className="container mx-auto py-10 lg:py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div
                className="inline-flex items-center gap-2 text-accent font-medium"
                aria-label="Availability status"
              >
                <span
                  className="w-2 h-2 bg-accent rounded-full animate-pulse"
                  aria-hidden="true"
                />
                Available for new opportunities
              </div>

              <h1 className="text-hero font-bold text-foreground leading-tight">
                👋 Hi, I'm Amanda Methoxha Shpendi
              </h1>

              <p className="text-subheading text-muted-foreground leading-relaxed">
                A Computer Science & Electronic Engineering MSc (First Class) graduate who turns complex ideas into simple, elegant solutions.

              </p>
            </div>

            <Card className="p-6 bg-gradient-card shadow-soft border-l-4 border-l-accent">
              <p className="text-foreground leading-relaxed">
                I build across software and electronics—from writing efficient
                code to designing hardware systems—always with an eye for detail
                and performance.
              </p>
            </Card>

            <div className="space-y-4">
              <p className="text-foreground leading-relaxed">
                Born in Albania and based in the UK, I blend precision, resilience, and creativity in everything I build. My work spans web, data, and embedded systems—with a focus on reliability and clarity.
              </p>

              <p className="text-accent font-medium">
                I'm always excited to collaborate, learn, and create technology
                that makes a real impact.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4">
              {/* CV button -> put your PDF at /public/cv/amanda-methoxha.pdf */}
              <Button variant="hero" size="lg" className="gap-2" asChild>
                <a
                  href="/cv/Amanda-Shpendi-CV.pdf"
                  download="Amanda-Shpendi-CV.pdf"        // keeps the downloaded filename clean
                  aria-label="Download my CV as PDF"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download my CV
                </a>
              </Button>

              {/* LinkedIn button */}
              <Button variant="accent" size="lg" className="gap-2" asChild>
                <a
                  href="https://www.linkedin.com/in/amanda-methoxha-463531160/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Open my LinkedIn profile"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div
                className="absolute inset-0 bg-gradient-hero rounded-full blur-3xl opacity-25 animate-pulse"
                aria-hidden="true"
              />
              <img
                src={heroImage}
                alt="Portrait of Amanda Methoxha"
                className="relative w-80 h-80 md:w-88 md:h-88 lg:w-[26rem] lg:h-[26rem] rounded-full object-cover shadow-hover border-[6px] border-background"
                loading="eager"
                width={384}
                height={384}
              />

              {/* Floating badges */}
              <div
                className="absolute -top-4 -right-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-glow animate-bounce"
                aria-hidden="true"
              >
                <span className="text-accent-foreground font-bold">CS</span>
              </div>

              <div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-heritage rounded-full flex items-center justify-center shadow-glow animate-bounce delay-500"
                aria-hidden="true"
              >
                <span className="text-heritage-foreground font-bold">EE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default HeroSection;
