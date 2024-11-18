import { create } from 'zustand'

interface OpenProps {
    message: string
    closeDisabled?: boolean
}

interface ModalLoadingStore {
    isOpen: boolean
    message: string
    closeDisabled: boolean
    open: (props: OpenProps) => void
    close: () => void
}

export const useModalLoading = create<ModalLoadingStore>((set) => ({
    isOpen: false,
    message: '',
    closeDisabled: false,
    open: ({ message, closeDisabled }) => {
        close()
        set({
            isOpen: true,
            message,
            closeDisabled
        })
    },
    close: () => {
        set({
            isOpen: false,
            message: '',
            closeDisabled: false
        })
    }
}))
