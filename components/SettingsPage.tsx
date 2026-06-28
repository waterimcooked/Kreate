"use client"

import { _profileData } from "@/lib/types"
import { useState } from "react"
import SettingsTabOption from "./SettingsTabOption"

import SettingsAccountTab from "./SettingsAccountTab"
import SettingsProfileTab from "./SettingsProfileTab"
import { profile } from "console"

export default function SettingsPage({ profileData } : {profileData: _profileData}) {
    const [activeTab, setActiveTab] = useState('profile')

    function handleSwitch(route: string) {
        setActiveTab(route)
    }


    return (
        <div className="bg-mocha-50 w-full h-full">
            <div className="max-w-7xl mx-auto px-4 flex flex-row">
                <div className="w-72 h-screen flex flex-col p-2" id="tabs">
                    <h1 className="font-outfit text-3xl my-2"> Settings ~ </h1>

                    <SettingsTabOption
                    text="profile"
                    route="profile"
                    isActive={activeTab == 'profile'}
                    onClick={handleSwitch}
                    />

                    <SettingsTabOption
                    text="account"
                    route="account"
                    isActive={activeTab == 'account'}
                    onClick={handleSwitch}
                    />

                    <SettingsTabOption
                    text="portfolio"
                    route="portfolio"
                    isActive={activeTab == 'portfolio'}
                    onClick={handleSwitch}
                    />

                    <SettingsTabOption
                    text="social"
                    route="social"
                    isActive={activeTab == 'social'}
                    onClick={handleSwitch}
                    />

                    <SettingsTabOption
                    text="appearance"
                    route="appearance"
                    isActive={activeTab == 'appearance'}
                    onClick={handleSwitch}
                    />
                </div>

                <div className="w-full bg-mocha-200 p-4 bg-white">
                    { activeTab == 'account' ? <SettingsAccountTab/> : null }
                    { activeTab == 'profile' ? <SettingsProfileTab profileData={profileData}/> : null }
                </div>
            </div>
        </div>
    )
}