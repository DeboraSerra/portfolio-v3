import jwt from "jsonwebtoken";
import { z } from "zod";
import LoginModel from "../model/login.model";

const JWT_SECRET = process.env.JWT_SECRET || "secret";

const LoginService = {
  getUser: async (userResponse: { data: {} }) => {
    const userSchema = z.object({
      id: z.number(),
      login: z.string(),
      name: z.string(),
      avatar_url: z.string().url(),
    });

    const { id, login, name, avatar_url } = userSchema.parse(userResponse.data);

    let user:
      | { id: number; login: string; name: string; avatarUrl: string }
      | { error: boolean; message: string }
      | null = await LoginModel.getUser(id);
    if (!user) {
      user = await LoginModel.createUser({ id, login, name, avatar_url });
    }

    if (!user || "error" in user) {
      return { error: true, message: "Error creating user" };
    }

    const token = jwt.sign(
      {
        id: user.id,
        login: user.login,
        name: user.name,
        avatarUrl: user.avatarUrl,
      },
      JWT_SECRET,
      {
        expiresIn: "30d",
      }
    );

    return { token };
  },
};

export default LoginService;
