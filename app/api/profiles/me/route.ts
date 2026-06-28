import { NextResponse, NextRequest } from "next/server";
import { verifyToken } from "@/lib/auth";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";

import { getMyProfile } from "@/lib/data";

export async function GET(req: NextRequest) {
    const profile = getMyProfile()
    return profile
}