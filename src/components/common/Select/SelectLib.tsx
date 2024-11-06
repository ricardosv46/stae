import { ArrowDownIcon, ArrowDownIconSmall, LoadingSpin } from '@components/icons'
import { useId, useState } from 'react'

import Select, { ActionMeta, OptionsOrGroups } from 'react-select'

type Allowed = string | number

interface BaseProps<Value> {
    id: string
    label?: string
    placeHolder?: string
    options: readonly Value[]
    className?: string
    value: any
    disabled?: boolean
    loading?: boolean
    optionChange: (newValue: OptionOutput) => void
    error?: string
}

interface OptionOutput {
    codigo: string
    valor: string
    order?: number
}

interface OptionInput {
    value: string
    label: string
}

type SelectProps<Value> = Value extends Allowed ? BaseProps<Value> : Omit<Required<BaseProps<Value>>, 'error'> & { error?: string }

function selectOptions(options: OptionsOrGroups<any, any>): OptionsOrGroups<any, any> {
    return options?.map((value, index) => {
        return { value: value.codigo, label: value.valor }
    })
}

export default function SelectCustom<Value>({
    id,
    label,
    placeHolder,
    className,
    options,
    optionChange,
    value,
    disabled = false,
    loading = false,
    error
}: SelectProps<Value>) {
    const uid = useId()
    const [defaultValueX, setValue] = useState(value)
    const customStyles = {
        control: (provided: any) => ({
            ...provided,
            border: '0px',
            cursor: 'pointer',
            padding: '0px'
        }),

        menuList: (provided: any) => ({
            ...provided,
            borderColor: 'red',
            border: '1px'
        })
    }

    const onChange = (option: any, actionMeta: ActionMeta<OptionInput>) => {
        setValue({ value: option.value, label: option.label })
        optionChange({ codigo: option.value, valor: option.label })
    }
    const [blur, setBlur] = useState(false)
    return (
        <div>
            <div className='cursor-pointer'>
                <div className='relative'>
                    {loading && (
                        <i className='pl-2 m-0 flex absolute w-full h-full justify-center items-center z-10 opacity-100'>
                            <LoadingSpin className='animate-spin h-5 w-5 text-op-blue-1' />
                        </i>
                    )}
                    <div className={`flex ${loading ? 'opacity-60' : 'w-full'}`}>
                        {label && <label htmlFor={uid}>{label}</label>}
                        <Select
                            onFocus={() => setBlur(true)}
                            options={selectOptions(options)}
                            isDisabled={disabled}
                            isLoading={loading}
                            isSearchable={false}
                            placeholder={placeHolder}
                            value={defaultValueX}
                            onChange={onChange}
                            classNamePrefix='select'
                            styles={customStyles}
                            className={` ${
                                disabled ? 'disabled:bg-slate-300' : ''
                            } appearance-none bg-white border-[1px] border-gray text-gray-900   focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 select-lib`}
                            components={{
                                IndicatorSeparator: () => null,
                                LoadingIndicator: () => <LoadingSpin className='animate-spin h-5 w-5 text-op-blue-1' />,
                                DropdownIndicator: () => (className === 'small-ico' ? <ArrowDownIconSmall /> : <ArrowDownIcon />)
                            }}
                        />
                    </div>
                    {blur && <p className={` text-gray `}>{error}</p>}
                </div>
            </div>
        </div>
    )
}
