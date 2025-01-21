/**
 * Import: React
 */
import React from 'react'

/**
 * Import: Components
 */
import { Spinner } from '@heroui/react'

const Loader = () => (
    <div className='flex justify-center items-center min-h-screen'>
        <Spinner size='lg' />
    </div>
)

export default Loader
