interface Props {
    active: number
    total: number
    className: string
    onSelectItem?: Function
}
const Stepper = ({ active, total, className = '', onSelectItem }: Props) => {
    const elements = [...Array.from(Array(total - 1).keys())]
    const onClick = (index: number) => {
        if (onSelectItem) {
            onSelectItem(index)
        }
    }
    let activo = 'text-blue'
    if (total <= active) {
        activo = 'bg-blue text-white'
    }
    return (
        <div className={`${className} flex justify-center w-full`}>
            <ol className='flex items-center w-4/6'>
                {elements.map((i) => {
                    let n = i + 1
                    let adds = ''
                    let activo = 'text-blue'
                    if (n < total) {
                        adds = "after:content-[''] after:w-full after:border-sky-500 after:border-[1px] after:inline-block"
                    }
                    if (n <= active) {
                        activo = 'bg-blue text-white'
                    }
                    return (
                        <li key={i} className={`flex w-full items-center ${adds}`} onClick={() => onClick(n)}>
                            <span
                                className={`flex items-center justify-center w-8 h-8 border rounded-full lg:h-9 lg:w-9 shrink-0 border-sky-600 cursor-default ${activo} font-bold`}>
                                {n}
                            </span>
                        </li>
                    )
                })}
            </ol>
            <span
                className={`flex items-center justify-center w-8 h-8 border rounded-full lg:h-9 lg:w-9 shrink-0 border-sky-600 cursor-default ${activo} font-bold`}>
                {total}
            </span>
        </div>
    )
}
export { Stepper }
