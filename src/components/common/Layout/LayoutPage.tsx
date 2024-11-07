import apiService from '@services/axios/configAxios'
import { useAuth } from '@store/auth'
import axios from 'axios'
import { useRouter } from 'next/router'
import { ReactNode, useEffect, useState } from 'react'
import { Confirm, Modal, NavbarPage } from '..'
import { ArrowLeftIcon } from '@components/icons/ArrowLeftIcon'
import { useToggle } from '@components/hooks'
import config from '../../../../tailwind.config'
import Sidebar from '../Sidebar/Sidebar'

interface LayoutProps {
    children: ReactNode
    section?: string
    college?: boolean
    color?: string
    operator: 'OPERADORADM' | 'OPERADORJOR' | 'OPERADORPAD' | 'OPERADORCRE' | 'OPERADORCED' | ''
    backPath?: string | Function
}

const LayoutPage = ({ children, section, college, color, operator, backPath }: LayoutProps) => {
    const [isModalError, openModalError, closeModalError] = useToggle(false)
    const { user, isAuth, isLoading, refreshAuth, logoutAction, modalLogoutAction, modalLogout } = useAuth()
    useEffect(() => {
        refreshAuth()
    }, [])

    useEffect(() => {
        const responseInterceptor = apiService.interceptors.response.use(
            (response) => {
                if (response?.data?.status === 443) {
                    modalLogoutAction(true)
                    return Promise.reject(response)
                } else {
                    return response
                }
            },
            (error) => {
                const urlsNginx = [
                    '/nodo/cargarExcelNodo',
                    '/agrupol/cargarExcelAgruPol',
                    '/candidato/cargarExcelDetalleCandidatos',
                    '/pin/email/validateconnection'
                ]

                if (error?.code === 'ERR_NETWORK' && !urlsNginx.includes(error?.config?.url)) {
                    error.message = 'No se pudo acceder al servicio. Verifique su conexión a internet'
                    return Promise.reject(error)
                } else if (error?.data?.status === 443) {
                    modalLogoutAction(true)
                } else {
                    return Promise.reject(error)
                }
            }
        )

        return () => {
            axios.interceptors.response.eject(responseInterceptor)
        }
    }, [])

    const router = useRouter()
    useEffect(() => {
        if (!isLoading) {
            if (!isAuth) {
                router.push('/login')
            }
        }
    }, [isLoading, isAuth])

    const [loadApp, setLoadApp] = useState(true)

    useEffect(() => {
        validateRole()
        window.document.title = 'VENP - ' + section
    }, [])

    const validateRole = () => {
        const url = localStorage.getItem('operator_url')

        if (user?.idUsuario === operator) {
            if (validateChangeURLForList(url, router.asPath)) {
                return
            }
            localStorage.setItem('operator_url', router?.asPath)
            setLoadApp(false)
            return
        }

        if (operator === '' && router.pathname === '/') {
            setLoadApp(false)
            return
        }

        if (user?.idUsuario !== operator && user?.idUsuario === 'OPERADORADM' && operator !== '') {
            router.push(url ?? '/')
        }
        if (user?.idUsuario !== operator && user?.idUsuario === 'OPERADORCED' && operator !== '') {
            router.push(url ?? '/')
        }
        if (user?.idUsuario !== operator && user?.idUsuario === 'OPERADORCRE' && operator !== '') {
            router.push(url ?? '/')
        }
        if (user?.idUsuario !== operator && user?.idUsuario === 'OPERADORJOR' && operator !== '') {
            router.push(url ?? '/')
        }
        if (user?.idUsuario !== operator && user?.idUsuario === 'OPERADORPAD' && operator !== '') {
            router.push(url ?? '/')
        }
    }

    const validateChangeURLForList = (url: string | null, asPath: string): boolean => {
        const editar_parametro =
            asPath.includes('/admin/instituciones/editar-parametro') &&
            url !== null &&
            url.includes('/admin/instituciones/editar-parametro')

        const editar = asPath.includes('/admin/instituciones/editar') && url !== null && url.includes('/admin/instituciones/editar')

        const generar_usuarios =
            asPath.includes('/admin/instituciones/generar-usuarios') &&
            url !== null &&
            url.includes('/admin/instituciones/generar-usuarios')

        const parametro =
            asPath.includes('/admin/instituciones/parametro') && url !== null && url.includes('/admin/instituciones/parametro')

        const crear_proceso = asPath.includes('/admin/crear-proceso') && url !== null && url.includes('/admin/crear-proceso')

        const editar_proceso = asPath.includes('/admin/editar-proceso') && url !== null && url.includes('/admin/editar-proceso')

        const informacion_proceso =
            asPath.includes('/admin/informacion-proceso') && url !== null && url.includes('/admin/informacion-proceso')

        if (editar_parametro || editar || generar_usuarios || parametro || crear_proceso || editar_proceso || informacion_proceso) {
            if (url !== asPath) {
                localStorage.setItem('operator_url', url)
                setLoadApp(false)
                router.push(url ?? '/')
                return true
            }
        }

        return false
    }

    if (isLoading || !isAuth || !user) return <div>Cargando</div>

    return (
        <>
            {user.idUsuario && isAuth && (
                <>
                    <NavbarPage session={user} />
                    <Sidebar />

                    {section && (
                        <div className='relative bg-blue w-full px-5 md:px-28 breadcrumb'>
                            <h2 className={`${color ? color : 'text-white'} pt-[10px] pb-[12px]  font-bold text-lg flex justify-start`}>
                                {section}
                            </h2>
                            {backPath && (
                                <button
                                    className='absolute left-2 lg:left-10 top-2 text-white cursor-pointer flex items-center gap-1'
                                    onClick={() => {
                                        if (typeof backPath === 'string') router.push(backPath)
                                        else backPath()
                                    }}>
                                    <ArrowLeftIcon className='w-8 h-8 ' />
                                    <p className='lg:block hidden'>Atrás</p>
                                </button>
                            )}
                        </div>
                    )}

                    {!loadApp ? <main className='px-4 min-height pb-16 app-container'>{children}</main> : <div>Cargando</div>}
                    <Modal top closeDisabled isOpen={isModalError} onClose={closeModalError}>
                        <Confirm
                            error
                            title='Error'
                            onConfirm={closeModalError}
                            message={'No se pudo acceder al servicio. Verifique su conexión a internet'}
                            onCancel={closeModalError}
                        />
                    </Modal>
                    <Modal top closeDisabled isOpen={modalLogout} onClose={() => modalLogoutAction(false)}>
                        <Confirm
                            error
                            title='Error'
                            onConfirm={logoutAction}
                            message={'Su sesión ha finalizado'}
                            onCancel={() => modalLogoutAction(false)}
                        />
                    </Modal>
                </>
            )}
        </>
    )
}

export { LayoutPage }
