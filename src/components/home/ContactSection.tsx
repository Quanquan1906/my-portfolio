import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-lg border border-border-subtle bg-surface px-8 py-16 md:px-16">
          <div className="mx-auto flex max-w-xl flex-col items-center gap-8 text-center">
            {/* Eyebrow */}
            <p className="text-[10px] font-semibold uppercase tracking-[2px] text-border">
              COLLABORATION
            </p>

            {/* Heading */}
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl md:leading-12">
              Discussing the future
              <br />
              of human-AI synergy.
            </h2>

            {/* Description */}
            <p className="text-lg leading-7 text-muted-foreground">
              Always open to research opportunities, open-source projects, or
              engineering challenges that push technical boundaries.
            </p>

            {/* CTA */}
            <Button
              asChild
              className="mt-2 px-12 font-mono text-xs uppercase tracking-[1.2px]"
              size="lg"
            >
              <Link href="mailto:doquan19062004@gmail.com">
                INITIATE CONNECTION
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

