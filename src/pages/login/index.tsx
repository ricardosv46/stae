import { Button, Input, LayoutPageLogin, NavbarBrowser } from '@components/common'
import { OnpeIcon, PasswordIcon, ReloadIcon, UserIcon } from '@components/icons'
import { yupResolver } from '@hookform/resolvers/yup'
import { getCaptcha } from '@services/auth'
import { useAuth } from '@store/auth'
import { useEffect } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { useModalConfirm } from '../../store/modal/modalConfirm'

const validationSchema = yup.object().shape({
    username: yup.string().required('El usuario es requerido'),
    password: yup.string().required('La contraseña es requerida'),
    captcha: yup.string().required('El código de verificación es requerido').length(7, 'El código de verificación debe tener 7 caracteres')
})

interface FormData {
    username: string
    password: string
    captcha: string
}

const Login = () => {
    const { loginAction } = useAuth()
    const { open: openModalError } = useModalConfirm()

    const {
        control,
        watch,
        getValues,
        register,
        setValue,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<FormData>({
        defaultValues: {
            captcha: '',
            password: '',
            username: ''
        },
        resolver: yupResolver(validationSchema)
    })

    useEffect(() => {
        if (typeof window !== 'undefined') {
            reloadCaptcha()
        }
    }, [])

    const reloadCaptcha = async () => {
        try {
            setValue('captcha', '')
            const data = await getCaptcha()
            let img = new Image()
            if (data) {
                img.src = URL.createObjectURL(data)
                img.className = 'float-left'
                if (document.getElementById('captchaLoad')?.firstChild) {
                    document.getElementById('captchaLoad')?.firstChild?.remove()
                }
                document.getElementById('captchaLoad')?.appendChild(img)
            }
        } catch (error) {
            console.error('Error loading captcha:', error)
        }
    }

    const onSubmit: SubmitHandler<FormData> = (data) => {
        loginAction({ idUsuario: 'pruebaaaa' })
        localStorage.setItem('token', 'asfafasfasf')
        localStorage.setItem('session_user', JSON.stringify({ idUsuario: 'OPERADORADM' }))
        console.log('Formulario enviado correctamente:', data)
    }

    useEffect(() => {
        const firstError = Object.values(errors)[0]?.message

        if (firstError) {
            openModalError({ error: true, title: 'Error', message: firstError, onConfirm: reloadCaptcha })
        }
    }, [errors])

    return (
        <LayoutPageLogin section=''>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex justify-center mb-[10px] pb-28'>
                    <div className='w-[550px] flex flex-col bg-white pt-8 pb-10 border-4 rounded-3xl border-white'>
                        <OnpeIcon className='w-[108px] md:w-[200px] mr-auto ml-auto mb-8 inline-block text-center' />
                        <div className='text-center font-bold text-2xl text-blue mb-4'>Monitoreo de transmisión STAE</div>
                        <div className='text-center text-sm text-blue mb-5'>Versión: SIMULACRO</div>
                        <div className='w-[320px] mr-auto ml-auto'>
                            <div className='mb-5'>
                                <Controller
                                    name='username'
                                    control={control}
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            type='text'
                                            icon={UserIcon}
                                            placeholder='Usuario'
                                            classInput='w-[280px] h-12'
                                            maxLength={20}
                                        />
                                    )}
                                />
                            </div>

                            <div className='relative mb-5'>
                                <Controller
                                    name='password'
                                    control={control}
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            type='password'
                                            icon={PasswordIcon}
                                            placeholder='Contraseña'
                                            classInput='w-[280px] h-12'
                                            maxLength={20}
                                        />
                                    )}
                                />
                            </div>

                            <div className='flex items-center gap-3 mb-5'>
                                <div id='captchaLoad' className='inline-block'></div>
                                <ReloadIcon width={25} height={25} className='cursor-pointer' onClick={reloadCaptcha} />
                            </div>
                            <Controller
                                name='captcha'
                                control={control}
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        type='text'
                                        placeholder='Código de verificación'
                                        classInput='w-full h-12 mb-5'
                                        maxLength={7}
                                    />
                                )}
                            />

                            <div className='text-center mb-5'>
                                <Button type='submit' color='red' title='Aceptar' className='w-[200px] mx-auto' />
                            </div>

                            <NavbarBrowser />
                        </div>
                    </div>
                </div>
            </form>
        </LayoutPageLogin>
    )
}

export default Login
