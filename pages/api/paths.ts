import { NextApiRequest, NextApiResponse } from "next";
import Projects from "../../backend/projects.controller";

const getPaths = async (req: NextApiRequest,
  res: NextApiResponse) => {
  const data = await Projects.getPaths();
  res.status(200).json({ data })
}

export default getPaths;