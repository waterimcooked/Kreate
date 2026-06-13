import { _HomeCard } from "@/lib/types";
import ProfileIcon from "./ProfileIcon";

// export type _HomeCard = {
//     id: string                           // unique creator id
//     name: string                         // "dani"
//     avatar?: string                      // "/avatar.jpg"
//     rating?: number                      // 4.8 (quick trust signal)
//     ratingCount?: number
//     highlightedPreview?: string          // an image
//     portfolio?: {                        // 1-2 showcase pieces only
//         id: string
//         image: string
//         title: string
//     }[]
// }

export default function HomeCard(props: _HomeCard) {
    return (
        <div className="flex flex-col dh-64 w-90 ml-2 mr-2 bg-white shadow rounded" id="HomeCard">
            <div className="p-2" id="Image">
                <img src={props.highlightedPreview} alt="" className="object-cover w-full h-56 rounded" />
            </div>
            
            <div className="flex justify-center w-full">
                <div className="h-0.75 w-85 bg-gray-200 rounded-full"></div>
            </div>

            <div className="flex flex-row items-center justify-between p-4">
                <ProfileIcon {...props} className="h-8 w-8" />
                <h1 className="text-sm font-medium text-gray-800 font-outfit">
                    {props.name}
                </h1>
                <p className="text-xs text-gray-700 mb-2 font-outfit">
                    ★ {props.rating} ({props.ratingCount})
                </p>
            </div>
        </div>
    )
}