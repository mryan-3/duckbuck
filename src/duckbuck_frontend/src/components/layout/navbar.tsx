import { useState } from 'react'
import { Menu, Twitter, X } from 'lucide-react'
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
            <nav className='sticky top-0 z-50 hidden items-center justify-between mt-1 p-2 px-4 backdrop-blur-md md:flex md:px-4 lg:px-32 xl:px-64'>
                <Link to='/' className='flex items-center gap-4'>
                    <img src='/duckbuck2' alt='logo' width={512} height={512} className='w-[60px] rounded-full' />
                    <span className='font-bold text-xl'> DuckBuck</span>
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
                            AirDrops
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
                            Features
                        </NavLink>

                        <div className='mx-auto h-0.5 w-10 rounded bg-primary opacity-0 transition-opacity duration-500 group-hover/services:opacity-100 ' />
                    </div>

                    <div className='group/services'>
                        <NavLink
                            to='/vote'
                            className='rounded-md p-2 px-3 text-sm text-gray-300'
                        >
                            Whitepaper
                        </NavLink>


                        <div className='mx-auto h-0.5 w-10 rounded bg-primary opacity-0 transition-opacity duration-500 group-hover/services:opacity-100 ' />
                    </div>

                </div>
                <div className='flex items-center gap-6'>
                <a href='https://twitter.com' target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#e9e2f5" fill="none">
                        <path d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    </a>
                    <a href='https://telegram.com'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#e9e2f5" fill="none">
                        <path d="M11.9854 15.4083L15.2268 19.0936C16.4277 20.4589 17.0282 21.1416 17.6567 20.9754C18.2852 20.8092 18.5008 19.9108 18.9318 18.1138L21.3229 8.1459C21.9868 5.37832 22.3187 3.99454 21.5808 3.312C20.843 2.62947 19.564 3.13725 17.0061 4.15282L5.13876 8.86449C3.09293 9.67674 2.07001 10.0829 2.00507 10.7808C1.99842 10.8522 1.99831 10.9241 2.00474 10.9955C2.06754 11.6937 3.08921 12.1033 5.13255 12.9223C6.05838 13.2934 6.5213 13.479 6.8532 13.8344C6.89052 13.8743 6.9264 13.9157 6.96078 13.9584C7.26658 14.3384 7.39709 14.8371 7.65808 15.8344L8.14653 17.701C8.4005 18.6715 8.52749 19.1568 8.86008 19.223C9.19267 19.2891 9.48225 18.8867 10.0614 18.0819L11.9854 15.4083ZM11.9854 15.4083L11.6676 15.0771C11.3059 14.7001 11.1251 14.5117 11.1251 14.2775C11.1251 14.0433 11.3059 13.8548 11.6676 13.4778L15.2406 9.75409" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    </a>
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
                        <h1 className='text-2xl font-bold text-primary-950'>DuckBuck</h1>
                    </Link>
                </Link>

                <button onClick={() => setIsOpen((prev) => !prev)} className=''>
                    {isOpen ? humbugerIcon.close : humbugerIcon.open}
                </button>
            </div>

            {isOpen && (
                <div className='w-full space-y-6 px-4 pb-6 pt-4 shadow backdrop-blur-lg'>
                    <ul className='flex flex-col items-center justify-center gap-2 text-sm'>
                        <Link
                            to='#'
                            className='rounded-md p-2 hover:bg-primary-50'
                        >
                         Home
                        </Link>
                        <Link
                            to='#'
                            className='rounded-md p-2 hover:bg-primary-50'
                        >
                            AirDrops
                        </Link>
                        <Link
                            to='#'
                            className='rounded-md p-2 hover:bg-primary-50'
                        >
                            Features
                        </Link>
                        <Link
                            to='#'
                            className='rounded-md p-2  hover:bg-primary-50'
                        >
                            Whitepaper
                        </Link>
                    </ul>

                </div>
            )}
        </nav>
    )
}
