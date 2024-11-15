import { Confirm, LayoutPage, Modal } from '@components/common'
import { useToggleModal } from '@components/hooks'
import { LoadingSpin } from '@components/icons'
import { ActaEntregaUsoIcon } from '@components/icons/ActaEntregaUsoIcon'
import { ActaEscrutinioIcon } from '@components/icons/ActaEscrutinioIcon'
import { ConvenioErepIcon } from '@components/icons/ConvenioErepIcon'
import { GenerarMetadataIcon } from '@components/icons/GenerarMetadataIcon'
import { ReportePuestaCeroIcon } from '@components/icons/ReportePuestaCeroIcon'

enum VIEWS_MODAL {
    messageBox = 'messageBox',
    loadingText = 'loadingText'
}

const Metadata = () => {
    const [isOpenModal, OpenModal, CloseModal, viewModal] = useToggleModal(false)
    const handleGenerateMetadata = () => {
        OpenModal(VIEWS_MODAL.messageBox)
    }

    const ConfirmHandle = () => {
        OpenModal(VIEWS_MODAL.loadingText)
    }

    return (
        <LayoutPage operator='OPERADORADM' section='Metadata'>
            <section className='mt-4 mx-auto p-6 bg-white rounded-md shadow-sm'>
                <p className='text-center text-gray-700 mb-4'>
                    Para iniciar los procedimientos debe generar la metadata presionando el botón:
                </p>

                <div className='flex flex-col lg:flex-row justify-center items-center gap-[0px] pb-5'>
                    <div className='bg-blue w-24 h-24 float-left p-6'>
                        <GenerarMetadataIcon />
                    </div>
                    <div className='w-[350px] display-inline cursor-pointer' onClick={handleGenerateMetadata}>
                        <p className='text-white text-center font-bold p-9 bg-[#0073cf]'>Generar Metadata</p>
                    </div>
                </div>

                <hr className='border-gray mb-6' />

                <div className='grid grid-cols-1 gap-4 md:grid-cols-1'>
                    <div className='flex flex-col lg:flex-row justify-center items-center gap-[0px] pb-5'>
                        <div className='bg-gray-700 w-24 h-24 float-left p-6'>
                            <ActaEscrutinioIcon />
                        </div>
                        <div className='w-[350px] display-inline cursor-pointer'>
                            <p className='text-white text-center font-bold p-9 bg-gray-light'>Actas de escrutinio</p>
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row justify-center items-center gap-[0px] pb-5'>
                        <div className='bg-gray-700 w-24 h-24 float-left p-6'>
                            <ActaEntregaUsoIcon />
                        </div>
                        <div className='w-[350px] display-inline cursor-pointer'>
                            <p className='text-white text-center font-bold p-9 bg-gray-light'>Acta de entrega y uso</p>
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row justify-center items-center gap-[0px] pb-5'>
                        <div className='bg-gray-700 w-24 h-24 float-left p-6'>
                            <ConvenioErepIcon />
                        </div>
                        <div className='w-[350px] display-inline cursor-pointer'>
                            <p className='text-white text-center font-bold p-9 bg-gray-light'>Convenio EREP</p>
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row justify-center items-center gap-[0px] pb-5'>
                        <div className='bg-gray-700 w-24 h-24 float-left p-6'>
                            <ReportePuestaCeroIcon />
                        </div>
                        <div className='w-[350px] display-inline cursor-pointer'>
                            <p className='text-white text-center font-bold p-9 bg-gray-light'>Reporte de puesta cero</p>
                        </div>
                    </div>
                </div>
                <Modal isOpen={viewModal === VIEWS_MODAL.messageBox && isOpenModal} onClose={CloseModal}>
                    <Confirm title='Atención' onConfirm={ConfirmHandle} message='¿Desea generar metadata?' onCancel={CloseModal} />
                </Modal>
                <Modal isOpen={viewModal === VIEWS_MODAL.loadingText && isOpenModal} onClose={CloseModal}>
                    <LoadingSpin className='animate-spin h-10 w-10 text-op-blue-1' />
                    <p className='text-white leading-normal text-6xl'>Proceso iniciado......</p>
                </Modal>
            </section>
        </LayoutPage>
    )
}

export default Metadata
