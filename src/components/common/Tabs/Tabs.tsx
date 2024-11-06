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
            <div className={classNames([classTabList, 'flex'])}>
                {tablist.map((item, i) => (
                    <button
                        key={i}
                        onClick={() => onSelect(i)}
                        className={classNames([
                            selectedIndex === i ? 'text-white bg-blue' : 'text-blue bg-white',
                            tablist?.length === 1 ? 'cursor-default' : 'cursor-pointer',
                            'w-1/2 text-xl font-bold flex justify-center items-center h-[60px] border-b border-blue'
                        ])}>
                        {item}
                    </button>
                ))}

                {tablist?.length === 1 && <div className='border-b border-blue w-1/2 h-[60px]'></div>}
            </div>

            {childrenArray[selectedIndex]}
        </>
    )
}
