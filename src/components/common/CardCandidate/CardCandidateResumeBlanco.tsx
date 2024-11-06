import { CheckXIcon } from '@components/icons'

const CardCandidateResumeBlanco = () => {
    return (
        <div className={`bg-skyblue text-white pr-[7px] pl-[18px]  flex-1 flex pt-[11px] pb-[9px]  gap-7 lg:gap-1.5 w-full lg:w-[400px]`}>
            <div className='flex-1 text-left text-sm lg:text-base mt-7 lg:mt-5'>
                <p>VOTO EN BLANCO</p>
            </div>
            <div className='justify-end flex gap-1.5'>
                <div className='bg-white w-[75px] h-[79px] lg:w-[62px] lg:h-[62px] text-black flex justify-center items-center text-[20px] font-bold relative'>
                    <div className='left-0 absolute top-0 w-full h-full flex justify-center items-center'>
                        <CheckXIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}
export { CardCandidateResumeBlanco }
