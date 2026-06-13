"use client"

import { _SearchBar } from "@/lib/types"
import { useState, Dispatch, SetStateAction } from "react"
import { useRouter } from "next/navigation"

// <SearchBar
// placeholder="searching for something else?"
// searchInput={searchInput}
// setSearchInput={setSearchInput}

export default function SearchBar(
    {
        placeholder,
        className = "",
        searchInput, 
        setSearchInput
    } : _SearchBar) {

    const [isFocused, setIsFocused] = useState(false)
    const router = useRouter();

    function goTo(path: string) {
        router.push(path);
    }

    function updateInputText(e: any) {
        let text = e.target.value
        setSearchInput(text)
    }

    function submitInput(e: any) {
        e.preventDefault();
        console.log(encodeURIComponent(searchInput))
        goTo(`/browse?search=${encodeURIComponent(searchInput)}`)
    }

    return (
        <form onSubmit={submitInput} className="w-full">
            <div className={`w-full flex flex-row items-center gap-2 p-2 bg-gray-200 rounded-md ${className}`}>
                { isFocused? null : <img src="/search.svg" alt="search icon" className="text-gray-500" /> }
                    <input 
                    type="text"
                    
                    onChange={updateInputText}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}

                    placeholder={ placeholder || "empty" }
                    value={ searchInput }
                    className="text-gray-800 w-full outline-none border-none"
                    />
            </div>
        </form>
        
    )
}