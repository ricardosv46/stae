import { CloseIcon, ConfirmIcon, PasswordIcon } from '@components/icons'
import { useModalPassword } from '@store/modal/modalPassword'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import { Modal } from './Modal'
import { useState } from 'react'
import { useModalLoading } from '@store/modal/modalLoading'

export const ModalPassword = () => {
    const { isOpen, close, onConfirm, title, buttonTitle, message, password, setPassword } = useModalPassword()
    const { isOpen: isOpenModalLoading } = useModalLoading()

    const handleConfirm = async () => {
        const success = await onConfirm(password)

        if (success) close()
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    if (isOpenModalLoading) return <></>
    return (
        <Modal top closeDisabled isOpen={isOpen} onClose={close}>
            <div className='bg-white w-[700px]  flex-col flex items-center p-[50px] relative'>
                <button className='absolute right-3 top-3'>
                    <CloseIcon onClick={close} />
                </button>

                <p className='font-medium text-2xl leading-normal tracking-[0.151px] text-blue mt-[8px]'>{title}</p>
                <div className='z-20 grid place-items-center'>
                    <div className='my-10'>{message}</div>

                    <Input
                        type='password'
                        icon={PasswordIcon}
                        onChange={handleInputChange}
                        value={password}
                        maxLength={24}
                        placeholder=''
                        classInput='h-12 mb-4'
                    />
                </div>
                <div className='flex text-lg font-semibold text-white gap-6 justify-center mt-[58px]'>
                    <Button color='red' title={buttonTitle} className='w-[200px]' onClick={handleConfirm} />
                </div>
            </div>
        </Modal>
    )
}
