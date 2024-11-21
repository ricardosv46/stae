import { LayoutPage } from '@components/common'
import BigButtonIcon from '@components/common/Button/BigButtonIcon'
import { ConfigParamsIcon, InfoProcesoElectoralIcon } from '@components/icons'

const GestionParametros = () => {
    return (
        <LayoutPage operator='OPERADORADM' section='Módulo de Gestión de Padrón Electoral'>
            <section className='w-full max-w-[1200px] mt-9 mx-auto justify-center items-center flex flex-col gap-5 '>
                <BigButtonIcon href='admin/listado' icon={InfoProcesoElectoralIcon} title='Información del Proceso Electoral' />

                <BigButtonIcon href='admin/parametros' icon={ConfigParamsIcon} title='Configuración de Parámetros' />
            </section>
        </LayoutPage>
    )
}

export default GestionParametros
