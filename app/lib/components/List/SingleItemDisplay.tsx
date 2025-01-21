/**
 * Import: Next
 */
import Image from 'next/image'
import Link from 'next/link'

/**
 * Import: Types
 */
import { CommonItem } from '@/types'

/**
 * Import: Utils
 */
import { isTrackItem } from '@utils/index'

export const SingleItemDisplay = ({ item }: { item: CommonItem }) => {
    return (
        <div className='my-10 flex gap-2 sm:gap-4'>
            <div className='w-full max-w-40 aspect-square relative'>
                <Image
                    alt='Card background'
                    className='object-contain rounded-xl'
                    src={item.artworkUrl100}
                    fill
                    loading='lazy'
                />
            </div>
            <div className='flex flex-col justify-between'>
                <div className='space-y-2'>
                    <h2 className='text-xl sm:text-2xl text-neutral-100'>
                        {isTrackItem(item) ? item.trackCensoredName : item.collectionName}
                    </h2>
                    <p className='text-sm sm:text-base text-neutral-400'>{item.artistName}</p>
                </div>
                <Link href={item.collectionViewUrl} className='text-sm sm:text-base'>
                    Перейти
                </Link>
            </div>
        </div>
    )
}
