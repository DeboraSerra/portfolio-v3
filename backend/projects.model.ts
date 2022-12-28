import conn from "./connection/connection";
import { Modules } from "../helpers/interfaces";

const ProjectModel = {
  getAll: async () => {
    const [fundaments] = await conn.execute<any>("SELECT * FROM fundaments");
    const [frontEnd] = await conn.execute<any>("SELECT * FROM front_end");
    const [backEnd] = await conn.execute<any>("SELECT * FROM back_end");
    const [personal] = await conn.execute<any>("SELECT * FROM personal");
    const [computerScience] = await conn.execute<any>(
      "SELECT * FROM computer_science"
    );
    return { fundaments, frontEnd, backEnd, personal, computerScience };
  },
  getOne: async (
    id: number,
    module: Modules
  ) => {
    const query = `SELECT * FROM ? WHERE id = ?`;
    const [result] = await conn.execute(query, [module, id]);
    return result;
  },
};

export default ProjectModel;
