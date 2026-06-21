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

        if (data.success) {
            console.log("YOOO WE GOT IT, SETTING AUTH_TOKEN")
            return data
        } else {
            console.log("error.")
        }
    } catch (error: any) {
        console.log("couldn't register user: " + error.message)
    }
}

export async function getProfile(payload: _profileGetInput) {
    console.log("getting profile: " + payload.handle)

    try {
        
        const res = fetch('/api/profiles', {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        })

        if (!res.success) {
            console.log("error getting profile")
        }

        return res.profile
    } catch (error) {
        console.log("couldn't get profile for handle... " + payload.handle)
    }
}