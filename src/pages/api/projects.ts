// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import ProjectModel from '@/backend/model/projects.model'
import { ProjectArrays } from '@/helpers/interfaces';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProjectArrays>
) {
  if (req.method === "GET") {
    const projects = await ProjectModel.getAll();
    return res.status(200).json(projects);
  }
}
