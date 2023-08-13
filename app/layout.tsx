import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { Footer } from "./components/Footer";

const raleway = Raleway({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Goudham Suresh",
  description:
    "I am a software engineer by day, and an open source enthusiast by night. Welcome to my corner of the internet where I write about my experiences, projects, and more.",
  keywords: ["Next.js", "React", "Typescript", "Catppuccin", "Goudham"],
  colorScheme: "light dark",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_IS_PREVIEW
      ? "https://preview.goudham.com"
      : "https://goudham.com"
  ),
  openGraph: {
    url: process.env.NEXT_PUBLIC_IS_PREVIEW
      ? "https://preview.goudham.com"
      : "https://goudham.com",
    title: `Goudham Suresh${
      process.env.NEXT_PUBLIC_IS_PREVIEW ? " (Preview)" : ""
    }`,
    description:
      "I am a software engineer by day, and an open source enthusiast by night. Welcome to my corner of the internet where I write about my experiences, projects, and more.",
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
        className={`${raleway.className} latte dark:mocha bg-base dark:bg-crust text-text flex flex-col h-screen overflow-auto space-y-10 pb-10`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
