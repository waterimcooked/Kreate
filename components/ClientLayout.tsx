"use client"

import { useState, Dispatch, SetStateAction } from "react"

// COMPONENTS

import Sidebar from "./Sidebar"
import AppNavbar from "./AppNavbar"
import { _AppProps } from "@/lib/types"

export default function ClientLayout({ children, userData }: { children: React.ReactNode, userData: any }) {
    const [searchInput, setSearchInput] = useState<string>("")
    const [selectedCategory, setSelectedCategory] = useState("")

    return (
        <div className="flex">
            <Sidebar userData={userData} />
            <main className="flex-1">
                <AppNavbar
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
                <div className="flex-1 ml-18 mt-18">
                    {children}
                </div>
            </main>
        </div>
    )
}