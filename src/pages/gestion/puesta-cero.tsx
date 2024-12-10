import { LayoutPage } from '@components/common'
import BigButtonIcon from '@components/common/Button/BigButtonIcon'
import { ChipGreenText } from '@components/common/Chip/ChipGreenText'
import { ArrowLoadingIcon } from '@components/icons/ArrowLoadingIcon'
import { useModalPassword } from '@store/modal/modalPassword'
import { useState } from 'react'
const PuestaCero = () => {
    const { open, setPassword } = useModalPassword()

    const handlePuestaCero = () => {
        open({
            title: 'Puesta a cero',
            message: 'Para confirmar la Puesta a cero, ingrese su contraseña',
            onConfirm(password: string) {
                console.log('Contraseña ingresada:', password)
            }
        })
    }

    return (
        <LayoutPage operator='OPERADORADM' section='Puesta a Cero'>
            <ChipGreenText text='Se realizó el cambio' />

            <section className='w-full flex justify-center items-center  relative '>
                <BigButtonIcon onClick={handlePuestaCero} icon={ArrowLoadingIcon} title='Ejecutar Puesta a cero' />
            </section>

            <section className='w-full mt-5'>
                <h2 className='text-2xl font-bold text-blue'>Historial de puesta a cero</h2>
                <hr className='border-gray mb-6' />
            </section>
        </LayoutPage>
    )
}

export default PuestaCero
