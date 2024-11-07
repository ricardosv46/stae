import { Confirm, LayoutPage, Modal } from '@components/common'
import { useToggleModal } from '@components/hooks'
import { CedulaElectoralIcon, CredencialesIcon, InfoProcesoElectoralIcon, PadronElectoralIcon } from '@components/icons'
import { api } from '@services/api'
import { ProcesoElectoralParamDataRequest, ResponseShort, ROLES, UserSession } from '@services/types'
import { useAuth } from '@store/auth'
import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

enum VIEWS_MODAL {
    confirm = 'confirm',
    error = 'error'
}
const AdminIndex = () => {
    const router = useRouter()
    const { user } = useAuth()
    const [isOpenModal, OpenModal, CloseModal, viewModal] = useToggleModal(true)
    const [errorMessage, setErrorMessage] = useState('')

    const routeCredenciales = async () => {}

    const routeCedulaElectoral = async () => {}

    const getTitle = (user: UserSession) => {
        let title = 'Módulo de administración'
        if (!user) return title
        switch (user.idUsuario) {
            case ROLES.ROL_CRE:
                title = 'Módulo de gestión de pines'
                return title
            case ROLES.ROL_CED:
                title = 'Módulo de gestión de cédula electoral'
                return title
            case ROLES.ROL_PAD:
                title = 'Módulo de gestión de padrón electoral'
                return title
            case ROLES.ROL_JOR:
                title = 'Módulo de jornada electoral'
                return title
            default:
                return title
        }
    }

    return (
        <LayoutPage operator='' section={getTitle(user!)}>
            <section className='w-full max-w-[1200px] mt-9 mx-auto'>
                {user?.idUsuario === ROLES.ROL_PAD && (
                    <div className='flex flex-col lg:flex-row justify-center items-center pb-5'>
                        <div className='bg-blue w-24 h-24 float-left p-6'>
                            <PadronElectoralIcon />
                        </div>
                        <Link href='padron-electoral' className='w-[350px] display-inline'>
                            <p className='text-white text-center font-bold p-9 bg-[#0073cf]'>Padrón electoral</p>
                        </Link>
                    </div>
                )}
                {user?.idUsuario === ROLES.ROL_CRE && (
                    <div className='flex flex-col lg:flex-row justify-center items-center gap-[0px] pb-5 pointer-events-auto cursor-pointer'>
                        <div className='bg-blue w-24 h-24 float-left p-6'>
                            <CredencialesIcon />
                        </div>
                        <div className='w-[350px]'>
                            <p onClick={routeCredenciales} className='text-white text-center font-bold p-9 bg-[#0073cf]'>
                                Gestión de pines
                            </p>
                        </div>
                    </div>
                )}
                {user?.idUsuario === ROLES.ROL_CED && (
                    <div className='flex flex-col lg:flex-row justify-center items-center gap-[0px] pb-5'>
                        <div className='bg-blue w-24 h-24 float-left p-6'>
                            <CedulaElectoralIcon />
                        </div>
                        <div className='w-[350px] cursor-pointer'>
                            <p onClick={routeCedulaElectoral} className='text-white text-center font-bold p-9 bg-[#0073cf]'>
                                Cédula electoral
                            </p>
                        </div>
                    </div>
                )}

                {(user?.idUsuario === ROLES.ROL_EMP || user?.idUsuario === ROLES.ROL_ADM) && (
                    <div className='flex flex-col lg:flex-row justify-center items-center gap-[0px] pb-5'>
                        <div className='bg-blue w-24 h-24 float-left p-6'>
                            <InfoProcesoElectoralIcon />
                        </div>
                        <Link href='admin/listado' className='w-[350px] display-inline'>
                            <p className='text-white text-left font-bold p-9 bg-[#0073cf]'>Información del proceso electoral</p>
                        </Link>
                    </div>
                )}
            </section>
            <Modal isOpen={viewModal === VIEWS_MODAL.error && isOpenModal} onClose={CloseModal}>
                <Confirm error title='Error' onConfirm={CloseModal} message={errorMessage} onCancel={CloseModal} />
            </Modal>
        </LayoutPage>
    )
}

export default AdminIndex
