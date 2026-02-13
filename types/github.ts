export interface GitHubLinkProps {
    repoUrl: string;
    repoName: string;
}

export interface RepoItem {
    name: string;
    type: 'file' | 'directory';
    children?: RepoItem[];
}

