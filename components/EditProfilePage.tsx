import { _profileGetOutput } from "@/lib/types"

export default async function EditProfilePage({ data } : { data: _profileGetOutput }) {
    return (
        <div>
            <input defaultValue={data.handle} />
            <textarea defaultValue={data.bio} />
        </div>
    )
}