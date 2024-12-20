import { EditIcon } from '@components/icons'
import { ArrowLoadingIcon } from '@components/icons/ArrowLoadingIcon'
import { DeleteIcon } from '@components/icons/DeleteIcon'
import { createColumnHelper } from '@tanstack/react-table'

export interface IUser {
    username: string
    email: string
    role: string
    status: string
}

const columnHelper = createColumnHelper<IUser>()

export const columnsUser = () => [
    {
        header: 'N°',
        id: 'index',
        cell: (info: any) => info.row.index + 1
    },
    columnHelper.accessor('username', {
        header: 'Usuario',
        cell: (info) => info.getValue()
    }),
    columnHelper.accessor('email', {
        header: 'Correo electrónico',
        cell: (info) => info.getValue()
    }),
    columnHelper.accessor('role', {
        header: (info) => <p className='text-center'>ROL</p>,
        cell: (info) => info.getValue()
    }),
    columnHelper.accessor('status', {
        header: 'Estado',
        cell: (info) => info.getValue()
    }),
    {
        header: 'Accienes',
        id: 'accion',
        cell: (info: any) => {
            return (
                <div className='flex gap-5 items-center'>
                    <button className='text-skyblue flex items-center justify-center gap-1'>
                        <EditIcon className='w-6' /> <p className='underline leading-2.5'>Editar</p>
                    </button>
                    <button className='text-red flex gap-1'>
                        <DeleteIcon className='w-6' /> <p className='underline self-end  leading-2.5'>Eliminar</p>
                    </button>
                    <button className='text-green flex   gap-1  '>
                        <ArrowLoadingIcon className='w-6  ' />
                        <p className='underline self-end leading-2.5'>Reinciar clave</p>
                    </button>
                </div>
            )
        }
    }
]
