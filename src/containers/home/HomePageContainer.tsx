import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePageContainer() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-6xl flex-col justify-center px-6 py-20">
      <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
        Researcher & Frontend Engineer
      </p>

      <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
        I build interpretable AI systems and modern web applications.
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
        I am a researcher working on cognitive load classification and a
        frontend engineer experienced with Next.js, React, TypeScript, and
        backend-integrated applications.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Button asChild>
          <Link href="/research">View Research</Link>
        </Button>

        <Button asChild variant="outline">
          <Link href="/projects">View Projects</Link>
        </Button>
      </div>
    </section>
  );
}