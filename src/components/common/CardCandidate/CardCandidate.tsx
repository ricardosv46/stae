import { CheckXIcon } from '@components/icons'
import { ButtonHTMLAttributes } from 'react'

interface CardCandidateProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    lista: string
    nombres: string
    foto: any
    numero: number
    color: string
    selectValue: number | null
    verLogo: number
    typeCandidate: 'nacional' | 'departamental' | 'capitulo'
    redirectToDetail: (type: string, id: number) => void
}

const CardCandidate = ({
    color,
    lista,
    nombres,
    foto,
    numero,
    verLogo,
    selectValue,
    typeCandidate,
    redirectToDetail,
    ...props
}: CardCandidateProps) => {
    const selected = selectValue === numero

    const CandidateIcon = foto
    if (numero !== 0) {
        return (
            <div
                className={`${color} pr-[7px] pl-[18px]
        flex lg:gap-2 items-center flex-1 flex-col lg:flex-row lg:bg-transparent  lg:py-auto`}>
                <button
                    className={`${
                        selected ? 'lg:bg-skyblue lg:text-white' : color
                    } flex-1 flex pt-[11px] pb-[9px] lg:pr-[7px] lg:pl-[18px] gap-7 lg:gap-1.5 w-full lg:w-[400px] mb-2 cursor-default`}
                    {...props}>
                    <div className='flex-1 text-left text-sm lg:text-base'>
                        <p className='font-semibold'>{lista}</p>
                        <p className={`${!lista ? 'lg:pt-9' : 'lg:pt-3'} font-semibold`}>{nombres}</p>
                    </div>
                    <div className='justify-end flex gap-1.5 hg-list'>
                        {foto && (
                            <div className='w-[75px] h-[79px] lg:w-[62px] lg:h-[62px] bg-white relative flex items-end'>
                                <CandidateIcon className='w-[75px] h-[75px] lg:w-auto lg:h-auto' />
                                {selected && (
                                    <div className='left-0 absolute top-0 w-full h-full flex justify-center items-center'>
                                        <CheckXIcon />
                                    </div>
                                )}
                            </div>
                        )}

                        {verLogo > 0 && numero > 0 && (
                            <div className='bg-white w-[75px] h-[79px] lg:w-[62px] lg:h-[62px] text-black flex justify-center items-center text-[44px] font-bold relative'>
                                {numero}
                                {selected && (
                                    <div className='left-0 absolute top-0 w-full h-full flex justify-center items-center'>
                                        <CheckXIcon />
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </button>
            </div>
        )
    }

    if (numero === 0) {
        return (
            <div
                className={`${color} pr-[7px] pl-[18px]
        flex lg:gap-2 items-center flex-1 flex-col lg:flex-row lg:bg-transparent  lg:py-auto`}>
                <button
                    className={`${
                        selected ? 'lg:bg-skyblue lg:text-white' : color
                    } flex-1 flex pt-[11px] pb-[9px] lg:pr-[7px] lg:pl-[18px] gap-7 lg:gap-1.5 w-full lg:w-[400px]  cursor-default`}
                    {...props}>
                    <div className='flex-1 text-left text-sm lg:text-base mt-7 lg:mt-5'>
                        <p className={`font-semibold`}>{nombres}</p>
                    </div>
                    <div className='justify-end flex gap-1.5 hg-list'>
                        {verLogo > 0 && (
                            <div className='bg-white w-[75px] h-[79px] lg:w-[62px] lg:h-[62px] text-black flex justify-center items-center text-center text-[16px] font-semibold relative'>
                                VOTO NULO
                                {selected && (
                                    <div className='left-0 absolute top-0 w-full h-full flex justify-center items-center'>
                                        <CheckXIcon />
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </button>
            </div>
        )
    }
}
export { CardCandidate }
