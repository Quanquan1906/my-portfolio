"use client";

import { useInView, useReducedMotion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";
import { useRef } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
}

export default function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.6,
  y = 24,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const shouldReduce = useReducedMotion();

  const style: CSSProperties = {
    opacity: isInView ? 1 : 0,
    transform: isInView ? "none" : `translateY(${shouldReduce ? 0 : y}px)`,
    transition: shouldReduce
      ? "none"
      : `opacity ${duration}s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform ${duration}s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

