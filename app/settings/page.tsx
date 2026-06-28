import SettingsPage from '@/components/SettingsPage'
import { _profileData } from '@/lib/types'
import { getMyProfile } from '@/lib/data'

export default async function Settings() {
    const res = await getMyProfile()
    const profileData = res.profile

    return (
        <SettingsPage profileData={profileData}/>
    )
}