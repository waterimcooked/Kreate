"use client"

import { useState } from "react"

export default function UploadPage() {
    const [ imagePath, setImagePath ] = useState("")
    const [ title, setTitle ] = useState("")

    function handleImage(e: any) {
        const file = e.target.files?.[0];
        console.log(file)

        setImagePath(file.name)
    }

    function handleTitle(e: any) {
        const text = e.target.value
        setTitle(text)
    }

    return (
        <div className="w-full h-full max-w-7xl mx-auto px-4">
            <label className="flex justify-center items-center mt-64 h-64 w-full rounded-xl border-2 border-dashed border-gray-500/50" id="upload area">
                <h1 className="text-2xl font-outfit text-gray-500/50">{imagePath !== ""? `uploaded: ${imagePath}` : `upload an image` }</h1>

                <input type="file"
                accept="image/*"
                className="w-full h-full hidden"
                onChange={handleImage}
                />
            </label>

            <div className="w-full h-auto p-4" id="WORK INFORMATION">
                <input type="text" className="w-full border-2 border-gray-500/50 rounded p-2" placeholder="give a unique title that will WOW the users" value={title} onChange={handleTitle} />
            </div>
        </div>
    )
}