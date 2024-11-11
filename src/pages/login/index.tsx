import { Button, CardShadow, Confirm, Input, LayoutPageLogin, Modal, NavbarBrowser } from '@components/common'
import { useToggleModal, useToken } from '@components/hooks'
import { OnpeIcon, PasswordIcon, ReloadIcon, UserIcon, VenpIcon } from '@components/icons'
import { api } from '@services/api'
import { ProcesoElectoral } from '@services/types'
import { useAuth } from '@store/auth'
import { useRouter } from 'next/router'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
enum VIEWS_MODAL {
    error = 'error'
}
const Verificar = () => {
    const placeHolderText = '-Seleccionar-'
    const [isOpenModal, OpenModal, CloseModal, viewModal] = useToggleModal(true)
    const router = useRouter()
    const [user, setUser] = useState('OPERADORADM')
    const [captcha, setCaptcha] = useState('')
    const [password, setPassword] = useState('')
    const [ListaProcesoElectoral, SetProcesoElectoral] = useState<ProcesoElectoral[]>([])
    const [errorMessage, setErrorMessage] = useState('')
    const [codigoProceso, setProcess] = useState('')
    const [captchaSecurity, setCaptchasecurity] = useState('')

    const initialized = useRef(false)
    const { loginAction } = useAuth()

    const setUsername = async (event: ChangeEvent<HTMLInputElement>) => {
        try {
            setProcess('')
            const { value } = event.target
            SetProcesoElectoral([])
            if (value !== placeHolderText) {
                setUser(value.toUpperCase())
                const data = await api.middleware.procesos(value)
                SetProcesoElectoral(data)
            } else setUser('')
        } catch (error) {}
    }
    const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        setPassword(value)
    }
    const handleCaptcha = (event: ChangeEvent<HTMLInputElement>) => {
        const pattern = /[^a-zA-Z0-9]+/gi

        const newValue = event.target.value ? event.target.value.replace(pattern, '') : ''
        if (event.target.value !== newValue) {
            event.target.value = newValue
        }
        setCaptcha(newValue)
    }
    const callBack = (token: string) => {
        setCaptchasecurity(token)
    }

    const handleProcess = (event: ChangeEvent<HTMLSelectElement>) => {
        const { selectedIndex } = event.target
        setProcess(event.target.options[selectedIndex].value)
    }
    const performLogin = async () => {
        try {
            const listUsers = ['OPERADOREMP', 'OPERADORPAD', 'OPERADORCRE', 'OPERADORJOR', 'OPERADORCED', 'OPERADORADM']
            if (!listUsers.includes(user)) {
                setErrorMessage('Debe seleccionar un usuario de la lista')
                return OpenModal(VIEWS_MODAL.error)
            }
            if (!password) {
                setErrorMessage('Debe ingresar la contraseña')
                return OpenModal(VIEWS_MODAL.error)
            }
            if (user !== 'OPERADORADM' && !codigoProceso) {
                setErrorMessage('Debe de seleccionar un proceso electoral')
                return OpenModal(VIEWS_MODAL.error)
            }
            if (!captcha) {
                setErrorMessage('Debe ingresar el código de verificación')
                return OpenModal(VIEWS_MODAL.error)
            }
            const res = await api.login(user, password, codigoProceso, captcha, captchaSecurity)
            if (!res?.success) {
                setErrorMessage(res?.message ?? 'Login inválido')
                return OpenModal(VIEWS_MODAL.error)
            }
            if (res?.token) {
                loginAction(res?.userdata)
            }
        } catch (error: any) {
            await reloadCaptcha()
            setErrorMessage(error ?? 'Login inválido')
            return OpenModal(VIEWS_MODAL.error)
        }
    }
    useEffect(() => {
        if (initialized.current) return
        initialized.current = true
        if (typeof window !== 'undefined') {
            reloadCaptcha()
        }
    }, [])

    const reloadCaptcha = async () => {
        try {
            setCaptcha('')
            const data = await api.middleware.captcha(callBack)
            let img = new Image()
            if (data) {
                img.src = URL.createObjectURL(data)
                img.className = 'float-left'
                if (document.getElementById('captchaLoad')?.firstChild) {
                    document.getElementById('captchaLoad')?.firstChild?.remove()
                }
                document.getElementById('captchaLoad')?.appendChild(img)
            }
        } catch (error) {}
    }
    return (
        <LayoutPageLogin section=''>
            <div className='flex justify-center mb-[10px] pb-28'>
                <div className='w-[550px] flex flex-col bg-white pt-8 pb-10 border-4 rounded-3xl border-white'>
                    <OnpeIcon className='w-[108px] md:w-[200px] mr-auto ml-auto mb-8 inline-block text-center' />
                    <div className='text-center font-bold text-2xl text-blue mb-4'>Monitoreo de transmisión STAE</div>
                    <div className='text-center text-sm text-blue mb-5'>Versión: SIMULACRO</div>
                    <div className='w-[320px] mr-auto ml-auto'>
                        <div className='flex mb-5'>
                            <Input
                                type='text'
                                icon={UserIcon}
                                onChange={setUsername}
                                value={user}
                                placeholder='Usuario'
                                classInput='w-[280px] h-12 mb-5'
                                maxLength={20}
                            />
                        </div>
                        <div className='relative mb-5'>
                            <Input
                                type='password'
                                icon={PasswordIcon}
                                onChange={handlePassword}
                                placeholder='Contraseña'
                                classInput='w-[280px] h-12 mb-5'
                                maxLength={20}
                            />
                        </div>
                        <div className='flex items-center gap-3 mb-5 '>
                            <div id='captchaLoad' className='inline-block'></div>
                            <ReloadIcon width={25} height={25} className='cursor-pointer' onClick={reloadCaptcha} />
                        </div>
                        <Input
                            value={captcha}
                            type='captcha'
                            onChange={handleCaptcha}
                            placeholder='Código de verificación'
                            classInput='w-full h-12 mb-5'
                            maxLength={7}
                        />
                        <div className='inline-flex mt-2'></div>
                        <div className='gap-2 grid-cols-2 content-around text-center mb-5'>
                            <Button color='red' title='Aceptar' className='w-[200px] mx-auto' onClick={performLogin} />
                        </div>
                        <NavbarBrowser />
                    </div>
                </div>
            </div>

            <Modal closeDisabled={true} isOpen={viewModal === VIEWS_MODAL.error && isOpenModal} onClose={CloseModal}>
                <Confirm error title='Error' onConfirm={CloseModal} message={errorMessage} onCancel={CloseModal} />
            </Modal>
        </LayoutPageLogin>
    )
}
export default Verificar
