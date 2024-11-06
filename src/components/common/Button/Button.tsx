import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color: 'blue' | 'red' | 'darkblue'
    title: string
}

export const Button = ({ color, title, className, ...props }: ButtonProps) => {
    const getColor = () => {
        if (color === 'blue') return 'bg-skyblue md:hover:bg-opacity-30'
        if (color === 'red') return 'bg-red md:hover:bg-opacity-30'
        if (color === 'darkblue') return 'bg-blue md:hover:bg-opacity-30'
    }

    return (
        <button
            className={`text-white flex justify-center items-center text-normal font-semibold disabled:bg-gray disabled:hover:bg-opacity-100 ${getColor()} h-12 transition-all duration-300 ease-in-out ${className} `}
            {...props}>
            {title}
        </button>
    )
}
