"use client"

import Image from "next/image"
import Button from "./Button"
import { useRouter } from "next/navigation";
import { getMyProfile } from "@/lib/api";
import { useState } from "react";
import { useRef } from "react";
import SidebarSettings from "./SidebarSettings";

export default function Sidebar( 
    { onMouseOver, onMouseLeave, userData }: 
    { onMouseOver?: Function, onMouseLeave?: Function, userData: any }
 ) {
    const [expanded, setExpanded] = useState(false)
    const [settingsOpened, setSettingsOpened] = useState(false)

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
        
        if (!settingsOpened) {
            setExpanded(false)
        }
    }

    async function handleProfile() {
        if (!userData.handle) {
            goTo('/login')
        }

        let handle = userData.handle
        goTo(`/@${handle}`)
    }

    function handleSidebarSettings() {
        setSettingsOpened(!settingsOpened)
    }

    return (
        <div className="flex flex-row">
            <div className={`fixed flex flex-row h-full z-11 transition-all duration-200 ${ expanded? 'w-56' : 'w-18' }`} 
            >
                <main className="flex-1 flex flex-col items-center z-12 bg-white shadow" onMouseOver={handleMouseOver} 
            onMouseLeave={handleMouseLeave}
            >
                    <Button className="flex justify-center items-center w-18 h-18 p-4">
                        <img src={"/kreate-logo-1.png"} alt="home" width={48} height={48} />
                    </Button>

                    <div className="w-1/2 rounded-lg ml-2 mr-2 bg-gray-500/25 h-1"></div>

                    <Button className={`flex justify-center items-center w-12 h-12 mt-2 mb-1 hover:bg-gray-200 rounded-lg transition-all duration-200 ${expanded ? 'w-48' : 'w-12'}`} onClick={() => {goTo("/")}}>
                        <img src={"/home.svg"} alt="home" className={`absolute transition-all duration-250 ${expanded ? `-translate-x-16` : `translate-x-0`}`} width={24} height={24} />
                        <h1 className={`absolute transition-all duration-250 font-outfit ${expanded ? `opacity-100` : `opacity-0`}`}>
                            ~ Home
                        </h1>
                    </Button>

                    <Button className={`flex justify-center items-center w-12 h-12 m-1 hover:bg-gray-200 rounded-lg transition-all duration-200 ${expanded ? 'w-48' : 'w-12'}`} onClick={() => {goTo("/browse")}}>
                        <img src={"/search.svg"} alt="browse" className={`absolute transition-all duration-250 ${expanded ? `-translate-x-16` : `translate-x-0`}`} width={24} height={24} />
                        <h1 className={`absolute transition-all duration-125 font-outfit ${expanded ? `opacity-100` : `opacity-0`}`}>
                            ~ Browse
                        </h1>
                    </Button>

                    <Button className={`flex justify-center items-center w-12 h-12 m-1 hover:bg-gray-200 rounded-lg transition-all duration-200 ${expanded ? 'w-48' : 'w-12'}`} onClick={() => {goTo("/upload")}}>
                        <img src={"/upload.svg"} alt="upload" className={`absolute transition-all duration-250 ${expanded ? `-translate-x-16` : `translate-x-0`}`} width={24} height={24} />
                        <h1 className={`absolute transition-all duration-125 font-outfit ${expanded ? `opacity-100` : `opacity-0`}`}>
                            ~ Upload
                        </h1>
                    </Button>

                    <Button className={`flex justify-center items-center w-12 h-12 m-1 hover:bg-gray-200 rounded-lg transition-all duration-200 ${expanded ? 'w-48' : 'w-12'}`} onClick={() => {goTo("/messages")}}>
                        <img src={"/messages.svg"} alt="messages" className={`absolute transition-all duration-250 ${expanded ? `-translate-x-16` : `translate-x-0`}`} width={24} height={24} />
                        <h1 className={`absolute transition-all duration-125 font-outfit ${expanded ? `opacity-100` : `opacity-0`}`}>
                            ~ Messages
                        </h1>
                    </Button>

                    <Button className={`flex justify-center items-center w-12 h-12 m-1 hover:bg-gray-200 rounded-lg transition-all duration-200 ${expanded ? 'w-48' : 'w-12'}`} onClick={handleProfile}>
                        <img src={"/profile.svg"} alt="profile" className={`absolute transition-all duration-250 ${expanded ? `-translate-x-16` : `translate-x-0`}`} width={24} height={24} />
                        <h1 className={`absolute transition-all duration-125 font-outfit ${expanded ? `opacity-100` : `opacity-0`}`}>
                            ~ Profile
                        </h1>
                    </Button>

                    <Button className={`flex justify-center items-center w-12 h-12 m-1 hover:bg-gray-200 rounded-lg transition-all duration-200 ${expanded ? 'w-48' : 'w-12'}`} onClick={handleSidebarSettings}>
                        <img src={"/settings.svg"} alt="messages" className={`absolute transition-all duration-250 ${expanded ? `-translate-x-16` : `translate-x-0`}`} width={24} height={24} />
                        <h1 className={`absolute transition-all duration-125 font-outfit ${expanded ? `opacity-100` : `opacity-0`}`}>
                            ~ Settings
                        </h1>
                    </Button>
                </main>

                <div className={`fixed top-0 left-56 z-11 h-full bg-white transition-all duration-200 
                ${settingsOpened ? 'opacity-100 pointer-events-auto translate-x-0' : 'opacity-0 pointer-events-none -translate-x-full'}`}>
                    <SidebarSettings userData={userData}/>
                </div>
            </div>
        </div>
    )
}