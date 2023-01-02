import { Modules } from "../helpers/interfaces";
import ProjectService from "./project.service";

const Projects = {
  getAll: async () => {
    const projects = await ProjectService.getAll();
    return projects;
  },
  getOne: async (
    id: number,
    module: Modules
  ) => {
    const project = await ProjectService.getOne(id, module);
    return project;
  },
  getPaths: async () => {
    const modules = await ProjectService.getPaths();
    return modules;
  },
};

export default Projects;
