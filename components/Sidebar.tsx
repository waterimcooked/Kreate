"use client"

import Image from "next/image"
import Button from "./Button"
import { useRouter } from "next/navigation";
import { logout } from "@/lib/api";
import { useState } from "react";
import { useRef } from "react";

export default function Sidebar( 
    { onMouseOver, onMouseLeave }: 
    { onMouseOver?: Function, onMouseLeave?: Function }
 ) {
    const [expanded, setExpanded] = useState(false)
    const timeoutRef = useRef(null)

    const router = useRouter();

    function goTo(path: string) {
        router.push(path);
    }

    function handleMouseOver(e: any) {
        onMouseOver?.(e)
        

        setExpanded(true)
    }

    function handleMouseLeave(e: any) {
        onMouseLeave?.(e)
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
            timeoutRef.current = null
        }
        setExpanded(false)
    }

    return (
        <div className={`fixed flex flex-col bg-white shadow h-full z-11 transition-all duration-200 ${ expanded? 'w-64' : 'w-18' }`} 
        onMouseOver={handleMouseOver} 
        onMouseLeave={handleMouseLeave}
        >
            <main className="flex-1 flex flex-col items-center">
                <Button className="flex justify-center items-center w-18 h-18 p-4">
                    <img src={"/kreate-logo-1.png"} alt="home" width={48} height={48} />
                </Button>

                <Button className={`flex justify-center items-center w-12 h-12 m-3 hover:bg-gray-200 rounded-lg transition-all duration-200 ${expanded ? 'w-48' : 'w-12'}`} onClick={() => {goTo("/")}}>
                    <img src={"/home.svg"} alt="home" className={`absolute transition-all duration-250 ${expanded ? `-translate-x-16` : `translate-x-0`}`} width={24} height={24} />
                    <h1 className={`absolute transition-all duration-250 font-outfit ${expanded ? `opacity-100` : `opacity-0`}`}>
                        ~ Home
                    </h1>
                </Button>

                <Button className={`flex justify-center items-center w-12 h-12 m-3 hover:bg-gray-200 rounded-lg transition-all duration-200 ${expanded ? 'w-48' : 'w-12'}`} onClick={() => {goTo("/browse")}}>
                    <img src={"/search.svg"} alt="browse" className={`absolute transition-all duration-250 ${expanded ? `-translate-x-16` : `translate-x-0`}`} width={24} height={24} />
                    <h1 className={`absolute transition-all duration-125 font-outfit ${expanded ? `opacity-100` : `opacity-0`}`}>
                        ~ Browse
                    </h1>
                </Button>

                <Button className={`flex justify-center items-center w-12 h-12 m-3 hover:bg-gray-200 rounded-lg transition-all duration-200 ${expanded ? 'w-48' : 'w-12'}`} onClick={() => {goTo("/upload")}}>
                    <img src={"/upload.svg"} alt="upload" className={`absolute transition-all duration-250 ${expanded ? `-translate-x-16` : `translate-x-0`}`} width={24} height={24} />
                    <h1 className={`absolute transition-all duration-125 font-outfit ${expanded ? `opacity-100` : `opacity-0`}`}>
                        ~ Upload
                    </h1>
                </Button>

                <Button className={`flex justify-center items-center w-12 h-12 m-3 hover:bg-gray-200 rounded-lg transition-all duration-200 ${expanded ? 'w-48' : 'w-12'}`} onClick={() => {goTo("/messages")}}>
                    <img src={"/messages.svg"} alt="messages" className={`absolute transition-all duration-250 ${expanded ? `-translate-x-16` : `translate-x-0`}`} width={24} height={24} />
                    <h1 className={`absolute transition-all duration-125 font-outfit ${expanded ? `opacity-100` : `opacity-0`}`}>
                        ~ Messages
                    </h1>
                </Button>

                <Button className={`flex justify-center items-center w-12 h-12 m-3 hover:bg-gray-200 rounded-lg transition-all duration-200 ${expanded ? 'w-48' : 'w-12'}`} onClick={() => {goTo("/profile")}}>
                    <img src={"/profile.svg"} alt="profile" className={`absolute transition-all duration-250 ${expanded ? `-translate-x-16` : `translate-x-0`}`} width={24} height={24} />
                    <h1 className={`absolute transition-all duration-125 font-outfit ${expanded ? `opacity-100` : `opacity-0`}`}>
                        ~ Profile
                    </h1>
                </Button>

                <Button className={`flex justify-center items-center w-12 h-12 m-3 hover:bg-gray-200 rounded-lg transition-all duration-200 ${expanded ? 'w-48' : 'w-12'}`} onClick={logout}>
                    <h1 className={`absolute transition-all duration-125 font-outfit ${expanded ? `opacity-100` : `opacity-0`}`}>
                        ~ Log Out
                    </h1>
                </Button>
            </main>
        </div>
    )
}