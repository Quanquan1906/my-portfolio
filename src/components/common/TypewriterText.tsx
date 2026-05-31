"use client";

import { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number;
  startDelay?: number;
  showCursor?: boolean;
}

export default function TypewriterText({
  text,
  className,
  speed = 35,
  startDelay = 700,
  showCursor = true,
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText("");

    let currentIndex = 0;
    let intervalId: ReturnType<typeof setInterval> | null = null;

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        currentIndex += 1;
        setDisplayedText(text.slice(0, currentIndex));

        if (currentIndex >= text.length && intervalId) {
          clearInterval(intervalId);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);

      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [text, speed, startDelay]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && (
        <span className="ml-1 inline-block animate-pulse text-blue-400">
          |
        </span>
      )}
    </span>
  );
}