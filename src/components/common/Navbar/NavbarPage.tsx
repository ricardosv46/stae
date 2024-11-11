import { OnpeIcon, UserIconHeader } from '@components/icons'
import React from 'react'
import { UserSession } from '@services/types'
import { useAuth } from '@store/auth'
import { Sandwich } from '@components/icons/Sandwich'
import { useSidebar } from '../Sidebar/SidebarContext'
const NavbarPage = ({ session }: NavProps) => {
    if (session) return NavbarPageLogged(session)
    else return NavbarPageUnsigned()
}
interface NavProps {
    session?: UserSession | null
    title?: string
}
const NavbarPageLogged = (session: UserSession, titleParam = '') => {
    const title = titleParam === '' ? session.proceso?.nombreCorto : titleParam
    const { logoutAction } = useAuth()
    const closeSession = () => {
        window.document.title = 'VENP - Voto Electrónico No Presencial'
        logoutAction()
    }

    const { toggle, isOpen } = useSidebar()
    const currentYear = new Date().getFullYear()

    return (
        <>
            <header className={`flex items-center justify-between w-full h-16 bg-white ${isOpen ? 'pl-72': 'pl-32'} md:pr-8`}>
                <div className='flex items-center space-x-4'>
                    <div className='text-2xl cursor-pointer' onClick={toggle}>
                        <Sandwich />
                    </div>
                    <h1 className='text-blue font-bold text-lg md:text-xl'>
                        Monitoreo de Transmisión STAE - Proceso Electoral {currentYear}
                    </h1>
                </div>
                <div className='flex items-center'>
                    <div className='flex flex-col items-end'>
                        <p className='font-medium uppercase'>{session.idUsuario}</p>
                        <button onClick={closeSession} className='text-xs font-medium'>
                            Cerrar sesión
                        </button>
                    </div>
                    <button className='bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center'>
                        <UserIconHeader width={50} height={50}/>
                    </button>
                </div>
            </header>
        </>
    )
}

const NavbarPageUnsigned = (title = '') => {
    return (
        <>
            <header className='flex p-4 pb-3 md:gap-[50px] justify-between items-center md:pb-[27px] md:pt-[25px] md:px-10 '>
                <div className='flex gap-8'>
                    <a>
                        <OnpeIcon className='w-[53px] md:w-[115px] h-[32px] md:h-[69px]' />
                    </a>
                </div>
                <p className='text-blue font-bold text-xl'>{title}</p>
                <div className='flex gap-4 items-center w-[347px] justify-end'>
                    <div className='flex flex-col items-end'></div>
                </div>
            </header>
        </>
    )
}

export { NavbarPage }
