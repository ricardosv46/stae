import { Modal } from '@components/common'
import Paginator from '@components/common/Paginator/Paginator'
import { useToggleModal } from '@components/hooks'
import { SearchIcon } from '@components/icons'
import React, { useState } from 'react'

enum VIEWS_MODAL {
    popUpMesaTransmitidas = 'popUpMesaTransmitidas',
    popUpMesaPendientes = 'popUpMesaPendientes'
}

// Datos de ejemplo (deberías usar tus propios datos o cargarlos dinámicamente)
const mesasData = Array.from({ length: 80 * 48 }, (_, i) => `0000${i + 1}`.slice(-5))

interface State {
    pagina: number
    numeroPagina: number
}

const MesasPendientesTransmision = () => {
    const [state, setState] = useState<State>({ pagina: 1, numeroPagina: 48 })
    const [isOpenModal, OpenModal, CloseModal, viewModal] = useToggleModal(true)
    const start = (state.pagina - 1) * state.numeroPagina
    const end = start + state.numeroPagina
    const mesasActuales = mesasData.slice(start, end)

    const viewDetail = (mesa: any) => {
        try {
            OpenModal(VIEWS_MODAL.popUpMesaTransmitidas)
        } catch (error) {}
    }

    return (
        <div className='mx-auto p-4'>
            <h3 className='text-center text-lg font-semibold text-gray-800 mb-4'>DETALLE DE MESAS PENDIENTES DE TRANSMISIÓN (*)</h3>

            <div className='flex justify-end mb-4'>
                <div className='flex'>
                    <input
                        name='numeroDeMesa'
                        type='text'
                        placeholder='Ingresa un número de mesa'
                        className='w-full p-2 bg-gray-50 border border-blue-300 w-full text-gray-900'
                        value=''
                    />
                    <button onClick={() => {}} className='bg-blue flex justify-center items-center px-4'>
                        <SearchIcon className='text-white' width={32} height={32} />
                    </button>
                </div>
            </div>

            <div className='grid grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-1'>
                {mesasActuales.map((mesa, index) => (
                    <div
                        onClick={() => {
                            viewDetail(mesa)
                        }}
                        key={index}
                        className='border border-orange-500 p-2 text-center text-blue font-medium hover:bg-orange-500 hover:text-white cursor-pointer'>
                        {mesa}
                    </div>
                ))}
            </div>

            <div className='mt-4 float-right'>
                <Paginator state={state} setState={setState} nTotal={mesasData.length} />
            </div>
            <Modal isOpen={viewModal === VIEWS_MODAL.popUpMesaTransmitidas && isOpenModal} onClose={CloseModal}>
                <div className='bg-white w-full mx-auto w-[1000px] py-10 flex flex-col items-center px-10 relative'>
                    <button
                        onClick={CloseModal}
                        className='absolute right-4 text-2xl bg-red text-white rounded-full w-6 h-6 flex items-center justify-center text-md'>
                        ×
                    </button>

                    <p className='text-blue text-1xl font-semibold text-center mb-4'>
                        DETALLE DE ACTAS PENDIENTES DE LA MESA <br />
                        <span className='text-blue text-md font-bold'>000007</span>
                    </p>

                    <div className='w-1/2 mb-8'>
                        <table className='w-full border border-gray text-center'>
                            <tbody>
                                <tr className='border-b border-gray'>
                                    <td className='py-2 px-4 font-semibold text-gray-700 text-left'>ODPE</td>
                                    <td className='py-2 px-4 text-gray-800 text-left'>Lima Este 1</td>
                                </tr>
                                <tr className='border-b border-gray bg-gray'>
                                    <td className='py-2 px-4 font-semibold text-gray-700 text-left'>Departamento</td>
                                    <td className='py-2 px-4 text-gray-800 text-left'>Lima</td>
                                </tr>
                                <tr className='border-b border-gray'>
                                    <td className='py-2 px-4 font-semibold text-gray-700 text-left'>Provincia</td>
                                    <td className='py-2 px-4 text-gray-800 text-left'>Lima</td>
                                </tr>
                                <tr className='border-b border-gray bg-gray'>
                                    <td className='py-2 px-4 font-semibold text-gray-700 text-left'>Distrito</td>
                                    <td className='py-2 px-4 text-gray-800 text-left'>Ate</td>
                                </tr>
                                <tr>
                                    <td className='py-2 px-4 font-semibold text-gray-700 text-left'>Local de votación</td>
                                    <td className='py-2 px-4 text-gray-800 text-left'>IE 0025 San Martín de Porres</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Tabla de detalles de transmisión */}
                    <div className='w-1/2'>
                        <table className='w-full border border-gray text-center'>
                            <thead className='bg-gray-100'>
                                <tr>
                                    <th className='py-2 px-4 text-sm font-semibold text-gray-700 border border-gray'>Elección</th>
                                    <th className='py-2 px-4 text-sm font-semibold text-gray-700 border border-gray'>Transmitido</th>
                                    <th className='py-2 px-4 text-sm font-semibold text-gray-700 border border-gray'>Pendiente</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='py-2 px-4 text-gray-800 border border-gray'>Presidente y vicepresidentes</td>
                                    <td className='py-2 px-4 text-green font-bold'>✔</td>
                                    <td className='py-2 px-4 text-red font-bold'>✘</td>
                                </tr>
                                <tr className='bg-sky-50'>
                                    <td className='py-2 px-4 text-gray-800 border border-gray'>Diputados</td>
                                    <td className='py-2 px-4 text-red font-bold'>✘</td>
                                    <td className='py-2 px-4 text-red font-bold'>✘</td>
                                </tr>
                                <tr>
                                    <td className='py-2 px-4 text-gray-800 border border-gray'>Senadores (Distrito único)</td>
                                    <td className='py-2 px-4 text-red font-bold'>✘</td>
                                    <td className='py-2 px-4 text-red font-bold'>✘</td>
                                </tr>
                                <tr className='bg-sky-50'>
                                    <td className='py-2 px-4 text-gray-800 border border-gray'>Senadores (Distrito múltiple)</td>
                                    <td className='py-2 px-4 text-red font-bold'>✘</td>
                                    <td className='py-2 px-4 text-red font-bold'>✘</td>
                                </tr>
                                <tr>
                                    <td className='py-2 px-4 text-gray-800 border border-gray'>Parlamento andino</td>
                                    <td className='py-2 px-4 text-red font-bold'>✘</td>
                                    <td className='py-2 px-4 text-red font-bold'>✘</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default MesasPendientesTransmision
