import type { _DiscoverFeed } from "@/lib/types";
import type { _CreatorCard } from "@/lib/types";
import DiscoverCard from "@/components/BrowseCard";
import DiscoverPage from "@/components/BrowsePage";
import { _DiscoverCard } from "@/lib/types";

// HARD CODE DATA



export default function Discover( { height } : _DiscoverFeed, className? : string) {
    return (
        <DiscoverPage data={[]} />

        // <div className={`flex p-4 justify-start items-center w-full h-64 ${className}`}>
        //     { data.map((creator: _CreatorCard ) => (
        //         <DiscoverCard key={creator.id} {...creator} />
        //     ))}
        // </div>
    )
}