import { useId, InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    classInput?: string
    checked?: boolean
}

export const CheckBox = ({ label, classInput, checked, ...props }: Props) => {
    const uid = useId()
    const { className, ...resprops } = props

    return (
        <div className={`inline-flex ${className}`}>
            <input
                type='checkbox'
                {...resprops}
                id={`input-${uid}`}
                key={`kinput-${uid}`}
                checked={checked}
                autoComplete='off'
                className={`${classInput} m-1 border-solid border-lg before:border-box cursor-pointer`}
            />
            <label htmlFor={`input-${uid}`} className='cursor-pointer'>
                {label}
            </label>
        </div>
    )
}
