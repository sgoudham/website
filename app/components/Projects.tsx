import { fetchUserRepositories } from "@/app/lib/api";
import { Star } from "./icons/Star";
import Link from "next/link";
import { H2 } from "./utils/Titles";
import { ExternalLink } from "./icons/ExternalLink";
import { Archived } from "./icons/Archived";

export const Projects = async () => {
  const projects = await fetchUserRepositories().then((res) =>
    res
      .filter(
        (data) =>
          !data.fork &&
          data.name !== "uwuifyy" &&
          data.name !== "Enso-Bot" &&
          !data.archived
      )
      .sort((a, b) => (b.stargazers_count ?? 0) - (a.stargazers_count ?? 0))
      .slice(0, 6)
  );

  return (
    <section className="flex flex-col items-center space-y-3 px-5">
      <H2>Favourite Projects</H2>
      <div className="rounded-lg text-md lg:text-lg xl:text-xl">
        <div className="flex flex-col space-y-4">
          {projects.map((project) => (
            <Project key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const Project = ({ project }: { project: RepositoryData }) => {
  return (
    <Link
      rel="noopener noreferrer"
      target="_blank"
      href={project.html_url}
      className="bg-base w-full rounded-xl outline-2 outline-mantle focus:ring-2 focus:ring-blue ring-offset-0 shadow-lg hover:scale-105 motion-safe:duration-300 p-3"
    >
      <div className="flex flex-col space-y-1 h-full justify-between">
        <div>
          <span className="font-semibold hover:underline">
            {project.name}&#8201;
            <ExternalLink />
          </span>
          {project.description && (
            <div className="text-sm lg:text-md xl:text-lg text-subtext1">
              {project.description}
            </div>
          )}
        </div>
        <div className="self-end flex flex-row gap-x-1">
          {project.archived && (
            <p className="text-md font-medium bg-mantle rounded-xl px-3">
              <Archived />
            </p>
          )}
          <p className="text-md font-medium bg-mantle rounded-xl px-3">
            {project.stargazers_count} <Star />
          </p>
        </div>
      </div>
    </Link>
  );
};
