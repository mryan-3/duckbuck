import { Toaster } from 'sonner'
import NavBar from './navbar'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
	return (
		<main className='flex min-h-screen flex-col'>
			<NavBar />
			<Outlet />
			<Toaster richColors={true}/>
		</main>
	)
}
