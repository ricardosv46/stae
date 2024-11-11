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

    const { toggle } = useSidebar()
    const currentYear = new Date().getFullYear()

    return (
        <>
            <header className='header'>
                <div className='header_left'>
                    <div className='header_toggle' onClick={toggle}>
                        <Sandwich />
                    </div>
                    <div className='header_title'>
                        <h1 className='text-blue font-bold'>Monitoreo de Transmisión STAE - Proceso Electoral {currentYear}</h1>
                    </div>
                </div>
                <div className='header_right'>
                    <div className='header_avatar'>
                        <div className='  flex flex-col items-end'>
                            <p className='font-light mr-1'>{session.idUsuario}</p>
                            <button onClick={closeSession} className='text-xs font-medium text-gray-light cursor-pointer'>
                                Cerrar sesión
                            </button>
                        </div>
                        <button style={{ cursor: 'default' }}>
                            <UserIconHeader />
                        </button>
                    </div>
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
