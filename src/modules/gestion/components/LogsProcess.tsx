import BigButtonIcon from '@components/common/Button/BigButtonIcon'
import { ArrowLoadingIcon } from '@components/icons/ArrowLoadingIcon'
import { ReporteCheckIcon } from '@components/icons/ReportePuestaCeroIcon'
import { flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table'
import React, { useState } from 'react'
import { columnsProcess } from '../table/columnsProcess'
import { useToggle } from '@components/hooks'
import { useModalPassword } from '@store/modal/modalPassword'
import { useModalLoading } from '@store/modal/modalLoading'
import { delay } from '@utils/delay'

const dataProcesses = [
    {
        status: 'Completado',
        amount: 18000
    },
    {
        status: 'Completado',
        amount: 2
    }
]

export const LogsProcess = () => {
    const [data, setData] = useState(false) //TODO: add tanstack query
    const { open: openPassword, setPassword, password } = useModalPassword()
    const { open: openLoading, close: closeLoading } = useModalLoading()
    const handleReprocesar = async () => {
        openLoading({ message: 'Procesando archivos...', closeDisabled: true })
        await delay(2000)
        closeLoading()

        setData(true)
    }

    const {
        getHeaderGroups,
        getRowModel,
        setPageSize,
        getRowCount,
        getState,
        setPageIndex,
        previousPage,
        getCanPreviousPage,
        getPageCount,
        nextPage,
        getCanNextPage
    } = useReactTable({
        data: dataProcesses,
        columns: columnsProcess(),
        getCoreRowModel: getCoreRowModel()
    })

    return (
        <div className='p-5 flex items-center flex-col gap-5 justify-center'>
            {data && (
                <table className='min-w-[731px]  text-sm mt-5'>
                    <thead className=''>
                        {getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th className='px-6 py-3.5 text-left  font-medium border-gray  border  ' key={header.id}>
                                        {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody className=' '>
                        {getRowModel().rows?.map((row, index) => (
                            <tr key={row.id} className={index % 2 === 1 ? 'bg-extra-skyblue-onpe' : 'bg-white'}>
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

            <section className='w-full flex justify-center items-center  relative text-white gap-7'>
                <BigButtonIcon onClick={handleReprocesar} icon={ReporteCheckIcon} title='Reprocesar' />
                <BigButtonIcon onClick={() => {}} icon={ArrowLoadingIcon} title='Puesta a cero PKI' />
            </section>
        </div>
    )
}
