import { useState } from "react"
import Button from "./Button"

export default function SettingsTabOption( { text, route, isActive, onClick } : 
    { 
        text?: string, 
        route?: string, 
        isActive: boolean, 
        onClick? : Function
}){


    return (
        <Button className={`w-full h-12 my-1 p-2 rounded transition-all duration-200 ${isActive? 'bg-gray-200' : 'bg-white'}`} onClick={() => {onClick?.(text)}}>
            <h1 className={`font-outfit text-left transition-all duration-250 ${isActive? 'translate-x-2' : '' }`}> {text? text : 'lmao'} - </h1>
        </Button>
    )
}