import jwt from "jsonwebtoken"
import { _registrationData } from "./types"

export async function createToken(userId : string) {
    const token = jwt.sign(
        { userId }, 
        process.env.JWT_SECRET!, 
        { expiresIn: process.env.JWT_EXPIRATION_DATE || '7d' }
    )

    console.log(token)

    return token    
}

export async function verifyToken(token : string) {
    if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET not found')
  }
  
  try {
    const isVerified = jwt.verify(token, process.env.JWT_SECRET)
    return isVerified
  } catch (err) {
    return null
  }
}

// user related

export async function registerUser( payload : _registrationData) {
  try {
    const res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })

    console.log(res)

  } catch (error) {
    
  }
}