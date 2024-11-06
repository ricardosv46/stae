import React, { ReactNode } from 'react'
import { Footer, Navbar } from '..'

interface LayoutProps {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Navbar />
            <main className='px-4 min-height-home'>{children}</main>
            <Footer />
        </>
    )
}

export { Layout }
