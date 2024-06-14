import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '../../lib/utils'
import { Link, NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { TelegramIcon, TwitterIcon } from '../icons'

export default function NavBar() {
    const location = useLocation()
    const pathSegments = location.pathname.split('/').filter(Boolean)
    const lastPath = pathSegments[pathSegments.length - 1] ?? ''

    return (
        <>
            <MobileNav />
            <nav className='fixed left-0 right-0 top-3 z-50 mx-auto mt-2 hidden w-[80%] items-center justify-between rounded-full border-2 border-purple-600/20 bg-purple-900/30 p-2 px-4 backdrop-blur-md md:flex'>
                <Link to='/' className='flex items-center gap-4'>
                    <img
                        src='/duckbuck2.jpg'
                        alt='logo'
                        width={512}
                        height={512}
                        className='w-[60px] rounded-full'
                    />
                    <span className='text-xl font-bold'> DuckBuck</span>
                </Link>

                <div className='flex flex-row items-center gap-4'>
                    <div className='group/home'>
                        <NavLink
                            to='/'
                            className='rounded-md p-2 px-3 text-sm font-semibold text-gray-300'
                        >
                            Home
                        </NavLink>
                        <div
                            className={cn(
                                'mx-auto h-0.5 w-10 rounded bg-primary opacity-0 transition-opacity duration-500 group-hover/home:opacity-100',
                                { 'opacity-100': lastPath === '' }
                            )}
                        />
                    </div>

                    <div className='group/about'>
                        <a
                            href='/#airdrop'
                            className='rounded-md p-2 px-3 text-sm font-semibold text-gray-300'
                        >
                            AirDrops
                        </a>
                        <div
                            className={cn(
                                'mx-auto h-0.5 w-10 rounded bg-primary opacity-0 transition-opacity duration-500 group-hover/about:opacity-100',
                                { 'opacity-100': lastPath === 'about' }
                            )}
                        />
                    </div>

                    <div className='group/services'>
                        <NavLink
                            to='/whitepaper'
                            className='rounded-md p-2 px-3 text-sm font-semibold text-gray-300'
                        >
                            Whitepaper
                        </NavLink>

                        <div
                            className={cn(
                                'mx-auto h-0.5 w-10 rounded bg-primary opacity-0 transition-opacity duration-500 group-hover/home:opacity-100',
                                { 'opacity-100': lastPath === 'whitepaper' }
                            )}
                        />
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <a
                        href='https://x.com/THEDUCKBUCK'
                        target='_blank'
                        className='flex items-center justify-center rounded-full bg-purple-900/50 p-2'
                    >
                        <TwitterIcon />
                    </a>
                    <a
                        href=' https://t.me/+yn1RoXfbJO0xOGM0'
                        className='flex items-center justify-center rounded-full bg-purple-900/50 p-2'
                        target='_blank'
                    >
                        <TelegramIcon />
                    </a>
                </div>
            </nav>
        </>
    )
}

const humbugerIcon = {
    open: <Menu size={30} />,
    close: <X size={30} />
} as const

function MobileNav() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className='sticky top-0 z-50 flex h-[50px] flex-col items-center shadow-sm md:hidden'>
            <div
                className={cn(
                    'flex w-full items-center justify-between p-2 px-4 shadow backdrop-blur-lg',
                    { 'backdrop-blur-0': isOpen }
                )}
            >
               <Link to='/' className='flex items-center gap-4'>
                    <img
                        src='/duckbuck2.jpg'
                        alt='logo'
                        width={512}
                        height={512}
                        className='w-[60px] rounded-full'
                    />
                    <span className='text-xl font-bold'> DuckBuck</span>
                </Link>

                <button onClick={() => setIsOpen((prev) => !prev)} className=''>
                    {isOpen ? humbugerIcon.close : humbugerIcon.open}
                </button>
            </div>

            {isOpen && (
                <div className='w-full space-y-6 px-4 pb-6 pt-4 shadow backdrop-blur-lg'>
                    <ul className='flex flex-col items-center justify-center gap-2 text-sm'>
                        <Link
                            to='/'
                            className='hover:bg-primary-50 rounded-md p-2'
                        >
                            Home
                        </Link>
                        <a
                            href='/#airdrop'
                            className='hover:bg-primary-50 rounded-md p-2'
                        >
                            AirDrops
                        </a>
                        <Link
                            to='/whitepaper'
                            className='hover:bg-primary-50 rounded-md p-2'
                        >
                            Whitepaper
                        </Link>
                    </ul>
                </div>
            )}
        </nav>
    )
}
