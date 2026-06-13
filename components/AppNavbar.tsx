"use client"

import SearchBar from "./SearchBar"
import Button from "./Button"
import { Dispatch, SetStateAction } from "react"
import { _AppProps } from "@/lib/types"

export default function AppNavbar(
    
    {
        searchInput, 
        setSearchInput,

    } : _AppProps

) {

    return (
       <div className="fixed top-0 left-18 right-0 h-28 bg-white flex flex-col items-center p-4 shadow z-10 ">
                <SearchBar
                placeholder="searching for something else?"
                searchInput={searchInput}
                setSearchInput={setSearchInput}
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