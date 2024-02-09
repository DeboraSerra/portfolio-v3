import LoginController from "@/backend/controller/login.controller";
import jwtDecode from "jwt-decode";
import { NextApiResponse } from "next";
import { NextRequest } from "next/server";

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
    return res.redirect("/").send({ error, message });
  }
  res.setHeader(
    "Set-Cookie",
    `token=${token}; Path=/; max-age=${cookieExpiresInSec};`
  );
  // redirect to user invoices url
  const user_id = (jwtDecode(token as string) as any).id;
  return res.redirect(`/profile/${user_id}/invoices-control`);
  // return res.redirect("/");
}
