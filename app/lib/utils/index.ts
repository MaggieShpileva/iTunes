import { CommonItem, ITunesAudioBook, ITunesTrackItem } from '@/types'

export const groupItemsByWrapperType = (items: CommonItem[]): Map<string, CommonItem[]> => {
    return items.reduce((map, item) => {
        const group = map.get(item.wrapperType) || []
        group.push(item)
        map.set(item.wrapperType, group)
        return map
    }, new Map<string, CommonItem[]>())
}

export const getItemCardProps = (item: CommonItem) => {
    if (item.wrapperType === 'track' && 'trackId' in item) {
        return {
            title: item.trackName,
            subtitle: item.artistName,
            price: item.trackPrice,
            date: item.releaseDate,
            imageUrl: item.artworkUrl100,
            link: item.collectionViewUrl || '',
        }
    } else if (item.wrapperType === 'audiobook' && 'artistId' in item) {
        return {
            title: item.artistName,
            subtitle: item.collectionName,
            price: item.collectionPrice,
            date: item.releaseDate,
            imageUrl: item.artworkUrl100,
            link: item.collectionViewUrl || '',
        }
    }

    return {
        title: item.artistName,
        date: item.releaseDate,
        imageUrl: item.artworkUrl100,
    }
}

export const isTrackItem = (data: ITunesAudioBook | ITunesTrackItem): data is ITunesTrackItem => {
    return (data as ITunesTrackItem).trackId !== undefined // Проверяем на наличие trackId, который есть только у треков
}

export const formateDate = (date: string) => {
    const currentDate = new Date(date)

    const formatter = new Intl.DateTimeFormat('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })
    if (currentDate) {
        return formatter.format(currentDate)
    } else {
        return null
    }
}
