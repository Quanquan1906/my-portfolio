import { Brain, Activity, Code2, Layers } from "lucide-react";

const expertise = [
  {
    icon: Brain,
    title: "Interpretable AI",
    description:
      "Designing transparent ML models that explain their reasoning through fuzzy logic and Bayesian inference.",
  },
  {
    icon: Activity,
    title: "Signal Processing",
    description:
      "Extracting cognitive features from EEG and physiological signals for real-time classification systems.",
  },
  {
    icon: Code2,
    title: "Frontend Engineering",
    description:
      "Building fast, accessible interfaces with Next.js, React, TypeScript, and Tailwind CSS.",
  },
  {
    icon: Layers,
    title: "Full-Stack Systems",
    description:
      "Architecting backend-integrated applications with API routes, Prisma, PostgreSQL, and Supabase.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* ── Top row: heading + description ──────────────────────── */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Left 1/3: eyebrow heading */}
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[2px] text-border">
              ABOUT
            </span>
            <div className="mt-8 h-px w-full bg-border" />
          </div>

          {/* Right 2/3: description */}
          <div className="md:col-span-2">
            <p className="text-base leading-8 text-muted-foreground">
              I combine research thinking with practical engineering. My work
              spans{" "}
              <strong className="text-foreground">
                Interpretable Machine Learning
              </strong>
              ,{" "}
              <strong className="text-foreground">
                Physiological Signal Analysis
              </strong>
              ,{" "}
              <strong className="text-foreground">Fuzzy Systems</strong>, and{" "}
              <strong className="text-foreground">Bayesian Reasoning</strong>{" "}
              — alongside building clean, scalable{" "}
              <strong className="text-foreground">Frontend Engineering</strong>{" "}
              and{" "}
              <strong className="text-foreground">
                Backend-integrated Applications
              </strong>
              .
            </p>
          </div>
        </div>

        {/* ── Bottom: 4 expertise cards ────────────────────────────── */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-lg border border-border-subtle bg-surface p-6"
            >
              <Icon className="mb-4 h-6 w-6 text-muted-foreground" />
              <h3 className="mb-2 text-sm font-semibold leading-snug text-foreground">
                {title}
              </h3>
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

