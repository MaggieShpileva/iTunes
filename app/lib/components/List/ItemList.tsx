/**
 * Import: Components
 */
import { ItemCard } from '@components/List/ItemCard'

/**
 * Import: Types
 */
import { CommonItem } from '@/types'

export const ItemList = ({ items }: { items: CommonItem[] }) => {
    if (!items || items.length === 0) {
        return null
    }

    return (
        <div className='space-y-2 sm:space-y-4'>
            {items.map((item, index) => (
                <ItemCard key={index} item={item} />
            ))}
        </div>
    )
}
