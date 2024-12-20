import { classNames } from '@utils/classNames'
import { getVisiblePages } from '@utils/getVisiblePages'
import React from 'react'

interface IPaginatorNumbers {
    pageIndex: number
    getPageCount: () => number
    getCanPreviousPage: () => boolean
    getCanNextPage: () => boolean
    previousPage: () => void
    nextPage: () => void
    setPageIndex: (index: number) => void
}

export const PaginatorNumbers = ({
    previousPage,
    getCanPreviousPage,
    setPageIndex,
    pageIndex,
    getPageCount,
    getCanNextPage,
    nextPage
}: IPaginatorNumbers) => {
    const visiblePages = getVisiblePages(getPageCount(), pageIndex)

    return (
        <div className='flex justify-between mt-5'>
            <span className='flex items-center gap-1'>
                <div>
                    Mostrando {pageIndex + 1} de {getPageCount().toLocaleString()}{' '}
                    {getPageCount().toLocaleString() == '1' ? 'página' : 'páginas'}
                </div>
            </span>

            <div className='border border-gray rounded '>
                <button
                    className=' p-1 h-[41px] px-3 disabled:bg-gray-extra-light disabled:text-black  hover:bg-skyblue-onpe hover:text-white transition-all ease-in-out duration-300'
                    onClick={() => previousPage()}
                    disabled={!getCanPreviousPage()}>
                    Anterior
                </button>
                {visiblePages.map((row, index) => (
                    <button
                        key={index}
                        onClick={() => setPageIndex(row)}
                        className={classNames([
                            'border-l border-gray  disabled:bg-gray-extra-light disabled:text-black  p-1 w-[41px] h-[41px] hover:bg-skyblue-onpe hover:text-white transition-all ease-in-out duration-300',
                            pageIndex === row ? 'bg-skyblue-onpe text-white' : ''
                        ])}>
                        {row + 1}
                    </button>
                ))}

                <button
                    className='border-l disabled:bg-gray-extra-light disabled:text-black  border-gray p-1 h-[41px] px-3 hover:bg-skyblue-onpe hover:text-white transition-all ease-in-out duration-300'
                    onClick={() => nextPage()}
                    disabled={!getCanNextPage()}>
                    Siguiente
                </button>
            </div>
        </div>
    )
}
interface ISelectPerPage {
    pageSize: number
    setPageSize: (size: number) => void
    options: number[]
}
export const PaginatorSelectPerPage = ({ pageSize, setPageSize, options }: ISelectPerPage) => {
    return (
        <div className='flex items-center gap-3'>
            <p>Mostrar</p>{' '}
            <select
                className='border h-[43px] w-[77px] px-3'
                value={pageSize}
                onChange={(e) => {
                    setPageSize(Number(e.target.value))
                }}>
                {options.map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                        {pageSize}
                    </option>
                ))}
            </select>
            <p>registros</p>
        </div>
    )
}
