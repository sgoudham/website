import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects by Goudham Suresh",
  openGraph: {
    url: process.env.NEXT_PUBLIC_IS_PREVIEW
      ? "https://preview.goudham.com/projects"
      : "https://goudham.com/projects",
    title: `Projects by Goudham Suresh${
      process.env.NEXT_PUBLIC_IS_PREVIEW ? " (Preview)" : ""
    }`,
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
