import { NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server'

export default async function GET(req: NextRequest, res: NextApiResponse) {
  res.setHeader('Set-Cookie', 'token=; Path=/; max-age=0;')
  return res.redirect('/')
}
