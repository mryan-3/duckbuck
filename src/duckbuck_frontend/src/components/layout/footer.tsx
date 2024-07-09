import { cn } from '../../lib/utils'
import { Separator } from '../ui/separator'
import { Link } from 'react-router-dom'

type FooterProps = {
	className?: string
}

export default function Footer({ className = '' }: FooterProps) {
	return (
		<footer
			className={cn(
				'max-w-screen relative mt-auto flex flex-col py-12 transition-colors duration-300 md:px-4 lg:px-8 xl:px-64',
				className
			)}
		>
			<Separator orientation='horizontal' className='bg-purple-900' />
			<div className='px-8 md:px-12 lg:px-24'>
				<section className='flex w-full flex-col items-center justify-between md:flex-row'>
					<ul className='mt-4 flex items-center gap-2 text-sm text-slate-300'>
						<Link
							to='/'
							className='mb-2 text-xl uppercase decoration-purple-800 underline-offset-4 hover:text-primary hover:underline'
						>
							Home
						</Link>
						<a
							target='_blank'
							href={`https://rewards.taskon.xyz/campaign/detail/402475150`}
							className='mb-2 text-xl uppercase decoration-purple-800 underline-offset-4 hover:text-primary hover:underline'
						>
							AirDrops
						</a>

						<Link
							to='/whitepaper'
							className='mb-2 text-xl uppercase decoration-purple-800 underline-offset-4 hover:text-primary hover:underline'
						>
							Whitepaper
						</Link>
					</ul>

					<div className='px-8 md:px-12 lg:px-24'>
						<p className='mt-2 select-none text-xl uppercase text-gray-400 md:mt-4'>
							&copy; {new Date().getFullYear()} Ducky
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
