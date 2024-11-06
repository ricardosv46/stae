import { OnpeCompleteIcon, VenpIcon } from '@components/icons'

const Navbar = () => {
    return (
        <header className='flex p-4 px-10 justify-between  md:gap-24 pb-3 md:pb-10 md:pt-16 '>
            <a>
                <VenpIcon className='w-[130px] md:w-[197px] h-[55px] md:h-[59px] mr-5 md:mr-0' />
            </a>
            <OnpeCompleteIcon className='w-[127px] md:w-[207px] h-[61px] md:h-[69px]' />
        </header>
    )
}

export { Navbar }
