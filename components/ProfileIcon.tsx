import Image from "next/image"
import { _DiscoverCard } from "@/lib/types"

export default function ProfileIcon({ avatar, name, className = "" }: { avatar?: string, name?: string, className?: string }) {
    return (
        <img src={avatar} alt={name} className={`w-12 h-12 rounded-full ${className}`} />
    )
}