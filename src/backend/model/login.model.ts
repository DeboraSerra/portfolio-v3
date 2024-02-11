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

// const LoginModel = {
//   getUser: async (id: number) => {
//     try {
//       const users = JSON.parse(
//         await fs.readFile(join(dbPath, 'login.json'), "utf-8")
//       );
//       let user = users.find((user: User) => user.id === id);
//       if (!user) return null;
//       return { ...user, avatarUrl: user.avatar_url };
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
//     id: number;
//     login: string;
//     name: string;
//     avatar_url: string;
//   }) => {
//     try {
//       const users = JSON.parse(
//         await fs.readFile(join(dbPath, 'login.json'), "utf-8")
//       );
//       users.push({ id, login, name, avatar_url });
//       await fs.writeFile(join(dbPath, 'login.json'), JSON.stringify(users));
//       return { id, login, name, avatarUrl: avatar_url };
//     } catch (error) {
//       console.log(error);
//       return { error: true, message: "Error creating user" };
//     }
//   },
// };

export default LoginModel;
