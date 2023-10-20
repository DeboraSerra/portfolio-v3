import LoginController from "@/backend/controller/login.controller";
import { NextRequest, NextResponse } from "next/server";

const PROFILE_URL = "http://localhost:3000";
const HOME_URL = "http://localhost:3000";

export default async function authRoute(req: NextRequest, res: NextResponse) {
  const url = req.url;
  const code = url.match(/code=([^&]*)/)?.[1];

  const registerResponse = await LoginController.getUser(
    { ...req, body: { code } } as any,
    res
  );

  const { token, error, message } = registerResponse;

  const cookieExpiresInSec = 60 * 60 * 24 * 30; // 30 days

  if (error) {
    NextResponse.redirect(HOME_URL);
    return;
  }

  NextResponse.redirect(PROFILE_URL, {
    headers: {
      "Set-Cookie": `token=${token}; Path=/; max-age=${cookieExpiresInSec};`,
    },
  });
  return;
}
