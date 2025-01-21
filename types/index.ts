// Общие свойства для всех элементов
export type BaseItem = {
    artistName: string
    artworkUrl60: string
    artworkUrl100: string
    collectionName: string
    collectionPrice: number
    collectionViewUrl: string
    country: string
    currency: string
    primaryGenreName: string
    releaseDate: string
    collectionId: number

    wrapperType: 'track' | 'audiobook'
}

// Тип для треков (свойства специфичные для треков)
export type ITunesTrackItem = BaseItem & {
    trackId: number
    trackName: string
    trackPrice: number
    trackViewUrl: string
    trackExplicitness: string
    trackCensoredName: string
    trackCount?: number
    trackRentalPrice?: number
    trackTimeMillis: number
    kind: string
    longDescription?: string
    previewUrl?: string
    collectionArtistId?: number
    collectionArtistViewUrl?: string
    collectionHdPrice?: number
    collectionExplicitness?: string
    hasITunesExtras?: boolean
}

// Тип для аудиокниг (свойства специфичные для аудиокниг)
export type ITunesAudioBook = BaseItem & {
    artistId: number
    artistViewUrl: string
    description: string
    previewUrl: string
    trackCount: number
    copyright: string
    collectionCensoredName: string
}

// Универсальный тип для всех элементов
export type CommonItem = ITunesTrackItem | ITunesAudioBook
