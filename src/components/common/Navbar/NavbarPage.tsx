import { OnpeIcon, UserIconHeader } from '@components/icons'
import React from 'react'
import { useAuth } from '@store/auth'
import { Sandwich } from '@components/icons/Sandwich'
import { useSidebar } from '../Sidebar/SidebarContext'
const NavbarPage = ({ session }: NavProps) => {
    if (session) return NavbarPageLogged(session)
    else return NavbarPageUnsigned()
}
interface NavProps {
    session?: any | null
    title?: string
}
const NavbarPageLogged = (session: any, titleParam = '') => {
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
            <header className={`flex items-center justify-between w-full h-16 bg-white px-4 md:pr-8`}>
                <div className='flex items-center space-x-4'>
                    <div className='text-2xl cursor-pointer' onClick={toggle}>
                        <Sandwich />
                    </div>
                    <div className='header_title'>
                        <h1 className='text-blue font-bold'>Monitoreo de Transmisión STAE - Proceso Electoral {currentYear}</h1>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='flex flex-col items-end'>
                        <p className='font-medium uppercase'>{session.idUsuario}</p>
                        <button onClick={closeSession} className='text-xs font-medium'>
                            Cerrar sesión
                        </button>
                    </div>
                    <button className='bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center'>
                        <UserIconHeader width={50} height={50} />
                    </button>
                </div>
            </header>
        </>
    )
}

const NavbarPageUnsigned = (title = '') => {
    return (
        <>
            <header className='flex md:gap-[50px] justify-between items-center'>
                <p className='text-blue font-bold text-xl'>{title}</p>
                <div className='flex gap-4 items-center w-[347px] justify-end'>
                    <div className='flex flex-col items-end'></div>
                </div>
            </header>
        </>
    )
}

export { NavbarPage }
