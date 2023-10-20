// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import ProjectModel from "@/backend/model/projects.model";
import { ProjectsPaths } from "@/helpers/interfaces";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProjectsPaths[]>
) {
  if (req.method === "GET") {
    const routes = await ProjectModel.getPaths();
    return res.status(200).json(routes);
  }
}
