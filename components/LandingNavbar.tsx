"use client"

import SearchBar from "@/components/SearchBar"
import Button from "./Button"

export default function LandingNavbar() {
    return (
            <div className="w-full p-4 shadow">
            <div className="flex">
                <div className="w-full ml-8 flex justify-between" id="LEFT">
                    <h1 className="text-1xl">KREATE</h1>
                </div>

                
                <div className="w-full flex justify-between" id="MIDDLE">
                    <button>
                        <h1 className="font-josefin-sans">About</h1>
                    </button>
                    
                    <button><h1 className="font-josefin-sans">Featured Works</h1></button>
                    <button><h1 className="font-josefin-sans">Support</h1></button>
                    <button><h1 className="font-josefin-sans">???</h1></button>
                    <button><h1 className="font-josefin-sans">???</h1></button>
                </div>

                <div className="w-full mr-8 flex justify-end justify-between" id="RIGHT">
                    <Button className="bg-gray-200 shadow rounded mr-2 ml-2 p-2"><h1 className="ml-2 mr-2">LOG IN</h1></Button>
                    <Button className="bg-teal-400 shadow rounded mr-2 ml-2 p-2"><h1 className="ml-2 mr-2">SIGN UP</h1></Button>
                </div>
            </div>
        </div>

            
        )
}