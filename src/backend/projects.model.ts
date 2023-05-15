import conn from "./connection/connection";
import { Modules, Project, ProjectsPaths } from "../helpers/interfaces";
import { RowDataPacket } from "mysql2";

const ProjectModel = {
  getAll: async () => {
    const [modules] = await conn.execute<any>("SELECT route FROM projects");
    const projects = await Promise.all(modules.map(async (module: { route: string }) => {
      const { route } = module;
      const query = `SELECT * FROM ${route}`
      const [p] = await conn.execute<any>(query);
      return { [route]: p };
    }))
    const returned = (projects).reduce((acc, p) => ({ ...acc, ...p }), {})
    return returned;
  },
  getOne: async (
    id: number,
    module: Modules
  ) => {
    console.log(id)
    const query = `SELECT * FROM ${module} WHERE id = ${id}`;
    const [result] = await conn.execute<RowDataPacket[]>(query);
    return result;
  },
  getPaths: async () => {
    const [modules] = await conn.execute<RowDataPacket[]>("SELECT * FROM projects");
    return modules;
  },
};

export default ProjectModel;
