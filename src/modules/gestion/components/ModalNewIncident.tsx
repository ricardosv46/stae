import { Button, Input, Modal, Radio } from '@components/common'
import { CheckBox } from '@components/common/Input/CheckBox'
import { InputArea } from '@components/common/Input/InputArea'
import { CloseIcon } from '@components/icons'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { IIncident } from '../table/columnsIncident'

interface IModalNewIncident {
    isOpen: boolean
    onClose: () => void
    onCreate: (incident: IIncident) => void
}

const leftIncidents = [
    { id: 'usb-fault', label: 'Falla del USB' },
    { id: 'usb-lost', label: 'Pérdida del USB' },
    { id: 'laptop-scrutiny', label: 'Falla de la laptop de Escrutinio' },
    { id: 'modem-bgan', label: 'Falla módem / BGAN' },
    { id: 'others', label: 'Otros' }
]

const rightIncidents = [
    { id: 'printer-fault', label: 'Falla de la impresora' },
    { id: 'no-connectivity', label: 'No existe conectividad' },
    { id: 'laptop-transmission', label: 'Falla de la laptop de transmisión' },
    { id: 'data-error', label: 'Error al digitar datos (votos o DNI)' },
    { id: 'forgot-password', label: 'Miembro de Mesa olvidó su clave' }
]
const validationSchema = yup.object().shape({
    table: yup.string().required('El usuario es requerido'),
    status: yup.string().required('El usuario es requerido'),
    incident: yup.string().required('El usuario es requerido'),
    detail: yup.string().required('El usuario es requerido')
})

export const ModalNewIncident = ({ isOpen, onClose, onCreate }: IModalNewIncident) => {
    const {
        control,
        watch,
        getValues,
        register,
        setValue,
        handleSubmit,
        formState: { errors, isValid },
        reset
    } = useForm<IIncident>({
        defaultValues: {
            table: '',
            detail: '',
            status: '',
            incident: ''
        },
        resolver: yupResolver(validationSchema)
    })

    const onSubmit = async () => {
        const { detail, incident, status, table } = watch()
        onCreate({ detail, incident, status, table })
    }

    useEffect(() => {
        reset()
    }, [isOpen])

    return (
        <Modal top isOpen={isOpen} onClose={onClose}>
            <div className='bg-white w-[800px]  flex-col flex items-center p-[50px] relative'>
                <button className='absolute right-3 top-3'>
                    <CloseIcon onClick={onClose} />
                </button>

                <p className='font-medium text-2xl leading-normal tracking-[0.151px] text-skyblue mt-[8px]'>{'Registro de incidencias'}</p>

                <form className='text-black flex-col gap-5 flex mt-10  bg-white justify-center items-center'>
                    <Controller
                        name='table'
                        control={control}
                        render={({ field }) => (
                            <Input
                                {...field}
                                placeholder='Ingrese Número de mesa'
                                classInput='w-[350px] h-12'
                                className='w-[350px]'
                                error={errors?.table?.message}
                            />
                        )}
                    />

                    <Controller
                        name='incident'
                        control={control}
                        render={({ field }) => (
                            <div className='grid grid-cols-2'>
                                <div className='flex flex-col gap-2'>
                                    {leftIncidents.map((i, index) => (
                                        <CheckBox
                                            {...field}
                                            key={index}
                                            onChange={() => field.onChange(i.label)}
                                            label={i.label}
                                            value={i.label}
                                            name='incident'
                                            checked={field.value === i.label}
                                        />
                                    ))}
                                </div>
                                <div className='flex flex-col gap-2'>
                                    {rightIncidents.map((i, index) => (
                                        <CheckBox
                                            {...field}
                                            key={index}
                                            onChange={() => field.onChange(i.label)}
                                            label={i.label}
                                            value={i.label}
                                            name='incident'
                                            checked={field.value === i.label}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    />
                    <div className='w-full'>
                        <Controller
                            name='detail'
                            control={control}
                            render={({ field }) => (
                                <>
                                    <strong>Estado final</strong>
                                    <InputArea
                                        {...field}
                                        placeholder='Ingrese el detalle de la solución brindada'
                                        classInput='w-full h-12'
                                        error={errors?.table?.message}
                                    />
                                </>
                            )}
                        />
                    </div>

                    <Controller
                        name='status'
                        control={control}
                        render={({ field }) => (
                            <div className='flex gap-3'>
                                <Radio
                                    {...field}
                                    label={'Solucionado'}
                                    value={'Solucionado'}
                                    name='status'
                                    checked={field.value === 'Solucionado'}
                                />
                                <Radio
                                    {...field}
                                    label={'Pasó a convencional'}
                                    value={'Pasó a convencional'}
                                    name='status'
                                    checked={field.value === 'Pasó a convencional'}
                                />
                            </div>
                        )}
                    />

                    <Button type='submit' color='red' title='Aceptar' className='w-[200px] mt-2.5' onClick={handleSubmit(onSubmit)} />
                </form>
            </div>
        </Modal>
    )
}
