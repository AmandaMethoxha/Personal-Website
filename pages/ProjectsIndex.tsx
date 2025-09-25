import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { projects, CATEGORY_LABEL, type Category } from "@/data/projects";

const categoryStyles: Record<Category, string> = {
  electronics: "bg-heritage/10 text-heritage border-heritage/20",
  software: "bg-primary/10 text-primary border-primary/20",
  "full-stack": "bg-accent/10 text-accent border-accent/20",
};

export default function ProjectsIndex() {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "All Projects – Amanda Methoxha";
  }, []);

  return (
    <section className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        {/* Back bar (sticky on top on scroll) */}
        <div className="sticky top-0 z-10 -mx-6 mb-6 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
          <div className="container mx-auto px-6 py-3 flex items-center justify-between">
            <Button variant="ghost" asChild>
              {/* use an <a> so the hash works and it jumps to the section */}
              <a href="/#projects" aria-label="Back to Featured Projects">
                ← Back to Featured
              </a>
            </Button>
            <span className="text-sm text-muted-foreground">Browse all projects</span>
          </div>
        </div>

        <div className="text-center space-y-4 mb-10">
          <h1 className="text-heading font-bold text-foreground">All Projects</h1>
          <p className="text-subheading text-muted-foreground max-w-2xl mx-auto">
            Everything in one place. Scroll to explore software, electronics, and full-stack work.
          </p>
        </div>

        {/* Big scrollable grid simply by having enough content on the page */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.slug} className="bg-gradient-card shadow-soft hover:shadow-hover transition-smooth group">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium border ${categoryStyles[project.category]}`}
                  >
                    {CATEGORY_LABEL[project.category]}
                  </span>

                  {project.githubUrl && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="opacity-0 group-hover:opacity-100 transition-smooth"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open GitHub repo for ${project.title}`}
                        title="Open on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </div>

                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-muted text-muted-foreground rounded text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button variant="accent" className="flex-1" asChild>
                    <Link to={`/projects/${project.slug}`} aria-label={`Read more about ${project.title}`}>
                      Details
                    </Link>
                  </Button>

                  {project.githubUrl && (
                    <Button variant="outline" className="flex-1" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Back link at the bottom too */}
        <div className="text-center mt-12">
          <Button variant="outline" asChild>
            <a href="/#projects" aria-label="Back to Featured Projects">Back to Featured</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
