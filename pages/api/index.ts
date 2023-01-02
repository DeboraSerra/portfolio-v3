// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Projects from "../../backend/projects.controller";
import { Modules, Project, ProjectArrays } from "../../helpers/interfaces";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id, module } = req.query;
  if (req.method === "GET" && id) {
    const data = await Projects.getOne(+id, module as Modules);
    return res.status(200).json({ data });
  }
  if (req.method === "GET") {
    const data = await Projects.getAll();
    return res.status(200).json({ data });
  }
}
