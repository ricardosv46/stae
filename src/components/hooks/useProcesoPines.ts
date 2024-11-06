import { useState } from 'react'
type GenPinesReturnType = [any, (data: any) => void, () => any, () => void]
const useProcesoPines = (initialState = null): GenPinesReturnType => {
    const [value, setValue] = useState(initialState)
    const keyCache = 'proceso_pines'
    const cleanSession = () => {
        window.localStorage.removeItem(keyCache)
    }

    const SetData = (data: any) => {
        setValue(data)
        window.localStorage.setItem(keyCache, JSON.stringify(data))
    }

    const Read = () => {
        const data = window.localStorage.getItem(keyCache)
        if (data) {
            setValue(JSON.parse(data))
        }
        return JSON.parse(data ?? '{}')
    }

    return [value, SetData, Read, cleanSession]
}

export { useProcesoPines }
