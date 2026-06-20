import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./lib/auth";
import { verify } from "jsonwebtoken";
import { url } from "inspector";

export function proxy(request: NextRequest) {
    const token = request.cookies.get('auth_token')?.value
    if (!token) {
        console.log("user is not logged in")
        return NextResponse.redirect(new URL('/login', request.url))
    }
     try {
        const res = verify(token, process.env.JWT_SECRET!)

        console.log("user is logged in")
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