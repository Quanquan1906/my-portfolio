import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Cognitive Load Classification Pipeline",
    description:
      "A research pipeline for preprocessing physiological signals, extracting fuzzy temporal features, training ANFIS models, and performing Bayesian fusion for cognitive state recognition.",
    stack: ["Python", "ANFIS", "Bayesian Network", "Fuzzy Time Series", "NumPy"],
    href: "#",
  },
  {
    title: "Personal Research Portfolio",
    description:
      "A modern portfolio built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui — designed to showcase research publications and engineering projects with clean, accessible UI.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    href: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-border py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* ── Centered heading ───────────────────────────────────── */}
        <div className="mb-16 flex flex-col items-center gap-3 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[2px] text-border">
            ENGINEERING
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-foreground">
            Applied Projects
          </h2>
        </div>

        {/* ── 2-col project cards ─────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col overflow-hidden rounded-lg border border-border-subtle"
            >
              {/* Image placeholder */}
              <div className="flex h-52 w-full items-center justify-center border-b border-border-subtle bg-surface">
                <span className="font-mono text-[10px] text-muted-foreground/40 uppercase tracking-widest">
                  Project Preview
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <div className="mb-3 flex items-start justify-between">
                    <h3 className="text-base font-semibold leading-snug text-foreground">
                      {project.title}
                    </h3>
                    <a
                      href={project.href}
                      className="ml-3 shrink-0 text-muted-foreground transition-colors hover:text-foreground"
                      aria-label="Open project"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                  <p className="mb-5 text-sm leading-7 text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

