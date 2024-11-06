import React from 'react'

interface CardCandidateProps {
    lista: string
    nombres: string
    foto: any
    numero: number
    color: string
}

const CardCandidateDetail = ({ lista, nombres, foto, numero, color }: CardCandidateProps) => {
    const CandidateIcon = foto

    return (
        <div className={`${color} text-black pr-[7px] pl-[18px]  flex-1 flex pt-[11px] pb-[9px]  gap-7 lg:gap-1.5 w-full lg:w-[400px]`}>
            <div className='flex-1 text-left text-sm lg:text-base'>
                <p>{lista}</p>
                <p className={`${!lista ? 'lg:pt-9' : 'pt-3'}`}>{nombres}</p>
            </div>
            <div className='justify-end flex gap-1.5'>
                <div className='w-[75px] h-[79px] lg:w-[62px] lg:h-[62px] bg-white relative flex items-end'>
                    {foto && <CandidateIcon className='w-[75px] h-[75px] lg:w-auto lg:h-auto' />}
                </div>

                <div className='bg-white w-[75px] h-[79px] lg:w-[62px] lg:h-[62px] text-black flex justify-center items-center text-[44px] font-bold relative'>
                    {numero}
                </div>
            </div>
        </div>
    )
}
export { CardCandidateDetail }
