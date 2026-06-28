"use server"

import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { createToken } from '@/lib/auth'
import { verifyToken } from "@/lib/auth";

import bcrypt from 'bcryptjs'

import { NextRequest, NextResponse } from "next/server";

import { _profileData, _registrationData } from "./types";
import { Payload } from "@prisma/client/runtime/client";
import { stringify } from "querystring";
import jwt from "jsonwebtoken";

// helpers

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

async function doubleHandleCheck(handle: string) {
  const user = await prisma.profiles.findUnique({
    where: { handle: handle }
  })

  if (!user) {
    return { available: true }
  } else {
    return { available: false }
  }
}

// user route

export async function getUser(req: NextRequest) {
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

      console.log(user)

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

export async function createUser(payload: _registrationData) {
    const body = payload

    try {
      const doubleHandle = await doubleHandleCheck(body.handle)
      const doubleEmail = await doubleEmailCheck(body.email)
      
      if (!doubleEmail.available) {
        console.log("email is already used!")
        return NextResponse.json(
          { 
            success: false,
            reason: "email is already used!"
          }
        )
      }

      if (!doubleHandle.available) {
        console.log("handle is already used!")
        return NextResponse.json(
          { 
            success: false,
            reason: "handle is already used!"
          }
        )
      }

      const hashedPassword = await bcrypt.hash(body.password, 10)

      const user = await prisma.users.create({
        data: {
            email: body.email,
            password: hashedPassword
        }
      })

      const profile = await prisma.profiles.create({
        data: {
          user_id: user.id,
          handle: body.handle,
          name: body.name
        }
      })

      const token = await createToken(user.id, profile.id)
      const cookie = await cookies()
      cookie.set('auth_token', token, {
        httpOnly: true,
        secure: true,
        path: '/',
        maxAge: 7 * 24 * 60 * 60
      })

      console.log("created a token and set for the user AND created a user id")

      return NextResponse.json({
        success: true,
        userId: user.id,
      }, {
        status: 201,
      })
    } catch (error) {
        console.log("error, couldn't register this user lmao: " + error)

         return NextResponse.json({ 
      received: body,
      success: false
     })
  }
}

export async function getProfile({handle} : {handle: string}) {
    if (typeof handle !== 'string') {
        return { error: `handle must be a string, got ${typeof handle}` }
    }

    if (handle.startsWith('@')) {
        handle = handle.slice(1)
    }

    try {
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
    } catch (error) {
        console.log("couldn't get profile for handle... " + error)
    }
}

export async function updateProfile({ profileId, profileData } :  { profileId: string, profileData: _profileData }) {
    console.log(profileData)

    try {
        const res = await prisma.profiles.update({
            where: { id: profileId },
            data: {
                name: profileData.name,
                handle: profileData.handle,
                bio: profileData.bio,
                avatar: profileData.avatar,
            }
        })

        return { success: true, data: res }
    } catch (error) {
        return { error: "error for some reason " + error, success: false }
    }
}

export async function getMyProfile() {
    const cookieStore = await cookies()
    const token = cookieStore.get('auth_token')?.value

    if (!token) {
        return { error: 'invalid token', status: 401 }
    }

    try {
        const { profileId } = await verifyToken(token)

        const profile = await prisma.profiles.findUnique({
            where: { id: profileId }
        })

        if (!profile) {
            return { success: false, error: 'profile not found', status: 404 }
        }

        return { profile: profile, success: true }
    } catch (error) {
        return { error: 'invalid token', status: 401 }
    }
}