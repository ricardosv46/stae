import { generatedTotalPages } from '@modules/lib'
import { Dispatch } from 'react'

interface State {
    pagina: number
    numeroPagina: number
}

interface IProps {
    state: State
    setState: Dispatch<React.SetStateAction<State>>
    nTotal: number
}

const Paginator = ({ state, setState, nTotal }: IProps) => {
    const paginas = generatedTotalPages(nTotal, state.numeroPagina) as any

    const { pagina, numeroPagina } = state

    const decrement = () => {
        if (pagina === 1) return
        setState({ ...state, pagina: pagina - 1 })
    }

    const increment = () => {
        if (paginas.length === pagina) return
        setState({ ...state, pagina: pagina + 1 })
    }

    const changePagina = (number: number) => {
        setState({ ...state, pagina: number })
    }

    const disableLeft = pagina === 1 || paginas.length === 0

    const disableRight = pagina === paginas.length || paginas.length === 0

    return (
        <div className='flex justify-center gap-3 items-center'>
            <button
                disabled={disableLeft}
                className={`${
                    disableLeft ? 'opacity-50 ' : ''
                } flex items-center justify-center  w-6 h-6 text-white bg-blue rounded-full  `}
                onClick={() => changePagina(1)}>
                {'<<'}
            </button>

            <button
                disabled={disableLeft}
                className={`${disableLeft ? 'opacity-50 ' : ''} flex items-center justify-center  w-6 h-6 text-white bg-blue rounded-full `}
                onClick={decrement}>
                {'<'}
            </button>
            <p className='flex items-center justify-center  text-garden-option1'>
                Página {paginas.length === 0 ? 0 : pagina} de {paginas.length}
            </p>

            <button
                disabled={disableRight}
                className={`${
                    disableRight ? 'opacity-50 ' : ''
                } flex items-center justify-center   w-6 h-6 text-white bg-blue rounded-full `}
                onClick={increment}>
                {'>'}
            </button>

            <button
                disabled={disableRight}
                className={`${
                    disableRight ? 'opacity-50 ' : ''
                } flex items-center justify-center   w-6 h-6 text-white bg-blue rounded-full `}
                onClick={() => changePagina(paginas.length)}>
                {'>>'}
            </button>
        </div>
    )
}

export default Paginator
