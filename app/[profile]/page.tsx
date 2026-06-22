import { getProfile } from "@/lib/api"
import NotFound from "@/components/not-found"
import ProfilePage from "@/components/ProfilePage"

export default async function Profile({ params }: { params: { profile: string } }) {
    // let { profile } = await params
    // profile = decodeURIComponent(profile)

    // console.log(profile)

    // const profileData = await getProfile({ handle: profile, })
    
    // if (!profileData) {
    //     return (
    //         <NotFound/>
    //     )
    // }

    return (
        <ProfilePage/>
    )
}