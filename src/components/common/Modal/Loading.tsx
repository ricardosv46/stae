import { LoadingSpin } from '@components/icons'

interface LoadingProps {
    message: string
}

const Loading = ({ message }: LoadingProps) => {
    return (
        <>
            <LoadingSpin className='animate-spin h-10 w-10 text-op-blue-1' />
            <p className='text-white leading-normal text-6xl'>{message}</p>
        </>
    )
}

export { Loading }
