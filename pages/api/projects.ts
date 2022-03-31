import { NextApiRequest, NextApiResponse } from "next"
import projects from "../../data/projects.json"
import { Projects } from "../../types/project"

export default (req: NextApiRequest, res: NextApiResponse<Projects>) => {
  res.status(200).json({
    data: projects
  })
}