import { useId, useState, SVGProps, ReactElement, ChangeEvent, FocusEvent } from 'react'

interface Props {
    icon?: (props: SVGProps<SVGSVGElement>) => ReactElement
    initValue: string | number | undefined
    minValue: string | undefined
    maxValue: string
    name: string
    classInput?: string
    format?: string
    onChange: (date: string) => void
}

const Datepicker: React.FC<Props> = ({ name, icon: Icon, classInput, initValue, onChange, format = 'dd/mm/yyyy', minValue, maxValue }) => {
    const fmtDate = (dt: string | number | undefined): string => {
        if (typeof dt === 'string') {
            const strip_hour = dt.split(' ')[0]
            if (strip_hour.indexOf('-') !== -1) return strip_hour
            const dtArry: string[] = strip_hour.split('/')

            if (Array.isArray(dtArry) === false) return dt
            if (format === 'dd/mm/yyyy') {
                return dtArry[2] + '-' + dtArry[1] + '-' + dtArry[0]
            } else {
                return dt
            }
        } else if (typeof dt === 'number') {
            const dateEndPines = new Date(Number(dt))

            const day = dateEndPines.getDate().toString().padStart(2, '0')
            const month = (dateEndPines.getMonth() + 1).toString().padStart(2, '0')
            const year = dateEndPines.getFullYear()
            return `${year}-${month}-${day}`
        } else {
            return new Date().toISOString().split('T')[0]
        }
    }
    const handleEvent = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        let newValue: string = fmtDate(value)
        setValue(newValue)
        if (onChange) onChange(newValue)
    }
    const uid = useId()

    const [newValue, setValue] = useState(fmtDate(initValue))
    const showMenu = (e: FocusEvent<HTMLInputElement>) => {
        try {
            e.target.showPicker()
        } catch (error) {}
    }
    return (
        <div className={`flex`}>
            {typeof Icon === 'function' && <div className='bg-blue w-12 h-12 flex justify-center items-center'>{<Icon />}</div>}
            <input
                type='date'
                name={name}
                id={`input-${uid}`}
                min={fmtDate(minValue)}
                max={fmtDate(maxValue)}
                onFocus={showMenu}
                onChange={handleEvent}
                onKeyDown={(e) => e.preventDefault()}
                value={fmtDate(initValue)}
                autoComplete='off'
                className={`${classInput} outline-none border-gray border-[1px] px-5`}
            />
        </div>
    )
}

export { Datepicker }
