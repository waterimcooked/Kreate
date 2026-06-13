"use client"

import Image from "next/image"
import Button from "./Button"
import { useRouter } from "next/navigation";

export default function Sidebar() {
    const router = useRouter();

    function goTo(path: string) {
        router.push(path);
    }

    return (
        <div className="fixed flex flex-col w-18 bg-white shadow h-full z-11">
            <main className="flex-1 flex flex-col items-center">
                <Button className="flex justify-center items-center w-18 h-18 p-4">
                    <img src={"/kreate-logo-1.png"} alt="home" width={48} height={48} />
                </Button>

                <Button className="flex justify-center items-center w-12 h-12 m-3 hover:bg-gray-200 rounded-lg" onClick={() => {goTo("/")}}>
                    <img src={"/home.svg"} alt="home" width={24} height={24} />
                </Button>

                <Button className="flex justify-center items-center w-12 h-12 m-3 hover:bg-gray-200 rounded-lg" onClick={() => {goTo("/browse")}}>
                    <img src={"/search.svg"} alt="browse" width={24} height={24} />
                </Button>

                <Button className="flex justify-center items-center w-12 h-12 m-3 hover:bg-gray-200 rounded-lg">
                    <img src={"/upload.svg"} alt="upload" width={24} height={24} />
                </Button>

                <Button className="flex justify-center items-center w-12 h-12 m-3 hover:bg-gray-200 rounded-lg" onClick={() => {goTo("/messages")}}>
                    <img src={"/messages.svg"} alt="messages" width={24} height={24} />
                </Button>

                <Button className="flex justify-center items-center w-12 h-12 m-3 hover:bg-gray-200 rounded-lg">
                    <img src={"/profile.svg"} alt="profile" width={24} height={24} />
                </Button>

            </main>
        </div>
    )
}