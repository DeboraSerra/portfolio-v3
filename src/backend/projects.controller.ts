import { Modules, Project, ProjectArrays, ProjectsPaths } from "../helpers/interfaces";
import ProjectService from "./project.service";

const Projects = {
  getAll: async () => {
    const projects = await ProjectService.getAll();
    return projects as unknown as ProjectArrays;
  },
  getOne: async (
    id: number,
    module: Modules
  ) => {
    const project = await ProjectService.getOne(id, module);
    return project as unknown as Project;
  },
  getByModule: async (
    module: Modules
  ) => {
    const projects = await ProjectService.getByModule(module);
    return projects as unknown as Project[];
  },
  getPaths: async () => {
    const modules = await ProjectService.getPaths();
    return modules as unknown as ProjectsPaths[];
  },
};

export default Projects;
