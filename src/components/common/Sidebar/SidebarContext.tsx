import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface SidebarContextProps {
    isOpen: boolean
    open: () => void
    close: () => void
    toggle: () => void
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined)

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
    const KEY_STORAGE = 'sidebar'

    // Inicializa `isOpen` basado en el valor almacenado en `localStorage`
    const [isOpen, setIsOpen] = useState<boolean>(() => {
        const sidebar = localStorage.getItem(KEY_STORAGE)
        return sidebar === 'open' || sidebar === null // Por defecto abierto si no hay valor en localStorage
    })

    useEffect(() => {
        const CLASS_NAME = 'sb-open'
        if (isOpen) {
            document.body.classList.add(CLASS_NAME)
        } else {
            document.body.classList.remove(CLASS_NAME)
        }
    }, [isOpen])

    const open = () => {
        setIsOpen(true)
        localStorage.setItem(KEY_STORAGE, 'open')
    }

    const close = () => {
        setIsOpen(false)
        localStorage.setItem(KEY_STORAGE, 'close')
    }

    const toggle = () => {
        setIsOpen((prev) => {
            const newState = !prev
            localStorage.setItem(KEY_STORAGE, newState ? 'open' : 'close')
            return newState
        })
    }

    return <SidebarContext.Provider value={{ isOpen, open, close, toggle }}>{children}</SidebarContext.Provider>
}

export const useSidebar = () => {
    const context = useContext(SidebarContext)
    if (!context) throw new Error('useSidebar debe estar dentro de SidebarProvider')
    return context
}
