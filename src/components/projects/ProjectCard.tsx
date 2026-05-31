import { Link2, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types/project";

function getLinkIcon(label: string) {
  const lower = label.toLowerCase();
  if (lower.includes("demo") || lower.includes("live")) {
    return <ExternalLink className="h-3.5 w-3.5" />;
  }
  return <Link2 className="h-3.5 w-3.5" />;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, category, role, description, techStack, highlights, links } =
    project;

  return (
    <article className="group relative flex flex-col rounded-2xl border border-border-subtle bg-surface/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-500/5 hover:shadow-[0_0_40px_rgba(37,99,235,0.15)]">
      {/* Subtle inner glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(circle_at_top_left,rgba(59,130,246,0.06),transparent_60%)]" />

      {/* Category badge */}
      <div className="mb-4">
        <span className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[1px] text-blue-300">
          {category}
        </span>
      </div>

      {/* Title */}
      <h3 className="mb-1 text-lg font-semibold leading-snug text-foreground transition-colors duration-300 group-hover:text-blue-50">
        {title}
      </h3>

      {/* Role */}
      <p className="mb-4 font-mono text-xs text-muted-foreground/70">{role}</p>

      {/* Description */}
      <p className="mb-5 text-sm leading-7 text-muted-foreground">
        {description}
      </p>

      {/* Highlights */}
      {highlights && highlights.length > 0 && (
        <ul className="mb-5 space-y-1">
          {highlights.map((h) => (
            <li
              key={h}
              className="flex items-start gap-2 text-sm text-muted-foreground"
            >
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-blue-400/60" />
              {h}
            </li>
          ))}
        </ul>
      )}

      {/* Tech stack */}
      <div className="mt-auto flex flex-wrap gap-2 pt-1">
        {techStack.map((tech) => (
          <Badge key={tech} variant="outline">
            {tech}
          </Badge>
        ))}
      </div>

      {/* Links */}
      {links && links.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-4 border-t border-border-subtle pt-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wide text-muted-foreground transition-colors hover:text-blue-300"
            >
              {getLinkIcon(link.label)}
              {link.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
