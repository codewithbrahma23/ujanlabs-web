import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/providers/theme-provider";

export const metadata: Metadata = {
  title: "Ujan Labs",
  description:
    "Trusted digital solutions for schools, businesses and communities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
/**When the page first loads:
Server renders:
Light
Browser remembers:
Dark
There can be a brief mismatch.
suppressHydrationWarning tells React that this difference is expected while the theme initializes. */
