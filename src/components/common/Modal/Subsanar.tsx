import { WarningIcon } from '@components/icons'
import { ReactNode } from 'react'
import { Button } from '../Button/Button'

interface ConfirmProps {
    children?: ReactNode
    onCancel: () => void
    onConfirm: () => void
    download: () => void
    isPendingSubsanar: boolean
    isPendingAprobar: boolean
}

const Subsanar = ({ onCancel, onConfirm, children, download, isPendingSubsanar, isPendingAprobar }: ConfirmProps) => {
    return (
        <div className='bg-white w-[700px]  flex-col flex items-center p-[50px]'>
            <WarningIcon />
            <p className='font-medium text-2xl leading-normal tracking-[0.151px] text-skyblue mt-[8px]'>INFORMACIÓN</p>
            {children && <div className='z-20 grid place-items-center'>{children}</div>}
            <p className='text-lg mt-[20px] text-center'>Descargue el documento Excel para que pueda validar los datos ingresados.</p>

            <Button color='darkblue' title='Descargar documento' className='mt-[20px] px-5' onClick={download} />
            <p className='text-lg mt-[20px] text-center'>
                Si los datos ingresados son correctos haga clic en <strong>Aprobar</strong>, de lo contrario modifique el documento y haga
                clic en <strong>Subsanar</strong>
            </p>
            <div className='flex text-lg font-semibold text-white w-full gap-6 justify-between mt-[20px]'>
                <Button color='blue' title='Subsanar' className='w-[200px]' disabled={isPendingSubsanar} onClick={onCancel} />

                <Button color='red' title='Aprobar' className='w-[200px]' disabled={isPendingAprobar} onClick={onConfirm} />
            </div>
        </div>
    )
}

export { Subsanar }
