"use client"

import { useState } from "react"
import Button from "./Button"
import Link from "./Link"

import { useRouter } from "next/navigation"

export default function LoginPage() {
    const router = useRouter()

    function redirectToRegister() {
        router.push("/register")
    }

    // bg-gray-200/50

    return (
        <div className="flex flex-col justify-center w-dvw h-screen">
            <div className="flex flex-col justify-center items-center h-full w-full" id="Main">
                <h1 className="font-outfit text-mocha-500 mt-8 text-shadow-black/40">
                    log into kreate right now please
                </h1>

                <div className="flex justify-center w-168 h-102 bg-mocha-600 rounded shadow mt-8 p-4" id="login thing">

                    <div className="flex flex-col h-full w-150 mr-2" id="left">
                        <div className="w-full h-24 p-4" id="email-part">
                            <h1 className="font-outfit text-mocha-900">Email or Username <span className="text-mocha-200">*</span> </h1>
                            <input type="text" className="w-full bg-mocha-400 rounded-lg p-2 font-outfit" name="user" />
                        </div>

                        <div className="w-full h-24 p-4" id="password-part">
                            <h1 className="font-outfit text-mocha-900">Password <span className="text-mocha-200">*</span> </h1>
                            <input type="text" className="w-full bg-mocha-400 rounded-lg p-2 font-outfit" name="password" />
                        </div>

                        <div className="flex flex-col justify-center items-center w-full h-48 p-4 mt-8">
                            <Button className="w-full h-12 bg-cozy-400 rounded font-outfit">
                                <h1 className="font-outfit text-lg text-mocha-950">
                                    Log In
                                </h1>
                            </Button>

                            <div className="mt-8 flex flex-col justify-center items-center">
                                <h1 className="font-outfit text-mocha-900">
                                no account yet? <span> <Link className="select-none cursor-pointer text-red-100 font-bold text-center" onClick={redirectToRegister}>register</Link>
                                </span>
                                    
                            </h1>

                            <h1 className="font-outfit text-mocha-900">
                                forgot your password? <span>
                                    <Link className="select-none cursor-pointer text-red-100 font-bold text-center" onClick={redirectToRegister}>email verification</Link>
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