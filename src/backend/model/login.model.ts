import fs from "fs/promises";
import { User } from "../interfaces/users";

// const LoginModel = {
//   getUser: async (id: number) => {
//     try {
//       let [[user]] = await conn.execute<RowDataPacket[]>(
//         `SELECT * FROM users WHERE id = ?`,
//         [id]
//       );
//       if (!user) return null;
//       return { ...user, avatarUrl: user.avatar_url } as User;
//     } catch (error) {
//       console.log(error);
//       return { error: true, message: "Error getting user" };
//     }
//   },
//   createUser: async ({
//     id,
//     login,
//     name,
//     avatar_url,
//   }: {
//     id: number
//     login: string;
//     name: string;
//     avatar_url: string;
//   }) => {
//     try {
//       await conn.execute<ResultSetHeader>(
//         `INSERT INTO users VALUES (?, ?, ?, ?)`,
//         [id, login, name, avatar_url]
//       );
//       return { id, login, name, avatarUrl: avatar_url };
//     } catch (error) {
//       console.log(error);
//       return { error: true, message: "Error creating user" };
//     }
//   },
// };

const LoginModel = {
  getUser: async (id: number) => {
    try {
      const users = JSON.parse(
        await fs.readFile("src/backend/db/login.json", "utf-8")
      );
      let user = users.find((user: User) => user.id === id);
      if (!user) return null;
      return { ...user, avatarUrl: user.avatar_url };
    } catch (error) {
      console.log(error);
      return { error: true, message: "Error getting user" };
    }
  },
  createUser: async ({
    id,
    login,
    name,
    avatar_url,
  }: {
    id: number;
    login: string;
    name: string;
    avatar_url: string;
  }) => {
    try {
      const users = JSON.parse(
        await fs.readFile("src/backend/db/login.json", "utf-8")
      );
      users.push({ id, login, name, avatar_url });
      await fs.writeFile("src/backend/db/login.json", JSON.stringify(users));
      return { id, login, name, avatarUrl: avatar_url };
    } catch (error) {
      console.log(error);
      return { error: true, message: "Error creating user" };
    }
  },
};

export default LoginModel;
