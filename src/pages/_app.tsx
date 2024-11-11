import { SidebarProvider } from '@components/common/Sidebar/SidebarContext'
import { useAuth } from '@store/auth'
import '@styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { ReactElement, ReactNode, useEffect } from 'react'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

export default function App({ Component, pageProps }: AppProps) {
    const queryClient = new QueryClient()
    const router = useRouter()
    const { refreshAuth, isLoading } = useAuth()
    useEffect(() => {
        refreshAuth()
    }, [])

    function isMultiplesSlash(url: string) {
        return /\/{2,}$/.test(url)
    }

    useEffect(() => {
        const condition = isMultiplesSlash(router.asPath)
        if (condition) {
            const currentPath = window.location.pathname
            const normalizedPath = currentPath.replace(/\/{2,}/g, '/')
            window.location.href = normalizedPath
        }
    }, [])

    if (isLoading) return <div>CARGANDO........</div>
    return (
        <QueryClientProvider client={queryClient}>
            <SidebarProvider>
                <Component {...pageProps} />
            </SidebarProvider>
        </QueryClientProvider>
    )
}
