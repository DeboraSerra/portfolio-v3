import { sql } from "@vercel/postgres";
import { Modules } from "../../helpers/interfaces";

const ProjectModel = {
  getAll: async () => {
    const { rows: modules } = await sql`SELECT route FROM projects`;
    const projects = await Promise.all(
      modules.map(async (module) => {
        const { route } = module;
        const query = `SELECT * FROM ${route}`;
        const { rows: p } = await sql`${query}`;
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

// const ProjectModel = {
//   getAll: async () => {
//     const files = (await fs.readdir(dbPath)).filter(
//       (file) => file !== "login.json" && file.endsWith(".json")
//     );
//     const modules = files.map((file) => file.replace(".json", ""));
//     const projects = await Promise.all(
//       files.map(async (file, i) => {
//         const data = JSON.parse(await fs.readFile(join(dbPath, file), "utf-8"));
//         return { [modules[i]]: data };
//       })
//     );
//     const returned = projects.reduce((acc, p) => ({ ...acc, ...p }), {});
//     return returned;
//   },
//   getOne: async (id: number, module: Modules) => {
//     const data = JSON.parse(
//       await fs.readFile(join(dbPath, `${module}.json`), "utf-8")
//     );
//     const result = data.find((item: { id: number }) => item.id === id);
//     return result;
//   },
//   getByModule: async (module: Modules) => {
//     const data = JSON.parse(
//       await fs.readFile(join(dbPath, `${module}.json`), "utf-8")
//     );
//     return data;
//   },
//   getPaths: async () => {
//     const files = (await fs.readdir(dbPath))
//       .filter((file) => file !== "login.json" && file.endsWith(".json"))
//       .map((file) => file.replace(".json", ""));
//     return files;
//   },
// };

export default ProjectModel;
