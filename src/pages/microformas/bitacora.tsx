import { LayoutPage } from '@components/common'
import { ActaEntregaUsoIcon } from '@components/icons/ActaEntregaUsoIcon'
import { ArrowLoadingIcon } from '@components/icons/ArrowLoadingIcon'
import { ConvenioErepIcon } from '@components/icons/ConvenioErepIcon'
import { ReportePuestaCeroIcon } from '@components/icons/ReportePuestaCeroIcon'

const Bitacora = () => {
    return (
        <LayoutPage operator='OPERADORADM' section='Logs de Bitácora'>
            <section className=' mx-auto p-6 pt-0 bg-white rounded-md shadow-sm'>
                <p className='text-center text-gray-700 mb-4'>Haga clic en cada botón para generar los logs</p>

                <div className='grid grid-cols-1 gap-4 md:grid-cols-1'>
                    <div className='flex flex-col lg:flex-row justify-center items-center gap-[0px] pb-5'>
                        <div className='bg-blue w-24 h-24 float-left p-6'>
                            <ArrowLoadingIcon />
                        </div>
                        <div className='w-[350px] display-inline cursor-pointer'>
                            <p className='text-white text-center font-bold p-9 bg-[#0073cf]'>Actas de escrutinio</p>
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row justify-center items-center gap-[0px] pb-5'>
                        <div className='bg-blue w-24 h-24 float-left p-6'>
                            <ActaEntregaUsoIcon />
                        </div>
                        <div className='w-[350px] display-inline cursor-pointer'>
                            <p className='text-white text-center font-bold p-9 bg-[#0073cf]'>Acta de entrega y uso</p>
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row justify-center items-center gap-[0px] pb-5'>
                        <div className='bg-blue w-24 h-24 float-left p-6'>
                            <ConvenioErepIcon />
                        </div>
                        <div className='w-[350px] display-inline cursor-pointer'>
                            <p className='text-white text-center font-bold p-9 bg-[#0073cf]'>Convenio EREP</p>
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row justify-center items-center gap-[0px] pb-5'>
                        <div className='bg-blue w-24 h-24 float-left p-6'>
                            <ReportePuestaCeroIcon />
                        </div>
                        <div className='w-[350px] display-inline cursor-pointer'>
                            <p className='text-white text-center font-bold p-9 bg-[#0073cf]'>Reporte de puesta cero</p>
                        </div>
                    </div>
                </div>
            </section>
        </LayoutPage>
    )
}

export default Bitacora
