const skillGroups = [
  {
    category: "RESEARCH & AI",
    skills: [
      "Machine Learning",
      "Fuzzy Time Series",
      "ANFIS",
      "Bayesian Network",
      "Physiological Signal Processing",
      "Cognitive Load Classification",
    ],
  },
  {
    category: "INTERFACES",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
    ],
  },
  {
    category: "INFRASTRUCTURE",
    skills: [
      "Next.js API Routes",
      "REST API",
      "Prisma",
      "PostgreSQL",
      "Supabase",
      "Python / PyTorch",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 pb-48">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* ── Left 1/4: label ──────────────────────────────────── */}
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[2px] text-border">
              TECHNICAL STACK
            </span>
            <div className="mt-8 h-px w-full bg-border" />
          </div>

          {/* ── Right 3/4: 3-col skill groups ──────────────────────── */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 md:col-span-3">
            {skillGroups.map(({ category, skills }) => (
              <div key={category}>
                <p className="mb-5 text-xs font-bold uppercase tracking-[1.2px] text-muted-foreground">
                  {category}
                </p>
                <ul className="space-y-3">
                  {skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-3 text-sm text-foreground/80"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-border" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

