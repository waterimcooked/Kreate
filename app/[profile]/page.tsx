import { getProfile } from "@/lib/api"

export default async function Profile({params} : { params: { handle: string } }) {
    const { handle } = params  // ← destructure it
    
    console.log(handle)

    // profile is a promise, you need to await it
    const profile = await getProfile(handle)
  
  return (
    <div>
      <h1>@{profile.handle}</h1>
      <p>{profile.bio}</p>
      <img src={profile.avatar} />
    </div>
  )
}