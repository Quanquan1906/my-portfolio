import Link from "next/link";
import { Button } from "../ui/button";

const navLinks = [
  { label: "About",    href: "#about"    },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact"  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-base font-bold tracking-tight text-foreground"
        >
          MINH QUÂN ĐỔ
        </Link>

        {/* Nav Links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="font-mono text-2xl tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Button asChild variant="outline" size="xl" className="hidden md:inline-flex">
          <Link href="#contact">Contact Me</Link>
        </Button>
      </nav>
    </header>
  );
}
