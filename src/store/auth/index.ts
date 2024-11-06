import { UserSession } from '@services/types'
import { create } from 'zustand'

interface AuthStore {
    isAuth: boolean
    modalLogout: boolean

    user: UserSession | null
    isLoading: boolean
    logoutAction: () => void
    loginAction: (user: UserSession) => void
    loadingAction: (loading: boolean) => void
    refreshAuth: () => void
    modalLogoutAction: (modalLogout: boolean) => void
}

export const useAuth = create<AuthStore>((set) => ({
    user: null,
    isAuth: false,
    modalLogout: false,
    isLoading: true,
    logoutAction: () => {
        localStorage.clear()
        set({ isAuth: false, user: null })
    },
    loginAction: (user: UserSession) => set({ isAuth: true, user, modalLogout: false }),
    loadingAction: (isLoading: boolean) => set({ isLoading }),
    refreshAuth: () => {
        set({ isLoading: true })
        const tokenLS = localStorage.getItem('token')
        const userLS = localStorage.getItem('session_user')
        const user = userLS ? JSON.parse(userLS) : null
        if (tokenLS && user) {
            set({ isAuth: true, user, isLoading: false })
        } else {
            set({ isAuth: false, user: null, isLoading: false })
        }
    },
    modalLogoutAction: (modalLogout: boolean) => set({ modalLogout })
}))
