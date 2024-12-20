import { ConfirmIcon, WarningIcon } from '@components/icons'
import { useModalConfirm } from '@store/modal/modalConfirm'
import { Button } from '../Button/Button'
import { Modal } from './Modal'
import { useModalLoading } from '@store/modal/modalLoading'

const ModalConfirm = () => {
    const {
        isOpen: isModalError,
        close: closeModalError,
        onCancel,
        onConfirm,
        icon,
        onlybutton,
        title,
        children,
        message,
        buttonTitle,
        buttonTitleCancel,
        closeDisabled
    } = useModalConfirm()

    const { close } = useModalConfirm()

    const { isOpen: isOpenModalLoading } = useModalLoading()

    const handleCancel = () => {
        if (onCancel) {
            onCancel()
        }
        close()
    }

    const handleConfirm = () => {
        onConfirm()
        close()
    }

    if (isOpenModalLoading) return <></>

    return (
        <Modal top closeDisabled={closeDisabled} isOpen={isModalError} onClose={closeModalError}>
            <div className='bg-white w-[700px]  flex-col flex items-center p-[50px]'>
                {icon === 'warning' && <WarningIcon className='text-skyblue' />}

                {icon === 'success' && <ConfirmIcon className='text-skyblue' />}

                <p className='font-medium text-2xl leading-normal tracking-[0.151px] text-skyblue mt-[8px]'>{title}</p>
                {children && <div className='z-20 grid place-items-center'>{children}</div>}
                <p className='text-lg mt-[20px] text-center' dangerouslySetInnerHTML={{ __html: message }} />
                <div className='flex text-lg font-semibold text-white gap-6 justify-center mt-[58px]'>
                    {!onlybutton && (
                        <>
                            <Button color='blue' title={buttonTitleCancel!} className='w-[200px]' onClick={handleCancel} />

                            <Button color='red' title={buttonTitle!} className='w-[200px]' onClick={handleConfirm} />
                        </>
                    )}

                    {onlybutton && <Button color='red' title={buttonTitle!} className='w-[200px]' onClick={handleConfirm} />}
                </div>
            </div>
        </Modal>
    )
}

export { ModalConfirm }
