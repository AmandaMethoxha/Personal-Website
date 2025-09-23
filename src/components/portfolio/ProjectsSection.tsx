// src/components/portfolio/ProjectsSection.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import {
  projects,
  GITHUB_URL,
  CATEGORY_LABEL,
  type Category,
} from "@/data/projects";
import { Link } from "react-router-dom";

const categoryStyles: Record<Category, string> = {
  electronics: "bg-heritage/10 text-heritage border-heritage/20",
  software: "bg-primary/10 text-primary border-primary/20",
  "full-stack": "bg-accent/10 text-accent border-accent/20",
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-heading font-bold text-foreground">Featured Projects</h2>
          <p className="text-subheading text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work spanning software development, electronics design, and system integration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.slug}
              className="bg-gradient-card shadow-soft hover:shadow-hover transition-smooth group"
            >
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
                    <Link
                      to={`/projects/${project.slug}`}
                      aria-label={`Read more about ${project.title}`}
                    >
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

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a
              href={`${GITHUB_URL}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View all my repositories on GitHub"
            >
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
