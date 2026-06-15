"use client"

import Button from "./Button"
import Link from "./Link"

export default function RegisterPage() {
    return (
        <div className="flex flex-col justify-center items-center w-screen h-screen bg-mocha-100" id="main">
            <h1 className="font-outfit text-mocha-600 text-center">
                register right now
            </h1>

            <div className="p-4 flex flex-col w-168 h-144 bg-mocha-600 mt-8 rounded shadow" id="the register page">
                <div className="" id="the inputs">

                    <div className="w-full h-24 p-4" id="email-part">
                        <h1 className="font-outfit text-mocha-900">Name <span className="text-mocha-200">*</span> </h1>
                        <input type="text" className="w-full bg-mocha-400 rounded-lg p-2 font-outfit" name="user" />
                    </div>

                    <div className="w-full h-24 p-4" id="password-part">
                        <h1 className="font-outfit text-mocha-900">Email <span className="text-mocha-200">*</span> </h1>
                        <input type="text" className="w-full bg-mocha-400 rounded-lg p-2 font-outfit" name="password" />
                    </div>

                    <div className="w-full h-24 p-4" id="password-part">
                        <h1 className="font-outfit text-mocha-900">Password <span className="text-mocha-200">*</span> </h1>
                        <input type="text" className="w-full bg-mocha-400 rounded-lg p-2 font-outfit" name="password" />
                    </div>

                    <div className="flex flex-col justify-center items-center w-full h-48 p-4 mt-8">
                        <Button className="w-full h-12 bg-cozy-400 rounded font-outfit">
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