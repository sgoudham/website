type RepositoryData = {
  name: string;
  description: string | null;
  html_url: string;
  size?: number;
  archived?: boolean;
  stargazers_count?: number;
  open_issues_count?: number;
  created_at: string | null | undefined;
  updated_at: string | null | undefined;
  topics?: string[];
};