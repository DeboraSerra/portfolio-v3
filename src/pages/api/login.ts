import LoginController from "@/backend/controller/login.controller";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

const PROFILE_URL = "http://localhost:3000";
const HOME_URL = "http://localhost:3000";

export default async function authRoute(
  req: NextRequest,
  res: NextApiResponse
) {
  const url = req.url;
  const code = url.match(/code=([^&]*)/)?.[1];

  const registerResponse = await LoginController.getUser({
    ...req,
    body: { code },
  } as any);

  const { token, error, message } = registerResponse;

  const cookieExpiresInSec = 60 * 60 * 24 * 30; // 30 days

  if (error) {
    return res.redirect(HOME_URL).send({ error, message });
  }
  res.setHeader('Set-Cookie', `token=${token}; Path=/; max-age=${cookieExpiresInSec};`)
  return res.redirect(PROFILE_URL)
}
