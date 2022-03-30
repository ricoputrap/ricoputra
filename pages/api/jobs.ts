import { NextApiRequest, NextApiResponse } from "next"
import jobs from "../../data/jobs.json";

type Job = {
  id: number,
  title: string,
  company: string,
  start: string,
  end?: string
}

type Jobs = {
  data: Job[] 
}

export default (req: NextApiRequest, res: NextApiResponse<Jobs>) => {
  res.status(200).json({
    data: jobs
  });
}