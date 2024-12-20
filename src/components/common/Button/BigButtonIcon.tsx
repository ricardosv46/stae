import { useRouter } from 'next/router'
import React, { ButtonHTMLAttributes, FC } from 'react'
import { SVGProps } from 'react'

interface IBigButtonIcon extends ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string
    icon: FC<SVGProps<SVGSVGElement>>
    title: string
}

const BigButtonIcon: FC<IBigButtonIcon> = ({ href, icon: Icon, title, onClick, ...props }) => {
    const router = useRouter()

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (href) {
            router.push(href)
        }

        if (onClick) {
            onClick(e)
        }
    }

    return (
        <button {...props} onClick={handleClick} className='flex flex-col lg:flex-row w-[350px] min-h-[100px] justify-center items-center '>
            <div className='bg-blue w-[100px] h-[100px] flex justify-center items-center'>
                <Icon className='h-12 w-12' />
            </div>
            <div className='text-white text-center font-bold flex-1 flex justify-center items-center w-full  min-h-[100px]  bg-skyblue'>
                <p>{title}</p>
            </div>
        </button>
    )
}

export default BigButtonIcon
