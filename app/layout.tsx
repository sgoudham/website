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
    "Software Engineer @ BBC, Finalist for Scottish Graduate Apprentice of the Year 2023, and Core Maintainer @ Catppuccin",
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
      "Software Engineer @ BBC, Finalist for Scottish Graduate Apprentice of the Year 2023, and Core Maintainer @ Catppuccin",
    locale: "en_GB",
  },
  twitter: {
    creator: "@RealGoudham",
    card: "summary_large_image",
  },
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
