import { ConfirmIcon, WarningIcon } from '@components/icons'
import { useModalConfirm } from '@store/modal/modalConfirm'
import { Button } from '../Button/Button'
import { Modal } from './Modal'

const ModalConfirm = () => {
    const {
        isOpen: isModalError,
        close: closeModalError,
        onCancel,
        onConfirm,
        warnIcon,
        error,
        onlybutton,
        title,
        children,
        message,
        buttonTitle,
        closeDisabled
    } = useModalConfirm()

    const { close } = useModalConfirm()

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

    return (
        <Modal top closeDisabled={closeDisabled} isOpen={isModalError} onClose={closeModalError}>
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
        </Modal>
    )
}

export { ModalConfirm }
