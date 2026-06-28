"use client"

import { _profileData } from "@/lib/types"

export default function SettingsPage({ profileData } : {profileData: _profileData}) {
    console.log(profileData)

    return (
        <div className="bg-mocha-50 w-full h-full">
            <div className="max-w-7xl mx-auto px-4">
                <h1>{profileData.handle}</h1>
            </div>
        </div>
    )
}