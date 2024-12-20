import { EditIcon } from '@components/icons'
import { ArrowLoadingIcon } from '@components/icons/ArrowLoadingIcon'
import { DeleteIcon } from '@components/icons/DeleteIcon'
import { createColumnHelper } from '@tanstack/react-table'

export interface IIncident {
    table: string
    incident: string
    status: string
    detail: string
}

const columnHelper = createColumnHelper<IIncident>()

export const columnsIncident = () => [
    {
        header: 'N°',
        id: 'index',
        cell: (info: any) => info.row.index + 1
    },
    columnHelper.accessor('table', {
        header: 'Mesa',
        cell: (info) => info.getValue()
    }),
    columnHelper.accessor('incident', {
        header: 'Incidencia',
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
                </div>
            )
        }
    }
]
