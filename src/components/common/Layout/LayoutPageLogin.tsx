import { useAuth } from '@store/auth'
import { useModalConfirm } from '@store/modal/modalConfirm'
import { useRouter } from 'next/router'
import { ReactNode, useEffect } from 'react'
import { ModalConfirm, NavbarPage, Spinner } from '..'
interface LayoutProps {
    children: ReactNode
    section?: string
    college?: boolean
    color?: string
    loading?: boolean
}

const LayoutPageLogin = ({ children, section, college, color }: LayoutProps) => {
    const { user, isAuth, isLoading, refreshAuth } = useAuth()
    const { isOpen: isModalError, close: closeModalError, ...modalErrorProps } = useModalConfirm()
    const router = useRouter()

    useEffect(() => {
        refreshAuth()
    }, [])

    useEffect(() => {
        if (!isLoading) {
            if (isAuth) router.push('/')
        }
    }, [isLoading, isAuth])

    if (isLoading || isAuth) return <Spinner absolute />

    return (
        <>
            {!isLoading && (
                <>
                    <NavbarPage session={null} />
                    {section && (
                        <h1
                            className={`${
                                color ? color : 'bg-skyblue text-white'
                            } pt-[10px] pb-[12px] font-bold text-lg flex justify-center`}>
                            {section}
                        </h1>
                    )}

                    <main className='p-4 flex justify-center items-center  h-screen bg-login-bg bg-no-repeat bg-[length:100%_100%]'>
                        {children}
                    </main>
                </>
            )}

            <ModalConfirm />
        </>
    )
}

export { LayoutPageLogin }
