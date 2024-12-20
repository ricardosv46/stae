import BigButtonIcon from '@components/common/Button/BigButtonIcon'
import { ArrowLoadingIcon } from '@components/icons/ArrowLoadingIcon'
import { ReporteCheckIcon } from '@components/icons/ReportePuestaCeroIcon'
import React from 'react'

export const LogsProcess = () => {
    return (
        <div className='p-5'>
            <section className='w-full flex justify-center items-center  relative text-white gap-7'>
                <BigButtonIcon onClick={() => {}} icon={ReporteCheckIcon} title='Reprocesar' />
                <BigButtonIcon onClick={() => {}} icon={ArrowLoadingIcon} title='Puesta a cero PKI' />
            </section>
        </div>
    )
}
