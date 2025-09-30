import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { projects, CATEGORY_LABEL } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";

export default function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  // scroll to top on project change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // set page title
  useEffect(() => {
    const prevTitle = document.title;
    if (project) document.title = `${project.title} – Amanda Methoxha`;
    return () => {
      document.title = prevTitle;
    };
  }, [project]);

  if (!project) {
    return (
      <section className="container mx-auto px-6 py-24">
        <p className="text-muted-foreground">Project not found.</p>
        <Button variant="outline" className="mt-6" asChild>
          <a href="/#projects">Back to projects</a>
        </Button>
      </section>
    );
  }

  const isLocalMp4 = !!project.demoUrl && project.demoUrl.endsWith(".mp4");

  return (
    <section className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Back to the projects section on the homepage */}
        <Button asChild variant="ghost" className="mb-6">
          <a href="/#projects" aria-label="Back to projects">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </a>
        </Button>

        <h1 className="text-heading font-bold">{project.title}</h1>
        <p className="text-muted-foreground mt-2">
          {CATEGORY_LABEL[project.category]}
        </p>

        {/* Optional hero image */}
        {project.image && (
          <div className="mt-8 overflow-hidden rounded-xl shadow-soft">
            <img
              src={project.image}
              alt={project.imageAlt || project.title}
              className="w-full h-auto"
              loading="eager"
            />
          </div>
        )}

        {/* Inline demo video for local MP4s */}
        {isLocalMp4 && (
          <div className="mt-8">
            <video
              className="w-full rounded-xl shadow-soft"
              controls
              preload="metadata"
              // If you add a thumbnail later, uncomment:
              // poster="/images/thumbnails/interactive-portfolio.jpg"
            >
              <source src={project.demoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        <Card className="p-6 mt-8 bg-gradient-card shadow-soft">
          <div className="space-y-4">
            {project.longDescription.map((para, i) => (
              <p key={i} className="leading-relaxed text-foreground">
                {para}
              </p>
            ))}
          </div>

          {/* Minis list for the Python Mini Projects page */}
{project.slug === "python-mini-projects" && (
  <div className="mt-8 space-y-4">
    <h2 className="text-xl font-semibold">Included mini projects</h2>
    <ul className="list-disc pl-6 space-y-3">
      <li>
        <strong>Math Quiz</strong> — timed +/−/* questions; blocks until correct; tracks total time & wrong attempts.
        <div className="text-sm text-muted-foreground mt-1">
          Run: <code>python3 projects/math-quiz/math_quiz.py</code><br/>
          Configure in <code>math_quiz.py</code>: <code>MIN_OPERAND</code>, <code>MAX_OPERAND</code>, <code>TOTAL_PROBLEMS</code>
        </div>
      </li>
      <li>
        <strong>MadLib Generator</strong> — fills placeholders (e.g. &lt;adjective&gt;, &lt;location&gt;) from <code>story.txt</code>.
        <div className="text-sm text-muted-foreground mt-1">
          Run: <code>python3 projects/madlib-generator/madlib_generator.py</code><br/>
          Place <code>story.txt</code> in the same folder.
        </div>
      </li>
      <li>
        <strong>Number Guesser</strong> — guess 1–100; “Too high/low”; validates input; offers replay.
        <div className="text-sm text-muted-foreground mt-1">
          Run: <code>python3 projects/number-guesser/number_guesser.py</code>
        </div>
      </li>
      <li>
        <strong>Pig Game</strong> — 2–4 player dice; roll to build turn score; 1 ends your turn; first to 50 wins.
        <div className="text-sm text-muted-foreground mt-1">
          Run: <code>python3 projects/pig-game/pig_game.py</code><br/>
          Rules: <em>y</em> to roll, anything else to hold.
        </div>
      </li>
      <li>
        <strong>Quiz Game</strong> — quick terminal quiz on computer parts (CPU, GPU, RAM, PSU).
        <div className="text-sm text-muted-foreground mt-1">
          Run: <code>python3 projects/quiz-game/quiz_game.py</code><br/>
          Answers are case-insensitive; PSU accepts “Power Supply Unit”.
        </div>
      </li>
    </ul>
  </div>
)}


          {/* Tech stack pills */}
          <div className="flex flex-wrap gap-2 mt-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-1 bg-muted text-muted-foreground rounded text-sm font-medium"
              >
                {t}
              </span>
            ))}
          </div>


{project.sampleRun && (
  <div className="mt-8">
    <h3 className="text-lg font-semibold mb-3">Sample Run</h3>
    <pre className="whitespace-pre-wrap text-sm bg-muted/60 rounded p-4 border border-border">
      {project.sampleRun}
    </pre>
  </div>
)}


          {/* Links */}
          <div className="flex flex-wrap gap-3 mt-8">
            {project.githubUrl && (
              <Button variant="outline" asChild>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </Button>
            )}

            {/* For non-video demos (e.g., live site) show the normal link button */}
            {!isLocalMp4 && project.demoUrl && (
              <Button variant="accent" asChild>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live / Demo
                </a>
              </Button>
            )}

            {/* Optional: keep an "Open Video" button even if we render inline */}
            {isLocalMp4 && (
              <Button variant="accent" asChild>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  Open Video in New Tab
                </a>
              </Button>
            )}
          </div>
        </Card>

        {/* Screenshots gallery */}
       {project.screens && project.screens.length > 0 && (
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {project.screens.map((s) => (
            <figure
              key={s.src}
              className="overflow-hidden rounded-lg border border-border bg-card shadow-soft"
            >
              <img src={s.src} alt={s.alt} className="w-full h-auto" loading="lazy" />
              <figcaption className="px-4 py-3 text-sm text-muted-foreground">
                <div className="font-medium">{s.alt}</div>
                {s.caption && (
                  <p className="mt-1 leading-relaxed">{s.caption}</p>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
     )}

      </div>
    </section>
  );
}
