import React, { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
    text: string
}

const ChipGreenText = ({ text, className = '', ...props }: Props) => {
    return (
        <div {...props} className={`w-full py-5 text-center border border-green text-green ${className}`}>
            {text}
        </div>
    )
}

export { ChipGreenText }
