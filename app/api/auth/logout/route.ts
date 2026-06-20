import { NextRequest, NextResponse } from "next/server";
import { _loginData } from "@/lib/types";
import { prisma } from '@/lib/prisma'
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { createToken } from "@/lib/auth";

export async function POST(req: NextRequest) {
    console.log("logging the user out...")

    const cookie = await cookies()
    cookie.delete("auth_token")

    return NextResponse.json(
        { success: false }
    )
}