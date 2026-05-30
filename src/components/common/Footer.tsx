import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-8">
      <Separator className="mb-6" />

      <div className="flex flex-col gap-2 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>© 2026 Minh Quân Đỗ. All rights reserved.</p>
        <p>Researcher · Frontend Engineer · Backend-capable Developer</p>
      </div>
    </footer>
  );
}