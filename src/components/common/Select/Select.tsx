import { LoadingSpin } from '@components/icons'
import { ArrowDownIcon } from '@components/icons'
import { useId } from 'react'
type Allowed = string | number

interface BaseProps<Value> {
    id: string
    label?: string
    placeHolder?: string
    options: readonly Value[]
    className?: string
    value: Value | string
    disabled?: boolean
    loading?: boolean
    optionChange: (newValue: Value) => void
    mapOptionToLabel?: (option: Value) => Allowed
    mapOptionToValue?: (option: Value) => Allowed
}
type SelectProps<Value> = Value extends Allowed ? BaseProps<Value> : Required<BaseProps<Value>>

const isAllowed = (v: any): v is Allowed => typeof v === 'string' || typeof v === 'number'

export default function Select<Value>({
    id,
    label,
    placeHolder,
    className,
    options,
    optionChange,
    value = '',
    disabled = false,
    loading = false,
    mapOptionToLabel,
    mapOptionToValue
}: SelectProps<Value>) {
    const uid = useId()
    const toLabel = (option: Value): Allowed => {
        if (mapOptionToLabel) {
            return mapOptionToLabel(option)
        }
        return isAllowed(option) ? option : String(option)
    }

    const toValue = (option: Value | string): Allowed => {
        if (mapOptionToValue) {
            // @ts-ignore
            return mapOptionToValue(option)
        }
        return isAllowed(option) ? option : String(option)
    }
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selInd = placeHolder ? e.target.selectedIndex - 1 : e.target.selectedIndex
        optionChange(options[selInd])
    }
    return (
        <div className='relative'>
            {loading && (
                <i className='pl-2 m-0 flex absolute w-full h-full justify-center items-center z-10 opacity-100'>
                    <LoadingSpin className='animate-spin h-5 w-5 text-op-blue-1' />
                </i>
            )}
            <div className={`flex ${loading ? 'opacity-60' : 'w-full'}`}>
                {label && <label htmlFor={uid}>{label}</label>}
                <select
                    name={id}
                    id={id}
                    placeholder={placeHolder}
                    value={value !== '' ? toValue(value) : ''}
                    className={`${
                        disabled ? 'disabled:bg-slate-300' : ''
                    } appearance-none bg-white border-[1px] border-gray text-gray-700 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                    disabled={disabled}
                    onChange={handleChange}>
                    {placeHolder && (
                        <option disabled={className !== 'PHE'} value=''>
                            --{placeHolder}--
                        </option>
                    )}
                    {options?.length &&
                        options.map((value, index) => (
                            <option key={`${toValue(value)}${index}`} value={toValue(value)}>
                                {toLabel(value)}
                            </option>
                        ))}
                </select>
                <div className='bg-blue w-12 h-12 flex justify-center items-center'>{<ArrowDownIcon />}</div>
            </div>
        </div>
    )
}
