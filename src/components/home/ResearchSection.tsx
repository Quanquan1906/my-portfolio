"use client";

import { publications } from "@/data/publications";
import ResearchCard from "@/components/research/ResearchCard";
import Reveal from "@/components/common/Reveal";

export default function ResearchSection() {
  return (
    <section id="research" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* ── Section heading row ──────────────────────────────── */}
        <Reveal>
        <div className="mb-16 flex items-end gap-12">
          <div className="shrink-0">
            <p className="mb-3 text-[17px] font-semibold uppercase tracking-[2px] text-blue-400/70">
              PUBLICATIONS
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-foreground">
              Selected Research
            </h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
              A selection of my accepted research works across AI, cognitive load
              classification, and AI-assisted software development.
            </p>
          </div>
          <div className="mb-1.5 flex-1 border-b border-gradient-to-r from-blue-500/30 to-transparent border-border/50" />
        </div>
        </Reveal>

        {/* ── Publication cards ─────────────────────────────────── */}
        <div className="flex flex-col gap-6">
          {publications.map((pub, index) => (
            <Reveal key={pub.title} delay={index * 0.1}>
              <ResearchCard publication={pub} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

