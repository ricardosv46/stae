import { create } from 'zustand'

interface OpenProps {
    message: string
    onConfirm?: () => void
    onCancel?: () => void
    buttonTitle?: string
    onlyButton?: boolean
    title?: string
    error?: boolean
    warnIcon?: boolean
}

interface ModalErrorStore {
    isOpen: boolean
    message: string
    onConfirm: () => void
    onCancel: () => void
    buttonTitle: string
    onlyButton: boolean
    title: string
    error: boolean
    warnIcon: boolean
    open: (props: OpenProps) => void
    close: () => void
}

export const useModalError = create<ModalErrorStore>((set) => ({
    isOpen: false,
    message: '',
    onConfirm: () => {},
    onCancel: () => {},
    buttonTitle: 'Aceptar',
    onlyButton: false,
    title: 'Error',
    error: true,
    warnIcon: false,
    open: ({ message, onConfirm, onCancel, buttonTitle, onlyButton, title, error, warnIcon }) => {
        set({
            isOpen: true,
            message,
            onConfirm,
            onCancel,
            buttonTitle,
            onlyButton,
            title,
            error,
            warnIcon
        })
    },
    close: () => {
        set({
            isOpen: false,
            message: '',
            onConfirm: () => {},
            onCancel: () => {},
            buttonTitle: 'Aceptar',
            onlyButton: false,
            title: 'Error',
            error: true,
            warnIcon: false
        })
    }
}))
