import { NextRequest, NextResponse } from "next/server";
import { _loginData } from "@/lib/types";
import { prisma } from '@/lib/prisma'
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { createToken } from "@/lib/auth";

export async function POST(req: NextRequest) {
    const body : _loginData = await req.json()

    try {
        const profile = await prisma.profiles.findUnique({
            where: {handle: body.handle},
            include: { user: true }
        })

        if (!profile) {
            return NextResponse.json({
                success: false, error: "profile couldn't be found"
            })
        }

        if (!profile.user) {
            return NextResponse.json({
                success: false, error: "user couldn't be found"
            })
        }

        console.log(profile.user, body)

        const userPass = profile.user.password
        const passwordVerified = await bcrypt.compare(body.password, userPass!)

        if (!passwordVerified) {
            return NextResponse.json({
                success: false, error: 'invalid password'
            }, {
                status: 401
            })
        }

        console.log("user is now logged into: " + profile.name)
            
        const token = await createToken(profile.user.id)
        const cookie = await cookies()
        cookie.set('auth_token', token, {
            httpOnly: true,
            secure: true,
            path: '/',
            maxAge: 7 * 24 * 60 * 60
        })

        return NextResponse.json({
            success: true,
            userId: profile.user.id
        })

    } catch (error) {
        console.log("error: " + error)

        return NextResponse.json({
            success: false,
            error: error
        }, {
            status: 500
        })
    }
}