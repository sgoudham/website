import { fetchUserRepositories } from "../lib/api";
import { Project } from "../components/Projects";
import { Text } from "../components/utils/Text";
import { H1 } from "../components/utils/Titles";
import { StyledLink } from "../components/utils/StyledLink";

export default async function Page() {
  const projects = await fetchUserRepositories().then((res) =>
    res
      .filter((data) => !data.fork && !data.archived)
      .sort((a, b) => (b.stargazers_count ?? 0) - (a.stargazers_count ?? 0))
  );

  return (
    <div className="self-center max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-4xl flex flex-col gap-y-10 grow">
      <H1>All Projects</H1>
      <div className="text-center">
        <Text>
          All my public projects, sorted from the highest starred to the lowest!
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
      <div className="flex justify-center">
        <StyledLink href="/" className="text-center">
          Return Home
        </StyledLink>
      </div>
    </div>
  );
}
