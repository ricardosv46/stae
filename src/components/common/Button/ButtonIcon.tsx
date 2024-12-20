import { useRouter } from 'next/router'
import React, { ButtonHTMLAttributes, FC } from 'react'
import { SVGProps } from 'react'

interface IBigButtonIcon extends ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string
    icon: FC<SVGProps<SVGSVGElement>>
    title: string
}

export const ButtonIcon: FC<IBigButtonIcon> = ({ href, icon: Icon, title, onClick, ...props }) => {
    return (
        <button {...props} className='flex flex-col lg:flex-row min-w-[250px] min-h-12  justify-center items-center '>
            <div className='bg-blue w-12  h-12  flex justify-center items-center'>
                <Icon className='h-8 w-8' />
            </div>
            <div className='text-white text-center font-bold flex-1 flex justify-center items-center w-full  min-h-12  bg-skyblue'>
                <p>{title}</p>
            </div>
        </button>
    )
}
