import { _profileGetOutput } from "@/lib/types";
import { profile } from "console";
import { ProfileSpecialty } from "./ProfileSpecialty";
import ProfilePin from "./ProfilePin";

export default function ProfilePage({ profileData }: { profileData: any }) {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col w-full h-full bg-mocha-50">
 
                <div className="relative">

                    <div className="bg-mocha-400 h-64" id="BANNER"></div>

                    <div className="flex flex-col items-center -mt-32 relative z-10">
                        <div className="rounded-full bg-mocha-600 h-64 w-64 border-4 border-mocha-50" id="PROFILE PICTURE"></div>
                    </div>
                </div>

                <div className="flex flex-row mt-16 p-16 max-w-7xl mx-auto px-4" id="INFORMATION">
                    <div className="w-1/2 p-4 m-4" id="LEFT SIDE">
                        
                        <h1 className="text-3xl font-outfit">Water</h1>
                        <h2 className="text-lg text-mocha-800/75 font-outfit">@water</h2>

                        <h3 className="text-sm text-mocha-900/75 font-outfit mt-4">i'm water, and i create character models, environment design, game assets, etc. contact me!</h3>

                        <div className="mt-4 pt-4" id="SPECIALTIES MAYBE">
                            <h1 className="font-sora text-mocha-800/50"> specialties - </h1>
                            <div className="flex flex-wrap p-2">

                                <ProfileSpecialty specialty="Web Development" className="bg-mocha-400"/>
                                <ProfileSpecialty specialty="just more web dev" className="bg-mocha-400"/>
                                <ProfileSpecialty specialty="i hate shcool" className="bg-mocha-400"/>
                                <ProfileSpecialty specialty="i'd rather make this" className="bg-mocha-400"/>
                                <ProfileSpecialty specialty="than do allat" className="bg-mocha-400"/>
                            </div>
                        </div>

                        <div className="mt-4 pt-4" id="SOCIAL STATS">
                            <div className="flex flex-row gap-6">
                                <div className="flex flex-col">
                                    <p className="text-xs font-sora text-mocha-800/50">followers</p>
                                    <p className="text-lg font-outfit font-medium text-mocha-900">1,247</p>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-xs font-sora text-mocha-800/50">following</p>
                                    <p className="text-lg font-outfit font-medium text-mocha-900">89</p>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-xs font-sora text-mocha-800/50">commissions</p>
                                    <p className="text-lg font-outfit font-medium text-mocha-900">24</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    

                    <div className="p-4 m-4 rounded-lg w-full" id="RIGHT SIDE">
                        <div className="mt-2" id="PINS">
                            <h1 className="font-sora text-mocha-800/50">pinned works -</h1>
                            <div className="grid grid-cols-3 mt-4">
                                <ProfilePin/>
                                <ProfilePin/>
                                <ProfilePin/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}