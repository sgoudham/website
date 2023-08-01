import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Goudham - Software Engineer & Core Maintainer of Catppuccin",
  description: "Just a silly little guy living in a serious big world.",
  metadataBase: new URL("https://goudham.com"),
  openGraph: {
    url: "https://goudham.com",
    title: "Goudham's Website",
    description: "Just a silly little guy living in a serious big world.",
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
        className={`${raleway.className} flex flex-col h-screen space-y-4 items-center latte dark:mocha bg-base dark:bg-crust text-text`}
      >
        {children}
      </body>
    </html>
  );
}
