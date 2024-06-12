import { Link } from 'react-router-dom'

export default function NotFound() {
	return (
		<section className='bg-ducky'>
			<div className='container mx-auto flex min-h-screen items-center px-6 py-12'>
				<div className='mx-auto flex max-w-sm flex-col items-center text-center'>
					<img
						src='/duckbuck2.jpg'
						alt='logo'
						width={512}
						height={512}
						className='w-[100px] rounded-full'
					/>

					<h1 className='mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-4xl'>
						Page not found
					</h1>
					<p className='mt-4 text-gray-300 '>
						The page you are looking for doesn't exist... Go home?
					</p>

					<div className='mt-6 flex w-full shrink-0 items-center gap-x-3 sm:w-auto'>
						<Link
							to={'/'}
							className='cursor-pointer rounded-lg bg-purple-900 px-6 py-2 hover:bg-purple-950'
						>
							Go home
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}
