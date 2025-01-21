/**
 * Import: React
 */
import { useEffect, useMemo, useState } from 'react'

/**
 * Import: Components
 */
import { GroupSelector } from '@components/List/GroupSelector'
import { ItemList } from '@components/List/ItemList'

/**
 * Import: Types
 */
import { CommonItem } from '@/types'

/**
 * Import: Utils
 */
import { groupItemsByWrapperType } from '@utils/index'

export const ItemsFound = ({ items }: { items: CommonItem[] }) => {
    const [currentGroup, setCurrentGroup] = useState<string | null>(null)
    const groupedMap = useMemo(() => groupItemsByWrapperType(items), [items])
    console.log('groupedMap: ', [...groupedMap.keys()])

    const handleGroupClick = (group: string) => {
        setCurrentGroup(group)
    }

    useEffect(() => {
        setCurrentGroup(Array.from(groupedMap.keys())[0])
    }, [groupedMap])

    const currentGroupItems = currentGroup ? groupedMap.get(currentGroup) || [] : []

    return (
        <section className='my-4'>
            <GroupSelector
                groups={[...groupedMap.keys()]}
                currentGroup={currentGroup}
                onGroupSelect={handleGroupClick}
            />
            <ItemList items={currentGroupItems} />
        </section>
    )
}
