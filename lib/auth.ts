import jwt from "jsonwebtoken"
import { _registrationData } from "./types"
import { NextResponse } from "next/server"

async function verifyEmail(email: string) {
  const res = await fetch(`/api/users?type=single&column=email&value=${email}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })

  console.log(res)

  if (res.ok) {
    return {
      available: false
    }

  } else {
    return {
      available: true
    }
  }
}

export async function createToken(userId : string, profileId : string) {
    const token = jwt.sign(
        { userId, profileId }, 
        process.env.JWT_SECRET!, 
        { expiresIn: process.env.JWT_EXPIRATION_DATE || '7d' }
    )

    console.log("created token: ", token)

    return token    
}

export function verifyToken(token : string) {
    if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET not found')
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET) as {
      userId: string
      profileId: string
      iat: number
      exp: number
    }

    return { success: true, userId: decoded.userId, profileId: decoded.profileId }
  } catch (err) {
    return { success: false, token: null }
  }
}