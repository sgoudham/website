import "dotenv/config";
import { Octokit, RequestError } from "octokit";

const octokit = new Octokit({
  auth: process.env.READ_ONLY_TOKEN,
});

export const fetchUserRepositories = async (
  username: string
): Promise<RepositoryData[]> => {
  return await octokit.paginate(
    octokit.rest.repos.listForUser,
    {
      username: username,
      per_page: 100,
    },
    (response) =>
      response.data
        .filter((data) => !data.fork)
        .sort((a, b) => (b.stargazers_count ?? 0) - (a.stargazers_count ?? 0))
        .map((data) => {
          return {
            name: data.name,
            description: data.description,
            html_url: data.html_url,
            size: data.size,
            archived: data.archived,
            stargazers_count: data.stargazers_count,
            open_issues_count: data.open_issues,
            created_at: data.created_at,
            updated_at: data.updated_at,
            topics: data.topics,
          };
        })
  );
};
