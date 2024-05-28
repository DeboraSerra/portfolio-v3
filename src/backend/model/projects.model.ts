import { sql } from "@vercel/postgres";
import { Modules } from "../../helpers/interfaces";

const ProjectModel = {
  getAll: async () => {
    const { rows: modules } = await sql`SELECT route FROM projects`;
    const projects = await Promise.all(
      modules.map(async (module) => {
        const { route } = module;
        const query = `SELECT * FROM ${route}`;
        const { rows: p } = await sql.query(query);
        return { [route]: p };
      })
    );
    const returned = projects.reduce((acc, p) => ({ ...acc, ...p }), {});
    return returned;
  },
  getOne: async (id: number, module: Modules) => {
    const query = `SELECT * FROM ${module} WHERE id = ${id}`;
    const {
      rows: [result],
    } = await sql.query(query);
    return result;
  },
  getByModule: async (module: Modules) => {
    const query = `SELECT * FROM ${module}`;
    const { rows } = await sql.query(query);
    return rows;
  },
  getPaths: async () => {
    const { rows: modules } = await sql`SELECT * FROM projects`;
    return modules;
  },
};

export default ProjectModel;
