import { LayoutPage } from '@components/common'
import { CedulaElectoralIcon, CredencialesIcon, InfoProcesoElectoralIcon, PadronElectoralIcon } from '@components/icons'
import Link from 'next/link'

enum VIEWS_MODAL {
    confirm = 'confirm',
    error = 'error'
}
const AdminIndex = () => {
    return (
        <LayoutPage operator='' section={'pruebaaaaaaaaa'}>
            <section className='w-full max-w-[1200px] mt-9 mx-auto'>
                <div className='flex flex-col lg:flex-row justify-center items-center pb-5'>
                    <div className='bg-blue w-24 h-24 float-left p-6'>
                        <PadronElectoralIcon />
                    </div>
                    <Link href='padron-electoral' className='w-[350px] display-inline'>
                        <p className='text-white text-center font-bold p-9 bg-[#0073cf]'>Padrón electoral</p>
                    </Link>
                </div>
                <div className='flex flex-col lg:flex-row justify-center items-center gap-[0px] pb-5 pointer-events-auto cursor-pointer'>
                    <div className='bg-blue w-24 h-24 float-left p-6'>
                        <CredencialesIcon />
                    </div>
                    <div className='w-[350px]'>
                        <p onClick={() => {}} className='text-white text-center font-bold p-9 bg-[#0073cf]'>
                            Gestión de pines
                        </p>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row justify-center items-center gap-[0px] pb-5'>
                    <div className='bg-blue w-24 h-24 float-left p-6'>
                        <CedulaElectoralIcon />
                    </div>
                    <div className='w-[350px] cursor-pointer'>
                        <p onClick={() => {}} className='text-white text-center font-bold p-9 bg-[#0073cf]'>
                            Cédula electoral
                        </p>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row justify-center items-center gap-[0px] pb-5'>
                    <div className='bg-blue w-24 h-24 float-left p-6'>
                        <InfoProcesoElectoralIcon />
                    </div>
                    <Link href='admin/listado' className='w-[350px] display-inline'>
                        <p className='text-white text-left font-bold p-9 bg-[#0073cf]'>Información del proceso electoral</p>
                    </Link>
                </div>
            </section>
        </LayoutPage>
    )
}

export default AdminIndex
