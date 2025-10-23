import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-heading font-bold text-foreground">Let's Connect</h2>
          <p className="text-subheading text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities? I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          
          {/* Email Card */}
          <Card className="bg-gradient-card shadow-soft hover:shadow-hover transition-smooth group text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-smooth">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <CardTitle className="text-lg">Email</CardTitle>
              <CardDescription>Drop me a message</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                    <a
                      href="mailto:amandamethoxha30@gmail.com?subject=Hello%20Amanda%20—%20from%20your%20portfolio"
                      aria-label="Email Amanda at amandashpendi@gmail.com"
                    >
                      amandashpendi@gmail.com
                    </a>
              </Button>
            </CardContent>
          </Card>
          
          {/* LinkedIn Card */}
          <Card className="bg-gradient-card shadow-soft hover:shadow-hover transition-smooth group text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-smooth">
                <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <CardTitle className="text-lg">LinkedIn</CardTitle>
              <CardDescription>Professional network</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="accent" className="w-full" asChild>
                <a
                  href="https://www.linkedin.com/in/amanda-shpendi-463531160/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open my LinkedIn profile">
                   Connect on LinkedIn 
                </a>       
              </Button>
            </CardContent>
          </Card>
          
          {/* GitHub Card */}
          <Card className="bg-gradient-card shadow-soft hover:shadow-hover transition-smooth group text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-heritage/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-heritage/20 transition-smooth">
                <svg className="w-6 h-6 text-heritage" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <CardTitle className="text-lg">GitHub</CardTitle>
              <CardDescription>Code repository</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="heritage" className="w-full">
                <a
                  href="https://github.com/AmandaMethoxha"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open my LinkedIn profile">
                View Projects
                </a>
              </Button>
            </CardContent>
          </Card>
          
        </div>
        
        <div className="text-center mt-16">
          <p className="text-muted-foreground italic">
            "Technology is best when it brings people together." - Let's build something amazing!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;