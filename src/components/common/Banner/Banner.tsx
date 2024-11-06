import { ArrowRightIcon, VectorIcon } from '@components/icons'
import Image from 'next/image'
import React from 'react'

const Banner = () => {
    return (
        <div className='relative w-screen -mx-4  bg-banner-1 md:mx-auto flex overflow-hidden'>
            <div className='text-white right-24 top-28 absolute w-[400px] text-2xl'>
                Paso 1. Ingrese al módulo de votación con su PIN y contraseña
            </div>
            <div className='bg-light-skyblue w-full md:w-auto md:h-[277px] pt-5 pb-2.5 md:py-0 relative'>
                <Image
                    src='/assets/images/votopc.png'
                    width={429}
                    height={277}
                    alt='logo onpe'
                    className='mx-auto w-[266px] md:w-[429px] relative z-10'
                />
                <div className='bg-blue text-white mr-4 py-1 pr-3 pl-6 -mt-2 md:hidden'>
                    Paso 1. Ingrese al módulo de votación con su usuario y contraseña
                </div>
            </div>
            <VectorIcon className='absolute left-[377px] rotate-12 bottom-0 hidden md:block' />
            <ArrowRightIcon className='absolute md:w-[60px] md:h-[60px] right-2 top-20 md:top-28 md:right-2.5' />
        </div>
    )
}

export { Banner }
