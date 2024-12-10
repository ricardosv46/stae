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
            closeDisabled: false
        })
    }
}))
