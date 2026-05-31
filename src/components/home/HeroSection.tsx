"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import Reveal from "@/components/common/Reveal";
import TypewriterText from "@/components/common/TypewriterText";

export default function HeroSection() {

  return (
    <section
      id="home"
      className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-16 px-6 py-24 lg:flex-row lg:py-28"
    >
      {/* Left content — plain div so the h1/typewriter is never inside an opacity-animated container */}
      <div className="flex flex-1 flex-col gap-10">
        {/* Eyebrow label */}
        <Reveal delay={0.05} y={16}>
          <div className="flex items-center gap-4">
            <span className="text-[17px] font-semibold uppercase tracking-[2px] text-muted-foreground">
              RESEARCHER &amp; FRONTEND ENGINEER
            </span>
            <div className="h-px w-12 bg-border" />
          </div>
        </Reveal>

        {/* Heading — TypewriterText IS the reveal; no Reveal wrapper */}
        <h1 className="min-h-36 max-w-4xl text-5xl font-bold leading-tight tracking-tight md:min-h-50 md:text-[60px] md:leading-[1.05]">
          <TypewriterText
            text="Turning AI research into practical web-based systems."
            speed={35}
            startDelay={700}
          />
        </h1>

        {/* Description */}
        <Reveal delay={1.5} y={12}>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            I focus on AI research and interpretable machine learning, then bring those
            ideas into real applications through frontend interfaces, backend APIs, and
            data-driven web systems.
          </p>
        </Reveal>

        {/* CTA Buttons */}
        <Reveal delay={1.65} y={12}>
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
        </Reveal>
      </div>

{/* Right avatar */}
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{
    duration: 0.7,
    delay: 0.5,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="relative hidden shrink-0 lg:flex"
>
  <div className="avatar-bounce relative">
    {/* Outer rings */}
    <motion.div
      animate={{
        scale: [1, 1.06, 1],
        opacity: [0.25, 0.65, 0.25],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute -inset-16 rounded-full border border-blue-500/20"
    />

    <motion.div
      animate={{
        scale: [1, 1.04, 1],
        opacity: [0.35, 0.85, 0.35],
      }}
      transition={{
        duration: 2.6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute -inset-7 rounded-full border border-blue-400/30"
    />

    {/* Blue glow */}
    <motion.div
      animate={{
        opacity: [0.18, 0.38, 0.18],
        scale: [1, 1.08, 1],
      }}
      transition={{
        duration: 3.2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute inset-0 rounded-full bg-blue-500/25 blur-3xl"
    />

    {/* Gradient border + image */}
    <div className="relative rounded-full bg-gradient-to-br from-blue-400 via-blue-600 to-cyan-400 p-[3px] shadow-[0_0_80px_rgba(37,99,235,0.25)]">
      <div className="relative h-[430px] w-[430px] overflow-hidden rounded-full bg-card xl:h-[520px] xl:w-[520px]">
        <Image
          src="/images/portfolio.jpg"
          alt="Portrait of Minh Quân Đỗ"
          fill
          priority
          sizes="(max-width: 1280px) 430px, 520px"
          className="object-cover object-[50%_42%]"
        />
      </div>
    </div>
  </div>
</motion.div>
    </section>
  );
}
