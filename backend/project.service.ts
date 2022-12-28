import { Modules } from "../helpers/interfaces";
import ProjectModel from "./projects.model";

const ProjectService = {
  getAll: async () => {
    const projects = await ProjectModel.getAll();
    return projects;
  },
  getOne: async (
    id: number,
    module: Modules
  ) => {
    const project = await ProjectModel.getOne(id, module);
    return project;
  },
};

export default ProjectService;
