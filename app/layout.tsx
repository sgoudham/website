import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { Footer } from "./components/Footer";

const raleway = Raleway({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Goudham - Software Engineer & Core Maintainer of Catppuccin",
  description: "Just a silly little guy living in a serious big world",
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
    title: `Goudham's Website${process.env.IS_PREVIEW ?? " (Preview)"}`,
    description: "Just a silly little guy living in a serious big world",
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
        className={`${raleway.className} latte dark:mocha bg-base dark:bg-crust text-text flex flex-col overflow-auto h-screen gap-y-10 py-10`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
