import "dotenv/config";
import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.REPOS_READ_ONLY,
});

export const fetchUserRepositories = async (): Promise<RepositoryData[]> => {
  return await octokit.paginate(
    octokit.rest.repos.listForAuthenticatedUser,
    {
      per_page: 100,
      visibility: "public",
      affiliation: "owner",
    },
    (response) =>
      response.data.map((data) => {
        return {
          name: data.name,
          description: data.description,
          html_url: data.html_url,
          size: data.size,
          archived: data.archived,
          fork: data.fork,
          stargazers_count: data.stargazers_count,
          open_issues_count: data.open_issues,
          created_at: data.created_at,
          updated_at: data.updated_at,
          topics: data.topics,
        };
      })
  );
};
