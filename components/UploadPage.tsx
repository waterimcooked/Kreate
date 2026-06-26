"use client"

import { useState } from "react"
import Button from "./Button"

import ProfilePin from "./ProfilePin"
import HomeCard from "./HomeCard"

export default function UploadPage() {
    const [ imagePath, setImagePath ] = useState("")
    const [ title, setTitle ] = useState("")
    
    const [selectedVisibility, setSelectedVisiblity] = useState("pub")

    function handleImage(e: any) {
        const file = e.target.files?.[0];
        console.log(file)

        setImagePath(file.name)
    }

    function handleTitle(e: any) {
        const text = e.target.value
        setTitle(text)
    }

    function handleChangeVisibility(val: string) {
        setSelectedVisiblity(val)
    }

    return (
        <div className="w-full h-full max-w-7xl mx-auto px-4">
            <label className="flex justify-center flex flex-col items-center mt-64 h-64 w-full rounded-xl border-2 border-dashed border-gray-500/50 bg-gray-200/50" id="upload area">
                <h1 className="text-2xl font-outfit text-gray-500/50">{imagePath !== ""? `uploaded: ${imagePath}` : `upload an image` }</h1>
                <p className="text-xs font-outfit text-gray-500/50">{imagePath !== "" ? `` : `supported: MP4, PNG, JPEG`}</p>
                <p className="text-xs font-outfit text-gray-500/50">{imagePath !== "" ? `` : `max size: 15MB`}</p>

                <input type="file"
                accept="image/*"
                className="w-full h-full hidden"
                onChange={handleImage}
                />
            </label>

            <div className="flex flex-row w-full h-auto p-4" id="WORK INFORMATION">
                <div className="flex flex-col w-full h-auto p-4">
                    <div className="mt-4">
                        <h1 className="font-outfit text-lg text-gray-500/75" id="title">title -</h1>
                        <input type="text" className="w-full border-2 border-gray-500/50 rounded-lg p-2 mt-2 font-outfit" placeholder="give a unique title that will WOW the users" value={title} onChange={handleTitle} />
                    </div>

                    <div className="mt-4">
                        <h1 className="font-outfit text-lg text-gray-500/75" id="title">description -</h1>
                        <textarea name="" className="w-full border-2 border-gray-500/50 rounded-lg p-2 mt-2 font-outfit" placeholder="what's this even about?" id=""></textarea>
                        <p className="font-outfit text-xs text-gray-500/40">
                            max characters: 100, make it count
                        </p>
                    </div>

                    <div className="flex w-full h-auto p-4">
                        <div className="m-2 w-full">
                            <h1 className="font-outfit text-lg text-gray-500/75">category -</h1>
                        </div>

                        <div className="m-2 w-full">
                            <h1 className="font-outfit text-lg text-gray-500/75">
                                visiblity -
                            </h1>

                            <div className="flex flex-row gap-2 p-2 w-full h-12 rounded-lg bg-gray-500/25">
                                <Button onClick={() => handleChangeVisibility("pub")} className={`flex justify-center items-center flex-1 bg-gray-100 rounded transition duration-250 ease-out border-2 ${selectedVisibility == `pub`? "border-gray-500" : "border-white/0" }`}>
                                    <h1 className={`font-outfit ${selectedVisibility == "pub"? "text-gray-700" : "text-gray-400"}`}>public</h1>
                                </Button>
                                <Button onClick={() => handleChangeVisibility("pri")} className={`flex justify-center items-center flex-1 bg-gray-100 rounded transition duration-250 ease-out border-2 ${selectedVisibility == `pri`? "border-gray-500" : "border-white/0" }`}>
                                    <h1 className={`font-outfit ${selectedVisibility == "pri"? "text-gray-700" : "text-gray-400"}`}>private</h1>
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4">
                        <h1 className="font-outfit text-2xl text-gray-500/75" id="title">tags -</h1>
                        <textarea name="" className="w-full border-2 border-gray-500/50 rounded-lg p-2 mt-2 font-outfit" placeholder="some tags you may want to include?" id=""></textarea>
                        <p className="font-outfit text-xs text-gray-500/40">
                            separate with commas ('')
                        </p>
                    </div>

                    <div className="w-full mt-4" id="buttons">
                        <Button className="w-full p-2 m-2 bg-gray-200/50 rounded-lg border-2 border-gray-500/50">
                            <h1 className="font-outfit">publish</h1>
                        </Button>
                    </div>
                </div>

                <div className="flex flex-col w-full border-2 border-gray-500/50 border rounded-lg p-4 m-4" id="previews"> 
                    
                </div>
            </div>
        </div>
    )
}