import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./lib/auth";

export function proxy(request: NextRequest) {
    const token = request.cookies.get('auth_token')?.value
    const decoded = verifyToken(token)

    if (!decoded) {
        return NextResponse.redirect(new URL('/login', request.url))
    } else {
        return NextResponse.next()
    }
}

export const config = {
    matcher: [
        '/browse/:path*', 
        '/api/commissions/:path*',
        '/browse:path*',
    ]
}