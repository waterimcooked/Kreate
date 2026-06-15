"use client"

import SearchBar from "@/components/SearchBar"
import Button from "./Button"
import { useRouter } from "next/navigation"

export default function LandingNavbar() {
    const router = useRouter()

    function goTo(path: string) {
        router.push(path)
    }

    return (
        <div className="w-full p-4 shadow">
            <div className="flex">
                <div className="w-full ml-8 flex justify-between" id="LEFT">
                    <img src="/kreate-logo-1.png" alt="Kreate logo" className="h-12 w-12"/>
                </div>

                
                <div className="w-full flex justify-between" id="MIDDLE">
                    <Button><h1 className="font-josefin-sans">About</h1></Button>
                    
                    <Button><h1 className="font-josefin-sans">Featured Works</h1></Button>
                    <Button><h1 className="font-josefin-sans">Support</h1></Button>
                </div>

                <div className="w-full mr-8 flex justify-end justify-between" id="RIGHT">
                    <Button onClick={ () => { goTo("/login") }} className="bg-gray-200 font-outfit shadow rounded mr-2 ml-2 p-2"><h1 className="ml-2 mr-2">LOG IN</h1></Button>
                    <Button onClick={ () => { goTo("/register") }} className="bg-mocha-400 font-outfit shadow rounded mr-2 ml-2 p-2"><h1 className="ml-2 mr-2">SIGN UP</h1></Button>
                </div>
            </div>
        </div>

            
        )
}