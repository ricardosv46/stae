import { useState, useEffect } from 'react'
import { UserSession } from '@services/types'
import { useRouter } from 'next/router'

const useAuth = () => {
    const router = useRouter()
    const [token, setToken] = useState('')
    const [loading, setLoading] = useState(true)

    const [session, setUser] = useState<UserSession>({} as UserSession)

    useEffect(() => {
        setLoading(true)
        if (typeof window !== 'undefined') {
            const tokenLS = window.localStorage?.getItem('token')
            const session_userLS = window.localStorage?.getItem('session_user')

            if (!tokenLS || !session_userLS) {
                router.push('/login')
            }
            if (tokenLS && session_userLS) {
                setUser(JSON.parse(session_userLS))
                setToken(tokenLS)
            }
        }
        setLoading(false)
    }, [])

    return { token, session, loading }
}

export { useAuth }
