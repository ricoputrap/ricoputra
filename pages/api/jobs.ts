import { NextApiRequest, NextApiResponse } from "next";
import jobsData from "../../data/jobs.json"

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(jobsData);
}

export default handler;