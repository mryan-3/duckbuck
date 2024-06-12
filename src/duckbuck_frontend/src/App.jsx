import Footer from './components/layout/footer'
import NavBar from './components/layout/navbar'
import { PieChart } from 'react-minimal-pie-chart'

function App() {
	return (
		<div className='h-screen'>
			<div className='-mt-4 min-h-screen bg-[url(/duckbuck6.jpg)] bg-cover bg-center bg-no-repeat'>
				<div className='absolute inset-0 z-10 h-full w-full bg-black/40' />
				<NavBar />

				<div className='relative z-30 mx-auto mt-64 flex w-fit flex-col items-center rounded-full border-2 border-purple-800 bg-ducky/80 p-4 px-32 py-6 shadow-lg lg:w-[60vw]'>
					<img
						src='/duckbuck2.jpg'
						alt='logo'
						width={512}
						height={512}
						className='mx-auto -mt-20 w-[120px] rounded-full border-2 border-purple-800 shadow-lg'
					/>

					<h1 className='relative z-30 text-center font-ducky text-lg font-bold md:text-7xl'>
						The $Duck Buck
					</h1>

					<p className='mt-4 max-w-lg text-center'>
						DuckBuck is a Crypto Memecoin utility token attributed
						to duckiness of Ducky Duck with automated buy-bat &
						burns leading to everlasting price appreciation of the
						$DUCKY
					</p>
				</div>
			</div>

			<div className='py-52 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] md:px-56'>
				<About />
				<Tokenomics />
			</div>

			<Footer />
		</div>
	)
}

export default App

// About us
const About = () => {
	return (
		<div className='flex items-start justify-center gap-8'>
			<div className='flex w-fit flex-col items-center'>
				<div className='block'>
					<img
						src='/duckbuck-nobg.png'
						alt='logo'
						width={512}
						height={512}
						className='mx-auto -mt-20 w-[400px] rounded-full bg-ducky/50 shadow-lg'
					/>
				</div>
			</div>

			<div className='flex flex-col'>
				<h1 className='font-ducky text-lg font-bold md:text-7xl'>
					About
				</h1>
				<p className='mt-4 max-w-lg text-start'>
					DuckBuck is a Crypto Memecoin utility token attributed to
					duckiness of Ducky Duck with automated buy-bat & burns
					leading to everlasting price appreciation of the $DUCKY.
				</p>

				<button className='mt-4 w-fit rounded-lg bg-ducky/80 px-4 py-2 text-white'>
					How it works
				</button>
			</div>
		</div>
	)
}

// Tokenomics
const Tokenomics = () => {
	return (
		<div className='mt-52 flex items-start justify-center gap-8'>
			<div className='flex flex-col'>
				<h1 className='font-ducky text-lg font-bold md:text-7xl'>
					Tokenomics
				</h1>
				<p className='mt-4 max-w-lg text-start'>
					DuckBuck is a Crypto Memecoin utility token attributed to
					duckiness of Ducky Duck with automated buy-bat & burns
					leading to everlasting price appreciation of the $DUCKY.
				</p>

				<button className='mt-4 w-fit rounded-lg bg-ducky/80 px-4 py-2 text-white'>
					How it works
				</button>
			</div>

			<div className='flex w-fit flex-col items-center'>
				<PieChart
					data={[
						{ title: 'One', value: 10, color: '#E38627' },
						{ title: 'Two', value: 15, color: '#C13C37' },
						{ title: 'Three', value: 20, color: '#6A2135' }
					]}
					animate={true}
				/>
			</div>
		</div>
	)
}
