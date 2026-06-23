import EditProfilePage from "@/components/EditProfilePage";
import { NextRequest } from "next/server";

export default function Edit(req: NextRequest) {
    return (
        <EditProfilePage/>
    )
}