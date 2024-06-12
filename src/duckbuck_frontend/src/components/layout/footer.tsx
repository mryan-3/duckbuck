import { Separator } from '../ui/separator'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='max-w-screen py-12 flex flex-col relative mt-auto transition-colors duration-300 md:px-4 lg:px-8 xl:px-64'>
      <Separator orientation='horizontal' />
      <div className='px-8 md:px-12 lg:px-24'>
        <section className='flex w-full justify-between flex-col md:flex-row items-center'>
          <ul className='mt-4 flex items-center gap-2 text-sm  text-slate-400'>
            <Link
              to='/'
              className='mb-2 text-xl underline-offset-2 uppercase hover:text-primary hover:underline'
            >
              Home
            </Link>
            <Link
              to='/about'
              className='mb-2 text-xl underline-offset-2 uppercase hover:text-primary hover:underline'
            >
              About
            </Link>

            <Link
              to='/services'
              className='mb-2 text-xl underline-offset-2 uppercase hover:text-primary hover:underline'
            >
              Services
            </Link>
          </ul>

          <div className='px-8 md:px-12 lg:px-24'>
            <p className='mt-2 select-none text-xl uppercase text-gray-400 md:mt-4'>
              &copy; {new Date().getFullYear()}
            </p>
          </div>

          <div className='mt-5 flex gap-2 rounded-full p-2 px-6 text-gray-700'>
            <img
              src='/logo2.svg'
              alt='logo'
              width={672}
              height={672}
              className='w-[15rem]'
            />
          </div>
        </section>
      </div>
    </footer>
  )
}
