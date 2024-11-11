import { ChromeIcon, FirefoxIcon } from '@components/icons'

const NavbarBrowser = () => {
    return (
        <div className='items-center mt-6 justify-center'>
            <div className='text-blue text-sm text-center'>Navegadores recomentados</div>
            <div className='flex mt-2'>
                <div className='text-blue text-xs flex-col md:flex-row justify-center text-center flex gap-2 items-center'>
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
        </div>
    )
}
export { NavbarBrowser }
