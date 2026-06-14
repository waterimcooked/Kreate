import jwt from "jsonwebtoken"

export function createToken(userId : string) {
    const token = jwt.sign(
        { userId }, 
        process.env.JWT_SECRET!, 
        { expiresIn: process.env.JWT_EXPIRATION_DATE || '7d' }
    )

    console.log(token)

    return token    
}

export function verifyToken(token : string) {
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