import type { _DiscoverFeed } from "@/lib/types";
import type { _CreatorCard } from "@/lib/types";
import DiscoverCard from "@/components/DiscoverCard";
import DiscoverPage from "@/components/DiscoverPage";
import { _DiscoverCard } from "@/lib/types";

// HARD CODE DATA

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
  },

  {
    id: "creator_004",
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
  },

  {
    id: "creator_005",
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


export default function Discover( { height } : _DiscoverFeed, className? : string) {
    return (
        <DiscoverPage data={data} />

        // <div className={`flex p-4 justify-start items-center w-full h-64 ${className}`}>
        //     { data.map((creator: _CreatorCard ) => (
        //         <DiscoverCard key={creator.id} {...creator} />
        //     ))}
        // </div>
    )
}