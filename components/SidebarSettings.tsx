"use client"

import ProfileIcon from "./ProfileIcon"
import Button from "./Button"

import { logout } from "@/lib/api"
import { useRouter } from "next/navigation"

import { _profileData } from "@/lib/types"
import { profile } from "console"

export default function SidebarSettings({profileData} : {profileData: _profileData}) {
    const router = useRouter()

    function handleLogout() {
        logout()
        router.push('/login')
    }

    return (
        <div className="w-80 h-full shadow z-2 bg-white/90 p-4 flex flex-col items-center">
            <h1 className="text-2xl font-outfit">Settings</h1>

            { profileData?  
                <div className="flex flex-col w-full h-full p-4" id="main of settings">
                <div className="flex flex-row p-2" id="profile info">
                    <div className="w-12 h-12 rounded-full bg-cyan-800" id="pfp"></div>

                    <div className="flex flex-col justify-center ml-2">
                        <h1 className="text-sm font-outfit">{profileData.name}</h1>
                        <h2 className="text-xs font-outfit text-gray-500">{profileData.handle}</h2>
                    </div>
                </div>

                <div className="w-full bg-gray-200 h-0.75 mt-4 mb-4"/>

                {/* this part was made by ai, replace this once ure ready */}

               <div className="flex flex-col gap-3 p-2" id="misc settings">
                    <div className="flex justify-between items-center" id="accepting comms">
                        <label className="text-xs font-outfit text-gray-700">accepting commissions</label>
                        <input type="checkbox" defaultChecked className="w-4 h-4 cursor-pointer" />
                    </div>
                    
                    <div className="flex justify-between items-center" id="status">
                        <label className="text-xs font-outfit text-gray-700">status</label>
                        <select className="text-xs font-outfit bg-gray-50 border border-gray-200 rounded px-2 py-1">
                        <option>🟢 online</option>
                        <option>🟡 away</option>
                        <option>🔴 busy</option>
                        </select>
                    </div>
                </div>

                <div className="w-full bg-gray-200 h-0.75 mt-4 mb-4"/>

                <div className="flex flex-col p-2" id="button settings wtv">
                    <Button className="w-full h-8 bg-gray-100 shadow rounded my-2" onClick={() => {router.push('/settings')
}}>
                        <h1 className="font-outfit text-xs text-gray-500">view all settings</h1>
                    </Button>

                    <Button className="w-full h-8 bg-red-400 shadow rounded my-2" onClick={() => {handleLogout}}>
                        <h1 className="font-outfit text-xs">log out</h1>
                    </Button>
                </div>
            </div>

            :

            <div className="flex flex-col p-4 w-full gap-4">
                <h1 className="my-4 font-outfit text-lg text-gray-400 text-center">
                    you aren't logged in!
                </h1>

                <Button className="rounded-lg bg-gray-400 p-2 w-full h-12" onClick={() => {router.push('/login')}}>
                    <h1 className="text-white font-outfit">
                        Login
                    </h1>
                </Button>

                <Button className="rounded-lg bg-teal-600 p-2 w-full h-12" onClick={() => {router.push('/register')}}>
                    <h1 className="text-white font-outfit">
                        Register
                    </h1>
                </Button>
            </div>
        }
        </div>
    )
}