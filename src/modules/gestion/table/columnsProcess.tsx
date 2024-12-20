import { LupaIcon } from '@components/icons'
import { createColumnHelper } from '@tanstack/react-table'

export interface IProcess {
    status: string
    amount: number
}

const columnHelper = createColumnHelper<IProcess>()

export const columnsProcess = () => [
    columnHelper.accessor('status', {
        header: (info: any) => <p className='text-center'>Estado</p>,
        cell: (info) => info.getValue()
    }),
    columnHelper.accessor('amount', {
        header: (info: any) => <p className='text-center'>Cantidad</p>,
        cell: (info) => info.getValue()
    }),
    {
        header: (info: any) => <p className='text-center'>Detalle</p>,
        id: 'accion',
        cell: (info: any) => {
            return (
                <div className='flex gap-5 items-center justify-center'>
                    <LupaIcon />
                </div>
            )
        }
    }
]
