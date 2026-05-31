import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import SiteShell from "@/components/common/SiteShell";
import MotionProvider from "@/components/common/MotionProvider";

export const metadata: Metadata = {
  title: "Minh Quân Đỗ | Researcher & Frontend Engineer",
  description:
    "Personal portfolio of Minh Quân Đỗ, a researcher and frontend engineer working on interpretable AI systems and modern web applications.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <MotionProvider>
          <SiteShell>{children}</SiteShell>
        </MotionProvider>
      </body>
    </html>
  );
}