// this is where types can be written and exported for use. this TYPESCRIPT file specifically exports types

import { table } from "console"
import { Dispatch, SetStateAction } from "react"

export type _SearchBar = {
    placeholder?: string,
    className?: string,
    searchInput: string,
    setSearchInput: Dispatch<SetStateAction<string>>
}

export type _AppProps = {
    searchInput: string,
    setSearchInput: Dispatch<SetStateAction<string>>,
    selectedCategory: string,
    setSelectedCategory: Dispatch<SetStateAction<string>>
}

export type _DiscoverFeed = {
    data: _CreatorCard[],
    height?: string
}

export type _DiscoverCard = {
    id: string                           // unique creator id
    name: string                         // "dani"
    avatar?: string                      // "/avatar.jpg"
    rating?: number                      // 4.8 (quick trust signal)
    ratingCount?: number
    highlightedPreview?: string          // an image
    portfolio?: {                        // 1-2 showcase pieces only
        id: string
        image: string
        title: string
    }[]                                  // keep it short in UI (map().slice(0, 2))
}

export type _HomeCard = {
    id: string                           // unique creator id
    name: string                         // "dani"
    avatar?: string                      // "/avatar.jpg"
    rating?: number                      // 4.8 (quick trust signal)
    ratingCount?: number
    highlightedPreview?: string          // an image
    portfolio?: {                        // 1-2 showcase pieces only
        id: string
        image: string
        title: string
    }[]
}

export type _CreatorCard = {
    id: string                           // unique creator id
    name: string                         // "dani"
    avatar?: string                      // "/avatar.jpg"
    priceRange?: { min: number, max: number } // { min: 5000, max: 50000 }
    rating?: number                      // 4.8
    reviewCount?: number                 // 24 (full context here)
    bio?: string                         // "illustration + animation specialist"
    portfolio?: {                        // full portfolio
        id: string
        image: string
        title: string
    }[]
    posts?: {                            // recent work/updates
        id: string
        image: string
        title: string
    }[]
}

