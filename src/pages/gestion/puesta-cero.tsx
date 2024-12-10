import { LayoutPage } from '@components/common'
import BigButtonIcon from '@components/common/Button/BigButtonIcon'
import { ChipGreenText } from '@components/common/Chip/ChipGreenText'
import { ArrowLoadingIcon } from '@components/icons/ArrowLoadingIcon'
import { useModalLoading } from '@store/modal/modalLoading'
import { useModalPassword } from '@store/modal/modalPassword'
import { delay } from '@utils/delay'
import { useState } from 'react'

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

    return (
        <LayoutPage operator='OPERADORADM' section='Puesta a Cero'>
            <ChipGreenText text='Se realizó el cambio' status={notify} />

            <section className='w-full flex justify-center items-center  relative '>
                <BigButtonIcon onClick={handlePuestaCero} icon={ArrowLoadingIcon} title='Ejecutar Puesta a cero' />
            </section>

            <section className='w-full mt-5'>
                <h2 className='text-2xl font-bold text-blue'>Historial de puesta a cero</h2>
                <hr className='border-gray mb-6' />
                {data && (
                    <table className='min-w-full text-sm'>
                        <thead className=''>
                            <tr>
                                <th className='px-6 py-3.5 text-left  font-medium border-gray  border uppercase '>N°</th>
                                <th className='px-6 py-3.5 text-left  font-medium  border-gray  border uppercase '>Usuario</th>
                                <th className='px-6 py-3.5 text-left  font-medium  border-gray  border uppercase'>Acción</th>
                                <th className='px-6 py-3.5 text-left  font-medium border-gray  border uppercase '>Fecha</th>
                            </tr>
                        </thead>
                        <tbody className=' '>
                            {history.map((item, index) => (
                                <tr key={item.id} className={index % 2 === 1 ? 'bg-extra-light-skyblue' : 'bg-white'}>
                                    <td className='px-6 py-3.5 whitespace-nowrap  border-gray  border'>{item.id}</td>
                                    <td className='px-6 py-3.5 whitespace-nowrap  border-gray  border'>{item.user}</td>
                                    <td className='px-6 py-3.5 whitespace-nowrap  border-gray  border'>{item.action}</td>
                                    <td className='px-6 py-3.5 whitespace-nowrap  border-gray  border'>{item.date}</td>
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
