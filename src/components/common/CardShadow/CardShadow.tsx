import { FC, ReactNode } from 'react'

interface CardShadowProps {
    children: ReactNode
    className?: string
    classNameRoot?: string
    border?: boolean
    mirror?: boolean
    color?: string
}
const CardShadow: FC<CardShadowProps> = ({ children, className, classNameRoot, border = true, mirror, color = 'border-blue' }) => {
    return (
        <div className={`${classNameRoot} border-l-[15px] border-b-[15px] ${color} relative ${mirror ? ' transform scale-x-[-1]' : ''} `}>
            <div className='absolute top-0 left-[-15px] w-0 h-0 border-[7.5px] border-white border-b-[transparent] border-r-[transparent] z-0'></div>
            <div className='absolute bottom-[-15px] right-0 w-0 h-0 border-[7.5px] border-white border-t-[transparent] border-l-[transparent] z-0'></div>
            <div
                className={`${className} relative ${mirror ? ' transform scale-x-[-1]' : ''}  ${
                    border ? 'border-gray-light border' : ''
                } `}>
                {children}
            </div>
        </div>
    )
}

export { CardShadow }
