"use client"

import { useState } from "react"
import Button from "./Button"
import Link from "next/link"
import { login } from "@/lib/api"

import { useRouter } from "next/navigation"

export default function LoginPage() {
    const [ handle, setHandle ] = useState("")
    const [ password, setPassword ] = useState("")

    function handleHandle(e: any) {
        const v = e.target.value
        setHandle(v)
    }

    function handlePassword(e: any) {
        const v = e.target.value
        setPassword(v)
    }

    async function handleLogin() {
        const res = login({handle, password})

        if (res.success) {
            console.log("successfully logged in")
        } else {
            console.log("error.")
        }
    }

    return (
        <div className="flex flex-col justify-center w-dvw h-screen">
            <div className="flex flex-col justify-center items-center h-full w-full" id="Main">
                <h1 className="font-outfit text-mocha-500 mt-8 text-shadow-black/40">
                    log into kreate right now please
                </h1>

                <div className="flex justify-center w-168 h-102 bg-mocha-600 rounded shadow mt-8 p-4" id="login thing">
                    <div className="flex flex-col h-full w-150 mr-2" id="left">
                        <div className="w-full h-24 p-4" id="email-part">
                            <h1 className="font-outfit text-mocha-900">Email or Handle <span className="text-mocha-200">*</span> </h1>
                            <input type="text" value={handle} onChange={handleHandle} className="w-full bg-mocha-400 rounded-lg p-2 font-outfit" name="user" />
                        </div>

                        <div className="w-full h-24 p-4" id="password-part">
                            <h1 className="font-outfit text-mocha-900">Password <span className="text-mocha-200">*</span> </h1>
                            <input type="text" value={password} onChange={handlePassword} className="w-full bg-mocha-400 rounded-lg p-2 font-outfit" name="password" />
                        </div>

                        <div className="flex flex-col justify-center items-center w-full h-48 p-4 mt-8">
                            <Button className="w-full h-12 bg-cozy-400 rounded font-outfit" onClick={handleLogin}>
                                <h1 className="font-outfit text-lg text-mocha-950">
                                    Log In
                                </h1>
                            </Button>

                            <div className="mt-8 flex flex-col justify-center items-center">
                                <h1 className="font-outfit text-mocha-900">
                                no account yet? <span> <Link className="select-none cursor-pointer text-red-100 font-bold text-center" href={"/register"}>register</Link>
                                </span>
                                    
                            </h1>

                            <h1 className="font-outfit text-mocha-900">
                                forgot your password? <span>
                                    <Link className="select-none cursor-pointer text-red-100 font-bold text-center" href={"/register"}>email verification</Link>
                                </span>
                            </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}