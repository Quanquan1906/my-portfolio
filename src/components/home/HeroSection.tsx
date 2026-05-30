import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-16 px-6 py-24 lg:flex-row lg:py-28"
    >
      {/* Left content */}
      <div className="flex flex-1 flex-col gap-10">
        {/* Eyebrow label */}
        <div className="flex items-center gap-4">
          <span className="text-[17px] font-semibold uppercase tracking-[2px] text-muted-foreground">
            RESEARCHER &amp; FRONTEND ENGINEER
          </span>
          <div className="h-px w-12 bg-border" />
        </div>

        {/* Heading */}
        <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-[60px] md:leading-[1.05]">
          Turning AI research into practical web-based systems.
        </h1>

        <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
          I focus on AI research and interpretable machine learning, then bring those
          ideas into real applications through frontend interfaces, backend APIs, and
          data-driven web systems.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Button asChild className="px-10 font-mono text-sm" size="lg">
            <Link href="#research">View Research</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="px-10 font-mono text-sm"
            size="lg"
          >
            <Link href="#projects">View Projects</Link>
          </Button>
        </div>
      </div>

      {/* Right avatar */}
      <div className="relative hidden shrink-0 lg:flex">
        {/* Outer rings */}
        <div className="absolute -inset-16 rounded-full border border-blue-500/10" />
        <div className="absolute -inset-7 rounded-full border border-blue-400/20" />

        {/* Blue glow */}
        <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl" />

        {/* Gradient border */}
        <div className="relative rounded-full bg-gradient-to-br from-blue-400 via-blue-600 to-cyan-400 p-[3px]">
          <div className="relative h-[430px] w-[430px] overflow-hidden rounded-full bg-card xl:h-[520px] xl:w-[520px]">
            <Image
              src="/images/portfolio.jpg"
              alt="Portrait of Minh Quân Đỗ"
              fill
              priority
              className="object-cover object-[50%_42%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}