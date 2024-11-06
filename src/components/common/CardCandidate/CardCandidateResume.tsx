import { CheckXIcon } from '@components/icons'

interface CardCandidateProps {
    lista: string
    nombres: string
    foto: any
    numero: number
}

const CardCandidateResume = ({ lista, nombres, foto, numero }: CardCandidateProps) => {
    const CandidateIcon = foto

    if (numero > 0) {
        return (
            <div
                className={`bg-skyblue text-white pr-[7px] pl-[18px]  flex-1 flex pt-[11px] pb-[9px]  gap-7 lg:gap-1.5 w-full lg:w-[400px]`}>
                <div className='flex-1 text-left text-sm lg:text-base'>
                    <p>{lista}</p>
                    <p className={`${!lista ? 'lg:pt-9' : 'pt-3'}`}>{nombres}</p>
                </div>
                <div className='justify-end flex gap-1.5'>
                    <div className='w-[75px] h-[79px] lg:w-[62px] lg:h-[62px] bg-white relative flex items-end'>
                        {foto && <CandidateIcon className='w-[75px] h-[75px] lg:w-auto lg:h-auto' />}
                        <div className='left-0 absolute top-0 w-full h-full flex justify-center items-center'>
                            <CheckXIcon />
                        </div>
                    </div>

                    <div className='bg-white w-[75px] h-[79px] lg:w-[62px] lg:h-[62px] text-black flex justify-center items-center text-[44px] font-bold relative'>
                        {numero}
                        <div className='left-0 absolute top-0 w-full h-full flex justify-center items-center'>
                            <CheckXIcon />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    if (numero === 0) {
        return (
            <div
                className={`bg-skyblue text-white pr-[7px] pl-[18px]  flex-1 flex pt-[11px] pb-[9px]  gap-7 lg:gap-1.5 w-full lg:w-[400px]`}>
                <div className='flex-1 text-left text-sm lg:text-base mt-7 lg:mt-5'>
                    <p>{nombres}</p>
                </div>
                <div className='justify-end flex gap-1.5'>
                    <div className='bg-white w-[75px] h-[79px] lg:w-[62px] lg:h-[62px] text-black flex justify-center items-center text-center text-[20px] font-bold relative'>
                        VOTO NULO
                        <div className='left-0 absolute top-0 w-full h-full flex justify-center items-center'>
                            <CheckXIcon />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={`bg-skyblue text-white pr-[7px] pl-[18px]  flex-1 flex pt-[11px] pb-[9px]  gap-7 lg:gap-1.5 w-full lg:w-[400px]`}>
            <div className='flex-1 text-left text-sm lg:text-base'>
                <p className='pt-14 lg:pt-9'>VOTO BLANCO</p>
            </div>
            <div className='justify-end flex gap-1.5'>
                <div className='w-[75px] h-[79px] lg:w-[62px] lg:h-[62px] bg-white relative flex items-end'>
                    <div className='left-0 absolute top-0 w-full h-full flex justify-center items-center'>
                        <CheckXIcon />
                    </div>
                </div>

                <div className='bg-white w-[75px] h-[79px] lg:w-[62px] lg:h-[62px] text-black flex justify-center items-center text-[20px] font-bold relative'>
                    <div className='left-0 absolute top-0 w-full h-full flex justify-center items-center'>
                        <CheckXIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}
export { CardCandidateResume }
