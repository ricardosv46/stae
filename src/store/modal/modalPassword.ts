import { create } from 'zustand'

interface OpenProps {
    onConfirm?: (password: string) => void
    buttonTitle?: string
    title?: string
    closeDisabled?: boolean
    message?: string
}

interface ModalPasswordStore {
    isOpen: boolean
    onConfirm: (password: string) => void
    buttonTitle: string
    title: string
    closeDisabled: boolean
    message: string
    password: string
    setPassword: (value: string) => void
    open: (props: OpenProps) => void
    close: () => void
}

export const useModalPassword = create<ModalPasswordStore>((set) => ({
    isOpen: false,
    onConfirm: () => {},
    buttonTitle: 'Registrar',
    title: 'Confirmar',
    closeDisabled: false,
    message: '',
    password: '',
    setPassword: (value: string) => set({ password: value }),
    open: ({ ...props }) => {
        set({
            isOpen: true,
            ...props
        })
    },
    close: () => {
        set({
            isOpen: false,
            onConfirm: () => {},
            buttonTitle: 'Registrar',
            title: 'Confirmar',
            closeDisabled: false,
            message: '',
            password: ''
        })
    }
}))
