import { NextApiRequest, NextApiResponse } from "next"
import projects from "../../data/projects.json"

type TechStack = {
  id: number,
  name: string,
  icon: string
}

type Project = {
  id: number;
  title: string;
  cover: string;
  techStacks: TechStack[]
}

type Projects = {
  data: Project[]
}

export default (req: NextApiRequest, res: NextApiResponse<Projects>) => {
  res.status(200).json({
    data: projects
  })
}