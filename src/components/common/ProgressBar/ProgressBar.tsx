interface Props {
    completed: number
}
const ProgressBar = ({ completed }: Props) => {
    const cls = completed + '%'
    const styles = {
        width: cls
    }
    return (
        <div className='w-[600px] h-10 bg-white inline-block'>
            <div style={styles} className={`h-10 bg-blue border-white border-2 transition-all ease-in-out duration-300`}>
                {' '}
            </div>
        </div>
    )
}
export { ProgressBar }
