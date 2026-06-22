import { NextResponse } from "next/server"
import { _loginData, _registrationData, _profileGetInput } from "./types"

export async function logout() {
    try {
        const res = fetch('/api/auth/logout', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: ""
        })
    } catch (error) {
        console.log("ERORROOROROR", error)
    }
}

export async function login(payload: _loginData) {
    try {
        const res = await fetch('/api/auth/login', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        })

        if (!res.ok) {
            return NextResponse.json({
                success: false
            })
        }

        const params = new URLSearchParams(window.location.search)
        const redirect = params.get('redirect') || '/'
        
        window.location.href = redirect

        return NextResponse.json({
            success: true
        })
    } catch (error) {
        return NextResponse.json({
            success: false
        })
    }
}

export async function register(payload: _registrationData) {
    console.log("ooo yep we're abt to register yeah")
    
    try {
        const res = await fetch('/api/users', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        })

        const data = await res.json()

        if (!data.success) {
            console.log("error.")

            return NextResponse.json({
                success: false,
                error: "well shit idk"
            })
        }

        console.log(data)

        window.location.href = '/'

        return data
    } catch (error: any) {
        console.log("couldn't register user: " + error.message)
    }
}

// server sided?

export async function getProfile(payload: _profileGetInput) {
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

export async function getTokenData() {
    try {
        const res = await fetch('/api/profiles/me')
        const data = await res.json()
        return data
    } catch (error) {
        console.error(error)
  }
}