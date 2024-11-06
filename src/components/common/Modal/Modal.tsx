import React, { ReactNode } from 'react'
import { Overlay, Portal } from '..'

const classNames = (cln: Array<string | undefined>) => {
    return cln.join(' ').trim()
}

const Modal = ({
    isOpen,
    onClose,
    children,
    closeDisabled = false,
    top = false
}: {
    isOpen: boolean
    onClose: () => void
    children: ReactNode
    closeDisabled?: boolean
    top?: boolean
}) => {
    return (
        <Portal>
            <div
                className={classNames([
                    isOpen ? `opacity-100 ${top ? 'z-50' : 'z-40'}` : 'opacity-0 -z-10',
                    'fixed top-0 w-full h-screen grid place-items-center'
                ])}>
                <Overlay
                    show={isOpen}
                    onClick={() => {
                        if (!closeDisabled) {
                            onClose()
                        }
                    }}
                />
                <div className='z-20 grid place-items-center'>{children}</div>
            </div>
        </Portal>
    )
}

export { Modal }
