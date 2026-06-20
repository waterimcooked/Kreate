"use client"

import Button from "./Button"
import Link from "./Link"
import { useState } from "react"
import { register } from "@/lib/api"

export default function RegisterPage() {
    const [handle, setHandle] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleHandle(e: any) {
        let text = e.target.value
        setHandle(text)
    }

    function handleName(e: any) {
        let text = e.target.value
        setName(text)
    }

    function handleEmail(e: any) {
        let text = e.target.value
        setEmail(text)
    }

    function handlePassword(e: any) {
        let text = e.target.value
        setPassword(text)
    }

    function handleRegister() {
        register({handle, name, email, password})
    }

    return (
        <div className="flex flex-col justify-center items-center w-screen h-screen bg-cozy-100" id="main">
            <h1 className="font-outfit text-mocha-600 text-center">
                register right now
            </h1>

            <div className="p-4 flex flex-col w-168 h-172 bg-mocha-600 mt-8 rounded shadow" id="the register page">
                <div className="" id="the inputs">

                    <div className="w-full h-24 p-4" id="email-part">
                        <h1 className="font-outfit text-mocha-900">Handle <span className="text-mocha-200">*</span> </h1>
                        <input type="text" className="w-full bg-mocha-400 rounded-lg p-2 font-outfit" value={handle} onChange={handleHandle} name="user" required/>
                    </div>

                    <div className="w-full h-24 p-4" id="email-part">
                        <h1 className="font-outfit text-mocha-900">Name <span className="text-mocha-200">*</span> </h1>
                        <input type="text" className="w-full bg-mocha-400 rounded-lg p-2 font-outfit" value={name} onChange={handleName} name="user" required/>
                    </div>

                    <div className="w-full h-24 p-4" id="password-part">
                        <h1 className="font-outfit text-mocha-900">Email <span className="text-mocha-200">*</span> </h1>
                        <input type="text" className="w-full bg-mocha-400 rounded-lg p-2 font-outfit" value={email} onChange={handleEmail} name="email" required/>
                    </div>

                    <div className="w-full h-24 p-4" id="password-part">
                        <h1 className="font-outfit text-mocha-900">Password <span className="text-mocha-200">*</span> </h1>
                        <input type="text" className="w-full bg-mocha-400 rounded-lg p-2 font-outfit" value={password} onChange={handlePassword} name="password" required/>
                    </div>

                    <div className="flex flex-col justify-center items-center w-full h-48 p-4 mt-8">
                        <Button onClick={handleRegister} className="w-full h-12 bg-cozy-400 rounded font-outfit">
                            <h1 className="font-outfit text-lg text-mocha-950">
                                Register
                            </h1>
                        </Button>

                        <div className="mt-8 flex flex-col justify-center items-center">
                            <h1 className="font-outfit text-mocha-900">
                            no account yet? <span> <Link className="select-none cursor-pointer text-red-100 font-bold text-center" >register</Link>
                            </span>
                                    
                            </h1>

                            <h1 className="font-outfit text-mocha-900">
                                forgot your password? <span>
                                    <Link className="select-none cursor-pointer text-red-100 font-bold text-center" >email verification</Link>
                                </span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}