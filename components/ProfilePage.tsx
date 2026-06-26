import { _profileGetOutput } from "@/lib/types";
import { profile } from "console";
import { ProfileSpecialty } from "./ProfileSpecialty";
import ProfilePin from "./ProfilePin";

export default function ProfilePage({ profileData }: { profileData: any }) {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col w-full h-full bg-white">
                <div className="relative">
                    <div className="bg-mocha-400 h-64" id="BANNER"></div>

                    <div className="flex flex-col items-center -mt-32 relative z-10">
                        <div className="rounded-full bg-mocha-600 h-64 w-64 border-8 border-white" id="PROFILE PICTURE"></div>
                    </div>
                </div>

                <div className="flex flex-row mt-8 p-16 max-w-7xl mx-auto px-4 bg-gray-50 border-4 border-gray-500/10 rounded-lg" id="INFORMATION">
                    <div className="w-1/2 p-4 m-4" id="LEFT SIDE">
                        
                        <h1 className="text-3xl font-outfit">Water</h1>
                        <h2 className="text-lg text-gray-300 font-outfit">@water</h2>

                        <h3 className="text-sm text-gray-900/75 font-outfit mt-4">i'm water, and i create character models, environment design, game assets, etc. contact me!</h3>

                        <div className="mt-4 pt-4" id="SOCIAL STATS">
                            <div className="flex flex-row gap-6">
                                <div className="flex flex-col">
                                    <p className="text-xs font-sora text-gray-800/50">followers</p>
                                    <p className="text-lg font-outfit font-medium text-gray-900">1,247</p>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-xs font-sora text-gray-800/50">following</p>
                                    <p className="text-lg font-outfit font-medium text-gray-900">89</p>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-xs font-sora text-gray-800/50">commissions</p>
                                    <p className="text-lg font-outfit font-medium text-gray-900">24</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 w-full pl-4 pr-4 h-1 rounded-lg bg-gray-900/25"></div>

                        <div className="mt-4 pt-4" id="SPECIALTIES MAYBE">
                            <h1 className="font-sora text-gray-800/50"> specialties - </h1>
                            <div className="flex flex-wrap p-2">

                                <ProfileSpecialty specialty="Web Development" className="bg-gray-200"/>
                                <ProfileSpecialty specialty="just more web dev" className="bg-gray-200"/>
                                <ProfileSpecialty specialty="i hate shcool" className="bg-gray-200"/>
                                <ProfileSpecialty specialty="i'd rather make this" className="bg-gray-200"/>
                                <ProfileSpecialty specialty="than do allat" className="bg-gray-200"/>
                            </div>
                        </div>
                    </div>

                    

                    <div className="p-4 m-4 rounded-lg w-full" id="RIGHT SIDE">
                        <div className="mt-2" id="PINS">
                            <h1 className="font-sora text-gray-800/50">pinned works -</h1>
                            <div className="grid grid-cols-3 mt-4">
                                <ProfilePin/>
                                <ProfilePin/>
                                <ProfilePin/>
                            </div>
                        </div>

                        <div className="mt-2" id="OTHERS">
                            <h1 className="font-sora text-gray-800/50">other works -</h1>
                            <div className="grid grid-cols-3 mt-4">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}