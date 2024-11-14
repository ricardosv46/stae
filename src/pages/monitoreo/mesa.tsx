import { LayoutPage } from '@components/common'
import { useState } from 'react'
import { CheckIcon, SearchIcon } from '@components/icons' // Asegúrate de tener el icono CheckIcon y SearchIcon

const Mesa = () => {
    const [typeOfView, setTypeOfView] = useState('1') // Ejemplo de control de vista

    return (
        <LayoutPage operator='OPERADORADM' section='Monitoreo de transmisión por mesa'>
            <section className='mt-4 mx-auto p-6 bg-white rounded-md shadow-sm'>
                <h2 className='text-xl font-bold text-blue mb-4'>CONSULTA POR MESA DE SUFRAGIO</h2>

                <div className='flex items-center gap-2 mb-6'>
                    <input
                        type='text'
                        placeholder='Ingrese el número de mesa'
                        className='border border-gray p-2 rounded-l-md w-full max-w-xs'
                    />
                    <div className='flex items-center text-white text-sm font-semibold bg-blue w-52'>
                        <div className='px-2'>
                            <SearchIcon width={32} height={32} />
                        </div>
                        <div className='display-inline cursor-pointer'>
                            <p className='text-white text-center font-bold p-3 bg-[#0073cf] w-52'>Consultar</p>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                    <div>
                        <h3 className='text-center font-semibold text-blue mb-2'>MESA 000007</h3>
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
                                <tr className='border-b border-gray'>
                                    <td className='py-2 px-4 font-semibold text-gray-700 text-left'>Local de votación</td>
                                    <td className='py-2 px-4 text-gray-800 text-left'>IE 0025 San Martín de Porres</td>
                                </tr>
                                <tr className='border-b border-gray bg-gray'>
                                    <td className='py-2 px-4 font-semibold text-gray-700 text-left'>Personeros</td>
                                    <td className='py-2 px-4 text-gray-800 text-left'>3</td>
                                </tr>
                                <tr className='border-b border-gray'>
                                    <td className='py-2 px-4 font-semibold text-gray-700 text-left'>Convenios EREP (+)</td>
                                    <td className='py-2 px-4 text-gray-800 text-left'>6</td>
                                </tr>
                                <tr className='border-b border-gray bg-gray'>
                                    <td className='py-2 px-4 font-semibold text-gray-700 text-left'>
                                        Acta de entrega y uso de certificados digitales (**)
                                    </td>
                                    <td className='py-2 px-4 text-gray-800 text-left'>0</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <h3 className='text-center font-semibold text-blue mb-2'>TRANSMISIÓN DE ACTAS</h3>
                        <table className='w-full border border-gray text-center'>
                            <thead className='bg-gray-500'>
                                <tr>
                                    <th className='py-2 px-4 text-sm font-semibold text-gray-700 border border-gray'>Elección</th>
                                    <th className='py-2 px-4 text-sm font-semibold text-gray-700 border border-gray'>Transmitido</th>
                                    <th className='py-2 px-4 text-sm font-semibold text-gray-700 border border-gray'>Pendiente</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='py-2 px-4 text-gray-800 border border-gray'>Presidente y vicepresidentes</td>
                                    <td className='py-2 px-4 text-green font-bold border border-gray'>✔</td>
                                    <td className='py-2 px-4 text-red font-bold border border-gray'>✘</td>
                                </tr>
                                <tr className='bg-sky-50'>
                                    <td className='py-2 px-4 text-gray-800 border border-gray'>Diputados</td>
                                    <td className='py-2 px-4 text-red font-bold border border-gray'>✘</td>
                                    <td className='py-2 px-4 text-red font-bold border border-gray'>✘</td>
                                </tr>
                                <tr>
                                    <td className='py-2 px-4 text-gray-800 border border-gray'>Senadores (Distrito único)</td>
                                    <td className='py-2 px-4 text-red font-bold border border-gray'>✘</td>
                                    <td className='py-2 px-4 text-red font-bold border border-gray'>✘</td>
                                </tr>
                                <tr className='bg-sky-50'>
                                    <td className='py-2 px-4 text-gray-800 border border-gray'>Senadores (Distrito múltiple)</td>
                                    <td className='py-2 px-4 text-red font-bold border border-gray'>✘</td>
                                    <td className='py-2 px-4 text-red font-bold border border-gray'>✘</td>
                                </tr>
                                <tr>
                                    <td className='py-2 px-4 text-gray-800 border border-gray'>Parlamento andino</td>
                                    <td className='py-2 px-4 text-red font-bold border border-gray'>✘</td>
                                    <td className='py-2 px-4 text-red font-bold border border-gray'>✘</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <h3 className='text-center font-semibold text-blue mb-2'>TRANSMISIÓN ARCHIVOS</h3>
                        <table className='w-full border border-gray text-center'>
                            <thead className='bg-gray-50'>
                                <tr>
                                    <th className='py-2 px-4 text-sm font-semibold text-gray-700 border border-gray'>Acta de escrutinio</th>
                                    <th className='py-2 px-4 text-sm font-semibold text-gray-700 border border-gray'>Puesta a cero</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='py-2 px-4 text-gray-800 border border-gray'>1</td>
                                    <td className='py-2 px-4 text-gray-800 border border-gray'>1</td>
                                </tr>
                                <tr className='bg-gray'>
                                    <td className='py-2 px-4 text-gray-800 border border-gray'>0</td>
                                    <td className='py-2 px-4 text-gray-800 border border-gray'>0</td>
                                </tr>
                                <tr>
                                    <td className='py-2 px-4 text-gray-800 border border-gray'>0</td>
                                    <td className='py-2 px-4 text-gray-800 border border-gray'>0</td>
                                </tr>
                                <tr className='bg-gray'>
                                    <td className='py-2 px-4 text-gray-800 border border-gray'>0</td>
                                    <td className='py-2 px-4 text-gray-800 border border-gray'>0</td>
                                </tr>
                                <tr>
                                    <td className='py-2 px-4 text-gray-800 border border-gray'>0</td>
                                    <td className='py-2 px-4 text-gray-800 border border-gray'>0</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-4 text-sm text-gray-600 lg:col-span-1 lg:w-1/3">
                    <p>(*) Se genera “1 Convenio EREP” por cada miembro de mesa y por cada personero registrado en mesa y se transmitirá en la primera elección procesada en la mesa de sufragio.</p>
                    <p>(**) Se genera “1 Acta de Entrega y uso de Certificados Digitales” por mesa y se transmitirá con la última elección procesada en la mesa de sufragio.</p>
                </div>
            </section>
        </LayoutPage>
    )
}

export default Mesa
