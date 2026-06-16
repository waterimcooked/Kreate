import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { _registrationData } from '@/lib/types'

export async function GET(req: NextRequest) {
    const users = await prisma.user.findMany()
    return NextResponse.json({users})
}

export async function POST(req: NextRequest) {
    const body : _registrationData = await req.json()
    console.log("yoo this is from the API, check it out:" + JSON.stringify(body))

    try {
        const res = await prisma.user.create({
            data: {
                name: body.name,
                email: body.email,
                password: body.password
            }
        })

        console.log(res)
    } catch (error) {
        console.log("error, couldn't register this user lmao: " + error)
    }

    return NextResponse.json({ received: body })
}