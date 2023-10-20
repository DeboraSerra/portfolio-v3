import { ResultSetHeader, RowDataPacket } from "mysql2";
import conn from "../connection/connection";
import { User } from "../interfaces/users";

const LoginModel = {
  getUser: async (id: number) => {
    try {
      let [[user]] = await conn.execute<RowDataPacket[]>(
        `SELECT * FROM users WHERE id = ?`,
        [id]
      );
      if (!user) return null;
      return { ...user, avatarUrl: user.avatar_url } as User;
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
    id: number
    login: string;
    name: string;
    avatar_url: string;
  }) => {
    try {
      await conn.execute<ResultSetHeader>(
        `INSERT INTO users VALUES (?, ?, ?, ?)`,
        [id, login, name, avatar_url]
      );
      return { id, login, name, avatarUrl: avatar_url };
    } catch (error) {
      console.log(error);
      return { error: true, message: "Error creating user" };
    }
  },
};

export default LoginModel;
