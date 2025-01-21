'use client'
/**
 * Import: Components
 */
import { ItemsNotFound } from '@components/List/ItemsNotFound'
import { SingleItemDisplay } from '@components/List/SingleItemDisplay'
import { ItemsFound } from '@components/List/ItemsFound'

/**
 * Import: Types
 */
import { CommonItem } from '@/types'

export const List = ({ items }: { items: CommonItem[] | null }) => {
    if (!items) {
        return
    }
    if (items.length === 0) {
        return <ItemsNotFound />
    }

    if (items.length === 1) {
        return <SingleItemDisplay item={items[0]} />
    }

    return <ItemsFound items={items} />
}
