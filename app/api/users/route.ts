import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { _registrationData } from '@/lib/types'
import { createToken } from '@/lib/auth'
import { cookies } from 'next/headers'

async function doubleEmailCheck(email: string) {
  const user = await prisma.users.findUnique({
    where: { email: email }
  })

  if (!user) {
    return {
      available: true
    }
  } else {
    return {
      available: false
    }
  }
}

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  
  const column = searchParams.get("column")
  const type = searchParams.get("type")
  const value = searchParams.get("value")

  try {
    if (!type) {
      return NextResponse.json(
        { error: "type param required" },
        { status: 400 }
      )
    }

    if (type === "all") {
      const users = await prisma.users.findMany()
      return NextResponse.json({ users })
    }

    if (type === "single") {
      if (!column || !value) {
        return NextResponse.json(
          { error: "column and value required for type=single" },
          { status: 400 }
        )
      }

      const user = await prisma.users.findFirst({
        where: { [column]: value }
      })

      if (!user) {
        return NextResponse.json(
          { error: "user not found" },
          { status: 404 }
        )
      }

      return NextResponse.json({ user })
    }

    return NextResponse.json(
      { error: "invalid type. must be 'all' or 'single'" },
      { status: 400 }
    )

  } catch (error) {
    console.error("error:", error)
    return NextResponse.json(
      { error: "server error" },
      { status: 500 }
    )
  }
}

// user related

export async function POST(req: NextRequest) { // create new
  const body : _registrationData = await req.json()
  console.log("yoo this is from the API, check it out:" + JSON.stringify(body))

    try {
      const doubleEmail = await doubleEmailCheck(body.email)
      
      if (!doubleEmail.available) {
        console.log("email is already used!")
        return NextResponse.json(
          { 
            success: false,
            reason: "email is already used!"
          }
        )
      } else {
        const user = await prisma.users.create({
          data: {
              name: body.name,
              email: body.email,
              password: body.password
          }
        })

        const token = await createToken(user.id)
        const cookie = await cookies()
        cookie.set('auth_token', token, {
          httpOnly: true,
          secure: true,
          path: '/',
          maxAge: 7 * 24 * 60 * 60
        })

        console.log("created a token and set for the user")

        return NextResponse.json({
          success: true,
          userId: user.id,
        }, {
          status: 201,
        })
      }
    } catch (error) {
        console.log("error, couldn't register this user lmao: " + error)

         return NextResponse.json({ 
      received: body,
      success: false
     })
  }
}