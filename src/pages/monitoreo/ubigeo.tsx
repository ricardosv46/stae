import { LayoutPage } from '@components/common'
import SelectLib from '@components/common/Select/SelectLib'
import { CheckIcon, WarningIcon } from '@components/icons'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })
import { ApexOptions } from 'apexcharts'
import MesaTransmitidas from '@modules/monitoreo/components/MesasTransmitidas'
import MesasPendientesTransmision from '@modules/monitoreo/components/MesasPendientesTransmision'

const Ubigeo = () => {
    const [odpeOptions, SetOdpeOptions] = useState<any[]>([])
    const [departamentoOptions, SetDepartamentoOptions] = useState<any[]>([])
    const [provinciaOptions, SetProvinciaOptions] = useState<any[]>([])
    const [distritoOptions, SetDistritoOptions] = useState<any[]>([])
    const [localVotacionOptions, SetLocalVotacionOptions] = useState<any[]>([])

    const [typeOfView, setTypeOfView] = useState<any>('1')

    const [filtrosMonitoreo, setValues] = useState<any>({
        selectedOdpe: '',
        selectedDepartamento: '',
        selectedProvincia: '',
        selectedDistrito: '',
        selectedLocalVotacion: ''
    })

    const handleOdpeChange = () => {}

    const handleDepartamentoChange = () => {}
    const handleProvinciaChange = () => {}
    const handleDistritoChange = () => {}
    const handleLocalVotacionChange = () => {}

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        // Solo establece isClient a true en el lado del cliente
        setIsClient(true)
    }, [])

    const series = [36.95, 63.05] // Valores para transmitidas y pendientes

    const options: ApexOptions = {
        chart: {
            type: 'pie'
        },
        labels: ['Transmitidas', 'Pendientes'],
        colors: ['#1E3A8A', '#60A5FA'],
        legend: {
            position: 'bottom',
            labels: {
                colors: ['#000'],
                useSeriesColors: true
            }
        },
        dataLabels: {
            enabled: true,
            formatter: (val: any) => `${val.toFixed(2)}%`
        },
        tooltip: {
            y: {
                formatter: (val) => `${val}%`
            }
        }
    }

    return (
        <LayoutPage operator='OPERADORADM' section='Monitoreo de transmisión por ubigeo'>
            <section className=''>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-5'>
                    <div className='flex items-center space-x-2'>
                        <label className='text-gray-700 text-sm font-medium'>ODPE:</label>
                        <div className='w-full'>
                            <SelectLib
                                id='odpe'
                                label=''
                                placeHolder='Todos'
                                options={odpeOptions} // Opciones específicas para ODPE
                                optionChange={handleOdpeChange}
                                value={filtrosMonitoreo.selectedOdpe}
                                className='bg-gray-50 border border-blue-300 w-full text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 p-2.5'
                            />
                        </div>
                    </div>

                    <div className='flex items-center space-x-2'>
                        <label className='text-gray-700 text-sm font-medium'>Departamento:</label>
                        <div className='w-full'>
                            <SelectLib
                                id='departamento'
                                label=''
                                placeHolder='Seleccione'
                                options={departamentoOptions} // Opciones específicas para Departamento
                                optionChange={handleDepartamentoChange}
                                value={filtrosMonitoreo.selectedDepartamento}
                                className='bg-gray-50 border border-blue-300 w-full text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 p-2.5'
                            />
                        </div>
                    </div>

                    <div className='flex items-center space-x-2'>
                        <label className='text-gray-700 text-sm font-medium'>Provincia:</label>
                        <div className='w-full'>
                            <SelectLib
                                id='provincia'
                                label=''
                                placeHolder='Seleccione'
                                options={provinciaOptions} // Opciones específicas para Provincia
                                optionChange={handleProvinciaChange}
                                value={filtrosMonitoreo.selectedProvincia}
                                className='bg-gray-50 border border-blue-300 w-full text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 p-2.5'
                            />
                        </div>
                    </div>

                    <div className='flex items-center space-x-2'>
                        <label className='text-gray-700 text-sm font-medium'>Distrito:</label>
                        <div className='w-full'>
                            <SelectLib
                                id='distrito'
                                label=''
                                placeHolder='Seleccione'
                                options={distritoOptions} // Opciones específicas para Distrito
                                optionChange={handleDistritoChange}
                                value={filtrosMonitoreo.selectedDistrito}
                                className='bg-gray-50 border border-blue-300 w-full text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 p-2.5'
                            />
                        </div>
                    </div>

                    <div className='flex items-center space-x-2'>
                        <label className='text-gray-700 text-sm font-medium'>Local de votación:</label>
                        <div className='w-full'>
                            <SelectLib
                                id='localVotacion'
                                label=''
                                placeHolder='Seleccione'
                                options={localVotacionOptions} // Opciones específicas para Local de votación
                                optionChange={handleLocalVotacionChange}
                                value={filtrosMonitoreo.selectedLocalVotacion}
                                className='bg-gray-50 border border-blue-300 w-full text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 p-2.5'
                            />
                        </div>
                    </div>
                    <div className='flex flex-wrap gap-4 justify-end'>
                        <div className='flex items-center text-white text-sm font-semibold bg-blue'>
                            <div className='px-2'>
                                <CheckIcon width={32} height={32} />
                            </div>
                            <div
                                onClick={() => {
                                    setTypeOfView('2')
                                }}
                                className='display-inline cursor-pointer'>
                                <p className='text-white text-center font-bold p-4 bg-[#0073cf]'>Ver mesas transmitidas</p>
                            </div>
                        </div>

                        <div className='flex items-center text-white text-sm font-semibold bg-blue'>
                            <div className='px-2'>
                                <WarningIcon width={32} height={32} />
                            </div>
                            <div
                                onClick={() => {
                                    setTypeOfView('3')
                                }}
                                className='display-inline cursor-pointer'>
                                <p className='text-white text-center font-bold p-4 bg-[#0073cf]'>Ver mesas pendientes</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mx-auto p-4'>
                    <h2 className='text-center text-blue-700 font-bold text-xl mb-4 text-blue'>ELECCIONES GENERALES 2026</h2>
                    <div className='border-t border-gray-200 my-4'></div>
                    <div className='overflow-x-auto'>
                        <table className='w-full border border-gray text-center'>
                            <thead className='bg-gray-100'>
                                <tr>
                                    <th className='py-2 px-4 text-sm font-semibold text-gray-700 border border-gray-300'>Total de mesas</th>
                                    <th className='py-2 px-4 text-sm font-semibold text-gray-700 border border-gray-300'>
                                        Electores hábiles
                                    </th>
                                    <th className='py-2 px-4 text-sm font-semibold text-gray-700 border border-gray-300'>
                                        Participación ciudadana
                                    </th>
                                    <th className='py-2 px-4 text-sm font-semibold text-gray-700 border border-gray-300'>
                                        Participación ciudadana (%)
                                    </th>
                                    <th className='py-2 px-4 text-sm font-semibold text-gray-700 border border-gray-300'>
                                        Mesas transmitidas (*)
                                    </th>
                                    <th className='py-2 px-4 text-sm font-semibold text-gray-700 border border-gray-300'>
                                        Mesas transmitidas (%)
                                    </th>
                                    <th className='py-2 px-4 text-sm font-semibold text-gray-700 border border-gray-300'>
                                        Mesas pendientes
                                    </th>
                                    <th className='py-2 px-4 text-sm font-semibold text-gray-700 border border-gray-300'>
                                        Mesas pendientes (%)
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='bg-sky-50'>
                                    <td className='py-3 px-4 text-lg font-bold text-gray-800 border border-gray-300'>18,002</td>
                                    <td className='py-3 px-4 text-lg font-bold text-gray-800 border border-gray-300'>4'497,436</td>
                                    <td className='py-3 px-4 text-lg font-bold text-gray-800 border border-gray-300'>1'661,334</td>
                                    <td className='py-3 px-4 text-lg font-bold text-gray-800 border border-gray-300'>36.94%</td>
                                    <td className='py-3 px-4 text-lg font-bold text-gray-800 border border-gray-300'>6,651</td>
                                    <td className='py-3 px-4 text-lg font-bold text-gray-800 border border-gray-300'>36.95%</td>
                                    <td className='py-3 px-4 text-lg font-bold text-gray-800 border border-gray-300'>11,351</td>
                                    <td className='py-3 px-4 text-lg font-bold text-gray-800 border border-gray-300'>63.05%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p className='text-sm text-gray-600 mt-2'>
                        (*) El valor corresponde a la transmisión de las actas de Presidente y vicepresidentes, que es la primera en ser
                        transmitida.
                    </p>
                </div>
                {typeOfView == '1' && (
                    <div>
                        <div className='mx-auto p-4 flex flex-col md:flex-row gap-8'>
                            <div className='w-full md:w-1/2'>
                                <h3 className='text-center text-lg font-semibold text-gray-800 mb-2'>
                                    AVANCE DE TRANSMISIÓN DE LAS ACTAS DE CADA ELECCIÓN
                                </h3>
                                <p className='text-center text-sm text-gray-600 mb-4'>(Cada mesa tiene 1 acta por elección)</p>

                                <table className='w-full border border-gray-300 text-center'>
                                    <thead className='bg-gray-100'>
                                        <tr>
                                            <th className='py-2 px-4 text-sm font-semibold text-gray-700 border border-gray-300'>
                                                Elección
                                            </th>
                                            <th className='py-2 px-4 text-sm font-semibold text-gray-700 border border-gray-300'>
                                                Actas transmitidas
                                            </th>
                                            <th className='py-2 px-4 text-sm font-semibold text-gray-700 border border-gray-300'>
                                                Actas pendientes
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='py-3 px-4 text-gray-800 border border-gray-300'>Presidente y vicepresidentes</td>
                                            <td className='py-3 px-4 text-gray-800 border border-gray-300'>6,651</td>
                                            <td className='py-3 px-4 text-gray-800 border border-gray-300'>11,351</td>
                                        </tr>
                                        <tr className='bg-gray-50'>
                                            <td className='py-3 px-4 text-gray-800 border border-gray-300'>Diputados</td>
                                            <td className='py-3 px-4 text-gray-800 border border-gray-300'>4,200</td>
                                            <td className='py-3 px-4 text-gray-800 border border-gray-300'>13,802</td>
                                        </tr>
                                        <tr>
                                            <td className='py-3 px-4 text-gray-800 border border-gray-300'>Senadores (Distrito único)</td>
                                            <td className='py-3 px-4 text-gray-800 border border-gray-300'>4,200</td>
                                            <td className='py-3 px-4 text-gray-800 border border-gray-300'>13,802</td>
                                        </tr>
                                        <tr className='bg-gray-50'>
                                            <td className='py-3 px-4 text-gray-800 border border-gray-300'>
                                                Senadores (Distrito múltiple)
                                            </td>
                                            <td className='py-3 px-4 text-gray-800 border border-gray-300'>4,200</td>
                                            <td className='py-3 px-4 text-gray-800 border border-gray-300'>13,802</td>
                                        </tr>
                                        <tr>
                                            <td className='py-3 px-4 text-gray-800 border border-gray-300'>Parlamento andino</td>
                                            <td className='py-3 px-4 text-gray-800 border border-gray-300'>4,200</td>
                                            <td className='py-3 px-4 text-gray-800 border border-gray-300'>13,802</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className='w-full md:w-1/2 flex flex-col items-center'>
                                <h4 className='text-center text-lg font-semibold text-blue-700 mb-4'>
                                    Avance de Transmisión de mesas (*)
                                    <br /> Elección Presidente y vicepresidentes
                                </h4>
                                {isClient && <Chart options={options} series={series} type='pie' width='400' />}
                            </div>
                        </div>
                    </div>
                )}
                {typeOfView == '2' && <MesaTransmitidas />}
                {typeOfView == '3' && <MesasPendientesTransmision />}
            </section>
        </LayoutPage>
    )
}

export default Ubigeo
