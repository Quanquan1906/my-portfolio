import Link from "next/link";

const socialLinks = [
  { label: "GITHUB",   href: "https://github.com/minhdoqua" },
  { label: "LINKEDIN", href: "https://linkedin.com/in/minhdoqua" },
  { label: "EMAIL",    href: "mailto:doquan19062004@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-12">
        {/* Logo */}
        <span className="text-base font-bold tracking-tight text-foreground">
          MINH QUÂN ĐỖ
        </span>

        {/* Copyright */}
        <p className="font-mono text-[10px] tracking-[1px] text-muted-foreground/60">
          © 2026&nbsp;/&nbsp;ENGINEERED FOR RESEARCH
        </p>

        {/* Social links */}
        <div className="flex items-center gap-6">
          {socialLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="font-mono text-[10px] tracking-[1px] text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

