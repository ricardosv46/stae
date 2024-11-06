import { ProcesoElectoral, UserSession } from '@services/types'
import { useState } from 'react'

const keyCache: string = 'session_user'
const params = new URLSearchParams()
params.append('user', 'mytestuser')
params.append('pass', 'pass')

const useToken = () => {
    const [token, setToken] = useState('')
    const [session, setUser] = useState(() => {
        const userdata: UserSession = {
            idUsuario: '',
            codigoProceso: ''
        }
        return userdata
    })

    const getSession = async () => {
        const userdata: UserSession = JSON.parse(window.localStorage.getItem(keyCache) ?? '{}')
        setUser(userdata)
        return userdata
    }
    const getToken = async () => {
        const tokenLS = window.localStorage?.getItem('token')

        if (tokenLS) {
            setToken(tokenLS)
        }
        const userdata: UserSession = await getSession()

        return userdata
    }

    const login = async (user: string, pass: string, process: ProcesoElectoral) => {
        if (user.toUpperCase() !== 'OPERADOREMP') {
            return false
        }
        if (!process) {
            return false
        }
        const userdata: UserSession = {
            idUsuario: user,
            codigoProceso: process.codigo,
            proceso: process
        }
        const strdata: string = JSON.stringify(userdata)
        window.localStorage.setItem(keyCache, strdata)
        setUser(userdata)
        return true
    }

    return { token, getToken, session, login, getSession }
}

export { useToken }
