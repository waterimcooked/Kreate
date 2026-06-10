// this component takes a DICTIONARY as settings, let's just see how this'll turn out lmfao
"use client"

import type { _Navbar } from "@/lib/types"
import SearchBar from "@/components/SearchBar"
import Button from "./Button"

export default function Navbar ( params: _Navbar ) {
    if (params.isLandingPage === true) {
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
    } else {
        return (
            <div className="fixed top-0 left-18 right-0 h-28 bg-white flex flex-col items-center p-4 shadow z-10 ">
                <SearchBar
                placeholder="searching for something else?"
                className=""
                />

                <div className="flex justify-start items-start w-full">
                    <Button className="m-2 p-2 pl-8 pr-8 rounded-xl bg-gray-200 font-outfit">
                        Art
                    </Button>

                    <Button className="m-2 p-2 pl-8 pr-8 rounded-xl bg-gray-200 font-outfit">
                        3D Modeling
                    </Button>

                    <Button className="m-2 p-2 pl-8 pr-8 rounded-xl bg-gray-200 font-outfit">
                        Scripting
                    </Button>

                    <Button className="m-2 p-2 pl-8 pr-8 rounded-xl bg-gray-200 font-outfit">
                        Animation
                    </Button>

                    <Button className="m-2 p-2 pl-8 pr-8 rounded-xl bg-gray-200 font-outfit">
                        UI/UX
                    </Button>

                    <Button className="m-2 p-2 pl-8 pr-8 rounded-xl bg-gray-200 font-outfit">
                        Illustration
                    </Button>
                </div>
            </div>
        )
    }
}