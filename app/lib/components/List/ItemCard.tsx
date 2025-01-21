/**
 * Import: Components
 */
import { Card } from '@components/Card'

/**
 * Import: Types
 */
import { CommonItem } from '@/types'

/**
 * Import: Utils
 */
import { getItemCardProps } from '@utils/index'

export const ItemCard = ({ item }: { item: CommonItem }) => {
    const { title, subtitle, price, date, imageUrl, link } = getItemCardProps(item)

    return (
        <Card
            title={title}
            subtitle={subtitle}
            price={price}
            date={date}
            imageUrl={imageUrl}
            link={link}
        />
    )
}
