export interface ProjectsItems {
  title: string;
  image?: string;
  description: string;
  skill: string;
  date: number | string;
  type: string;
  language: string[];
  link?: { github?: string; watch?: string };
  endDate?: number;
}
