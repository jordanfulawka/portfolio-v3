export interface Project {
  name: string;
  header: string;
  description: string;
  tags: string[];
  repoLink: string;
  liveLink?: string;
}

export interface Experience {
  header: string;
  title: string;
  minor?: string;
  description: string;
}
