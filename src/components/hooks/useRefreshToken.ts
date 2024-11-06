import { useEffect, useState } from 'react'

import { useAuth } from '@store/auth'
import { useRouter } from 'next/router'
import { UserSession } from '@services/types'

const useRefreshToken = () => {
    const router = useRouter()
    const { loginAction, loadingAction } = useAuth()
    const [mainLoading, setMainLoading] = useState(true)

    useEffect(() => {
        const token = localStorage.getItem('token') ?? null
        const user = localStorage.getItem('session_user') ?? null
        if (!token || !user) {
            router.push('/login')
            setMainLoading(false)
            loadingAction(false)
            return
        }

        const session_user: UserSession = JSON.parse(user)

        setMainLoading(false)
        loadingAction(false)
        loginAction(session_user)
    }, [])

    return { loading: mainLoading }
}

export { useRefreshToken }
