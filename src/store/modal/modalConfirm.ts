import { create } from 'zustand'
import { ReactNode } from 'react'
interface OpenProps {
    message: string
    onConfirm?: () => void
    onCancel?: () => void
    buttonTitle?: string
    buttonTitleCancel?: string
    onlyButton?: boolean
    button?: boolean
    title?: string
    icon?: 'warning' | 'success' | ''
    onlybutton?: boolean
    closeDisabled?: boolean
    children?: ReactNode
}

interface ModalConfirmStore {
    isOpen: boolean
    message: string
    onConfirm: () => void
    onCancel: () => void
    buttonTitle?: string
    buttonTitleCancel?: string
    onlyButton: boolean
    title?: string
    error: boolean
    icon?: 'warning' | 'success' | ''
    open: (props: OpenProps) => void
    close: () => void
    onlybutton?: boolean
    closeDisabled?: boolean
    children?: ReactNode
}

export const useModalConfirm = create<ModalConfirmStore>((set) => ({
    isOpen: false,
    closeDisabled: false,
    message: '',
    onConfirm: () => {},
    onCancel: () => {},
    buttonTitle: 'Aceptar',
    onlyButton: true,
    title: 'Confirmación',
    buttonTitleCancel: 'Cancelar',
    error: true,
    warnIcon: false,
    onlybutton: false,
    children: undefined,
    open: (props) => {
        close()
        set({
            isOpen: true,
            ...props
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
            icon: '',
            onlybutton: false,
            children: undefined,
            closeDisabled: false
        })
    }
}))
