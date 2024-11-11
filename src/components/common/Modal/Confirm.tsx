import { WarningIcon, ConfirmIcon } from '@components/icons'
import React, { ReactNode } from 'react'
import { Button } from '../Button/Button'
import { useModalError } from '@store/modal/modalError'

interface ConfirmProps {
    children?: ReactNode
    onCancel: () => void
    onConfirm: () => void
    error?: boolean
    warnIcon?: boolean
    message: string
    title?: string
    buttonTitle?: string
    onlybutton?: boolean
}

const Confirm = ({
    onCancel,
    message,
    onConfirm,
    error,
    title = 'Confirmación',
    children,
    buttonTitle = 'Aceptar',
    warnIcon,
    onlybutton = false
}: ConfirmProps) => {
    const { close } = useModalError()

    const handleCancel = () => {
        onCancel()
        close()
    }

    const handleConfirm = () => {
        onConfirm()
        close()
    }

    return (
        <div className='bg-white w-[700px]  flex-col flex items-center p-[50px]'>
            {warnIcon === true || (error && !onlybutton && title === 'Error') ? <WarningIcon /> : <ConfirmIcon />}
            <p className='font-medium text-2xl leading-normal tracking-[0.151px] text-skyblue mt-[8px]'>{title}</p>
            {children && <div className='z-20 grid place-items-center'>{children}</div>}
            <p className='text-lg mt-[20px] text-center' dangerouslySetInnerHTML={{ __html: message }} />
            <div className='flex text-lg font-semibold text-white gap-6 justify-center mt-[58px]'>
                {!error && !onlybutton && (
                    <>
                        <Button color='blue' title='No' className='w-[200px]' onClick={handleCancel} />

                        <Button color='red' title='Sí' className='w-[200px]' onClick={handleConfirm} />
                    </>
                )}
                {error && !onlybutton && <Button color='red' title={buttonTitle} className='w-[200px]' onClick={handleConfirm} />}

                {onlybutton && <Button color='red' title={buttonTitle} className='w-[200px]' onClick={handleConfirm} />}
            </div>
        </div>
    )
}

export { Confirm }
