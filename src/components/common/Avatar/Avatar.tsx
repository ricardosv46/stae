import { UserProfileNew } from '@components/icons'

interface Props {
    alt: string
    src: string
    classC?: string
}
const Avatar = ({ alt, src, classC }: Props) => {
    return (
        <div className='inline-block'>
            <div className={`relative text-center w-28 h-28 overflow-hidden bg-slate-300 rounded-full ${classC} `}>
                <UserProfileNew />
            </div>
        </div>
    )
}
export { Avatar }
