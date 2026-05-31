"use client";

import { Brain, Activity, Code2, Layers, Workflow, Cpu } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/common/Reveal";

interface ExpertiseCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

const expertise: ExpertiseCard[] = [
  {
    icon: Brain,
    title: "AI Research",
    description:
      "Exploring AI methods and research ideas that can solve meaningful problems and support better decision-making.",
  },
  {
    icon: Cpu,
    title: "AI Application Development",
    description:
      "Turning research concepts into practical workflows, prototypes, and web-based applications.",
  },
  {
    icon: Code2,
    title: "Frontend Engineering",
    description:
      "Building clean, responsive, and user-friendly interfaces with modern frontend technologies.",
  },
  {
    icon: Layers,
    title: "Full-Stack Integration",
    description:
      "Connecting frontend interfaces, backend APIs, databases, and AI workflows into complete systems.",
  },
];
export default function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* ── Top row: label + description ─────────────────────────── */}
        <Reveal>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Left 1/3: eyebrow + divider */}
          <div>
            <span className="text-[17px] font-semibold uppercase tracking-[2px] text-blue-400/70">
              ABOUT
            </span>
            <div className="mt-4 h-px w-full bg-gradient-to-r from-blue-500/40 to-transparent" />
          </div>

          {/* Right 2/3: description */}
          <div className="md:col-span-2">
            <p className="text-base leading-8 text-muted-foreground">
              I combine{" "}
              <span className="font-semibold text-foreground">AI research</span>{" "}
              with{" "}
              <span className="font-semibold text-foreground">
                practical engineering
              </span>{" "}
              to build web-based systems that are useful, understandable, and easy to
              interact with. My work connects{" "}
              <span className="font-medium text-blue-300">research ideas</span>,{" "}
              <span className="font-medium text-blue-300">AI-driven solutions</span>, and{" "}
              <span className="font-medium text-blue-300">modern web development</span>{" "}
              through frontend interfaces, backend integration, and product-oriented
              implementation.
            </p>
          </div>
        </div>
        </Reveal>

        {/* ── Bottom: 4 expertise cards ────────────────────────────── */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delay={index * 0.08}>
            <div
              className="group relative rounded-2xl border border-border-subtle bg-surface/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-500/5 hover:shadow-[0_0_40px_rgba(37,99,235,0.15)]"
            >
              {/* Subtle inner glow on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(circle_at_top_left,rgba(59,130,246,0.07),transparent_60%)]" />

              {/* Icon */}
              <div className="mb-5 inline-flex rounded-xl bg-blue-500/10 p-2.5 text-blue-300 transition-colors duration-300 group-hover:bg-blue-500/20">
                <Icon className="h-5 w-5" />
              </div>

              {/* Title */}
              <h3 className="mb-2 text-sm font-semibold leading-snug text-foreground transition-colors duration-300 group-hover:text-blue-100">
                {title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-6 text-muted-foreground">
                {description}
              </p>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

