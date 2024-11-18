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

interface ModalConfirmStore {
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

export const useModalConfirm = create<ModalConfirmStore>((set) => ({
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
        close()
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
