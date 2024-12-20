import { LayoutPage } from '@components/common'
import BigButtonIcon from '@components/common/Button/BigButtonIcon'
import { ChipGreenText } from '@components/common/Chip/ChipGreenText'
import { ArrowLoadingIcon } from '@components/icons/ArrowLoadingIcon'
import { useModalLoading } from '@store/modal/modalLoading'
import { useModalPassword } from '@store/modal/modalPassword'
import { delay } from '@utils/delay'
import { useState } from 'react'
interface Ihistory {
    id: number
    user: string
    action: string
    date: string
}

const history = [
    {
        id: 3,
        user: 'NPRADO',
        action: 'PUESTA A CERO TOTAL',
        date: '21/09/2023 14:55:00:000000'
    },
    {
        id: 2,
        user: 'NPRADO',
        action: 'PUESTA A CERO TOTAL',
        date: '21/09/2023 14:55:00:000000'
    },
    {
        id: 1,
        user: '',
        action: 'CARGA INICIAL',
        date: '21/09/2023 14:55:00:000000'
    }
]

import { createColumnHelper, flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table'
import { AddIcon } from '@components/icons'

const columnHelper = createColumnHelper<Ihistory>()

export const columnsHistory = () => [
    {
        header: 'N°',
        id: 'index',
        cell: (info: any) => info.row.index + 1
    },
    columnHelper.accessor('user', {
        header: 'Usuario',
        cell: (info) => info.getValue()
    }),
    columnHelper.accessor('action', {
        header: 'Acción',
        cell: (info) => info.getValue()
    }),
    columnHelper.accessor('date', {
        header: 'Fecha',
        cell: (info) => info.getValue()
    })
]

const PuestaCero = () => {
    const [data, setData] = useState(false) //TODO: add tanstack query
    const [notify, setNotify] = useState(false)
    const { open: openPassword, setPassword, password } = useModalPassword()
    const { open: openLoading, close: closeLoading } = useModalLoading()
    const handlePuestaCero = () => {
        openPassword({
            title: 'Puesta a cero',
            message: 'Para confirmar la Puesta a cero, ingrese su contraseña',
            onConfirm: async (password: string) => {
                console.log('Contraseña ingresada:', password)

                openLoading({ message: 'Puesta cero inicializada <br/> Procesando...', closeDisabled: true })
                await delay(2000)
                closeLoading()

                setNotify(true)

                setData(true)
                setTimeout(() => setNotify(false), 2000)

                const success = true

                return success
            }
        })
    }

    const { getHeaderGroups, getRowModel, setPageSize, getRowCount, getState, setPageIndex } = useReactTable({
        data: history,
        columns: columnsHistory(),
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel()
    })

    return (
        <LayoutPage operator='OPERADORADM' section='Puesta a Cero'>
            <ChipGreenText text='Se realizó el cambio' status={notify} />

            <section className='w-full flex justify-center items-center  relative text-white'>
                <BigButtonIcon onClick={handlePuestaCero} icon={ArrowLoadingIcon} title='Ejecutar Puesta a cero' />
            </section>

            <section className='w-full mt-5'>
                <h2 className='text-2xl font-bold text-blue'>Historial de puesta a cero</h2>
                <hr className='border-gray mb-6' />
                {data && (
                    <table className='min-w-full text-sm'>
                        <thead className=''>
                            {getHeaderGroups().map((headerGroup) => (
                                <tr key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <th className='px-6 py-3.5 text-left  font-medium border-gray  border uppercase ' key={header.id}>
                                            {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody className=' '>
                            {getRowModel().rows?.map((row, index) => (
                                <tr key={row.id} className={index % 2 === 1 ? 'bg-extra-light-skyblue' : 'bg-white'}>
                                    {row.getVisibleCells().map((cell) => (
                                        <td key={cell.id} className='px-6 py-3.5 whitespace-nowrap  border-gray  border'>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </section>
        </LayoutPage>
    )
}

export default PuestaCero
