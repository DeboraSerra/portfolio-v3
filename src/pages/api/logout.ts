import { NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server'

const HOME_URL = process.env.NEXT_PUBLIC_HOME_URL ?? "http://localhost:3000";

export default async function GET(req: NextRequest, res: NextApiResponse) {
  res.setHeader('Set-Cookie', 'token=; Path=/; max-age=0;')
  return res.redirect('/')
}
