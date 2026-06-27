import EditProfilePage from "@/components/EditProfilePage";
import { getMyProfile } from "@/lib/data";
import { NextRequest } from "next/server";

export default async function Edit(req: NextRequest) {
    const data = await getMyProfile()
    
    console.log(data)

    return (
        <div>
            <h1>Edit Profile</h1>
            <EditProfilePage data={data} />
        </div>
    )
}