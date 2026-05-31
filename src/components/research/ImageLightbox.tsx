"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface ImageLightboxProps {
  src: string;
  alt: string;
  children: React.ReactNode;
  className?: string;
}

export default function ImageLightbox({
  src,
  alt,
  children,
  className,
}: ImageLightboxProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Ensure portal only runs client-side
  useEffect(() => {
    setMounted(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  const overlay = (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black/90 p-4"
      style={{ backdropFilter: "blur(4px)" }}
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      {/* Close button */}
      <button
        type="button"
        onClick={close}
        className="fixed right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25"
        aria-label="Close"
      >
        <X className="h-5 w-5" />
      </button>

      {/* Image — click won't bubble to backdrop */}
      <div
        className="flex max-h-[92vh] max-w-5xl w-full items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="max-h-[92vh] max-w-full w-auto rounded-xl object-contain shadow-2xl"
        />
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={className}
      >
        {children}
      </button>

      {mounted && open && createPortal(overlay, document.body)}
    </>
  );
}

