import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '../../lib/utils'
import { Button, buttonVariants } from '../ui/button'
import { Link, NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export default function NavBar() {
    const location = useLocation()
    const pathSegments = location.pathname.split('/').filter(Boolean)
    const lastPath = pathSegments[pathSegments.length - 1] ?? ''

    return (
        <>
            <MobileNav />
            <nav className='sticky top-0 z-50 hidden items-center justify-between p-2 px-4 backdrop-blur-md md:flex md:px-4 lg:px-32 xl:px-64'>
                <Link to='/' className='flex items-center'>
                    <img src='/elect_logo_green.png' alt='logo' width={1418} height={501} className='w-[7rem]' />
                </Link>

                <div className='flex flex-row gap-4 items-center'>
                    <div className='group/home'>
                        <NavLink
                            to='/'
                            className='rounded-md p-2 px-3 text-sm text-gray-300'
                        >
                            Home
                        </NavLink>
                        <div
                            className={cn(
                                'mx-auto h-0.5 w-10 rounded bg-primary opacity-0 transition-opacity duration-500 group-hover/home:opacity-100 ',
                                { 'opacity-100': lastPath === '' },
                            )}
                        />
                    </div>

                    <div className='group/about'>
                        <NavLink
                            to='/#services'
                            className='rounded-md p-2 px-3 text-sm text-gray-300'
                        >
                            Services
                        </NavLink>
                        <div
                            className={cn(
                                'mx-auto h-0.5 w-10 rounded bg-primary opacity-0 transition-opacity duration-500 group-hover/about:opacity-100 ',
                                { 'opacity-100': lastPath === 'about' },
                            )}
                        />
                    </div>

                    <div className='group/services'>
                        <NavLink
                            to='/admin'
                            className='rounded-md p-2 px-3 text-sm text-gray-300'
                        >
                           Admin
                        </NavLink>

                        <div className='mx-auto h-0.5 w-10 rounded bg-primary opacity-0 transition-opacity duration-500 group-hover/services:opacity-100 ' />
                    </div>

                    <div className='group/services'>
                        <NavLink
                            to='/vote'
                            className='rounded-md p-2 px-3 text-sm text-gray-300'
                        >
                            Voter
                        </NavLink>

                        <div className='mx-auto h-0.5 w-10 rounded bg-primary opacity-0 transition-opacity duration-500 group-hover/services:opacity-100 ' />
                    </div>

                </div>

                <div className='flex items-center space-x-2 pl-4'>
                    <Link
                        to='/flow/login'
                        className={cn(
                            buttonVariants({
                                variant: 'link',
                            }),
                            'text-sm font-bold hover:no-underline',
                        )}
                    >
                        Login
                    </Link>
                </div>
            </nav>
        </>
    )
}

const humbugerIcon = {
    open: <Menu size={30} />,
    close: <X size={30} />,
} as const

function MobileNav() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className='sticky top-0 z-50 flex h-[50px] flex-col items-center shadow-sm md:hidden'>
            <div
                className={cn(
                    'flex w-full items-center justify-between p-2 px-4 shadow backdrop-blur-lg',
                    { 'backdrop-blur-0': isOpen },
                )}
            >
                <Link to='/'>
                    <Link to='/' className='flex items-center'>
                        <h1 className='text-2xl font-bold text-primary-950'>Elect</h1>
                    </Link>
                </Link>

                <button onClick={() => setIsOpen((prev) => !prev)} className=''>
                    {isOpen ? humbugerIcon.close : humbugerIcon.open}
                </button>
            </div>

            {isOpen && (
                <div className='w-full space-y-6 bg-white px-4 pb-6 pt-4 shadow backdrop-blur-lg'>
                    <ul className='flex flex-col items-center justify-center gap-2 text-sm'>
                        <Link
                            to='#'
                            className='rounded-md p-2 text-gray-700 hover:bg-primary-50'
                        >
                            About
                        </Link>
                        <Link
                            to='#'
                            className='rounded-md p-2 text-gray-700 hover:bg-primary-50'
                        >
                            FAQ
                        </Link>
                        <Link
                            to='#'
                            className='rounded-md p-2 text-gray-700 hover:bg-primary-50'
                        >
                            Reviews
                        </Link>
                        <Link
                            to='#'
                            className='rounded-md p-2 text-gray-700 hover:bg-primary-50'
                        >
                            For Writers
                        </Link>
                    </ul>

                    <div className='flex flex-col space-y-2'>
                        <Button variant='secondary' className='text-primary-700'>
                            Log in
                        </Button>
                        <Button className='text-gray-200'>Sign Up</Button>
                    </div>
                </div>
            )}
        </nav>
    )
}
