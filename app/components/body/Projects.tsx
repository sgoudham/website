import { fetchUserRepositories } from "@/app/lib/api";
import Link from "next/link";

export const Projects = async () => {
  const projects = await fetchUserRepositories("sgoudham");

  return (
    <section className="flex flex-col items-center gap-y-3 mx-3">
      <h2 className="font-semibold text-xl text-center">My Projects</h2>
      <div className="rounded-lg">
        <div className="flex flex-col gap-y-4">
          {projects.map((project) => (
            <Project key={project.name} project={project} />
          ))}
        </div>
      </div>
      <Link
        href="/projects"
        className="self-end font-medium text-blue underline text-md"
      >
        (cont.)
      </Link>
    </section>
  );
};

const Project = ({ project }: { project: RepositoryData }) => {
  return (
    <div className="dark:bg-base bg-mantle rounded-xl hover:ring-blue hover:ring ring-offset-0 shadow-xl p-3">
      <a href={project.html_url} className="hover:underline font-bold">
        {project.name}
      </a>
      {project.description && (
        <p className="text-sm text-overlay1 dark:text-subtext0">
          {project.description}
        </p>
      )}
    </div>
  );
};
