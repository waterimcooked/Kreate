import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

import { getUser, createUser } from '@/lib/data'
import { _registrationData } from '@/lib/types'

export async function GET(req: NextRequest) {
  const res = getUser(req)
  return NextResponse.json({res})
}

// user related

export async function POST(req: NextRequest) { // create new
  const payload: _registrationData = await req.json()

  const res = createUser(payload)
  return NextResponse.json(res)
}