import EditProfilePage from "@/components/EditProfilePage";
import { NextRequest } from "next/server";
import { headers } from "next/headers";

export default function Edit(req: NextRequest) {
    return (
        <EditProfilePage/>
    )
}