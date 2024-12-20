import { useToggle } from '@components/hooks'
import { ShowPasswordIcon, ShowPasswordIconSlash } from '@components/icons'
import { InputHTMLAttributes, ReactElement, SVGProps, useEffect, useId, useState } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    icon?: (props: SVGProps<SVGSVGElement>) => ReactElement
    classInput?: string
    error?: string
    autoBlur?: boolean
}

const Input = ({ icon: Icon, classInput, error = '', autoBlur = false, ...props }: Props) => {
    const uid = useId()
    const [blur, setBlur] = useState(false)
    const { className, onFocus, ...resprops } = props
    const [isShow, openShow, closeShow, toggleShow] = useToggle()

    useEffect(() => {
        if (autoBlur) {
            setTimeout(() => {
                setBlur(true)
            }, 100)
        }
        return () => {
            setBlur(false)
        }
    }, [])

    return (
        <div className=''>
            <div className={`${typeof Icon === 'function' ? 'flex' : ''} ${className} relative`}>
                {typeof Icon === 'function' && (
                    <div className='bg-blue w-12 h-12 flex justify-center items-center'>{<Icon className='w-7 h-7' />}</div>
                )}

                <input
                    {...resprops}
                    onFocus={(e) => {
                        if (onFocus) onFocus(e)
                        setBlur(true)
                    }}
                    type={props.type === 'password' ? (!isShow ? 'password' : 'text') : props.type}
                    id={`input-${uid}`}
                    autoComplete='off'
                    className={`${classInput} ${
                        props.type === 'password' ? 'pl-5 pr-12' : 'px-5'
                    } border-gray outline-none  border-[1px] flex-1 text-black`}
                />

                {props.type === 'password' && (
                    <>
                        {isShow && <ShowPasswordIcon onClick={toggleShow} className={`cursor-pointer absolute top-2.5 right-4 `} />}
                        {!isShow && <ShowPasswordIconSlash onClick={toggleShow} className={`cursor-pointer absolute top-2.5 right-4 `} />}
                    </>
                )}
            </div>
            {blur && error && (
                <div className='relative h-6'>
                    <p className={`${Icon ? 'ml-12' : ''} text-gray absolute left-0 top-0 text-nowrap `}>{error}</p>
                </div>
            )}
        </div>
    )
}

export { Input }
