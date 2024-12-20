import { Input } from '@components/common'
import { ButtonIcon } from '@components/common/Button/ButtonIcon'
import { DownloadIcon } from '@components/icons/DownloadIcon'
import { DownloadIconSlim } from '@components/icons/DownloadIconSlim'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
interface FormValues {
    search: string
}

export const LogsDownload = () => {
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

    const onSubmit = (values: FormValues) => {}

    return (
        <div>
            <form className='flex gap-5 pb-5 text-white py-10' onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name='search'
                    control={control}
                    render={({ field }) => <Input {...field} placeholder='Ingresar número de mesa' classInput='w-[280px] h-12' />}
                />
                <ButtonIcon type='submit' icon={DownloadIconSlim} className='text-white' title='Descargar' />
            </form>
            <hr className='border-gray mb-10' />
        </div>
    )
}
