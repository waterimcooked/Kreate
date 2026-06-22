import { NextResponse, NextRequest } from "next/server";
import { verifyToken } from "@/lib/auth";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
    const cookieStore = await cookies()
  const token = cookieStore.get('auth_token')?.value

  if (!token) {
    return NextResponse.json({ error: 'not authenticated' }, { status: 401 })
  }

  try {
    const { profileId } = verifyToken(token)

    const profile = await prisma.profiles.findUnique({
        where: { id: profileId }
    })

    if (!profile) {
      return Response.json({ error: 'profile not found' }, { status: 404 })
    }

    return Response.json({ profile })
  } catch (error) {
    return NextResponse.json({ error: 'invalid token' }, { status: 401 })
  }
}