"use client"

import React from "react";
import { useState } from "react";
import { Dispatch, SetStateAction } from "react";

export default function Link({ 
    children, 
    className = "", 
    onClick
}: { 
    children: React.ReactNode, 
    className?: string, 
    onClick?: () => void
 }) {
    const [isMouseOn, setMouseOn] = useState<boolean>(false)

    return (
        <span 
            className={`${className} ${isMouseOn? `underline` : ``}`} 
            onMouseEnter={() => setMouseOn(true)} 
            onMouseLeave={() => setMouseOn(false)}
        >
            {children}
        </span>
    ) 
}