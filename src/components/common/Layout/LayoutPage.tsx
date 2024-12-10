import { useAuth } from '@store/auth'
import { useModalConfirm } from '@store/modal/modalConfirm'
import apiService from '@utils/services/axios/configAxios'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode, useEffect } from 'react'
import { ModalConfirm, ModalLoading, ModalPassword, NavbarPage, Spinner } from '..'
import Sidebar from '../Sidebar/Sidebar'
import { useSidebar } from '../Sidebar/SidebarContext'

interface LayoutProps {
    children: ReactNode
    section?: string
    college?: boolean
    color?: string
    operator: 'OPERADORADM' | 'OPERADORJOR' | 'OPERADORPAD' | 'OPERADORCRE' | 'OPERADORCED' | ''
    backPath?: string | Function
}

const LayoutPage = ({ children, section, college, color, operator, backPath }: LayoutProps) => {
    const { open: openModalConfirm } = useModalConfirm()

    const { user, isAuth, isLoading, refreshAuth, logoutAction, modalLogoutAction } = useAuth()
    const { isOpen } = useSidebar()
    const router = useRouter()

    useEffect(() => {
        refreshAuth()
    }, [])

    useEffect(() => {
        const responseInterceptor = apiService.interceptors.response.use(
            (response) => {
                if (response?.data?.status === 443) {
                    openModalConfirm({ error: true, title: 'Error', message: 'Su sesión ha finalizado', onConfirm: logoutAction })
                    return Promise.reject({ ...response, hidden: true })
                } else {
                    return response
                }
            },
            (error) => {
                if (!navigator.onLine) {
                    error.message = 'No se pudo acceder al servicio. Verifique su conexión a internet'
                    return Promise.reject(error)
                } else if (error?.data?.status === 443) {
                    openModalConfirm({ error: true, title: 'Error', message: 'Su sesión ha finalizado', onConfirm: logoutAction })

                    return Promise.reject({ ...error, hidden: true })
                } else if (error?.response?.status === 403) {
                    return Promise.reject({ ...error, hidden: true })
                } else {
                    return Promise.reject(error)
                }
            }
        )

        return () => {
            axios.interceptors.response.eject(responseInterceptor)
        }
    }, [])

    useEffect(() => {
        if (!isLoading) {
            if (!isAuth) {
                router.push('/login')
            }
        }
    }, [isLoading, isAuth])

    useEffect(() => {
        // validateRole()
        window.document.title = 'VENP - ' + section
    }, [])

    // const validateRole = () => {
    //     const url = localStorage.getItem('operator_url')

    //     if (user?.idUsuario === operator) {
    //         if (validateChangeURLForList(url, router.asPath)) {
    //             return
    //         }
    //         localStorage.setItem('operator_url', router?.asPath)
    //         setLoadApp(false)
    //         return
    //     }

    //     if (operator === '' && router.pathname === '/') {
    //         setLoadApp(false)
    //         return
    //     }

    //     if (user?.idUsuario !== operator && user?.idUsuario === 'OPERADORADM' && operator !== '') {
    //         router.push(url ?? '/')
    //     }
    //     if (user?.idUsuario !== operator && user?.idUsuario === 'OPERADORCED' && operator !== '') {
    //         router.push(url ?? '/')
    //     }
    //     if (user?.idUsuario !== operator && user?.idUsuario === 'OPERADORCRE' && operator !== '') {
    //         router.push(url ?? '/')
    //     }
    //     if (user?.idUsuario !== operator && user?.idUsuario === 'OPERADORJOR' && operator !== '') {
    //         router.push(url ?? '/')
    //     }
    //     if (user?.idUsuario !== operator && user?.idUsuario === 'OPERADORPAD' && operator !== '') {
    //         router.push(url ?? '/')
    //     }
    // }

    if (isLoading || !isAuth || !user) return <Spinner absolute />

    // Generar breadcrumb dinámico basado en la URL
    const generateBreadcrumb = () => {
        const paths = router.asPath.split('/').filter(Boolean) // Divide la ruta y elimina valores vacíos
        return (
            <>
                <span className='text-sm text-gray-300'>
                    <Link href='/' legacyBehavior>
                        <a className='capitalize hover:underline'>Inicio</a>
                    </Link>
                </span>
                {paths.map((path, index) => (
                    <span key={index} className='text-sm text-gray-300'>
                        {' / '}
                        <span className='capitalize'>{path}</span>
                    </span>
                ))}
            </>
        )
    }

    return (
        <>
            {user.idUsuario && isAuth && (
                <div className='w-screen h-screen flex overflow-hidden'>
                    <Sidebar />

                    <div className='w-full flex-1 flex flex-col'>
                        <NavbarPage session={user} />

                        {section && (
                            <div className='relative bg-blue w-full px-4 py-4'>
                                <h2 className={`${color ? color : 'text-white'} font-bold text-lg`}>{section}</h2>
                                <div className='mt-2 text-white'>{generateBreadcrumb()}</div>
                            </div>
                        )}

                        <main className='flex-1 px-4 pt-[68px] pb-16 relative overflow-y-auto'>{children}</main>
                    </div>
                </div>
            )}

            <ModalConfirm />

            <ModalLoading />

            <ModalPassword />
            {/* <Modal top closeDisabled isOpen={modalLogout} onClose={() => modalLogoutAction(false)}>
                <Confirm
                    error
                    title='Error'
                    onConfirm={logoutAction}
                    message='Su sesión ha finalizado'
                    onCancel={() => modalLogoutAction(false)}
                />
            </Modal> */}
        </>
    )
}

export { LayoutPage }
