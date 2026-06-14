import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
    const users = await prisma.user.findMany()
    return NextResponse.json({users})
}

export async function POST(req: NextRequest) {
    const body = await req.json()
    console.log(body)

    return NextResponse.json({ received: body })
}