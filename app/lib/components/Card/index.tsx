'use client'
/**
 * Import: React
 */
import { FC } from 'react'

/**
 * Import: Next
 */
import Image from 'next/image'
import Link from 'next/link'

/**
 * Import: Components
 */
import { CardBody, Card as NextCard } from '@heroui/react'

/**
 * Import: Media
 */
import { HiArrowUpRight } from 'react-icons/hi2'

/**
 * Import: Urils
 */
import { formateDate } from '@utils/index'

type CardProps = {
    title: string
    imageUrl: string
    subtitle?: string
    price?: number
    date?: string
    link?: string
}
export const Card: FC<CardProps> = ({ title, subtitle, price, date, imageUrl, link }) => (
    <NextCard className='bg-transparent hover:bg-white/10'>
        <CardBody className='grid grid-cols-[100px_1fr] sm:grid-cols-[1fr_6fr_2fr] gap-2 sm:gap-4'>
            <div className='w-full aspect-square relative'>
                <Image
                    alt='Card background'
                    className='object-contain rounded-xl'
                    src={imageUrl}
                    fill
                    loading='lazy'
                />
            </div>
            <div className='flex flex-col justify-between'>
                <div className='space-y-2'>
                    <h3 className='text-md sm:text-xl text-neutral-100'>{title}</h3>
                    <p className='text-sm sm:text-base text-neutral-400'>{subtitle}</p>
                </div>
                {link && (
                    <Link href={link} className='text-sm sm:text-base'>
                        Перейти <HiArrowUpRight className='inline' />
                    </Link>
                )}
            </div>
            <div className='max-sm:col-span-2 flex flex-row-reverse sm:flex-col items-baseline sm:items-end justify-start gap-6 md:justify-between'>
                <div className='mt-2 w-fit h-fit px-4 py-1 border border-neutral-200 rounded-md'>
                    <p>{price ? `${price} $` : 'free'} </p>
                </div>
                {date && <p className='text-sm text-neutral-400'>{formateDate(date)}</p>}
            </div>
        </CardBody>
    </NextCard>
)
