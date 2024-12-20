import { classNames } from '@utils/classNames'
import React, { ReactElement } from 'react'

interface NewTabsProps {
    tablist: string[]
    children: ReactElement[] | ReactElement
    selectedIndex: number
    onSelect: (number: number) => void
    classTabList?: string
}

export const Tabs = ({ selectedIndex, children, tablist, onSelect, classTabList }: NewTabsProps) => {
    const childrenArray = React.Children.toArray(children)

    return (
        <>
            <div className={classNames([classTabList, 'flex border-b border-gray'])}>
                {tablist.map((item, i) => (
                    <button
                        key={i}
                        onClick={() => onSelect(i)}
                        className={classNames([
                            selectedIndex === i ? 'text-white bg-blue border-blue' : 'text-blue bg-white border-skyblue',
                            tablist?.length === 1 ? 'cursor-default' : 'cursor-pointer',
                            'text-xl font-bold flex justify-center items-center w-[250px] h-[60px]   border border-b-2 rounded-tr-[10px] rounded-tl-[10px]'
                        ])}>
                        {item}
                    </button>
                ))}

                {tablist?.length === 1 && (
                    <div className='border-b border-skyblue  w-[250px] h-[60px] rounded-tr-[10px] rounded-tl-[10px]'></div>
                )}
            </div>

            {childrenArray[selectedIndex]}
        </>
    )
}
