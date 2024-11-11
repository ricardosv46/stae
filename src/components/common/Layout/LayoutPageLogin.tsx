import { useAuth } from '@store/auth'
import { useRouter } from 'next/router'
import { ReactNode, useEffect } from 'react'
import { NavbarBrowser, NavbarPage } from '..'
import axios from 'axios'
import apiService from '@services/axios/configAxios'
interface LayoutProps {
    children: ReactNode
    section?: string
    college?: boolean
    color?: string
    loading?: boolean
}

const LayoutPageLogin = ({ children, section, college, color }: LayoutProps) => {
    const { user, isAuth, isLoading, refreshAuth } = useAuth()
    const router = useRouter()

    useEffect(() => {
        refreshAuth()
    }, [])

    useEffect(() => {
        if (!isLoading) {
            if (isAuth) router.push('/')
        }
    }, [isLoading, isAuth])

    useEffect(() => {
        const responseInterceptor = apiService.interceptors.response.use(
            (response) => {
                if (response?.data?.status === 443) {
                    return Promise.reject(response)
                } else {
                    return response
                }
            },
            (error) => {
                const urlsNginx = ['/nodo/cargarExcelNodo', '/agrupol/cargarExcelAgruPol', '/candidato/cargarExcelDetalleCandidatos']
                if (error?.code === 'ERR_NETWORK' && !error?.config?.url.includes(urlsNginx)) {
                    error.message = 'No se pudo acceder al servicio. Verifique su conexión a internet'
                    return Promise.reject(error)
                } else if (error?.data?.status === 443) {
                } else {
                    return Promise.reject(error)
                }
            }
        )

        return () => {
            axios.interceptors.response.eject(responseInterceptor)
        }
    }, [])

    if (isLoading || isAuth) return <div>Cargando</div>

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

                    <main className='p-4 min-height h-screen bg-login-bg bg-no-repeat bg-[length:100%_100%]'>{children}</main>
                </>
            )}
        </>
    )
}

export { LayoutPageLogin }
