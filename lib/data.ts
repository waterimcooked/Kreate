"use server"

import { verifyToken } from "@/lib/auth";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";

export async function getProfile(payload :any) {
    let handle = payload.handle

    if (handle.startsWith('@')) {
        handle = handle.slice(1)
    }

    try {
        const res = await fetch(`${process.env.RELATIVE_URL}/api/profiles?handle=${handle}`, {
            headers: { "Content-Type": "application/json" },
        })
        
        // console.log("fetch response:", res)
        
        const data = await res.json()
        console.log("data:", data)
        
        return data.profile
    } catch (error) {
        console.log("couldn't get profile for handle... " + error)
    }
}

export async function getMyProfile() {
    const cookieStore = await cookies()
        const token = cookieStore.get('auth_token')?.value
    
        if (!token) {
          return { error: 'invalid token', status: 401 }
        }
    
        try {
          const { profileId } = verifyToken(token)
    
          const profile = await prisma.profiles.findUnique({
              where: { id: profileId }
          })
    
          if (!profile) {
            return Response.json({ error: 'profile not found' }, { status: 404 })
          }

          return profile
        } catch (error) {
          return { error: 'invalid token', status: 401 }
    }
}