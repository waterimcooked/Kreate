import { _HomeCard } from "@/lib/types"
import HomeCard from "./HomeCard"

export default function HomePage() {
    const data = [
        {
            id: "creator_001",
            name: "Water",
            avatar: "/images/placeholderPFP.png",
            priceRange: { min: 8000, max: 30000 },
            rating: 4.9,
            highlightedPreview: "/images/placeholderWORK.png",
            ratingCount: 42,
            portfolio: [
            {
                id: "port_001",
                image: "/portfolio/maya_char1.jpg",
                title: "Cyberpunk Character Rig"
            },
            {
                id: "port_002",
                image: "/portfolio/maya_anim1.mp4",
                title: "Smooth Walk Cycle Loop"
            },
            {
                id: "port_003",
                image: "/portfolio/maya_env1.jpg",
                title: "Sci-Fi Environment"
            }
            ],
        },
        {
            id: "creator_002",
            name: "Alex Torres",
            avatar: "/images/placeholderPFP.png",
            highlightedPreview: "/images/placeholderWORK.png",
            priceRange: { min: 5000, max: 25000 },
            rating: 4.7,
            ratingCount: 28,
            portfolio: [
            {
                id: "port_004",
                image: "/portfolio/alex_illust1.jpg",
                title: "OC Commission - Anime Style"
            },
            {
                id: "port_005",
                image: "/portfolio/alex_illust2.jpg",
                title: "Game Character Design"
            },
            {
                id: "port_006",
                image: "/portfolio/alex_illust3.jpg",
                title: "Fanart - Landscape"
            }
            ],
        },
        {
            id: "creator_003",
            name: "Jordan Kim",
            avatar: "/images/placeholderPFP.png",
            highlightedPreview: "/images/placeholderWORK.png",
            priceRange: { min: 15000, max: 60000 },
            rating: 4.8,
            ratingCount: 19,
            portfolio: [
            {
                id: "port_007",
                image: "/portfolio/jordan_music1.jpg",
                title: "Lo-Fi Hip Hop Beat Pack"
            },
            {
                id: "port_008",
                image: "/portfolio/jordan_music2.jpg",
                title: "Game Level Music - Action Scene"
            },
            {
                id: "port_009",
                image: "/portfolio/jordan_music3.jpg",
                title: "Ambient Soundtrack"
            }
            ],
        }
    ]

    return (
        <section id="Home">
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center h-90 w-full bg-mocha-50">
                    <h1 className="text-5xl font-nunito font-black text-orange-800">
                        search for artists
                    </h1>
                    
                    <h1 className="text-xl font-outfit font-black text-orange-100">
                        or something
                    </h1>
                </div>

                <div className="flex flex-col justify-center items-center p-4 w-full bg-mocha-100">
                    <h1 className="font-outfit text-xl text-mocha-600">
                        Featured Artists
                    </h1>

                    <h1 className="font-outfit text-sm text-mocha-300/100">
                        - hidden gems right here -
                    </h1>

                    <div className="flex flex-row mt-4">
                        { data.map((creator: _HomeCard) => {
                            return (
                                <HomeCard key={creator.id} {...creator}/>
                            )
                        })}
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center p-4 w-full bg-mocha-200">
                    <h1 className="font-outfit text-xl text-mocha-600 ">
                        recent commissions
                    </h1>

                    <h1 className="font-outfit text-sm text-mocha-300/100">
                        - maybe these will make you catch a glimpse? -
                    </h1>

                    <div className="flex flex-row mt-4">
                        { data.map((creator: _HomeCard) => {
                            return (
                                <HomeCard key={creator.id} {...creator}/>
                            )
                        })}
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center p-4 w-full bg-mocha-300">
                    <h1 className="font-outfit text-xl text-mocha-600 ">
                        upcoming kreators
                    </h1>

                    <h1 className="font-outfit text-sm text-mocha-300/100">
                        - users that may have a chance soon -
                    </h1>
                </div>
            </div>
        </section>
    )
}