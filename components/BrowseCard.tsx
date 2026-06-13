import { _DiscoverCard } from "@/lib/types";
import ProfileIcon from "./ProfileIcon";

export default function DiscoverCard (props: _DiscoverCard) {
    return (
        <div className="w-64 p-2 m-4 rounded bg-gray-50">
            <div className="h-48 w-full overflow-hidden">
                <img src={props.highlightedPreview} alt="" className="object-cover w-full h-full rounded" />
            </div>

            <div className="flex flex-row items-center mt-2">
                <ProfileIcon {...props} className="border-gray-400" />
                <h3 className="text-sm font-medium text-gray-700 ml-4 font-outfit">{props.name}</h3>
            </div>

            <div className="">
                 {/* rating */}
                    <p className="text-xs text-gray-600 mb-2 font-outfit">★ {props.rating} ({props.ratingCount})</p>

                    {/* follow button */}
                    <button className="w-full px-2 py-1.5 border border-gray-300 text-gray-600 rounded text-xs font-medium hover:bg-teal-50 transition-colors font-outfit">
                    follow
                    </button>
            </div>
        </div>
    )
}