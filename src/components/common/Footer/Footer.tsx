import React from 'react'

const Footer = () => {
    return (
        <footer className='flex bg-blue px-4 z-10 w-full relative'>
            <ul className='flex flex-col gap-6 md:flex-row justify-center py-14 md:pt-[15px] md:pb-[18px] w-full max-w-[1400px] mx-auto'>
                <li>
                    <p className='text-yellow font-semibold pb-2'>Central telefónica</p>
                    <p className='text-white font-medium text-sm'>0051-1417-0630 de lunes a domingo de 8:30 a. m. a 5:00 p. m.</p>
                </li>
                <li className='md:ml-[109px]'>
                    <p className='text-yellow font-semibold pb-2'>Escríbenos</p>
                    <p className='text-white font-medium text-sm'>informes@onpe.gob.pe</p>
                </li>
                <li className='md:ml-[270px]'>
                    <p className='text-yellow font-semibold pb-2'>Oficina central</p>
                    <p className='text-white font-medium text-sm'>Jr. Washington 1894 - Cercado de Lima - Lima - Perú</p>
                </li>
            </ul>
        </footer>
    )
}

export { Footer }
