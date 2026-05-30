import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const papers = [
  {
    status: "Under Review",
    title:
      "Fuzzy Bayesian Network for Cognitive Load Classification from Physiological Signals",
    authors: "Minh Quân Đỗ et al.",
    year: "2025",
    description:
      "An interpretable framework for classifying cognitive load from physiological signals using Fuzzy Time Series, ANFIS, and Bayesian Network fusion. Targets real-time, explainable decision making for cognitive assessment systems.",
    tags: [
      "Cognitive Load",
      "Fuzzy Time Series",
      "ANFIS",
      "Bayesian Network",
      "Physiological Signals",
      "XAI",
    ],
    href: "#",
  },
  {
    status: "In Progress",
    title:
      "Explainable Feature Extraction from EEG Signals Using Adaptive Neuro-Fuzzy Inference",
    authors: "Minh Quân Đỗ",
    year: "2026",
    description:
      "Developing an adaptive neuro-fuzzy pipeline for extracting interpretable temporal features from EEG signals, enabling transparent classification of mental workload states.",
    tags: ["EEG", "ANFIS", "Feature Extraction", "Mental Workload", "Explainability"],
    href: "#",
  },
];

export default function ResearchSection() {
  return (
    <section id="research" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* ── Section heading row ──────────────────────────────── */}
        <div className="mb-16 flex items-end gap-12">
          <div className="shrink-0">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[2px] text-border">
              PUBLICATIONS
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-foreground">
              Selected Research
            </h2>
          </div>
          <div className="mb-1.5 flex-1 border-b border-border" />
        </div>

        {/* ── Research cards ────────────────────────────────────── */}
        <div className="flex flex-col gap-6">
          {papers.map((paper) => (
            <div
              key={paper.title}
              className="relative rounded-lg border border-border-subtle p-8"
            >
              {/* External link icon */}
              <a
                href={paper.href}
                className="absolute right-8 top-8 text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Open paper"
              >
                <ExternalLink className="h-5 w-5" />
              </a>

              {/* Badge + meta */}
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <Badge variant="secondary">{paper.status}</Badge>
                <span className="font-mono text-xs text-muted-foreground">
                  {paper.authors} · {paper.year}
                </span>
              </div>

              {/* Title */}
              <h3 className="mb-4 max-w-3xl pr-8 text-xl font-semibold leading-snug text-foreground">
                {paper.title}
              </h3>

              {/* Description */}
              <p className="mb-6 max-w-3xl text-sm leading-7 text-muted-foreground">
                {paper.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {paper.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

