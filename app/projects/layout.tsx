import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects by Goudham Suresh",
  description:
    "I am a software engineer by day, and an open source enthusiast by night. This is my corner of the internet where I write about my experiences, projects, and more.",
  openGraph: {
    url: process.env.NEXT_PUBLIC_IS_PREVIEW
      ? "https://preview.goudham.com/projects"
      : "https://goudham.com/projects",
    title: `Projects by Goudham Suresh${
      process.env.NEXT_PUBLIC_IS_PREVIEW ? " (Preview)" : ""
    }`,
    description:
      "I am a software engineer by day, and an open source enthusiast by night. This is my corner of the internet where I write about my experiences, projects, and more.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
