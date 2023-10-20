import { NextRequest, NextResponse } from 'next/server'

const HOME_URL = "http://localhost:3000";

export async function GET(req: NextRequest) {

  return NextResponse.redirect(HOME_URL, {
    headers: {
      'Set-Cookie': 'token=; Path=/; max-age=0;',
    },
  })
}
