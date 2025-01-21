'use client'

/**
 * Import: React
 */
import { useState } from 'react'
/**
 * Import: Components
 */
import { SearchBar } from '@/app/lib/components/SearchBar'
import { List } from '@components/List'

/**
 * Import: Types
 */
import { CommonItem } from '@/types'
import Loader from './lib/components/Loader'

export default function Home() {
    const [items, setItems] = useState<CommonItem[] | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    return (
        <>
            <SearchBar setItems={setItems} setIsLoading={setIsLoading} />
            {isLoading ? <Loader /> : <List items={items} />}
        </>
    )
}
