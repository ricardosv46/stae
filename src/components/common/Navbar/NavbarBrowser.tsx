import { ChromeIcon, FirefoxIcon } from '@components/icons'

const NavbarBrowser = () => {
    return (
        <div className='flex items-center mt-6 justify-center'>
            <div className='text-blue text-xs flex-col md:flex-row justify-center text-center flex gap-6 items-center'>
                <p>Navegadores recomendados:</p>
                <div className='flex gap-8 md:gap-6'>
                    <div className='flex gap-4 items-center'>
                        <ChromeIcon />
                        <p>Google Chrome</p>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <FirefoxIcon />
                        <p>Mozilla Firefox</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export { NavbarBrowser }
