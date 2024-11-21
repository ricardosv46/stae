import { LayoutPage } from '@components/common'
import { CedulaElectoralIcon, CredencialesIcon, InfoProcesoElectoralIcon, PadronElectoralIcon } from '@components/icons'
import BigButtonIcon from '../components/common/Button/BigButtonIcon'

enum VIEWS_MODAL {
    confirm = 'confirm',
    error = 'error'
}
const AdminIndex = () => {
    return (
        <LayoutPage operator='OPERADORADM' section={'ADMIN'}>
            <section className='w-full max-w-[1200px] mt-9 mx-auto justify-center items-center flex flex-col gap-10 '>
                <BigButtonIcon href='padron-electoral' icon={PadronElectoralIcon} title='Padrón electoral' />

                <BigButtonIcon onClick={() => {}} icon={CredencialesIcon} title='Gestión de pines' />

                <BigButtonIcon onClick={() => {}} icon={CedulaElectoralIcon} title='Cédula electoral' />

                <BigButtonIcon href='admin/listado' icon={InfoProcesoElectoralIcon} title='Información del proceso electoral' />
            </section>
        </LayoutPage>
    )
}

export default AdminIndex
