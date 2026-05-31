"use client";

import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import Reveal from "@/components/common/Reveal";

export default function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-border py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* ── Section heading ─────────────────────────────────────── */}
        <Reveal>
        <div className="mb-16 flex items-end gap-12">
          <div className="shrink-0">
            <p className="mb-3 text-[17px] font-semibold uppercase tracking-[2px] text-blue-400/70">
              PROJECTS
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-foreground">
              Selected Projects
            </h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
              Projects I have built from full-stack systems to frontend
              applications.
            </p>
          </div>
          <div className="mb-1.5 flex-1 border-b border-border/50" />
        </div>
        </Reveal>

        {/* ── Project cards ────────────────────────────────────────── */}
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.1}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

  

