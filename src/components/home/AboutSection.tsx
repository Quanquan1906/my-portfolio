import { Brain, Activity, Code2, Layers } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ExpertiseCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

const expertise: ExpertiseCard[] = [
  {
    icon: Brain,
    title: "Interpretable AI",
    description:
      "Designing transparent ML systems that explain their reasoning through fuzzy logic and Bayesian inference.",
  },
  {
    icon: Activity,
    title: "Signal Processing",
    description:
      "Extracting cognitive patterns from physiological signals for AI-based classification systems.",
  },
  {
    icon: Code2,
    title: "Frontend Engineering",
    description:
      "Building clean, responsive interfaces with Next.js, React, TypeScript, and Tailwind CSS.",
  },
  {
    icon: Layers,
    title: "Full-Stack Systems",
    description:
      "Connecting AI workflows with backend APIs, databases, and web-based applications.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* ── Top row: label + description ─────────────────────────── */}
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
              <span className="font-semibold text-foreground">
                AI research
              </span>{" "}
              with{" "}
              <span className="font-semibold text-foreground">
                practical engineering
              </span>{" "}
              to turn complex ideas into usable web-based systems. My work
              focuses on{" "}
              <span className="text-blue-300 font-medium">
                Interpretable Machine Learning
              </span>
              ,{" "}
              <span className="text-blue-300 font-medium">
                Physiological Signal Analysis
              </span>
              ,{" "}
              <span className="text-blue-300 font-medium">Fuzzy Systems</span>
              , and{" "}
              <span className="text-blue-300 font-medium">
                Bayesian Reasoning
              </span>{" "}
              — while applying{" "}
              <span className="font-semibold text-foreground">
                Frontend Engineering
              </span>{" "}
              and{" "}
              <span className="font-semibold text-foreground">
                Backend-integrated Applications
              </span>{" "}
              to make those systems accessible in real products.
            </p>
          </div>
        </div>

        {/* ── Bottom: 4 expertise cards ────────────────────────────── */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
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
          ))}
        </div>
      </div>
    </section>
  );
}

