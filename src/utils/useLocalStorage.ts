import { useCallback } from 'react'

export const useLocalStorage = (key: string) => {
    const getLocalStorage = useCallback(<T>(): T | null => {
        try {
            const item = localStorage.getItem(key)
            if (item === null) {
                return null
            }
            try {
                return JSON.parse(item) as T
            } catch {
                return item as unknown as T
            }
        } catch (error) {
            return null
        }
    }, [])

    const setLocalStorage = useCallback(<T>(value: T) => {
        const valueToStore = typeof value === 'object' ? JSON.stringify(value) : String(value)
        localStorage.setItem(key, valueToStore)
    }, [])

    const removeLocalStorage = useCallback(() => {
        localStorage.removeItem(key)
    }, [])

    return { getLocalStorage, setLocalStorage, removeLocalStorage }
}
