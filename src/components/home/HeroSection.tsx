import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="mx-auto flex max-w-7xl items-center justify-between gap-12 px-6 py-28"
    >
      {/* ── Left content ────────────────────────────────────────────── */}
      <div className="flex flex-1 flex-col gap-10">
        {/* Eyebrow label */}
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-semibold uppercase tracking-[2px] text-border">
            RESEARCHER &amp; FRONTEND ENGINEER
          </span>
          <div className="h-px w-12 bg-border" />
        </div>

        {/* Heading */}
        <h1 className="max-w-146 text-5xl font-bold leading-tight tracking-tight md:text-[60px] md:leading-15">
          Crafting
          <br />
          interpretable
          <br />
          AI architectures &amp;
          <br />
          interfaces.
        </h1>

        {/* Description */}
        <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
          Specializing in the intersection of Human-Computer Interaction,
          Machine Learning, and explainable architectures to bridge the gap
          between complex data and human intuition.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Button asChild className="px-10 font-mono text-sm" size="lg">
            <Link href="#research">Selected Research</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="px-10 font-mono text-sm"
            size="lg"
          >
            <Link href="#projects">Engineering Works</Link>
          </Button>
        </div>
      </div>

      {/* ── Right: circular avatar ────────────────────────────────── */}
      <div className="relative hidden shrink-0 lg:flex">
        {/* Outer rings */}
        <div className="absolute -inset-12 rounded-full border border-border/20" />
        <div className="absolute -inset-5 rounded-full border border-border/40" />
        {/* Avatar circle */}
        <div className="relative flex h-96 w-96 items-center justify-center overflow-hidden rounded-full border border-border bg-surface">
          <span className="font-mono text-xs text-muted-foreground">PROFILE</span>
        </div>
      </div>
    </section>
  );
}

