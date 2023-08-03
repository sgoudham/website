import { fetchUserRepositories } from "@/app/lib/api";
import Link from "next/link";

export const Projects = async () => {
  const projects = await fetchUserRepositories("sgoudham");

  return (
    <section className="flex flex-col items-center gap-y-3 px-5">
      <h2 className="font-bold text-2xl lg:text-3xl xl:text-4xl text-center">My Projects</h2>
      <div className="rounded-lg text-md lg:text-lg xl:text-xl">
        <div className="flex flex-col gap-y-4">
          {projects.map((project) => (
            <Project key={project.name} project={project} />
          ))}
        </div>
      </div>
      <Link
        href="/projects"
        className="self-end font-medium text-blue underline text-md lg:text-lg xl:text-xl focus:outline-none focus:ring-1 focus:ring-blue"
      >
        (cont.)
      </Link>
    </section>
  );
};

const Project = ({ project }: { project: RepositoryData }) => {
  return (
    <a
      href={project.html_url}
      className="dark:bg-base bg-mantle rounded-xl focus:outline-none focus:ring-1 focus:ring-blue ring-offset-0 shadow-lg hover:shadow-2xl hover:scale-105 p-3"
    >
      <span className="font-semibold hover:underline">{project.name}</span>
      {project.description && (
        <p className="text-sm lg:text-md xl:text-lg text-overlay1 dark:text-subtext0">
          {project.description}
        </p>
      )}
    </a>
  );
};
