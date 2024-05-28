import { sql } from "@vercel/postgres";

const LoginModel = {
  getUser: async (id: number) => {
    try {
      const { rows: [user] } = await sql`SELECT * FROM users WHERE id = ${id}`;
      if (!user) return null;
      return { ...user, avatarUrl: user.avatar_url } as any;
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
      await sql`INSERT INTO users (id, login, name, avatar_url) VALUES (${id}, ${login}, ${name}, ${avatar_url})`;
      return { id, login, name, avatarUrl: avatar_url };
    } catch (error) {
      console.log(error);
      return { error: true, message: "Error creating user" };
    }
  },
};

export default LoginModel;
