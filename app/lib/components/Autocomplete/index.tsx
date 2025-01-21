'use client'
/**
 * Import: React
 */
import { FC, Key, ReactNode, RefObject } from 'react'

/**
 * Import: Components
 */
import { AutocompleteItem, Avatar, Autocomplete as NextAutocomplete } from '@heroui/react'

/**
 * Import: Types
 */
import { CommonItem } from '@/types'

/**
 * Import: Utils
 */
import { isTrackItem } from '@utils/index'

type Props = {
    items: CommonItem[]
    onInputChange: (value: string) => void
    label?: string
    isLoading?: boolean
    placeholder?: string
    startContent?: ReactNode
    ref?: RefObject<HTMLInputElement | null>
    onEnter?: (value: boolean) => void
    onSelect?: (key: Key | null) => void
}

export const Autocomplete: FC<Props> = ({
    items,
    onInputChange,
    isLoading,
    placeholder,
    startContent,
    ref,
    onEnter,
    label,
    onSelect,
}) => (
    <NextAutocomplete
        items={items}
        label={label}
        placeholder={placeholder}
        isLoading={isLoading}
        startContent={startContent}
        isClearable
        classNames={{ selectorButton: 'hidden', listbox: 'h-fit space-y-10' }}
        inputProps={{ classNames: { innerWrapper: 'px-2' } }}
        onInputChange={onInputChange}
        allowsCustomValue
        ref={ref}
        onKeyDown={(event) => {
            if (onEnter && event.key === 'Enter') {
                onEnter(true)
            }
        }}
        aria-label='autocomplete'
        onSelectionChange={onSelect}>
        {items.map((item, index) => (
            <AutocompleteItem
                key={index}
                textValue={isTrackItem(item) ? item.trackName : item.collectionName}
                classNames={{ base: 'h-fit' }}>
                <div className='flex gap-2 items-center'>
                    <Avatar
                        alt={item.artistName}
                        className='flex-shrink-0'
                        size='sm'
                        src={item.artworkUrl100}
                    />
                    <div className=''>
                        <h5 className='text-small text-neutral-950'>
                            {isTrackItem(item) ? item.trackName : item.collectionName}
                        </h5>
                        <p className='text-tiny text-default-400'>{item.artistName}</p>
                    </div>
                </div>
            </AutocompleteItem>
        ))}
    </NextAutocomplete>
)
