import { Input, LayoutPage } from '@components/common'
import BigButtonIcon from '@components/common/Button/BigButtonIcon'
import { ButtonIcon } from '@components/common/Button/ButtonIcon'
import { ChipGreenText } from '@components/common/Chip/ChipGreenText'
import { PaginatorNumbers, PaginatorSelectPerPage } from '@components/common/Paginator/PaginatorNumbers'
import { useToggle } from '@components/hooks'
import { SearchIcon, AddUserIcon } from '@components/icons'
import { ModalNewUser } from '@modules/gestion/components/ModalNewUser'
import { columnsUser, IUser } from '@modules/gestion/table/columnsUser'
import { useModalConfirm } from '@store/modal/modalConfirm'
import { flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table'
import { useState, useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'

const dataUsers: IUser[] = [
    {
        username: 'JPEREZ',
        email: 'jperez@onpe.gob.pe',
        role: 'ADMINISTRADOR',
        status: 'Activo'
    },
    {
        username: 'AAQUINO',
        email: 'aaquino@onpe.gob.pe',
        role: 'ADMINISTRADOR',
        status: 'Activo'
    },
    {
        username: 'UUGARTE',
        email: 'uugarte@onpe.gob.pe',
        role: 'GESTOR DE CENTRO DE MONITOREO',
        status: 'Activo'
    },
    {
        username: 'MMORENA',
        email: 'mmorena@onpe.gob.pe',
        role: 'GESTOR DE CENTRO DE MONITOREO',
        status: 'Activo'
    },
    {
        username: 'HHUERTA',
        email: 'hhuerta@onpe.gob.pe',
        role: 'GESTOR DE CENTRO DE MONITOREO',
        status: 'Activo'
    }
]

interface FormValues {
    search: string
}

const Usuarios = () => {
    const [data, setData] = useState<IUser[]>(dataUsers)
    const [dataFilteredData, setFilteredData] = useState<IUser[]>([])
    const [isNotify, openNotify, closeNotify] = useToggle()
    const [isModalNewUser, openModalNewUser, closeModalNewUser] = useToggle()
    const { open: openConfirm } = useModalConfirm()
    const onCreate = async (user: IUser) => {
        openConfirm({
            icon: 'warning',
            title: 'Atención',
            buttonTitle: 'Confirmar',
            message: `Desea registrar al usuario <br/> ${user?.username} <br/> Rol: ${user?.role}`,
            onlyButton: false,
            closeDisabled: true,
            onConfirm() {
                openNotify()
                setTimeout(closeNotify, 2000)
                setData((prev) => [...prev, user])
                closeModalNewUser()
            }
        })
    }

    useEffect(() => {
        setFilteredData(data)
    }, [data])

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
        data: dataFilteredData,
        columns: columnsUser(),
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        initialState: {
            pagination: {
                pageIndex: 0,
                pageSize: 5
            }
        }
    })

    const {
        control,
        watch,
        getValues,
        register,
        setValue,
        handleSubmit,
        formState: { errors, isValid },
        reset
    } = useForm<FormValues>({
        defaultValues: {
            search: ''
        }
    })

    const onSubmit = (values: FormValues) => {
        const newData = data.filter((user) => {
            const searchMatch =
                user.email?.toLowerCase().includes(values?.search?.toLocaleLowerCase()) ||
                user.username?.toLowerCase().includes(values?.search?.toLocaleLowerCase()) ||
                user.role?.toLowerCase().includes(values?.search?.toLocaleLowerCase()) ||
                user.status?.toLowerCase().includes(values?.search?.toLocaleLowerCase())

            return searchMatch
        })

        setFilteredData(newData)
    }
    const { search } = watch()

    useEffect(() => {
        if (search === '') setFilteredData(data)
    }, [search])

    return (
        <LayoutPage operator='OPERADORADM' section='Usuarios de monitoreo'>
            <ModalNewUser isOpen={isModalNewUser} onClose={closeModalNewUser} onCreate={onCreate} />
            <ChipGreenText text='Se realizó el cambio' status={isNotify} />
            <section className='w-full flex justify-center items-center  relative text-white'>
                <BigButtonIcon onClick={openModalNewUser} icon={AddUserIcon} title='Nuevo usuario' />
            </section>

            <section className='w-full mt-5'>
                <h2 className='text-2xl font-bold text-blue'>Usuarios registrados</h2>
                <hr className='border-gray mb-6' />
                <form className='flex gap-5 pb-5 text-white' onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name='search'
                        control={control}
                        render={({ field }) => <Input {...field} placeholder='' classInput='w-[280px] h-12' />}
                    />
                    <ButtonIcon type='submit' icon={SearchIcon} className='text-white' title='Buscar' />
                </form>

                <PaginatorSelectPerPage options={[5, 10, 15, 20, 25]} pageSize={getState().pagination.pageSize} setPageSize={setPageSize} />
                <table className='min-w-full text-sm mt-5'>
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
                <PaginatorNumbers
                    {...{
                        previousPage,
                        getCanPreviousPage,
                        setPageIndex,
                        pageIndex: getState().pagination.pageIndex,
                        getPageCount,
                        getCanNextPage,
                        nextPage
                    }}
                />
            </section>
        </LayoutPage>
    )
}

export default Usuarios
