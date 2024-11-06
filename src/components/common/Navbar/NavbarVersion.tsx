interface MainProp {
    className: string
}
const NavbarVersion = ({ className }: MainProp) => {
    return (
        <div className={className}>
            <p className='text-blue block'>
                VENP<span className='font-montserrat'>®</span> Versión 1.0
            </p>
            <p className='text-blue block pt-1'>ONPE 2024</p>
        </div>
    )
}
export { NavbarVersion }
