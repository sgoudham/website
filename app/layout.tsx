import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Goudham Suresh",
  description:
    "Software Engineer at the BBC, Core Maintainer for Catppuccin. Ultimately trying to write code that I don't hate and take photos that I'm proud of.",
  keywords: ["Next.js", "React", "Typescript", "Catppuccin", "Goudham"],
  colorScheme: "light dark",
  metadataBase: new URL("https://goudham.com"),
  openGraph: {
    url: "https://goudham.com",
    title: `Goudham Suresh`,
    description:
      "Software Engineer at the BBC, Core Maintainer for Catppuccin. Ultimately trying to write code that I don't hate and take photos that I'm proud of.",
    locale: "en_GB",
  },
  twitter: {
    creator: "@RealGoudham",
    card: "summary_large_image",
  },
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#11111b" },
    { media: "(prefers-color-scheme: light)", color: "#eff1f5" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} latte dark:mocha bg-base dark:bg-crust text-text flex flex-col h-screen pt-12`}
      >
        {children}
      </body>
    </html>
  );
}
