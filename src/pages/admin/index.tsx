import { LayoutPage } from '@components/common'
import { ConfigParamsIcon, InfoProcesoElectoralIcon } from '@components/icons'

const GestionParametros = () => {
    return (
        <LayoutPage operator='OPERADORADM' section='Módulo de Gestión de Padrón Electoral'>
            <section className='w-full max-w-[1200px] mt-9 mx-auto'>
                <div className='flex flex-col lg:flex-row justify-center items-center gap-[30px] pb-5'>
                    <a href='admin/listado' className='w-[350px] border-blue border display-inline'>
                        <div className='bg-blue w-24 h-24 float-left p-6'>
                            <InfoProcesoElectoralIcon />
                        </div>
                        <p className='text-white text-left font-bold p-6 pl-28 bg-[#0073cf]'>Información del Proceso Electoral</p>
                    </a>
                </div>

                <div className='flex flex-col lg:flex-row justify-center items-center gap-[30px] pb-5'>
                    <a href='admin/parametros' className='w-[350px] border-blue border display-inline'>
                        <div className='bg-blue w-24 h-24 float-left p-6'>
                            <ConfigParamsIcon />
                        </div>
                        <p className='text-white text-left font-bold p-6 pl-28 bg-[#0073cf]'>Configuración de Parámetros</p>
                    </a>
                </div>
            </section>
        </LayoutPage>
    )
}

export default GestionParametros
