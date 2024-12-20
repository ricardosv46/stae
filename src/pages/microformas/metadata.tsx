import { LayoutPage } from '@components/common'
import { useToggleModal } from '@components/hooks'
import { ActaEntregaUsoIcon } from '@components/icons/ActaEntregaUsoIcon'
import { ArrowLoadingIcon } from '@components/icons/ArrowLoadingIcon'
import { ConvenioErepIcon } from '@components/icons/ConvenioErepIcon'
import { GenerarMetadataIcon } from '@components/icons/GenerarMetadataIcon'
import { ReportePuestaCeroIcon } from '@components/icons/ReportePuestaCeroIcon'
import { useModalConfirm } from '@store/modal/modalConfirm'
import { useModalLoading } from '@store/modal/modalLoading'

const Metadata = () => {
    const [isOpenModal, OpenModal, CloseModal, viewModal] = useToggleModal(false)
    const { open: openModalMeta } = useModalConfirm()
    const { open: openModalLoading, close: closeModalLoading } = useModalLoading()
    const handleGenerateMetadata = () => {
        openModalMeta({ title: 'Atención', message: '¿Desea generar metadata?', buttonTitle: 'fa', onConfirm: ConfirmHandle })
    }

    const ConfirmHandle = () => {
        openModalLoading({ message: 'Proceso iniciado......' })
    }

    return (
        <LayoutPage operator='OPERADORADM' section='Metadata'>
            <section className=' mx-auto p-6 pt-0 bg-white rounded-md shadow-sm'>
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
                        <div className='bg-gray-700 w-24 h-24 float-left p-6 text-white'>
                            <ArrowLoadingIcon className='w-12 h-12' />
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
            </section>
        </LayoutPage>
    )
}

export default Metadata
