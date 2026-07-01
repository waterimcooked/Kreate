import { useState, useEffect } from "react"
import Button from "./Button"
import { _profileData } from "@/lib/types"
import { saveProfile } from "@/lib/api"

export default function SettingsProfileTab( { profileData } : { profileData: _profileData } ) {
    const [ name, setName ] = useState(profileData.name || '')
    const [ handle, setHandle ] = useState(profileData.handle || '')
    const [ bio, setBio ] = useState(profileData.bio || '')
    const [ avatar, setAvatar ] = useState<File | null>(null)

    const originalData = {
        name: profileData.name || '',
        handle: profileData.handle || '',
        bio: profileData.bio || ''
    }

    const [ changed, setChanged ] = useState(false)

    useEffect(() => {
        setChanged(
            name !== originalData.name || 
            handle !== originalData.handle || 
            bio !== originalData.bio
        )
    }, [name, handle, bio, originalData])

    function handleName(e: any) {
        setName(e.target.value)
    }

    function handleHandle(e: any) {
        setHandle(e.target.value)
    }

    function handleBio(e: any) {
        setBio(e.target.value)
    }

    function handleReset() {
        setName(originalData.name)
        setHandle(originalData.handle)
        setBio(originalData.bio)
    }

    function handleSave() {
        saveProfile({ payload: { name, handle, bio, avatar } })
    }

    function handleAvatar(e: any) {
        const file: File = e.target.files[0]

        if (!file.type.startsWith('image/')) {
            console.error('not an image')
            return
        }
        
        if (file.size > 5 * 1024 * 1024) {
            console.error('file too large ~ max 5mb')
            return
        }

        console.log("aight.")
        setAvatar(file)
    }


    return (
        <div className={`flex flex-col`}>
            <h1 className="font-outfit text-2xl">Profile ~</h1>
            <p className="font-outfit text-sm text-gray-500">
                customize how your profile expresses itself
            </p>


            { profileData?  

                <div className="flex flex-col mt-16">
                <div className="flex flex-col py-2 gap-2">
                    <h1 className="text-lg font-outfit text-gray-500">Profile Picture ~</h1>
                    <div className="flex flex-row">
                        <div className="w-20 h-20 rounded-full bg-mocha-400"/>
                        <div className="flex flex-col items-center mx-8 gap-2" id="customize">
                            <label className="flex justify-center items-center bg-gray-400 rounded w-40 h-8">
                                <h1 className="text-sm text-white font-outfit">Change</h1>
                                <input type="file"
                                accept="image/*"
                                className="w-full h-full hidden"
                                onChange={handleAvatar}
                                />
                            </label>
                            <Button className="bg-red-400 rounded w-40 h-8">
                                <h1 className="text-sm text-white font-outfit">Remove</h1>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col py-4 gap-2">
                    <h1 className="text-lg font-outfit text-gray-500">Name ~</h1>
                    <input type="string" className="p-2 h-12 w-1/2 rounded-lg bg-gray-100" value={name? name : ''} onChange={handleName} />
                </div>
                <div className="flex flex-col py-4 gap-2">
                    <h1 className="text-lg font-outfit text-gray-500">Handle ~</h1>
                    <input type="string" className="p-2 h-12 w-1/2 rounded-lg bg-gray-100" value={handle? handle : ''} onChange={handleHandle} />
                </div>
                <div className="flex flex-col py-4 gap-2">
                    <h1 className="text-lg font-outfit text-gray-500">Bio ~</h1>
                    <input type="string" className="p-2 h-12 w-1/2 rounded-lg bg-gray-100" value={bio? bio : ''} onChange={handleBio} />
                </div>

                <div className="flex flex-col items-start py-4 gap-2">
                    <Button className="w-48 h-12 bg-green-400 rounded-lg" onClick={handleSave}>
                        <h1 className="font-outfit text-sm text-white">save</h1>
                    </Button>

                    <Button className="w-48 h-12 bg-red-400 rounded-lg" onClick={handleReset}>
                        <h1 className="font-outfit text-sm text-white">reset</h1>
                    </Button>
                </div>
            </div>

            :

            <div>
                <h1>NOT LOGGED IN!</h1>
            </div>
        
        }
        </div>
    )
}