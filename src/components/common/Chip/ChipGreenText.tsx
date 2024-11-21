import React, { HTMLAttributes } from 'react'
import { CheckIcon } from '../../icons/CheckIcon'

interface Props extends HTMLAttributes<HTMLDivElement> {
    text: string
}

const ChipGreenText = ({ text, className = '', ...props }: Props) => {
    return (
        <div
            {...props}
            className={` py-5 text-center absolute top-0 flex justify-center items-center bg-green-light bg-opacity-20 text-green ${className} h-[50px] w-full -mx-4  `}>
            <CheckIcon className='w-8 h-8' />
            {text}
        </div>
    )
}

export { ChipGreenText }
