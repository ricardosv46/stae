import { useState } from 'react'
type ToggleReturnType = [boolean, (viewSelect: string) => void, () => void, string, () => void]
const useToggleModal = (initialState = false): ToggleReturnType => {
    const [value, setValue] = useState(initialState)
    const [view, setView] = useState('')

    const toggle = () => {
        setValue(!value)
    }

    const Open = (viewSelect: string) => {
        setValue(true)
        setView(viewSelect)
    }

    const Close = () => {
        setValue(false)
        setView('')
    }

    return [value, Open, Close, view, toggle]
}

export { useToggleModal }
