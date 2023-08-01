import { fetchUserRepositories } from "@/app/lib/api";

export const Projects = async () => {
  const projects = await fetchUserRepositories("sgoudham");

  return (
    <section>
      <h2 className="font-extrabold text-xl mb-2 text-center">My Projects</h2>
      <div className="overflow-y-scroll scroll-smooth rounded-lg">
        <div className="ml-3 mr-3 flex flex-col space-y-6">
          {projects.map((project) => (
            <Project key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Project = ({ project }: { project: RepositoryData }) => {
  return (
    <div className="dark:bg-base bg-mantle rounded-xl hover:shadow-pink-500 shadow-xl hover:shadow-lg pl-3 pt-1 pb-1 hover:duration-200">
      <a href={project.html_url} className="hover:underline font-bold">
        {project.name}
      </a>
      {project.description && (
        <p className="text-sm mt-1 text-overlay1 dark:text-subtext0">{project.description}</p>
      )}
    </div>
  );
};
