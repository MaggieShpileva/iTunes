'use client'

/**
 * Import: React
 */
import { Dispatch, FC, Key, SetStateAction, useRef, useState } from 'react'

/**
 * Import: Libraries
 */
import { debounce } from 'lodash'
import { IoIosSearch } from 'react-icons/io'

/**
 * Import: API
 */
import { serviceEvents } from '@api/events'

/**
 * Import: Components
 */
import { ButtonType } from '@components/Button'
import { Autocomplete } from '@components/Autocomplete'
import { Button } from '@components/Button'

/**
 * Import: Types
 */
import { CommonItem } from '@/types'

/**
 * Import: Utils
 */
import { isTrackItem } from '@utils/index'

type SearchBarProps = {
    setItems: Dispatch<React.SetStateAction<CommonItem[] | null>>
    setIsLoading: Dispatch<SetStateAction<boolean>>
}

export const SearchBar: FC<SearchBarProps> = ({ setItems, setIsLoading }) => {
    const [previewItems, setPreviewItems] = useState<CommonItem[]>([])
    const ref = useRef<HTMLInputElement | null>(null)

    // Оптимизированная дебаунс-функция для автозаполнения
    const handleAutocompleteChange = debounce(async (value: string) => {
        if (value.trim()) {
            const result = await serviceEvents.search(value, 10)
            setPreviewItems(result)
        } else {
            setPreviewItems([]) // Очистка, если строка пустая
        }
    }, 1000)

    // Универсальная функция для отправки запроса
    const sendRequest = async (value: string) => {
        try {
            setIsLoading(true)
            const result = await serviceEvents.search(value).finally(() => setIsLoading(false))
            setItems(result)
        } catch (error) {
            console.error('Search failed:', error)
        }
    }

    // Обработчик клика по кнопке
    const handleButtonClick = () => {
        if (ref.current) {
            sendRequest(ref.current.value)
        }
    }

    // Обработчик нажатия на Enter
    const onPressEnter = () => {
        if (ref.current) {
            sendRequest(ref.current.value)
        }
    }

    const onItemSelect = async (key: Key | null) => {
        if (key === null || !previewItems[Number(key)]) return

        // Получаем id в зависимости от типа элемента
        const itemId = getItemId(previewItems[Number(key)])

        if (itemId) {
            const result = await serviceEvents.searchItem(itemId)
            setItems(result)
        }
    }

    // Вспомогательная функция для извлечения идентификатора элемента
    const getItemId = (item: CommonItem): number | null => {
        if (isTrackItem(item)) {
            return item.trackId || null
        }

        return item.collectionId || null
    }

    return (
        <div className='flex items-center gap-2'>
            <Autocomplete
                items={previewItems}
                startContent={<IoIosSearch className='w-6 h-6 text-black' />}
                onInputChange={handleAutocompleteChange}
                ref={ref}
                onEnter={onPressEnter}
                onSelect={onItemSelect}
            />
            <Button buttonType={ButtonType.PRIMARY} text='Search' onClick={handleButtonClick} />
        </div>
    )
}
