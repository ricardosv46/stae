import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface SidebarContextProps {
    isOpen: boolean
    open: () => void
    close: () => void
    toggle: () => void
    readInitialStatus: () => void
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined)

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false)
    const KEY_STORAGE = 'sidebar'

    useEffect(() => {
        const CLASS_NAME = 'sb-open'
        if (isOpen) {
            document.body.classList.add(CLASS_NAME)
        } else {
            document.body.classList.remove(CLASS_NAME)
        }
    }, [isOpen])

    const readInitialStatus = () => {
        const sidebar = localStorage.getItem(KEY_STORAGE)
        setIsOpen(!sidebar || sidebar === 'open')
    }

    const open = () => setIsOpen(true)
    const close = () => setIsOpen(false)
    const toggle = () => setIsOpen((prev) => !prev)

    const save = (value: boolean) => {
        localStorage.setItem(KEY_STORAGE, value ? 'open' : 'close')

        setTimeout(() => {
            window.dispatchEvent(new Event('resize'))
        }, 250)
    }

    useEffect(() => {
        save(isOpen)
    }, [isOpen])

    return <SidebarContext.Provider value={{ isOpen, open, close, toggle, readInitialStatus }}>{children}</SidebarContext.Provider>
}

export const useSidebar = () => {
    const context = useContext(SidebarContext)
    if (!context) throw new Error('useSidebar debe estar dentro de SidebarProvider')
    return context
}
