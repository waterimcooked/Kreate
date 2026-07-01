import { NextRequest, NextResponse } from "next/server";
import { verify } from "jsonwebtoken";
import { url } from "inspector";
import { verifyToken } from "./lib/auth";

export function proxy(request: NextRequest) {
    const token = request.cookies.get('auth_token')?.value
    if (!token) {
        console.log("user is not logged in")
        return NextResponse.redirect(new URL('/login', request.url))
    }
     try {
        const { success } = verifyToken(token)

        if (!success) {
            return NextResponse.redirect(new URL('/login', request.url))
        }

        console.log("user is verified!")

        return NextResponse.next()
    } catch (error) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
}

export const config = {
    matcher: [
        '/profile:path*',
        '/upload:path*'
    ]
}