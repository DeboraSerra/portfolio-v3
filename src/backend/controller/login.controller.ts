import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import LoginService from "../service/login.service";

const LoginController = {
  getUser: async (req: NextRequest, res: NextResponse) => {
    const bodySchema = z.object({
      code: z.string(),
    });

    const { code } = bodySchema.parse(req.body);
    const accessTokenResponse = await axios.post(
      "https://github.com/login/oauth/access_token",
      null,
      {
        params: {
          code,
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
        },
        headers: {
          Accept: "application/json",
        },
      }
    );

    const { access_token } = accessTokenResponse.data;

    const userResponse = await axios.get("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    const { token, error, message } = await LoginService.getUser(userResponse);

    if (error) return { error, message };
    
    return { token };
  },
};

export default LoginController;
