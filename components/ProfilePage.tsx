import { _profileGetOutput } from "@/lib/types";
import { profile } from "console";
import Container from "./Container";

export default function ProfilePage({ profileData }: { profileData: any }) {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col w-full h-full bg-mocha-50">
                <div className="bg-mocha-400 h-64" id="BANNER">
                    <div className="rounded-full bg-mocha-600 h-64 w-64 ml-64 mt-26" id="PROFILE PICTURE"></div>
                </div>

                <div className="flex flex-col items-center mt-8" id="INFORMATION">
                    <div className="w-144">
                        <h1 className="text-3xl font-outfit" id="Handle">
                            Water
                        </h1>

                        <h2 className="text-lg font-outfit text-mocha-500">
                            @retaw
                        </h2>
                    </div>

                    <div className="mt-24 flex w-248 h-80">
                        <div className="w-full">
                            <h1 className="font-outfit">
                                bio: hi i like coding i like coding so much i like coding so much i like coding somethingivory
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="">  
                    <h1>akdhadkh</h1>
                </div>
            </div>
        </div>
    )
}