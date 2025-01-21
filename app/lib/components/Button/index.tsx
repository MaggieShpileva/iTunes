'use client'
/**
 * Import: React
 */
import { FC, ReactNode } from 'react'

/**
 * Import: Components
 */
import { Button as NextButton } from '@heroui/react'

export enum ButtonType {
    PRIMARY = 'md:px-10 bg-gradient-to-l from-pink-500 via-rose-400 to-orange-500 text-white',
    SECONDARY = 'bg-gray-600 text-white/90 capitalize',
}

type Props = {
    buttonType: ButtonType
    text: ReactNode
    onClick: () => void
    className?: string
}

export const Button: FC<Props> = ({ buttonType, text, onClick, className }) => (
    <NextButton className={`${buttonType} ${className}`} onPress={onClick} disableAnimation>
        {text}
    </NextButton>
)
