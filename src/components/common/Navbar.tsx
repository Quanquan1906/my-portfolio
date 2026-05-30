import Link from "next/link";
import { Button } from "../ui/button";

const navItems = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "About",
        href: "/about"
    },
    {
        label: "Projects",
        href: "/projects"
    },
    {
        label: "Contact",
        href: "/contact"
    }
];
export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
            <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                <Link href="/" className="font-semibold tracking-tight">
                    Minh Quân Đỗ
                </Link>

                <div className="hidden items-center gap-6 md:flex">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm text-muted-foreground transition hover:text-foreground"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                <Button asChild size="sm">
                    <Link href="/contact">Contact Me</Link>
                </Button>
            </nav>
        </header>
    );
}