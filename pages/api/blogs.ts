import { NextApiRequest, NextApiResponse } from "next"
import blogs from "../../data/blogs.json";
import { Blogs } from "../../types/blog";

export default (req: NextApiRequest, res: NextApiResponse<Blogs>) => {
  res.status(200).json({
    data: blogs
  })
}