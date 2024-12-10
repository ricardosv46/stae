import React, { HTMLAttributes } from 'react'
import { CheckIcon } from '../../icons/CheckIcon'
import { classNames } from '@utils/classNames'

interface Props extends HTMLAttributes<HTMLDivElement> {
    text: string
    status?: boolean
}

const ChipGreenText = ({ text, className = '', status = true, ...props }: Props) => {
    return (
        <div
            {...props}
            className={classNames([
                'transition-all duration-500 ease-in-out py-5 text-center absolute top-0 flex justify-center items-center bg-green-light bg-opacity-20 text-green ${className} h-[50px] w-full -mx-4',
                status ? 'opacity-100' : 'opacity-0'
            ])}>
            <CheckIcon className='w-8 h-8' />
            {text}
        </div>
    )
}

export { ChipGreenText }
