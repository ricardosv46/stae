import { LoadingSpin } from '@components/icons'
import { Modal } from './Modal'
import { useModalLoading } from '@store/modal/modalLoading'

const ModalLoading = () => {
    const { isOpen: isModalLoading, close: closeModalLoading, closeDisabled, message } = useModalLoading()

    return (
        <Modal top closeDisabled={closeDisabled} isOpen={isModalLoading} onClose={closeModalLoading}>
            <LoadingSpin className='animate-spin h-10 w-10 text-op-blue-1' />
            <p className='text-white leading-normal text-6xl'>{message}</p>
        </Modal>
    )
}

export { ModalLoading }
