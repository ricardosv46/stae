import { Button, Input, Modal } from '@components/common'
import { EmailIcon } from '@components/icons/EmailIcon'
import { NewUserIcon } from '@components/icons/NewUserIcon'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'
import SelectLib from '@components/common/Select/SelectLib'
import { CloseIcon } from '@components/icons'
import { IUser } from '@modules/gestion/table/columnsUser'

interface FormValues {
    username: string
    email: string
    rol: string
}

const roles: any[] = [
    { valor: 'Gestor de Centro de Monitoreo', codigo: 'Gestor de Centro de Monitoreo' },
    { valor: 'Monitor', codigo: 'Monitor' },
    { valor: 'Gestor de Microformas', codigo: 'Gestor de Microformas' }
]

const validationSchema = yup.object().shape({
    username: yup.string().required('El usuario es requerido'),
    email: yup.string().email('El correo no es válido').required('El correo es requerido'),
    rol: yup.string().required('El rol es requerido')
})
interface IModalNewUser {
    isOpen: boolean
    onClose: () => void
    onCreate: (user: IUser) => void
}

export const ModalNewUser = ({ isOpen, onClose, onCreate }: IModalNewUser) => {
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
            username: '',
            email: '',
            rol: ''
        },
        resolver: yupResolver(validationSchema)
    })

    const onSubmit = async () => {
        const { rol, username, email } = watch()
        onCreate({ username, email, status: 'Activo', role: rol })
    }

    useEffect(() => {
        reset()
    }, [isOpen])

    return (
        <Modal top isOpen={isOpen} onClose={onClose}>
            <div className='bg-white w-[700px]  flex-col flex items-center p-[50px] relative'>
                <button className='absolute right-3 top-3'>
                    <CloseIcon onClick={onClose} />
                </button>

                <p className='font-medium text-2xl leading-normal tracking-[0.151px] text-skyblue mt-[8px]'>{'Nuevo Usuario'}</p>

                <form className='text-white flex-col gap-1 flex mt-10  bg-white justify-center items-center'>
                    <Controller
                        name='username'
                        control={control}
                        render={({ field }) => (
                            <Input
                                {...field}
                                icon={NewUserIcon}
                                placeholder='Ingrese el email del usuario'
                                classInput='w-[350px] h-12'
                                className='w-[350px]'
                                error={errors?.username?.message}
                            />
                        )}
                    />

                    <Controller
                        name='email'
                        control={control}
                        render={({ field }) => (
                            <Input
                                {...field}
                                icon={EmailIcon}
                                placeholder='Ingrese el email del usuario'
                                classInput='w-[350px] h-12'
                                className='w-[350px]'
                                error={errors?.email?.message}
                            />
                        )}
                    />
                    <div className='w-[350px]'>
                        <Controller
                            name='rol'
                            control={control}
                            render={({ field }) => (
                                <SelectLib
                                    {...field}
                                    id='localVotacion'
                                    label=''
                                    placeHolder='Seleccionar rol...'
                                    options={roles}
                                    optionChange={(e) => field.onChange(e.codigo)}
                                    error={errors?.rol?.message}
                                    className='bg-gray-50 border border-blue-300 w-full text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 p-2.5'
                                />
                            )}
                        />
                    </div>

                    <Button
                        type='submit'
                        // disabled={!isValid}
                        color='red'
                        title='Aceptar'
                        className='w-[200px] mt-2.5'
                        onClick={handleSubmit(onSubmit)}
                    />
                </form>
            </div>
        </Modal>
    )
}
