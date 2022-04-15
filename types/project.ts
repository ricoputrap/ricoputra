export type TechStack = {
  id: number,
  name: string,
  icon: string
}

export type Project = {
  id: number;
  title: string;
  cover: string;
  link: string;
  techStacks: TechStack[]
}

export type Projects = {
  data: Project[]
}