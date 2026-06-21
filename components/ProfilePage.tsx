import { _profileGetOutput } from "@/lib/types";
import { profile } from "console";

export default function ProfilePage({ profileData }: { profileData: any }) {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col w-full h-144 bg-mocha-50">
                <div className="bg-mocha-400 h-64">
                    <h1>aasd</h1>
                </div>

                <div className="flex flex-col p-8">
                    <div className="flex flex-col">
                        <h1 className="text-3xl font-outfit">water</h1>
                        <h2 className="text-sm font-outfit text-mocha-500/50">@waterimcooked</h2>

                        <h3 className="text-sm font-outfit text-mocha-800/80 mt-4"> a full stack web developer maybe </h3>
                    </div>

                    <div className="flex flex-row">
                        <h1 className="ml-4 mr-4"> philippines </h1>
                        <h1 className="ml-4 mr-4"> philippines.com </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}