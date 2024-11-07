import { OnpeIcon, UserIconHeader } from '@components/icons'
import React from 'react'
import { UserSession } from '@services/types'
import { useAuth } from '@store/auth'
import { Sandwich } from '@components/icons/Sandwich'
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

    return (
        <>
            <header className='header'>
                <div className='header_left'>
                    <div className='header_toggle'>
                        <Sandwich />
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
