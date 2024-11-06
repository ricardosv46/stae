import { Button, CardShadow, Confirm, Input, LayoutPageLogin, Modal } from '@components/common'
import { useToggleModal, useToken } from '@components/hooks'
import { PasswordIcon, ReloadIcon, UserIcon, VenpIcon } from '@components/icons'
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
    const [user, setUser] = useState('')
    const [captcha, setCaptcha] = useState('')
    const [password, setPassword] = useState('')
    const [ListaProcesoElectoral, SetProcesoElectoral] = useState<ProcesoElectoral[]>([])
    const [errorMessage, setErrorMessage] = useState('')
    const [codigoProceso, setProcess] = useState('')
    const [captchaSecurity, setCaptchasecurity] = useState('')

    const initialized = useRef(false)
    const { loginAction } = useAuth()

    const setUsername = async (event: ChangeEvent<HTMLSelectElement>) => {
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
            <div className='flex justify-center mb-[10px]'>
                <CardShadow className='w-[490px] flex flex-col pt-8 pb-10 p-20 border-gray-light'>
                    <VenpIcon className='w-[108px] md:w-[200px] h-[32px] md:h-[60px] mr-auto ml-auto mb-8 inline-block text-center' />
                    Usuario
                    <div className='flex mb-3'>
                        <div className='bg-blue w-12 h-12 p-0 text-center content-center'>
                            <UserIcon />
                        </div>
                        <select
                            onChange={setUsername}
                            className='bg-white border border-gray-300 w-[280px] text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 '>
                            <option>{placeHolderText}</option>
                            <option>OPERADORADM</option>
                            <option>OPERADORJOR</option>
                            <option>OPERADORPAD</option>
                            <option>OPERADORCRE</option>
                            <option>OPERADORCED</option>
                        </select>
                    </div>
                    <div className='relative'>
                        Contraseña
                        <Input
                            type='password'
                            icon={PasswordIcon}
                            onChange={handlePassword}
                            placeholder='Contraseña'
                            classInput='w-full h-12 mb-3'
                            maxLength={20}
                        />
                    </div>
                    {user && user !== 'OPERADORADM' && (
                        <>
                            Proceso electoral
                            <select
                                onChange={handleProcess}
                                className='bg-white border border-gray-300 text-gray-900 mb-6 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 '>
                                <option value=''>-Seleccionar-</option>
                                {ListaProcesoElectoral.length > 0 &&
                                    ListaProcesoElectoral.map((p) => (
                                        <option key={p.codigo} value={p.codigo}>
                                            {p.nombre}
                                        </option>
                                    ))}
                            </select>
                        </>
                    )}
                    <div className='flex items-center gap-3 mb-3 '>
                        <div id='captchaLoad' className='inline-block'></div>
                        <ReloadIcon width={25} height={25} className='inline-block cursor-pointer' onClick={reloadCaptcha} />
                    </div>
                    Código de verificación
                    <Input
                        value={captcha}
                        type='captcha'
                        onChange={handleCaptcha}
                        placeholder='Código de verificación'
                        classInput='w-full h-12 mb-3'
                        maxLength={7}
                    />
                    <div className='inline-flex mt-2'></div>
                    <div className='gap-2 grid-cols-2 content-around text-center'>
                        <Button color='red' title='Ingresar' className='w-[300px] mx-auto' onClick={performLogin} />
                    </div>
                </CardShadow>
            </div>
            <Modal closeDisabled={true} isOpen={viewModal === VIEWS_MODAL.error && isOpenModal} onClose={CloseModal}>
                <Confirm error title='Error' onConfirm={CloseModal} message={errorMessage} onCancel={CloseModal} />
            </Modal>
        </LayoutPageLogin>
    )
}
export default Verificar
