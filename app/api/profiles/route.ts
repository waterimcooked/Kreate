import { NextResponse, NextRequest } from "next/server";
import { _profileGetInput } from "@/lib/types";

import { updateProfile, uploadAvatar } from "@/lib/data";
import { verifyToken } from "@/lib/auth";

export async function PATCH(req: NextRequest) {
    const token = req.cookies.get('auth_token')?.value
    if (!token) {
        return { success: false, error: 'not authenticated to do this action!' }
    }

    const tokenRes = await verifyToken(token)
    if (!tokenRes.success) {
        return { success: false, error: 'token has already expired!' }
    }

    const body = await req.json()
    let profileData = body.payload

    console.log("success, updating the thing now", profileData)

    const uploadRes = await uploadAvatar({ file: profileData.avatar, profileId: tokenRes.profileId! })
    const res = await updateProfile({ profileId: tokenRes.profileId!, profileData: { avatar: profileData.avatar.name, ... }})

    console.log(uploadRes, res)

    return NextResponse.json({ success: true, result: res })
}