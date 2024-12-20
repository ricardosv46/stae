import { formatTextByWords } from '@utils/formatTextByWords'
import { InputHTMLAttributes, ReactElement, SVGProps, useEffect, useId, useState } from 'react'

interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {
    icon?: (props: SVGProps<SVGSVGElement>) => ReactElement
    classInput?: string
    error?: string
    autoBlur?: boolean
}

export const InputArea = ({ icon: Icon, classInput, error = '', autoBlur = false, ...props }: Props) => {
    const uid = useId()
    const [blur, setBlur] = useState(false)
    const { className, disabled, ...resprops } = props

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

    useEffect(() => {
        const textarea = document.getElementById(`input-${uid}`) as HTMLTextAreaElement
        if (textarea) {
            textarea.style.height = 'auto'
            textarea.style.height = `${textarea.scrollHeight}px`
        }
    }, [resprops.value])

    return (
        <div>
            <div className={`$ ${className} relative`}>
                <textarea
                    {...resprops}
                    onFocus={() => {
                        setBlur(true)
                    }}
                    id={`input-${uid}`}
                    rows={3}
                    onInput={(e) => {
                        const target = e.target as HTMLTextAreaElement
                        target.style.height = 'auto'
                        target.style.height = `${target.scrollHeight}px`
                    }}
                    style={{ overflow: 'hidden', resize: 'none' }}
                    className={`${classInput} py-2.5 px-5 border-gray outline-none border-[1px] flex-1 `}
                    disabled={disabled}></textarea>
            </div>
            {blur && error && (
                <div className='relative h-6'>
                    <p className={`${Icon ? 'ml-12' : ''} text-gray absolute left-0 top-0 text-nowrap `}>{error}</p>
                </div>
            )}
        </div>
    )
}
