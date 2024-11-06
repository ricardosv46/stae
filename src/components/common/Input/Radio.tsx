import { useId, InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    classInput?: string
    checked?: boolean
}

const Radio = ({ label, checked, classInput, ...props }: Props) => {
    const uid = useId()
    const { className, ...resprops } = props

    return (
        <div className={`inline-flex ${className}`}>
            <input
                type='radio'
                {...resprops}
                id={`input-${uid}`}
                key={`kinput-${uid}`}
                checked={checked}
                autoComplete='off'
                className={`${classInput} m-1 border-solid border-lg before:border-box`}
            />
            {label}
        </div>
    )
}

export { Radio }
