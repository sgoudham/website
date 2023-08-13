import { fetchUserRepositories } from "../lib/api";
import { Project } from "../components/Projects";
import { Text } from "../components/utils/Text";
import { H1 } from "../components/utils/Titles";
import { NavBar } from "../components/Navigation";

export default async function Projects() {
  const projects = await fetchUserRepositories().then((res) =>
    res
      .filter((data) => !data.fork)
      .sort((a, b) => (b.stargazers_count ?? 0) - (a.stargazers_count ?? 0))
  );

  return (
    /* Inherits from the RootLayout */
    <div className="flex flex-col">
      <NavBar />
      <div className="self-center max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-4xl flex flex-col space-y-10 grow">
        <H1>All Projects</H1>
        <div className="flex flex-col mx-3 gap-3 text-center">
          <Text>
            Here&apos;s a list of all my public projects, they are sorted by
            most starred. Note that some projects are still under development
            and/or unfinished, but I&apos;d like to get around to finishing them
            at some point in the future!
          </Text>
          <Text>
            I promise I&apos;ll implement sorting options soon
            <span className="text-blue font-bold">™</span>
          </Text>
        </div>
        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-y-4 gap-x-6 px-5">
          {projects.map((project) => (
            <div
              key={project.name}
              className="rounded-lg text-md lg:text-lg xl:text-xl flex justify-center"
            >
              <Project key={project.name} project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
