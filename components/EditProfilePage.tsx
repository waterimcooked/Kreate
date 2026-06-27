import { _profileGetInput } from "@/lib/types"

export default async function EditProfilePage(data: _profileGetInput) {
    <div>
      <input defaultValue={data.handle} />
      <textarea defaultValue={data.bio} />
    </div>
}