import fs from "fs/promises";
import { Modules } from "../../helpers/interfaces";

// const ProjectModel = {
//   getAll: async () => {
//     const [modules] = await conn.execute<any>("SELECT route FROM projects");
//     const projects = await Promise.all(
//       modules.map(async (module: { route: string }) => {
//         const { route } = module;
//         const query = `SELECT * FROM ${route}`;
//         const [p] = await conn.execute<any>(query);
//         return { [route]: p };
//       })
//     );
//     const returned = projects.reduce((acc, p) => ({ ...acc, ...p }), {});
//     return returned;
//   },
//   getOne: async (id: number, module: Modules) => {
//     const query = `SELECT * FROM ${module} WHERE id = ${id}`;
//     const [result] = await conn.execute<RowDataPacket[]>(query);
//     return result;
//   },
//   getByModule: async (module: Modules) => {
//     const query = `SELECT * FROM ${module}`;
//     const [result] = await conn.execute<RowDataPacket[]>(query);
//     return result;
//   },
//   getPaths: async () => {
//     const [modules] = await conn.execute<any>("SELECT * FROM projects");
//     return modules;
//   },
// };

const ProjectModel = {
  getAll: async () => {
    const files = (await fs.readdir("src/backend/db")).filter(
      (file) => file !== "login.json"
    );
    const modules = files
      .filter((file) => file.endsWith(".json"))
      .map((file) => file.replace(".json", ""));
    const projects = await Promise.all(
      files.map(async (file, i) => {
        const data = JSON.parse(
          await fs.readFile(`src/backend/db/${file}`, "utf-8")
        );
        return { [modules[i]]: data };
      })
    );
    const returned = projects.reduce((acc, p) => ({ ...acc, ...p }), {});
    return returned;
  },
  getOne: async (id: number, module: Modules) => {
    const data = JSON.parse(
      await fs.readFile(`src/backend/db/${module}.json`, "utf-8")
    );
    const result = data.find((item: { id: number }) => item.id === id);
    return result;
  },
  getByModule: async (module: Modules) => {
    const data = JSON.parse(
      await fs.readFile(`src/backend/db/${module}.json`, "utf-8")
    );
    return data;
  },
  getPaths: async () => {
    const files = (await fs.readdir("src/backend/db"))
      .filter((file) => file !== "login.json" && file.endsWith(".json"))
      .map((file) => file.replace(".json", ""));
    return files;
  },
};

export default ProjectModel;
