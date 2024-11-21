import { LayoutPage } from '@components/common'
import BigButtonIcon from '@components/common/Button/BigButtonIcon'
import { ChipGreenText } from '@components/common/Chip/ChipGreenText'
import { ArrowLoadingIcon } from '@components/icons/ArrowLoadingIcon'

const PuestaCero = () => {
    return (
        <LayoutPage operator='OPERADORADM' section='Puesta a Cero'>
            <ChipGreenText text='Se realizó el cambio' />
            <section className='w-full max-w-[1200px] mx-auto justify-center items-center flex flex-col gap-10 relative '>
                <BigButtonIcon href='admin/listado' icon={ArrowLoadingIcon} title='Ejecutar Puesta a cero' />
            </section>
        </LayoutPage>
    )
}

export default PuestaCero
