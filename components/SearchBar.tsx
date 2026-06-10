"use client"

import { _SearchBar } from "@/lib/types"
import { useState } from "react"

export default function SearchBar({ placeholder, className = "" }: _SearchBar & { className?: string }) {
    const [inputText, setInputText] = useState("")
    const [isFocused, setIsFocused] = useState(false)
    function updateInputText(e: any) {
        let text = e.target.value
        setInputText(text)
    }
    return (
        <div className={`w-full flex flex-row items-center gap-2 p-2 bg-gray-200 rounded-md ${className}`}>
            { isFocused? null : <img src="/search.svg" alt="search icon" className="text-gray-500" /> }
            <input 
            type="text"
            onChange={updateInputText}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={ placeholder || "empty" }
            value={ inputText }
            className="text-gray-800 w-full outline-none border-none"
            />
        </div>
    )
}