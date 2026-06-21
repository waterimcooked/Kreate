import { NextResponse, NextRequest } from "next/server";
import { _profileGetInput } from "@/lib/types";
import { prisma } from "@/lib/prisma"

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    let handle = searchParams.get('handle')

    console.log("yooo whats up from the profiles api " + req)

    if (!handle) {
        console.log("no handle!")

        return NextResponse.json({
            success: false,
            reason: "handle is required"
        }, { status: 400 })
    }

    try {
        const profile = await prisma.profiles.findUnique(
            { where: { handle: handle } }
        )

        console.log(profile)

        if (!profile) {
            console.log("couldn't find profile for handle: " + handle)
        }

        return NextResponse.json({ 
            success: true,
            profile: profile
         })
    } catch (error) {
        console.log("error!" + error)

        return {
            success: false,
            error: error
        }
    }
}