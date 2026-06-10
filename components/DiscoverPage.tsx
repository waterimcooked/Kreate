import type { _DiscoverFeed } from "@/lib/types";
import type { _CreatorCard } from "@/lib/types";
import DiscoverCard from "./DiscoverCard";
import { _DiscoverCard } from "@/lib/types";

// HARD CODE DATA

export default function DiscoverPage( { data, height } : _DiscoverFeed, className? : string) {
    return (
        <section id="trending">
            <div className="bg-foreground p-4">
                <h1 className="font-outfit text-xl text-center"> trending kreators!! </h1>
                <p className="font-outfit text-sm text-center text-gray-400">people that have been discovered this week...</p>

                <div className={`flex justify-start items-center w-full ${className}`}>
                    { data.map((creator: _CreatorCard ) => (
                        <DiscoverCard key={creator.id} {...creator} />
                    ))}
                </div>
            </div>
        </section>
    )
}